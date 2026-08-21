/* global process */

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config({ path: [".env.local", ".env"] });

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Too many requests. Please try again later." },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// Professional HTML email template for contact form submissions
const buildEmailTemplate = ({ name, email, subject, message }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Contact Form Submission</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f5f7; font-family: Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7; padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color:#111827; padding:24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="color:#ffffff; font-size:18px; font-weight:bold;">
                    New Contact Form Submission
                  </td>
                </tr>
                <tr>
                  <td style="color:#9ca3af; font-size:13px; padding-top:4px;">
                    Received via Portfolio Contact Form
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; width:120px; color:#6b7280; font-size:13px; font-weight:bold; vertical-align:top;">
                    NAME
                  </td>
                  <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:14px;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; color:#6b7280; font-size:13px; font-weight:bold; vertical-align:top;">
                    EMAIL
                  </td>
                  <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:14px;">
                    <a href="mailto:${escapeHtml(email)}" style="color:#2563eb; text-decoration:none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; color:#6b7280; font-size:13px; font-weight:bold; vertical-align:top;">
                    SUBJECT
                  </td>
                  <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:14px;">
                    ${escapeHtml(subject)}
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td style="color:#6b7280; font-size:13px; font-weight:bold; padding-bottom:8px;">
                    MESSAGE
                  </td>
                </tr>
                <tr>
                  <td style="background-color:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:16px; color:#374151; font-size:14px; line-height:1.6;">
                    ${escapeHtml(message).replace(/\n/g, "<br>")}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb; padding:16px 32px; border-top:1px solid #e5e7eb;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="color:#9ca3af; font-size:12px;">
                    This email was sent automatically from your portfolio contact form. Reply directly to respond to ${escapeHtml(name)}.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

app.post("/api/contact", limiter, async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  const values = {
    name: name?.trim(),
    email: email?.trim(),
    subject: subject?.trim(),
    message: message?.trim(),
  };

  if (!values.name || !values.email || !values.subject || !values.message)
    return res.status(400).json({ error: "All fields are required." });

  if (!emailRegex.test(values.email))
    return res.status(400).json({ error: "Invalid email address." });

  if (values.message.length < 10)
    return res.status(400).json({ error: "Message must be at least 10 characters." });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: values.email,
      subject: `[Portfolio] ${values.subject}`,
      html: buildEmailTemplate(values),
    });
    res.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err.message);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));