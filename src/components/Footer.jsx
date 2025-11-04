import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <p className="text-sm text-white/60 text-center md:text-left">
          &copy; {new Date().getFullYear()} Aymane Benomar. All rights reserved.
        </p>

        {/* Right Section: Social Icons */}
        <div className="flex gap-6 justify-center md:justify-end">
          <a
            href="https://github.com/aymanebenomar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300 text-2xl"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/benomar-aymane-85b91b380"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:aymanebenomar2005@gmail.com"
            className="text-white hover:text-red-500 transition-colors duration-300 text-2xl"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
