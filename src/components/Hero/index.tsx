"use client";

import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-black text-white py-20 sm:py-28 lg:py-36">
      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-900 rounded-full opacity-40 blur-3xl -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-green-900 rounded-full opacity-40 blur-3xl -z-10" />

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#46f3b6] to-[#50f3e1]">
            LOST & FOUND
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#71ff92] to-[#3fe0b1]">
            EXPERIENCE
          </span>
          <span className="inline-block animate-pulse ml-2">💡</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-medium">
          Find lost items or return what you’ve found in seconds. <br className="hidden sm:block" />
          <span className="font-semibold text-[#b7fccc]">AI-powered, secure,</span> and{" "}
          <span className="font-semibold text-[#a1f6ce]">community-driven.</span>
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => scrollToSection("download")}
            className="bg-gradient-to-r from-[#90f7ec] to-[#32ccbc] text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition"
          >
            Download
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="text-[#a2facf] underline font-semibold flex items-center gap-2 hover:translate-y-1 transition"
          >
            Explore Features <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
