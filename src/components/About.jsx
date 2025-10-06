import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";
import anaImg from "../images/ana.png";

const SkillCard = ({ icon, name }) => (
  <div className="w-28 h-28 bg-gray-900 border border-white/10 shadow-lg rounded-xl flex flex-col items-center justify-center gap-2">
    <div className="text-4xl text-white">{icon}</div>
    <span className="text-sm text-white/70">{name}</span>
  </div>
);

const InfoCard = ({ title, description }) => (
  <div className="w-80 p-6 bg-gray-900 rounded-xl border border-white/10 shadow-lg flex flex-col items-center text-center gap-4">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-white/60 text-sm">{description}</p>
  </div>
);

/* Continuous Marquee Component */
const Marquee = ({ children, speed = 50, direction = "left" }) => {
  const [contentWidth, setContentWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (contentRef.current) setContentWidth(contentRef.current.scrollWidth);
  }, [children]);

  const adjustedSpeed = isMobile ? speed * 7 : speed;

  return (
    <div
      className="relative overflow-hidden mb-8"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
        opacity: isMobile ? 0.85 : 1,
      }}
    >
      <div
        ref={contentRef}
        className="flex gap-6 min-w-full"
        style={{
          animation: `scroll-${direction} ${contentWidth / adjustedSpeed}s linear infinite`,
        }}
      >
        {React.Children.toArray(children)
          .concat(React.Children.toArray(children))
          .map((child, idx) => (
            <div key={idx} className="shrink-0">
              {child}
            </div>
          ))}
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}

/* Main About Component */
export default function About() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Postman", icon: <SiPostman /> },
  ];

  const aboutCards = [
    {
      title: "Full-Stack Development",
      description:
        "Building responsive, scalable web applications with React, Node.js, and Tailwind CSS.",
    },
    {
      title: "Data Engineering",
      description:
        "Experience working with SQL, Python, and data pipelines to process and visualize data.",
    },
    {
      title: "Problem Solving",
      description:
        "I love turning complex challenges into clean, working solutions.",
    },
    {
      title: "Teamwork & Collaboration",
      description:
        "Experienced in agile development and collaborative project environments.",
    },
    {
      title: "Fast Learner",
      description:
        "Quickly adapt to new technologies and frameworks to deliver quality results.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-8 flex flex-col gap-8"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Photo + Bio Section */}
      <motion.div
        className="max-w-6xl mx-auto w-full my-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <img
                src={anaImg}
                alt="Benomar Aymane - Full-Stack Developer"
                className="relative w-full h-full rounded-full object-cover border-4 border-white/20 shadow-xl"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Hi, I'm Benomar Aymane
            </h3>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
              I'm a Moroccan full-stack developer and data engineering student
              passionate about building digital experiences that make a
              difference. From crafting responsive frontends to architecting
              robust backends.
            </p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks,
              contributing to open source, or diving deep into data pipelines. I
              believe in continuous learning and collaboration—because the best
              solutions come from shared knowledge and creative thinking.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Info Cards Marquee */}
      <Marquee speed={50} direction="left">
        {aboutCards.map((card, idx) => (
          <InfoCard key={idx} {...card} />
        ))}
      </Marquee>
    </section>
  );
}
