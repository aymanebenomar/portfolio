import React, { useEffect, useState } from "react";
import BlurText from "../components/ui/shadcn-io/blur-text";
import { Star, Target, Rocket, MessageSquare } from "lucide-react"; // icons

// Counter hook for animation
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Hero = () => {
  const years = useCountUp(10);
  const success = useCountUp(92);
  const projects = useCountUp(100);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-5 md:px-20 font-sans"
    >
      {/* Background large text */}
      <h1 className="absolute text-[8rem] md:text-[12rem] font-extrabold text-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        FULLSTACK
      </h1>

      {/* Profile Picture + Text */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Headlines */}
        <div className="text-center space-y-2 md:space-y-3 font-[Mona Sans]">
          <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            <BlurText
              text="Crafting Impactful Experiences"
              delay={100}
              animateBy="words"
              direction="top"
            />
          </h1>
          <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            <BlurText
              text="Full-Stack Development & Data"
              delay={300}
              animateBy="words"
              direction="top"
            />
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-3xl text-white/70 text-center md:text-lg mt-4">
          I build scalable web apps, interactive UIs, and data pipelines, merging
          creativity and technology to craft experiences that delight users.
        </p>
      </div>
    </section>
  );
};

export default Hero;
