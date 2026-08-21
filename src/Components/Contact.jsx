import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch(import.meta.env.VITE_API_URL || "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus({ submitting: false, submitted: false, error: null }), 5000);
      } else {
        setFormStatus({ submitting: false, submitted: false, error: data.error || "Failed to send message." });
      }
    } catch {
      setFormStatus({ submitting: false, submitted: false, error: "Network error. Please try again later." });
    }
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 px-3 py-6 sm:px-5 sm:py-8 md:px-8 lg:py-12">
  <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(233,14,101,0.15)] lg:grid lg:grid-cols-2">

    {/* ================= LEFT SECTION ================= */}
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-pink-600 to-[#E90E65] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-12 lg:py-14">

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/10 sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute right-10 top-20 h-16 w-16 rounded-full border border-white/10" />

      <div className="relative z-10 flex h-full flex-col justify-center">

        <div className="mb-6 sm:mb-8">
          <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm sm:text-sm">
            LET&apos;S CONNECT
          </span>

          <h1 className="text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
            Get In Touch
          </h1>

          <p className="mt-3 max-w-lg text-xs leading-6 text-pink-100 sm:text-sm sm:leading-7 md:text-base">
            Have a project in mind? Want to collaborate? Feel free to reach
            out. I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Illustration */}
        <div className="mx-auto mb-6 w-full max-w-[480px] sm:mb-8">
          <svg
            viewBox="0 0 500 300"
            className="h-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="pinkGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: "#FFFFFF",
                    stopOpacity: 0.4,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "#FFFFFF",
                    stopOpacity: 0.1,
                  }}
                />
              </linearGradient>

              <linearGradient
                id="pinkGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: "#E90E65",
                    stopOpacity: 1,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "#DB2777",
                    stopOpacity: 1,
                  }}
                />
              </linearGradient>
            </defs>

            <rect
              x="100"
              y="50"
              width="300"
              height="200"
              rx="12"
              fill="url(#pinkGradient1)"
              stroke="#FFFFFF"
              strokeWidth="3"
            />

            <path
              d="M100 50 L250 120 L400 50"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
            />

            <polygon
              points="100,50 250,120 400,50"
              fill="url(#pinkGradient1)"
            />

            <g transform="translate(400, 200)">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                2 5.42 4.42 3 7.5 3c1.74 0 3.41.81
                4.5 2.09C13.09 3.81 14.76 3 16.5 3
                19.58 3 22 5.42 22 8.5c0 3.78-3.4
                6.86-8.55 11.54L12 21.35z"
                fill="url(#pinkGradient2)"
                transform="scale(1.5)"
              />
            </g>

            <line
              x1="120"
              y1="90"
              x2="380"
              y2="90"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <line
              x1="120"
              y1="120"
              x2="320"
              y2="120"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <line
              x1="120"
              y1="150"
              x2="280"
              y2="150"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle
              cx="120"
              cy="220"
              r="25"
              fill="#F472B6"
              opacity="0.8"
            />

            <rect
              x="150"
              y="80"
              width="200"
              height="140"
              rx="8"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="5,5"
            />

            <g transform="translate(120, 220)">
              <path
                d="M0,-8 L15,0 L0,8 Z"
                fill="#FFFFFF"
              />

              <line
                x1="-15"
                y1="0"
                x2="0"
                y2="0"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>

        {/* Contact information */}
        <div className="grid gap-3 sm:gap-4">

          {/* Email */}
          <div className="flex min-w-0 items-center rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm sm:p-4">
            <div className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 sm:mr-4 sm:h-12 sm:w-12">
              <svg
                className="h-5 w-5 text-white sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <p className="text-xs text-pink-200 sm:text-sm">
                Email
              </p>
              <p className="break-all text-sm font-medium text-white sm:text-base">
                poojasverma26@gmail.com
              </p>
            </div>
          </div>

      

          {/* Response Time */}
          <div className="flex items-center rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm sm:p-4">
            <div className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 sm:mr-4 sm:h-12 sm:w-12">
              <svg
                className="h-5 w-5 text-white sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <p className="text-xs text-pink-200 sm:text-sm">
                Response Time
              </p>
              <p className="text-sm font-medium text-white sm:text-base">
                Within 24 hours
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ================= RIGHT SECTION ================= */}
    <section className="bg-white px-5 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-xl">

        <div className="mb-4 sm:mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E90E65]">
            Contact Me
          </span>

          <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
            Send a Message
          </h2>

          <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
            Fill out the form below and I&apos;ll respond promptly.
          </p>
        </div>

        {/* Success message */}
        {formStatus.submitted && (
          <div className="mb-6 rounded-xl border border-pink-200 bg-pink-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-100">
                <svg
                  className="h-5 w-5 text-[#E90E65]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-pink-800">
                  Message sent successfully!
                </p>
                <p className="mt-1 text-sm text-pink-700">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error message */}
        {formStatus.error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-5 w-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-red-800">
                  Error sending message
                </p>
                <p className="mt-1 text-sm text-red-700">
                  {formStatus.error}
                </p>
              </div>
            </div>
          </div>
        )}

        <form
          className="space-y-5 sm:space-y-6"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Your Name
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                  errors.name
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-gray-200 focus:border-[#E90E65] focus:ring-pink-100"
                }`}
                placeholder="John Doe"
              />
            </div>

            {errors.name && (
              <p className="mt-1.5 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Your Email
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                  errors.email
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-gray-200 focus:border-[#E90E65] focus:ring-pink-100"
                }`}
                placeholder="john@example.com"
              />
            </div>

            {errors.email && (
              <p className="mt-1.5 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Subject
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                  errors.subject
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-gray-200 focus:border-[#E90E65] focus:ring-pink-100"
                }`}
                placeholder="Project Inquiry"
              />
            </div>

            {errors.subject && (
              <p className="mt-1.5 text-sm text-red-500">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Your Message
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-3.5 pl-3.5">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full resize-none rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                  errors.message
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-gray-200 focus:border-[#E90E65] focus:ring-pink-100"
                }`}
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {errors.message && (
              <p className="mt-1.5 text-sm text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formStatus.submitting}
            className={`flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 sm:text-base ${
              formStatus.submitting
                ? "cursor-not-allowed bg-pink-400"
                : "bg-gradient-to-r from-pink-600 to-[#E90E65] shadow-md shadow-pink-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-200"
            }`}
          >
            {formStatus.submitting ? (
              <>
                <svg
                  className="-ml-1 mr-3 h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </>
            )}
          </button>

          {/* Privacy */}
          <div className="border-t border-gray-100 pt-4 text-center">
            <p className="text-xs leading-5 text-gray-400 sm:text-sm">
              Your information is secure and will never be shared with third
              parties.
            </p>
          </div>

        </form>
      </div>
    </section>
  </div>
</div>
    
  );
};

export default Contact;