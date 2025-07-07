import React from 'react';
import { motion } from 'framer-motion';

const TechStackSection: React.FC = () => {
  return (
    <section 
      className="relative py-20 px-4 bg-neutral-800 overflow-hidden border-t border-neutral-500/50"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          rgb(0, 0, 0) 0px,
          rgb(0, 0, 0) 20px,
          rgb(12, 12, 12) 20px,
          rgb(12, 12, 12) 40px
        )`
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16 text-primary-500"
        >
          My Tech Stack
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* frontend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-green-400">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'jQuery', 'Capacitor'].map((tech) => (
                <span key={tech} className="p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* backend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', '.NET', 'Node.js', 'C#'].map((tech) => (
                <span key={tech} className="p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* database */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">Database</h4>
            <div className="flex flex-wrap gap-2">
              {['SQL', 'MS SQL'].map((tech) => (
                <span key={tech} className="p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* testing & automation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-red-400">Testing & Automation</h4>
            <div className="flex flex-wrap gap-2">
              {['Selenium', 'WebdriverIO'].map((tech) => (
                <span key={tech} className="p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* devops & tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-primary-500">DevOps & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Docker', 'VSCode'].map((tech) => (
                <span key={tech} className="p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* design & media */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-pink-400">Design & Media</h4>
            <div className="flex flex-wrap gap-2">
              {['Photoshop', 'Vegas PRO', 'FL Studio'].map((tech) => (
                <span key={tech} className="p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
