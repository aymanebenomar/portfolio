import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
        ${scrolled ? "w-4/5 bg-gray-900/80 backdrop-blur-md py-2" : "w-full py-6"}
        rounded-xl z-50
      `}
    >
      <div className={`inner flex items-center justify-between transition-all duration-500 ease-in-out ${scrolled ? "gap-4" : "gap-8"} max-w-7xl mx-auto`}>
        {/* Left Logo/Name */}
        <a
          href="#hero"
          className="logo flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <img
            src="/images/client3.png"
            alt="logo"
            className="w-10 h-10 rounded-full border border-gray-600 transition-all duration-500 ease-in-out"
          />
          {!scrolled && <span className="font-semibold text-white">Benomar Aymane</span>}
        </a>

        {/* Right Navigation */}
        <nav className="desktop">
          <ul className={`flex items-center ${scrolled ? "gap-4" : "gap-6"}`}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="group cursor-pointer text-white"
                onClick={() => scrollToSection(link.id)}
              >
                <span>{link.label}</span>
                <div className="underline"></div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Optional contact button */}
        <div className={`contact-btn hidden md:flex group transition-all duration-500 ease-in-out ${scrolled ? "px-2 py-1 text-sm" : "px-4 py-2"}`}>
          <div className="inner">
            <span>Contact</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
