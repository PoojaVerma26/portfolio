import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        const data = await response.json();
        setFormStatus({ 
          submitting: false, 
          submitted: false, 
          error: data.message || "Failed to send message" 
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: "Network error. Please try again later." 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex justify-center items-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Column - SVG Illustration and Info */}
        <div className="bg-gradient-to-br from-pink-600 to-[#E90E65] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-32 translate-y-32"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-pink-100 mb-8 text-lg">
              Have a project in mind? Want to collaborate? Feel free to reach out. I'll get back to you as soon as possible.
            </p>
            
            {/* Pink-themed SVG Illustration */}
            <div className="mb-8">
              <svg 
                viewBox="0 0 500 300" 
                className="w-full h-auto max-h-64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="pinkGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FFFFFF', stopOpacity: 0.4}} />
                    <stop offset="100%" style={{stopColor: '#FFFFFF', stopOpacity: 0.1}} />
                  </linearGradient>
                  <linearGradient id="pinkGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#E90E65', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#DB2777', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* Main envelope shape */}
                <rect x="100" y="50" width="300" height="200" rx="12" fill="url(#pinkGradient1)" stroke="#FFFFFF" strokeWidth="3" />
                
                {/* Envelope flap */}
                <path d="M100 50 L250 120 L400 50" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                <polygon points="100,50 250,120 400,50" fill="url(#pinkGradient1)" />
                
                {/* Heart decoration */}
                <g transform="translate(400, 200)">
                  <path 
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                    fill="url(#pinkGradient2)" 
                    transform="scale(1.5)"
                    opacity="0.9"
                  >
                    <animate 
                      attributeName="opacity" 
                      values="0.9;1;0.9" 
                      dur="2s" 
                      repeatCount="indefinite" 
                    />
                  </path>
                </g>
                
                {/* Mail lines */}
                <line x1="120" y1="90" x2="380" y2="90" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <line x1="120" y1="120" x2="320" y2="120" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <line x1="120" y1="150" x2="280" y2="150" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                
                {/* Decorative pink circles */}
                <circle cx="120" cy="220" r="25" fill="#F472B6" opacity="0.8">
                  <animate attributeName="r" values="25;30;25" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Animated envelope highlight */}
                <rect x="150" y="80" width="200" height="140" rx="8" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;100;0" dur="8s" repeatCount="indefinite" />
                </rect>
                
                {/* Send arrow */}
                <g transform="translate(120, 220)">
                  <path d="M0,-8 L15,0 L0,8 Z" fill="#FFFFFF" />
                  <line x1="-15" y1="0" x2="0" y2="0" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
                    <animate attributeName="x1" values="-15;0;-15" dur="1.5s" repeatCount="indefinite" />
                  </line>
                </g>
              </svg>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-white/25 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-pink-200">Email</p>
                  <p className="text-white font-medium">pritamsoni9922@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/25 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-pink-200">Response Time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-pink-600 mb-2">Send a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and I'll respond promptly.</p>
            
            {/* Status Messages */}
            {formStatus.submitted && (
              <div className="mb-6 p-4 bg-pink-50 border border-pink-200 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-pink-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-pink-800">Message sent successfully!</p>
                    <p className="text-pink-700 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}
            
            {formStatus.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-red-800">Error sending message</p>
                    <p className="text-red-700 text-sm">{formStatus.error}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition resize-none"
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`w-full flex justify-center items-center px-6 py-3 rounded-lg font-semibold text-white transition ${formStatus.submitting ? 'bg-pink-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-600 to-[#E90E65] hover:from-pink-700 hover:to-[#D30953] shadow-md hover:shadow-lg transform hover:-translate-y-0.5'}`}
                >
                  {formStatus.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                <p>Your information is secure and will never be shared with third parties.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;