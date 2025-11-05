import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

import AlxImg from "../images/spotify.png";
import WeatherImg from "../images/wethe.jpeg";
import gym from "../images/elitefit.png";
import dental from "../images/dental.png";

const projects = [
  {
    title: "Spotify Gesture Control",
    description: `Spotify Gesture Control is an innovative application that allows users to control Spotify playback entirely using hand gestures detected through a webcam. It leverages MediaPipe for accurate hand tracking and Pygame for a real-time interface, enabling intuitive control of volume and track selection without touching the device. This project demonstrates a combination of computer vision, user interface design, and API integration to create a seamless, interactive music experience.`,
    images: [AlxImg],
    tech: ["Python", "Spotify API (Spotipy)", "MediaPipe", "Pygame", "OpenCV"],
    liveUrl: "",
    githubUrl: "https://github.com/aymanebenomar/Spotify-Gesture-Control",
    status: "Done",
    featured: true,
  },
  {
    title: "Elitefit Gym Website",
    description: `Elitefit is a modern, fully responsive gym website built with React, Vite, and Tailwind CSS. It integrates Supabase for managing memberships, class schedules, and contact forms. The design is sleek, mobile-friendly, and interactive, showcasing modern frontend techniques and full-stack integration.`,
    images: [gym],
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "JavaScript"],
    liveUrl: "https://elitefit.vercel.app/",
    status: "Done",
    featured: true,
  },
  {
    title: "Dental Website",
    description: `A modern and responsive dental clinic website built with Next.js, Supabase, and Google APIs. The platform allows patients to pre-register for appointments, while the admin dashboard provides full access to manage pre-registrations and publish blogs or news updates. It features dynamic data handling, authentication, and smooth user experience through real-time database integration and clean UI design.`,
    images: [dental],
    tech: ["Next.js", "Supabase", "Google API", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    status: "In Progress",
    featured: true,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 md:px-12"
    >
      <motion.div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            A collection of my recent work spanning full-stack development, AI
            integrations, and web projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative bg-gray-900/90 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between h-full hover:shadow-blue-500/20 transition">
                {/* Status Badge */}
                {project.status && (
                  <div
                    className={`absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg ${
                      project.status === "Done"
                        ? "bg-green-600 text-white"
                        : project.status === "Live"
                        ? "bg-green-500/90 text-white"
                        : "bg-orange-500/90 text-white"
                    }`}
                  >
                    {project.status}
                  </div>
                )}

                {/* Card Image */}
                <div className="relative overflow-hidden rounded-t-3xl h-48 sm:h-52 md:h-56 lg:h-64">
                  <motion.img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Card Content */}
                <div className="relative p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {project.description.split("\n")[0]}
                  </p>

                  {/* Tech Stack */}
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

                  {/* Icon Links */}
                  <div className="flex justify-center gap-6 mt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={28} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={28} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Full Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl w-full max-w-xl md:max-w-2xl p-6 relative border border-white/10 shadow-2xl overflow-auto max-h-[90vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
                >
                  <X size={26} />
                </button>

                {/* Image */}
                <motion.img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />

                {/* Title */}
                <h3 className="text-3xl font-bold mb-3">
                  {selectedProject.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-base leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-white/5 rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Icon Links */}
                <div className="flex justify-center gap-6">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={26} />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={26} />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
