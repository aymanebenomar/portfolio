import React from "react";
import { motion } from "framer-motion";
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
} from "react-icons/si";

// Animated Skill Card
const SkillCard = ({ icon, name, color }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5, boxShadow: `0 0 15px ${color}` }}
    className="w-28 h-28 flex flex-col items-center justify-center gap-2 bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl text-white cursor-pointer"
  >
    <div className="text-4xl" style={{ color }}>{icon}</div>
    <span className="text-sm text-white/70">{name}</span>
  </motion.div>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "C", icon: <SiC />, color: "#00599C" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express", icon: <FaNodeJs />, color: "#000000" },
    { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "SQL", icon: <FaDatabase />, color: "#4479A1" },
  ];

  // Slider logos (all black)
  const sliderLogos = [
    <SiDocker size={50} color="#000000" />,
    <SiGithub size={50} color="#000000" />,
    <SiFigma size={50} color="#000000" />,
  ];

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

      {/* Skills Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </motion.div>

      {/* Continuous black logo slider */}
      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {sliderLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center w-24 h-24">
              {logo}
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {sliderLogos.map((logo, idx) => (
            <div key={`dup-${idx}`} className="flex items-center justify-center w-24 h-24">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
