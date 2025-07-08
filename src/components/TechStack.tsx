import React from 'react';
import { motion } from 'framer-motion';

const TechStackSection: React.FC = () => {
  const techStackData = {
    frontend: [
      { name: 'HTML', icon: './assets/html5.svg', color: '#E34F26' },
      { name: 'CSS', icon: './assets/css.svg', color: '#633194' },
      { name: 'JavaScript', icon: './assets/javascript.svg', color: '#F7DF1E' },
      { name: 'TypeScript', icon: './assets/typescript.svg', color: '#3178C6' },
      { name: 'React', icon: './assets/react.svg', color: '#61DAFB' },
      { name: 'Angular', icon: './assets/angular.svg', color: '#DD0031' },
      { name: 'jQuery', icon: './assets/jquery.svg', color: '#0769AD' },
      { name: 'Capacitor', icon: './assets/capacitor.svg', color: '#119EFF' }
    ],
    backend: [
      { name: 'Python', icon: './assets/python.svg', color: '#3776AB' },
      { name: '.NET', icon: './assets/dotnet.svg', color: '#512BD4' },
      { name: 'Node.js', icon: './assets/nodedotjs.svg', color: '#339933' },
      { name: 'C#', icon: './assets/cs.svg', color: '#953dac' }
    ],
    database: [
      { name: 'SQL', icon: './assets/sql.svg', color: '#df6c20' },
      { name: 'MS SQL', icon: './assets/sql.svg', color: '#CC2927' }
    ],
    testing: [
      { name: 'Selenium', icon: './assets/selenium.svg', color: '#43B02A' },
      { name: 'WebdriverIO', icon: './assets/webdriverio.svg', color: '#EA5906' }
    ],
    devops: [
      { name: 'Git', icon: './assets/git.svg', color: '#F05032' },
      { name: 'Docker', icon: './assets/docker.svg', color: '#2496ED' },
      { name: 'VSCode', icon: './assets/vsc.svg', color: '#007ACC' }
    ],
    design: [
      { name: 'Photoshop', icon: './assets/ps.svg', color: '#31A8FF' },
      { name: 'Vegas PRO', icon: './assets/vegas.svg', color: '#1195cf' },
      { name: 'FL Studio', icon: './assets/fl.svg', color: '#FF7200' }
    ]
  };
  return (
    <section 
      className="relative py-20 px-4 bg-neutral-800 overflow-hidden border-t border-neutral-500/50"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          rgb(10, 10, 10) 0px,
          rgb(10, 10, 10) 20px,
          rgb(16, 16, 16) 20px,
          rgb(16, 16, 16) 40px
        )`
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          className="text-3xl font-bold text-center mb-16 text-primary-500"
        >
          My Tech Stack
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* frontend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0, delay: 0 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-green-400">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {techStackData.frontend.map((tech) => (
                <span key={tech.name} className="flex items-center gap-2 p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  <div 
                    className="w-4 h-4 flex items-center justify-center"
                    style={{ backgroundColor: tech.color, mask: `url(${tech.icon}) center/contain no-repeat`, WebkitMask: `url(${tech.icon}) center/contain no-repeat` }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>  
          </motion.div>

          {/* backend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0 , delay: 0}}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {techStackData.backend.map((tech) => (
                <span key={tech.name} className="flex items-center gap-2 p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  <div 
                    className="w-4 h-4 flex items-center justify-center"
                    style={{ backgroundColor: tech.color, mask: `url(${tech.icon}) center/contain no-repeat`, WebkitMask: `url(${tech.icon}) center/contain no-repeat` }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* database */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0 , delay: 0. }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">Database</h4>
            <div className="flex flex-wrap gap-2">
              {techStackData.database.map((tech) => (
                <span key={tech.name} className="flex items-center gap-2 p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  <div 
                    className="w-4 h-4 flex items-center justify-center"
                    style={{ backgroundColor: tech.color, mask: `url(${tech.icon}) center/contain no-repeat`, WebkitMask: `url(${tech.icon}) center/contain no-repeat` }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* testing & automation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0 , delay: 0 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-red-400">Testing & Automation</h4>
            <div className="flex flex-wrap gap-2">
              {techStackData.testing.map((tech) => (
                <span key={tech.name} className="flex items-center gap-2 p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  <div 
                    className="w-4 h-4 flex items-center justify-center"
                    style={{ backgroundColor: tech.color, mask: `url(${tech.icon}) center/contain no-repeat`, WebkitMask: `url(${tech.icon}) center/contain no-repeat` }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* devops & tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0 , delay: 0 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-primary-500">DevOps & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {techStackData.devops.map((tech) => (
                <span key={tech.name} className="flex items-center gap-2 p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  <div 
                    className="w-4 h-4 flex items-center justify-center"
                    style={{ backgroundColor: tech.color, mask: `url(${tech.icon}) center/contain no-repeat`, WebkitMask: `url(${tech.icon}) center/contain no-repeat` }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* design & media */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0 , delay: 0 }}
            className="p-6 backdrop-blur-md bg-neutral-500/10 shadow-lg border-neutral-500/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-pink-400">Design & Media</h4>
            <div className="flex flex-wrap gap-2">
              {techStackData.design.map((tech) => (
                <span key={tech.name} className="flex items-center gap-2 p-6 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full text-sm">
                  <div 
                    className="w-4 h-4 flex items-center justify-center"
                    style={{ backgroundColor: tech.color, mask: `url(${tech.icon}) center/contain no-repeat`, WebkitMask: `url(${tech.icon}) center/contain no-repeat` }}
                  />
                  {tech.name}
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
