import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Updated experience logos with clean, neutral icons
const experiences = [
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "Full Stack Developer - Student",
    company: "ISTA",
    date: "2024 - Present",
    responsibilities: [
      "Building full-stack projects using React, Node.js, and MongoDB.",
      "Designing responsive user interfaces with modern UI/UX principles.",
      "Gaining hands-on experience with deployment and version control tools.",
    ],
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    title: "Student — ALX Africa",
    company: "Data Engineering Program",
    date: "2025 - Present",
    responsibilities: [
      "Learning data engineering fundamentals including SQL and ETL pipelines.",
      "Building scalable data workflows using Python and cloud tools.",
      "Collaborating with international peers on real-world data projects.",
    ],
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    title: "1337 Coding School",
    company: "Software Engineering Bootcamp",
    date: "2025",
    responsibilities: [
      "Completed the 1337 Piscine, an intensive month-long C programming bootcamp.",
      "Practiced problem-solving, teamwork, and peer code reviews.",
      "Built multiple C-based projects under strict deadlines.",
    ],
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Freelance Project — Python Developer",
    company: "Independent",
    date: "2024",
    responsibilities: [
      "Built automation tools, data scripts, and AI-powered applications.",
      "Developed backend utilities and APIs using Python and Flask.",
      "Delivered end-to-end software solutions for small clients.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Helper function for logo sizing
  const getLogoSize = (company) => {
    if (company.includes("ALX")) return "w-16 h-16 p-2";
    if (company.includes("1337")) return "w-16 h-16 p-2";
    return "w-14 h-14 p-1";
  };

  const getLogoSizeMobile = (company) => {
    if (company.includes("ALX")) return "w-14 h-14 p-2";
    if (company.includes("1337")) return "w-14 h-14 p-2";
    return "w-12 h-12 p-1";
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-8 overflow-hidden"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Career Overview
      </motion.h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Timeline line */}
        <motion.div
          style={{ scaleY, opacity }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="origin-top hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/70 to-purple-500/70 rounded-full"
        />
        <motion.div
          style={{ scaleY, opacity }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="origin-top md:hidden absolute top-0 left-8 w-1 h-full bg-gradient-to-b from-blue-500/70 to-purple-500/70 rounded-full"
        />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className="relative mb-20 last:mb-0"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              {/* Desktop layout */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Left content */}
                <div className={`${isLeft ? "block" : "invisible"}`}>
                  {isLeft && (
                    <div className="text-right pr-12">
                      <div className="inline-block bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-white/70 text-sm mb-4">
                          {exp.company} • {exp.date}
                        </p>
                        <ul className="text-left list-disc list-inside text-white/80 text-sm space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                  <motion.div
                    className="w-20 h-20 flex items-center justify-center bg-gray-900 rounded-full border-4 border-blue-500/30 shadow-2xl relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className={`relative object-contain ${getLogoSize(exp.company)}`}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-[2px] bg-gradient-to-b from-blue-500/70 to-purple-500/70 rounded-full mt-2"
                  />
                </div>

                {/* Right content */}
                <div className={`${!isLeft ? "block" : "invisible"}`}>
                  {!isLeft && (
                    <div className="text-left pl-12">
                      <div className="inline-block bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-white/70 text-sm mb-4">
                          {exp.company} • {exp.date}
                        </p>
                        <ul className="list-disc list-inside text-white/80 text-sm space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden flex items-start gap-6">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-900 rounded-full border-4 border-blue-500/30 shadow-xl relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-lg" />
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={`relative object-contain ${getLogoSizeMobile(exp.company)}`}
                  />
                </motion.div>

                <motion.div
                  className="flex-1 bg-gray-900/60 backdrop-blur-sm rounded-xl p-5 border border-white/10 shadow-xl"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
                  <p className="text-white/70 text-xs mb-3">
                    {exp.company} • {exp.date}
                  </p>
                  <ul className="list-disc list-inside text-white/80 text-xs space-y-1.5">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
