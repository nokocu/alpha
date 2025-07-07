import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-500">
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        {/* main content */}
        <div className="max-w-4xl mx-auto">
          {/* intro section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-neutral-800  p-8 shadow-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a <span className="text-primary-500 font-semibold">full-stack web developer</span> with 
                a unique background in competitive e-sports. I represented the well-known Polish e-sport 
                organization <span className="text-primary-500 font-semibold">Anonymo Esports</span>, competing 
                in various international and national tournaments in VALORANT by Riot Games.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                I achieved great results with my team in many tournaments, was awarded 
                <span className="text-green-400 font-semibold"> MVP of the first official Polish LAN tournament</span> (BeContender #1), 
                and competed in leagues organized by Polska Liga Esportowa and Polsat Games.
              </p>
            </div>
          </motion.section>

          {/* journey section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary-500">
              My Journey
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* current focus */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-800  p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  Current Focus
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Building modern web applications with React, TypeScript, and Python.
                  Learning new technologies like Angular, .NET, and SQL databases to 
                  expand my skillset and meet industry demands.
                </p>
              </motion.div>

              {/* background */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-800  p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  Background
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As a former professional player in a tactical FPS game, I developed 
                  strong teamwork and communication skills, creative problem-solving 
                  abilities, and the capacity to make crucial decisions under pressure.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* what im building */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary-500">
              What I'm Building
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Responsive Web Applications', icon: '', color: 'text-primary-500' },
                { title: 'Mobile Apps', icon: '', color: 'text-green-400' },
                { title: 'Automation Tools with Python', icon: '', color: 'text-yellow-400' },
                { title: 'Interactive User Interfaces', icon: '', color: 'text-purple-400' }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-4 bg-neutral-800  p-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`text-lg font-medium ${item.color}`}>
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* currently learning */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary-500">
              Currently Learning
            </h2>
            
            <div className="bg-neutral-800  p-8 shadow-lg">
              <p className="text-lg text-gray-300 mb-6 text-center">
                Expanding my knowledge in:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Angular framework',
                  '.NET and C# development',
                  'Docker and containerization',
                  'Advanced testing with WebdriverIO'
                ].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* call to action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">
              Open to work opportunities and collaborations
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
    </div>
  );
};

export default About;