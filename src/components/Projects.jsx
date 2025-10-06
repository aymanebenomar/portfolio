import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import AlxImg from "../images/spotify.png";
import WeatherImg from "../images/wethe.jpeg"; // Replace with your weather app screenshot

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
    title: "Weather Web App",
    description: `A responsive weather web application built with HTML, CSS, and JavaScript. It fetches real-time weather data from the Weather API and displays the current weather, forecast, and additional information in a clean, interactive interface. The app demonstrates API integration, DOM manipulation, and dynamic UI updates.`,
    images: [WeatherImg],
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    liveUrl: "https://weatherapp-mu-smoky-24.vercel.app",
    githubUrl: "https://github.com/aymanebenomar/Weather_WebApp.git",
    status: "Live",
    featured: true,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 md:px-12"
    >
      <motion.div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => openProject(project)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className="relative bg-gray-900/90 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {project.status && (
                  <div
                    className={`absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg ${
                      project.status === "Done"
                        ? "bg-green-600 text-white"
                        : project.status === "Live"
                        ? "bg-green-500/90 text-white"
                        : "bg-purple-500/90 text-white"
                    }`}
                  >
                    {project.status}
                  </div>
                )}

                {/* Card Image */}
                <div className="relative overflow-hidden rounded-t-3xl h-48 md:h-56 lg:h-64">
                  <motion.img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="relative p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                    {project.description.split("\n")[0]}
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

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-gray-900 rounded-3xl max-w-3xl w-full p-6 overflow-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  className="absolute top-4 right-4 p-2 bg-white/20 rounded-full"
                  onClick={closeProject}
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-3xl font-bold mb-4 text-center">
                  {selectedProject.title}
                </h2>

                {/* Description */}
                <div className="bg-black rounded-2xl p-6 text-center text-white/90">
                  <p className="text-sm leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Links */}
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 rounded-lg"
                    >
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 rounded-lg"
                    >
                      Live Demo
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
