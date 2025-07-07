import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  // transform scroll position to blur and scale values
  const blur = useTransform(scrollY, [0, 500], [0, 8]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.3, 0.7]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* background Photo */}
      <motion.img
        src="/src/assets/photo1.jpg"
        alt="Background"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 1 }}
        style={{ 
          filter: useTransform(blur, (b) => `blur(${b}px) brightness(0.4)`),
          scale: scale,
          willChange: 'filter, transform'
        }}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
      />
      {/* dynamic dark overlay */}
      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black z-10" 
      />
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-dark-900">nokocu</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-300 mb-8"
        >
          Full-Stack Web Developer
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Former e-sports competitor - Now creating web applications
          and building cool websites with modern technologies.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/projects">
            <button className="bg-primary-500 hover:bg-white text-black px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105">
              View My Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className="border border-gray-400 hover:border-neutral-400 text-gray-300 hover:text-primary-500 px-8 py-3  font-medium transition-all duration-300">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
