"use client";

import Image from "next/image";

const highlights = [
  {
    title: "ADAPTABILITY",
    heading: "Make the experience truly intuitive",
    image: "/adapt.png",
  },
  {
    title: "APP STORE",
    heading: "Soon to Be the #1 Lost & Found App",
    rating: 4.9,
  },
  {
    title: "COMMUNITY",
    heading:
      "Reconnecting People with Their Belongings\nIt's a community that cares.",
    avatars: [
      "/avatar1.png",
      "/avatar2.png",
      "/avatar3.png",
      "/avatar4.png",
      "/avatar5.png",
      "/avatar6.png",
      "/avatar7.png",
    ],
  },
  {
    title: "SMART MATCHING",
    heading: "Amanat finds your lost items with smart matching.",
    image: "/match.png",
  },
];

const CoreHighlights = () => {
  return (
    <section className="relative bg-black py-20 overflow-hidden text-white">
      {/* ✅ Soft Green Aura Instead of Old Patti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-green-500/10 blur-xl rounded-b-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-[#121212] rounded-2xl px-6 py-8 text-center flex flex-col items-center justify-between shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3">
              {item.title}
            </p>

            <h3 className="text-lg sm:text-xl font-bold whitespace-pre-line mb-4 leading-snug">
              {item.heading}
            </h3>

            {item.image && (
              <Image
                src={item.image}
                alt={`${item.title} illustration`}
                width={180}
                height={180}
                quality={85}
                loading="lazy"
                className="rounded-xl mt-auto object-contain"
              />
            )}

            {item.rating && (
              <div className="mt-auto text-center">
                <div className="text-4xl font-bold text-[#b6ffd7]">{item.rating}</div>
                <div className="text-green-400 text-sm">★★★★★</div>
              </div>
            )}

            {item.avatars && (
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {item.avatars.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Community member ${i + 1}`}
                    width={36}
                    height={36}
                    quality={75}
                    loading="lazy"
                    className="rounded-full border-2 border-green-400"
                  />
                ))}
                <div className="w-9 h-9 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center border-2 border-green-400">
                  YOU
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreHighlights;
