import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button'; // Import Button component from Material-UI
import projects from './data/projectsData'; // Import projects data

function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-[#444]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-10 text-center">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2c2c2c] p-6 rounded-lg border border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image (Conditional Rendering) */}
              {project.image && (
                <div className="w-full aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-[#ff7e5f] mb-4">{project.title}</h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-6">{project.description}</p>

              {/* Buttons */}
              <div className="flex space-x-4">
                {/* GitHub Link (Conditional Rendering) */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="outlined"
                      className="text-white border-white hover:border-[#ff7e5f] hover:text-[#ff7e5f]"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                  </a>
                )}

                {/* Live Demo Link (Conditional Rendering) */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="contained"
                      className="bg-[#ff7e5f] text-white hover:bg-[#ff6f4f]"
                    >
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;