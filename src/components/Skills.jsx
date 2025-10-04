import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostman,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiC,
  SiCplusplus,
  SiDocker,
  SiGithub,
  SiFigma,
  SiPandas,
  SiNumpy,
  SiApachespark,
} from "react-icons/si";

// Skill Card
const SkillCard = ({ icon, name, color }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5, boxShadow: `0 0 15px ${color}` }}
    className="w-28 h-28 flex flex-col items-center justify-center gap-2 bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl text-white cursor-pointer"
  >
    <div className="text-4xl" style={{ color }}>
      {icon}
    </div>
    <span className="text-sm text-white/70">{name}</span>
  </motion.div>
);

// Variants for animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Skills() {
  // Categories (added Data Engineering)
  const categories = {
    Frontend: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express", icon: <FaNodeJs />, color: "#000000" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
      { name: "C", icon: <SiC />, color: "#00599C" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    ],
    Database: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "SQL", icon: <FaDatabase />, color: "#4479A1" },
    ],
    DataEngineering: [
      { name: "Pandas", icon: <SiPandas />, color: "#150458" },
      { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
      { name: "Apache Spark", icon: <SiApachespark />, color: "#E25A1C" },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "Figma", icon: <SiFigma />, color: "#000000" },
    ],
  };

  // 🟢 Default active category = "Frontend"
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // Slider logos (all black)
  const sliderLogos = [
    <SiDocker size={50} color="#000000" />,
    <SiGithub size={50} color="#000000" />,
    <SiFigma size={50} color="#000000" />,
  ];

  // Flatten all skills for desktop
  const allSkills = Object.values(categories).flat();

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-8 flex flex-col gap-12"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center text-white/70 text-base md:text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Still on track and learning new things every day. Continuously improving
        my skills and exploring new technologies to stay ahead.
      </motion.p>

      {/* === DESKTOP VIEW === */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
        {allSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </div>

      {/* === MOBILE VIEW === */}
      <div className="flex flex-col gap-6 md:hidden">
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`px-4 py-2 rounded-full border border-white/20 text-white text-sm ${
                activeCategory === cat
                  ? "bg-white/20"
                  : "hover:bg-white/10 transition"
              }`}
            >
              {cat === "DataEngineering" ? "Data Engineering" : cat}
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              // 🔹 Slightly reduced horizontal spacing
              className="grid grid-cols-2 gap-x-2 gap-y-4 justify-center place-items-center"
            >
              {categories[activeCategory].map((skill, idx) => {
                const isOdd =
                  categories[activeCategory].length % 2 !== 0 &&
                  idx === categories[activeCategory].length - 1;
                return (
                  <div
                    key={idx}
                    className={isOdd ? "col-span-2 flex justify-center" : ""}
                  >
                    <SkillCard {...skill} />
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Continuous black logo slider */}
      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {sliderLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-24 h-24"
            >
              {logo}
            </div>
          ))}
          {sliderLogos.map((logo, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex items-center justify-center w-24 h-24"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
