"use client";

import { Button } from "@/components/ui/button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HeartIcon } from "lucide-react";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="scroll-mt-28 bg-gradient-to-b from-black to-emerald-800 py-16 px-4 text-white"
    >
      <div className="max-w-2xl mx-auto bg-[#0f172a] rounded-3xl shadow-lg p-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-300 mb-3">
          Download Amanat Now
        </h2>
        <p className="mb-6 text-sm md:text-base text-gray-300">
          Start finding and returning items instantly.
        </p>

        {/* Download Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <a
            href="https://play.google.com/store/apps/details?id=dev.lancers.amanat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Amanat from Google Play Store"
          >
            <Button className="bg-emerald-400 text-black hover:bg-emerald-500 text-base px-6 py-3 rounded-full">
              Download for Android
            </Button>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            aria-label="Download Amanat for iOS (coming soon)"
          >
            <Button className="bg-white text-black hover:bg-gray-200 text-base px-6 py-3 rounded-full">
              Download for iOS
            </Button>
          </a>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.facebook.com/lancers.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Amanat on Facebook"
            className="hover:text-emerald-400 transition"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/amanat_lost_and_found"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Amanat on Instagram"
            className="hover:text-emerald-400 transition"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/lancersdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Amanat on LinkedIn"
            className="hover:text-emerald-400 transition"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-400 flex justify-center items-center gap-1">
          Made with <HeartIcon size={16} className="text-red-500" /> for Pakistan
        </p>
      </div>

      {/* Footer Links */}
      <footer className="text-center text-xs mt-12 text-gray-400 pb-12 px-4">
        <p className="mb-2">© 2025 Amanat. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-2 text-emerald-300 text-xs sm:text-sm">
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@amanat.app"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline transition"
>
  support@amanat.app
</a>

          <span>•</span>
          <a href="/TermsPage" className="hover:underline transition">
            Privacy Policy
          </a>

          <span>•</span>
          <a
            href="https://lancers.dev/team"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition"
          >
            Team
          </a>
        </div>
      </footer>
    </section>
  );
}
