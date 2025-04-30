import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Button from '@mui/material/Button';
import projects from './data/projectsData';

function Projects() {
  // Glow animation variants
  const glowVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  // Card hover effect
  const cardHover = {
    scale: 1.02,
    boxShadow: "0 10px 30px -10px rgba(255, 126, 95, 0.3)",
    transition: { type: "spring", stiffness: 300 }
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Heading with animated underline */}
        <div className="text-center mb-16 relative">
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-4 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md flex flex-col h-full"
              variants={glowVariant}
              initial="hidden"
              animate="visible"
              whileHover={cardHover}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7e5f10] to-[#feb47b10] opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Project Image - Improved responsive container */}
              {project.image && (
                <div className="w-full aspect-video overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Project Title with original color */}
                <h3 className="text-2xl font-bold text-[#ff7e5f] mb-3 relative inline-block">
                  {project.title}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff7e5f]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{project.description}</p>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <motion.span 
                        key={i}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {/* GitHub Link */}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outlined"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#ff7e5f] hover:text-[#ff7e5f]"
                        startIcon={<GitHubIcon />}
                      >
                        Source
                      </Button>
                    </motion.a>
                  )}

                  {/* Live Demo Link */}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white shadow-lg hover:shadow-[#ff7e5f]/30"
                        startIcon={<LaunchIcon />}
                      >
                        Live Demo
                      </Button>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;