import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; // Icons for GitHub & Live Demo

import AlxImg from "../images/spotify.png";
import WeatherImg from "../images/wethe.jpeg";
import gym from "../images/elitefit.png";

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
    liveUrl: "https://your-gym-website.vercel.app",
    githubUrl: "https://github.com/aymanebenomar/elitefit-website",
    status: "Live",
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

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className="relative bg-gray-900/90 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between h-full">
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
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3 flex-grow">
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

                  {/* Icon Links centered */}
                  <div className="flex justify-center gap-6 mt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors"
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
      </motion.div>
    </section>
  );
}
