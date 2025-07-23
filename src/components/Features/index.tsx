"use client";

import { FaRobot, FaLock, FaMapMarkerAlt, FaBolt } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot className="text-4xl text-white mb-4" />,
    title: "AI Matching",
    description:
      "Smart algorithms pair items with real owners using image and text search.",
  },
  {
    icon: <FaLock className="text-4xl text-yellow-400 mb-4" />,
    title: "Secure Payments",
    description:
      "Get items back safely; contact details revealed after a secure process.",
  },
  {
    icon: <FaMapMarkerAlt className="text-4xl text-red-500 mb-4" />,
    title: "Location-based",
    description:
      "See found items on a live map and get notified nearby.",
  },
  {
    icon: <FaBolt className="text-4xl text-yellow-300 mb-4" />,
    title: "Instant Alerts",
    description:
      "Get notified the moment your item is matched or returned.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative bg-black text-white py-20 sm:py-24 z-10"
    >
      {/* Glowing background blob */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00ffd1] rounded-full blur-[180px] opacity-10 z-0 pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Features <span className="inline-block">✨</span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Everything you need for stress-free lost & found.
        </p>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0b0e19] border border-[#00ffd1]/10 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_#00ffd1aa] cursor-pointer"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-[#b7ffdf] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
