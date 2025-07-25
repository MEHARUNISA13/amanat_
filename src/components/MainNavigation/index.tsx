"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const navItems = [
  { id: "features", label: "Features" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "blogs", label: "Blogs" },
  { id: "/qrstickers", label: "QR Stickers", isLink: true }, // ✅ Page redirect
  { id: "download", label: "Download" },
];

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1F2D]/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#144d43] p-2 rounded-full">
              <Image src="/logo.png" alt="Logo" width={28} height={28} />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A2FACF] to-[#64ACFF]">
              Amanat
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-white font-semibold text-sm lg:text-base">
            {navItems.map(({ id, label, isLink }) =>
              isLink ? (
                <a
                  key={id}
                  href={id}
                  className="hover:text-[#A2FACF] transition-colors"
                >
                  {label}
                </a>
              ) : (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="hover:text-[#A2FACF] transition-colors"
                >
                  {label}
                </button>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("download")}
              className="bg-gradient-to-r from-[#90f7ec] to-[#32ccbc] text-black font-bold shadow-md rounded-full px-5 py-2 hover:scale-105 transition-transform"
            >
              Get the App
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white"
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 left-0 mt-2 bg-[#0D1F2D] border-t border-[#1a2a38] text-white flex flex-col items-start gap-4 px-6 py-4 md:hidden z-50 shadow-lg animate-slide-down">
              {navItems.map(({ id, label, isLink }) =>
                isLink ? (
                  <a
                    key={id}
                    href={id}
                    className="w-full text-left py-1 hover:text-[#A2FACF] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                ) : (
                  <button
                    key={id}
                    onClick={() => handleScroll(id)}
                    className="w-full text-left py-1 hover:text-[#A2FACF] transition-colors"
                  >
                    {label}
                  </button>
                )
              )}
              <button
                onClick={() => handleScroll("download")}
                className="w-full mt-2 bg-gradient-to-r from-[#90f7ec] to-[#32ccbc] text-black font-bold rounded-full py-2"
              >
                Get the App
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
