import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-500';
      case 'in progress': return 'bg-yellow-500';
      case 'planning': return 'bg-primary-500';
      default: return 'bg-neutral-500';
    }
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* header section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-500">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing different technologies and skills. 
            From web applications, automation tools to other goofy creations.
          </p>
        </motion.div>

        {/* projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-neutral-800  overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* project card */}
              <div className="p-6">
                {/* project title */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                
                {/* project desc */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* tech stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span 
                        key={tech} 
                        className="bg-neutral-700 text-primary-500 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* project status */}
                <div className="flex items-center mb-6">
                  <span className="text-gray-400 text-sm mr-2">Status:</span>
                  <span className={`${getStatusColor(project.status)} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                    {project.status}
                  </span>
                </div>
                
                {/* project Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-neutral-700 hover:bg-neutral-600 text-white text-center py-2 px-4  transition-colors duration-300 text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-500 hover:bg-primary-500 text-black text-center py-2 px-4  transition-colors duration-300 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together or want to see more?
          </p>
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-primary-500 hover:bg-primary-500 text-black px-8 py-3  font-medium transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
