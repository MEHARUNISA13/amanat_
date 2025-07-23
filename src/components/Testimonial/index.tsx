"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Saif",
    role: "Lost Laptop Owner",
    avatar: "/saif.png",
    message: "I found my lost laptop in 2 days using Amanat. Best app ever!",
  },
  {
    name: "Hassan",
    role: "Returned Wallet",
    avatar: "/hassan.png",
    message: "I returned a lost wallet and received a small reward securely.",
  },
  {
    name: "Huzaifa",
    role: "Bag Finder",
    avatar: "/huzaifa.png",
    message: "The AI matching is spot on. I recovered my bag in no time.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black text-white py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-12 max-w-xl mx-auto">
        <div className="inline-block bg-[#004534] px-6 py-3 rounded-xl border border-green-700 shadow-green-400/20 shadow-md">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            What Users Say <span className="text-green-400 text-2xl">★</span>
          </h2>
        </div>
        <p className="text-sm text-gray-300 mt-4">
          Real stories from people who found what mattered.
        </p>
        <div className="w-16 h-1 bg-green-400 mt-4 mx-auto rounded-full" />
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((user, idx) => (
          <article
            key={idx}
            className="rounded-2xl p-6 border bg-[#002c24] border-green-800 hover:scale-[1.02] hover:shadow-md hover:shadow-cyan-400/30 transition duration-300 ease-in-out"
          >
            <header className="flex items-center gap-3 mb-4">
              <Image
                src={user.avatar}
                alt={`${user.name}'s profile picture`}
                width={40}
                height={40}
                className="rounded-full border-2 border-green-400 object-cover"
                loading="lazy"
                sizes="40px"
              />
              <div>
                <h3 className="font-semibold text-white">{user.name}</h3>
                <p className="text-sm text-green-300">{user.role}</p>
              </div>
            </header>

            <div className="text-green-400 text-sm mb-2">★★★★★</div>

            <blockquote className="text-sm text-gray-100 italic">
              “{user.message}”
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
