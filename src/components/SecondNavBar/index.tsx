"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const SecondNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0D1F2D] via-[#1f4d4d] to-[#52e0c4] backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#144d43] p-2 rounded-full">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A2FACF] to-[#64ACFF]">
            Amanat
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-semibold text-base">
          <Link href="/" className="hover:text-[#A2FACF] transition">Home</Link>
          <Link href="/blogsection" className="hover:text-[#A2FACF] transition">Blogs</Link>
          <Link href="/TermsPage" className="hover:text-[#A2FACF] transition">Policy</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Separate from main bar for proper stacking */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0D1F2D] px-6 py-4 shadow-lg z-40 w-full">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A2FACF]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogsection" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A2FACF]">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/TermsPage" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A2FACF]">
                Policy
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SecondNavBar;
