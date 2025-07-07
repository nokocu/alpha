import React from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/ProjectGrid';

const Projects: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <section 
      className="relative py-20 px-4 bg-neutral-800 overflow-hidden border-t border-neutral-500/50"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          rgb(15, 15, 15) 0px,
          rgb(15, 15, 15) 20px,
          rgb(17, 17, 17) 20px,
          rgb(17, 17, 17) 40px
        )`
      }}
    >
      <div className="container mx-auto px-4 py-16">
        {/* header section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
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

        {/* project grid */}
        <ProjectGrid />

        {/* contact */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0}}
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
      </section>
    </div>
  );
};

export default Projects;
