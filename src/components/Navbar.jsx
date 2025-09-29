import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
    }
  };

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}
    >
      <div className="inner max-w-7xl w-full">
        {/* Left Logo/Name */}
        <a
          href="#hero"
          className="logo flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <img
            src="/images/client3.png"
            alt="logo"
            className="w-10 h-10 rounded-full border border-gray-600"
          />
          Benomar Aymane
        </a>

        {/* Right Navigation */}
        <nav className="desktop">
          <ul>
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

        {/* Optional contact button */}
        <div className="contact-btn hidden md:flex group">
          <div className="inner">
            <span>Contact</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
