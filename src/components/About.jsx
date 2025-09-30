import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";

// Skill Card
const SkillCard = ({ icon, name }) => (
  <div className="w-28 h-28 bg-gray-900 border border-white/10 shadow-lg rounded-xl flex flex-col items-center justify-center gap-2">
    <div className="text-4xl text-white">{icon}</div>
    <span className="text-sm text-white/70">{name}</span>
  </div>
);

// Info Card
const InfoCard = ({ title, description }) => (
  <div className="w-80 p-6 bg-gray-900 rounded-xl border border-white/10 shadow-lg flex flex-col items-center text-center gap-4">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-white/60 text-sm">{description}</p>
  </div>
);

// Continuous Marquee Component
const Marquee = ({ children, speed = 50, direction = "left" }) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) setContentWidth(contentRef.current.scrollWidth);
  }, [children]);

  return (
    <div
      className="relative overflow-hidden mb-8"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
      }}
    >
      <div
        ref={contentRef}
        className="flex gap-6 min-w-full"
        style={{
          animation: `scroll-${direction} ${contentWidth / speed}s linear infinite`,
        }}
      >
        {[...children, ...children].map((child, idx) => (
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
};

// Main About Component
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

      {/* Bio paragraph */}
      <p className="text-center text-white/70 max-w-3xl mx-auto mb-8">
        I’m Benomar Aymane, a Moroccan full-stack developer and data engineering student. I build things that work, fix things that don’t, and constantly learn new technologies to bring ideas to life.
      </p>

      {/* Skills Logos Marquee (left → right) */}
      <Marquee speed={30} direction="right">
        {skills.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </Marquee>

      {/* Info Cards Marquee (right → left) */}
      <Marquee speed={50} direction="left">
        {aboutCards.map((card, idx) => (
          <InfoCard key={idx} {...card} />
        ))}
      </Marquee>
    </section>
  );
}
