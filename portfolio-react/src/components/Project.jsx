// src/components/Project.js
import React from 'react';

function Project({ title, imageSrc, demoLink, githubLink }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={imageSrc} alt={`${title} screenshot`} />
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Project;
