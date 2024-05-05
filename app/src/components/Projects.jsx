import React from 'react';
import './project.css'; // Import CSS file for styles
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button'; // Import Button component from Material-UI

function Projects() {
  const projects = [
    { 
      title: 'Flavor Fusion', 
      description: '"Flavor Fusion: Your Personalized Recipe Guide" is a user-friendly and interactive web-based application designed to revolutionize your culinary journey. This platform aims to make recipe discovery and cooking an enjoyable and seamless experience.', 
      github: 'https://github.com/Yash-Ved-au52/Ff-flavor-fusion_frontend'
    },
    { 
      title: 'Cloud Photo Gallery', 
      description: '"The Cloud photo gallery app is a web-based application that allows users to upload, store, and view photos in a gallery. Users can log in / create an account, upload images, and add captions to their images.', 
      github: 'https://github.com/Yash-Ved-au52/cloud_photo_gallery'
    },
    { 
      title: 'Property Prime', 
      description: "Property prime is a leading real state agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods.", 
      github: 'https://github.com/Yash-Ved-au52/Property-prime'
    },
    // Add more projects as needed
  ];

  return (
    <div className='p-c'>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card mb-3">
          <div className="project-content">
            <h5 className="project-title">{project.title}</h5>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-footer">
            {project.github && (
              <a href={project.github} className="github-link">
                <Button variant="outlined" className='bg-dark text-light' startIcon={<GitHubIcon />}>
                  GitHub
                </Button>
              </a>
            )}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
