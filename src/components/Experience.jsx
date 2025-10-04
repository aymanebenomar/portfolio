import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    title: "Full Stack Developer",
    company: "Freelance",
    date: "2024 - Present",
    responsibilities: [
      "Built and deployed scalable web apps using React and Node.js.",
      "Integrated REST APIs and managed database design with MongoDB.",
      "Collaborated with clients to create modern, responsive UIs.",
    ],
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    title: "Frontend Developer Intern",
    company: "TechVision",
    date: "2023 - 2024",
    responsibilities: [
      "Developed user-friendly interfaces with React and TailwindCSS.",
      "Optimized performance and accessibility across browsers.",
      "Worked closely with backend team to enhance API usage.",
    ],
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "Python Developer (Student Project)",
    company: "University Project",
    date: "2022 - 2023",
    responsibilities: [
      "Developed a data processing tool using Python and Pandas.",
      "Implemented error handling and data validation pipelines.",
      "Worked in a small team applying agile development methods.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8 flex flex-col gap-12"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Career Overview
      </motion.h2>

      {/* Experience List */}
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-gray-800/40 border border-white/10 p-6 rounded-2xl backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Logo */}
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-900 rounded-xl border border-white/10">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col text-left">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-white/70 text-sm">
                {exp.company} • {exp.date}
              </p>

              <ul className="list-disc list-inside mt-3 text-white/80 text-sm space-y-1">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
