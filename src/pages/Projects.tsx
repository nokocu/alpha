import React from 'react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div>
      <section>
        <h1>My Projects</h1>
        <p>A collection of projects showcasing different technologies and skills</p>
      </section>

      <section>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-status">
                Status: <span className={`status ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              
              <div className="project-links">
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
