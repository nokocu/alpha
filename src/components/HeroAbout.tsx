import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroAbout: React.FC = () => {
  const { scrollY } = useScroll();
  
  // transform scroll position to blur and scale values
  const blur = useTransform(scrollY, [0, 500], [0, 8]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.3, 0.7]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

  return (
    <section className="pt-10 relative h-96 flex items-center justify-center px-4 overflow-hidden">
      {/* background Photo */}
      <motion.img
        src="/src/assets/photo2.jpg"
        alt="Background"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 1 }}
        style={{ 
          filter: useTransform(blur, (b) => `blur(${b}px) brightness(0.4)`),
          scale: scale,
          willChange: 'filter, transform'
        }}
        className="absolute inset-0 w-full h-full object-cover object-[100%_15%] z-0 pointer-events-none select-none"
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
          transition={{ duration: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-dark-900">About me</span>
          <div className="w-40 h-1 bg-primary-500 mx-auto mt-6"></div>
        </motion.h1>
        
        
      </div>
    </section>
  );
};

export default HeroAbout;
