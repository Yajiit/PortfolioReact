// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project'; // Import Project component
import projectData from '../utils/projectData'; // Import project data
import imageData from '../utils/imageData';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageSrc={imageData[project.id]}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
