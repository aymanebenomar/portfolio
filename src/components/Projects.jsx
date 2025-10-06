import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, product management, and real-time inventory tracking.",
    image: "./src/images/Alx.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Live",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description: "Python-based tool that uses GPT models to generate marketing content, blogs, and social media posts.",
    image: "./src/images/1337.jpg",
    tech: ["Python", "OpenAI", "Flask", "React"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Live",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 md:px-12"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A collection of my recent work spanning full-stack development, AI integrations, and data engineering
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* Card Container */}
              <div className="relative bg-gray-900/90 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/80 rounded-full text-xs font-bold text-white shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    Featured
                  </div>
                )}

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg ${
                    project.status === "Live"
                      ? "bg-green-500/90 text-white"
                      : project.status === "Beta"
                      ? "bg-blue-500/90 text-white"
                      : "bg-purple-500/90 text-white"
                  }`}
                >
                  {project.status}
                </div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Buttons on bottom-right of image */}
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-xl rounded-xl border border-white/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-xl rounded-xl border border-white/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-xs font-semibold bg-white/5 rounded-lg border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
