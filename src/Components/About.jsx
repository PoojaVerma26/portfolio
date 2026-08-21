

const About = () => {
    return (
<section
    id="about"
    className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20"
>
            {/* Background Blur */}
            <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#E90E65]/10 blur-3xl"></div>
            <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#E90E65]/10 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               

                {/* Main Layout */}
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    
                  {/* LEFT CONTENT */}
<div className="space-y-6">
    
    {/* Intro */}
    <div className="space-y-4">
        <span className="inline-flex rounded-full bg-[#E90E65]/10 px-4 py-1.5 text-sm font-medium text-[#E90E65]">
           About Me
        </span>

        <h2 className="text-3xl font-bold leading-snug text-[#161514] lg:text-4xl">
            Crafting clean & modern digital experiences
        </h2>

        <p className="max-w-xl text-base leading-relaxed text-gray-600">
            I create responsive and user-friendly web interfaces focused on
            performance, accessibility, and seamless user experience.
        </p>
    </div>

    {/* Quick Info */}
    <div className="flex flex-wrap gap-3">
        {[
            "Responsive UI",
            "Modern Design",
            "Fast Performance",
            "Clean Code",
        ].map((item, index) => (
            <div
                key={index}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
            >
                {item}
            </div>
        ))}
    </div>

  <p className="text-base leading-relaxed text-gray-600">
    I have **2+ years of experience in frontend and web development**, working on multiple real-world projects across different domains. My responsibilities include **developing responsive websites using React.js, Next.js, Tailwind CSS, and JavaScript, building reusable UI components, implementing UI/UX designs, integrating APIs, authentication, testing, debugging, and performance optimization**. I also collaborate with designers and backend developers to deliver **high-quality, user-friendly, and responsive web applications**.
  </p>
</div>

                    {/* RIGHT IMAGE SECTION */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white p-4 shadow-2xl">
                            
                            {/* Main Image */}
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                                alt="Developer"
                                className="h-[400px] w-full rounded-[1.5rem] object-cover"
                            />

                            {/* Floating Card */}
                            <div className="absolute bottom-10 left-10 rounded-2xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md">
                                <h4 className="text-xl font-bold text-[#161514]">
                                    2+ Years
                                </h4>

                                <p className="text-sm text-gray-600">
                                    Frontend Development Experience
                                </p>
                            </div>

                        </div>

                        {/* Decorative Shapes */}
                        <div className="absolute -left-6 top-20 h-24 w-24 rounded-full border-8 border-[#E90E65]/20"></div>

                        <div className="absolute -bottom-8 right-10 h-32 w-32 rounded-full bg-[#E90E65]/10 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;