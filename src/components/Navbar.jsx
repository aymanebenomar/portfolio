import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close after clicking
    }
  };

  return (
    <header
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
        ${scrolled ? "w-2/3 bg-gray-900/80 backdrop-blur-md py-2 px-6" : "w-full py-6 px-10"}
        rounded-xl z-50
      `}
    >
      <div className="inner flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Logo/Name */}
        <a
          href="#hero"
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <img
            src="/images/client2.png"
            alt="logo"
            className="w-10 h-10 rounded-full border border-gray-600"
          />
          {!scrolled && (
            <span className="font-semibold text-white">Benomar Aymane</span>
          )}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul
            className={`flex items-center ${
              scrolled ? "gap-4" : "gap-6"
            } text-white`}
          >
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="group cursor-pointer"
                onClick={() => scrollToSection(link.id)}
              >
                <span>{link.label}</span>
                <div className="underline"></div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (desktop only) */}
        <div
          className={`hidden md:flex group transition-all duration-500 ease-in-out ${
            scrolled ? "px-2 py-1 text-sm" : "px-4 py-2"
          }`}
        >
          <span>Contact</span>
        </div>

        {/* Mobile Toggler */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/95 rounded-xl shadow-lg flex flex-col items-center px-6 py-4">
          <ul className="flex flex-col items-center gap-4 text-white font-light text-base">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </li>
            ))}
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
