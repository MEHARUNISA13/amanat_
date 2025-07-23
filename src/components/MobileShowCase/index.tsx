"use client";

import Image from "next/image";

const MobileShowcase = () => {
  return (
    <section className="bg-black text-white py-20 sm:py-28 relative overflow-hidden">
      {/* Glowing Background Blob */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00ffd1] rounded-full blur-[200px] opacity-10 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full shadow-xl rounded-2xl overflow-hidden border border-white/10 relative">
          <Image
            src="/showcase1.png"
            alt="Mobile app UI on phone screen"
            width={1600}
            height={900}
            className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
            priority
            quality={90}
          />

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-2xl border border-cyan-200/10 shadow-[0_0_100px_40px_rgba(0,255,209,0.08)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;
