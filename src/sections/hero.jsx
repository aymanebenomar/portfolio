import React, { useEffect, useState } from "react";
import BlurText from "../components/ui/shadcn-io/blur-text";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-5 sm:px-10 md:px-20 font-sans"
    >
      {/* Background FULLSTACK text with parallax */}
      <motion.h1
        style={{ y: offsetY * 0.3 }}
        className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-extrabold text-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
      >
        FULLSTACK
      </motion.h1>

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
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
          className="text-center space-y-1 sm:space-y-2 md:space-y-3 font-[Mona Sans]"
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            <BlurText
              text="Crafting Impactful Experiences"
              delay={100}
              animateBy="words"
              direction="top"
            />
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            <BlurText
              text="Full-Stack Development & Data"
              delay={300}
              animateBy="words"
              direction="top"
            />
          </h1>
        </motion.div>

        {/* Centered Headline & Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center text-center -mt-2 sm:-mt-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            Hey, <span className="italic font-semibold">I’m Aymane.</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg mt-2 sm:mt-4">
            Moroccan full-stack developer | data engineering student. I build
            things that work, fix things that don't, and yes, I actually read
            the documentation.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-5 mt-4 sm:mt-6 justify-center md:justify-start">
            <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-white text-black font-medium hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base">
              Resume <ArrowRight size={16} />
            </button>
            <button className="relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-black text-white font-medium overflow-hidden transition-all duration-300 hover:text-black text-sm sm:text-base">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 animate-rotate opacity-50 blur-lg"></span>
              <span className="relative flex items-center gap-2 z-10">
                Get In Touch <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
