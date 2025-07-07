import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProjectsSection: React.FC = () => {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-primary-500"
        >
          Featured Projects
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-8"
        >
          Check out some of my recent work and side projects
        </motion.p>
        <Link to="/projects">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-primary-500 hover:bg-primary-500 text-black px-8 py-3  font-medium transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
