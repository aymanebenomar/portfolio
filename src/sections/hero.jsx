import React, { useEffect, useState } from "react";
import BlurText from "../components/ui/shadcn-io/blur-text.jsx";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'const role = "Full-Stack Developer";',
    'const role = "Data Engineer";',
    'const role = "Builder";',
  ];

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    let currentText = "";
    let charIndex = 0;
    const currentRole = roles[currentRoleIndex];

    const typingInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        currentText += currentRole[charIndex];
        setDisplayedText(currentText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setDisplayedText(currentText);
            } else {
              clearInterval(deletingInterval);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 30);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  // Smooth scroll function
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-5 sm:px-10 md:px-20 font-sans"
    >
      {/* Background FULLSTACK text with parallax + scale */}
      <motion.h1
        style={{
          y: offsetY * 0.3,
          scale: 1 + offsetY * 0.0005,
        }}
        className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-extrabold text-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
      >
        FULLSTACK
      </motion.h1>

      {/* Mouse Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 w-full max-w-[95%]">
        {/* Open to opportunities badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2 bg-gray-900/70 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
          </span>
          <span className="text-white/90">Open to opportunities</span>
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center space-y-1 sm:space-y-2 md:space-y-3 w-full"
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent break-words">
            <BlurText text="Crafting Impactful Experiences" delay={100} animateBy="words" direction="top" />
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent break-words">
            <BlurText text="Full-Stack Development & Data" delay={300} animateBy="words" direction="top" />
          </h1>
        </motion.div>

        {/* Centered Headline & Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center text-center -mt-2 sm:-mt-4 w-full"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
            <span className="font-bold">Hey,</span>{" "}
            <span className="italic font-light">I'm Aymane.</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg mt-2 sm:mt-4 break-words">
            Moroccan full-stack developer | data engineering student. I build things that work, fix things that don't, and yes, I actually read the documentation.
          </p>

          {/* Terminal */}
          <div className="bg-black/70 backdrop-blur-sm border border-gray-700 rounded-lg w-[95%] max-w-md mx-auto mt-6 shadow-lg">
            <div className="flex gap-2 px-3 py-2 border-b border-gray-700">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <div className="px-4 py-3 font-mono text-green-400 text-sm sm:text-base text-left break-words">
              <span className="text-purple-400">{">"}</span> {displayedText}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Centered Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-5 mt-6 justify-center w-full">
            {/* Resume Button */}
            <a
              href="/AymaneBenomar_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-white text-black font-medium hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              <FiDownload /> Resume
            </a>

            {/* Email Button */}
            <a
              href="mailto:aymanebenomar2005@gmail.com"
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300 text-sm sm:text-base"
            >
              <FiMail /> Get In Touch
            </a>
          </div>

          {/* LinkedIn & GitHub Icons */}
          <div className="flex gap-6 mt-4 justify-center">
            <a
              href="https://github.com/aymanebenomar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300 text-2xl"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/benomar-aymane-85b91b380"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300 text-2xl"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator (clickable) */}
      <motion.div
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="text-white/50 text-xs sm:text-sm">Scroll to explore</span>
        <ChevronDown className="text-white/50" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
