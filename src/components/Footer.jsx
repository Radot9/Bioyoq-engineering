import React from "react";
import BioyoqLogoWhite from "../assets/images/bioyoq-logo-white.svg";

import Badge from "./Badge";

export default function Footer() {
  return (
    <div className="overflow-x-hidden">
      <footer className="bg-stone-800 text-white pt-16 pb-8 px-4 md:px-8 relative">
        <div className="max-w-screen-2xl mx-auto relative">
        {/* Badge positioned on the left, centered on top edge */}
        {/* <div className="absolute left-0 top-[1/2] -translate-y-1/2 z-20">
          <Badge />
        </div> */}

        {/* Navigation Links */}
          <div className="flex flex-col items-center justify-center mb-8">
            <img src={BioyoqLogoWhite} alt="Bioyoq Logo" className="h-24 mb-6" />
            <nav className="flex flex-wrap gap-8 text-lg font-light justify-center">
              <a href="#people" className="hover:text-white/80">Our people</a>
              <a href="#expertise" className="hover:text-white/80">Expertise</a>
              <a href="#capabilities" className="hover:text-white/80">Capabilities</a>
              <a href="#about" className="hover:text-white/80">About</a>
              <a href="#careers" className="hover:text-white/80">Careers</a>
              <a href="#contact" className="hover:text-white/80">Contact</a>
            </nav>
          </div>

        {/* Decorative Divider Lines - fill screen width, no overflow */}
        <div className="my-8 -mx-4 md:-mx-8 lg:-mx-32">
          <div className="h-px w-full bg-white/30 mb-4" />
          <div className="h-px w-full bg-white/30 mb-4" />
          <div className="h-px w-full bg-white/30 mb-4" />
          <div className="h-px w-full bg-white/30 mb-4" />
          <div className="h-px w-full bg-white/30" />
        </div>
        <div className="h-24" /> {/* Spacer to prevent content overlap with divider lines */}

        {/* Company Info & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/80 mb-4">
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-center w-full">
              <span className="w-full text-center md:text-left">
                6, Ofili Close, Thomas Ajufo Estate, Alimosho, Lagos
              </span>
              <span className="w-full text-center md:text-left">info@bioyoq.com</span>
              <span className="w-full text-center md:text-left">+234 800 000 0000</span>
            </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#linkedin" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#facebook" className="hover:text-white">
              Facebook
            </a>
            <a href="#instagram" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/60">
          <span>
            &copy; {new Date().getFullYear()} BIOYOQ. All rights reserved.
          </span>
          <div className="flex gap-6 mt-2 md:mt-0">
            <span>Web design by ****</span>
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}
