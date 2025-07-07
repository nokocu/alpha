import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import TechIcon from './TechIcon';

// Helper function to get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'text-green-600';
    case 'In Progress':
    case 'Work in Progress':
      return 'text-yellow-600';
    case 'Planning':
      return 'text-blue-600';
    default:
      return 'text-gray-600';
  }
};

const ProjectGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0}}
          whileHover={{ scale: 0.98 }}
          className="backdrop-blur-md bg-neutral-500/10 overflow-hidden transition-all duration-300 flex flex-col"
        >
          {/* project card */}
          <div className="p-6 flex flex-col flex-grow">
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
              <div className="flex flex-wrap gap-2 ">
                {project.tech.map(tech => (
                  <div 
                    key={tech} 
                    className="backdrop-blur-md  border-neutral-500/20 text-gray-200 px-3 py-1.5 rounded-full text-xs font-medium flex items-center"
                  >
                    <TechIcon 
                      techName={tech} 
                      size="sm" 
                      className="text-gray-200"
                    />
                  </div>
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
            <div className="flex gap-3 mt-auto">
              <motion.a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0, delay: 0 }}
                className="flex-1 backdrop-blur-md border-neutral-500/20 hover:bg-neutral-600 text-white text-center py-2 px-4 transition-colors duration-300 text-sm font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.a>
              <motion.a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0, delay: 0 }}
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-black text-center py-2 px-4 transition-colors duration-300 text-sm font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="currentColor"/>
                  <path d="M10 8l4 4-4 4" stroke="orange" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;