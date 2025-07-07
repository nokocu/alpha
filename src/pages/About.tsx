import React from 'react';
import { motion } from 'framer-motion';
import HeroAbout from '../components/HeroAbout';  

const About: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      
      <HeroAbout />     
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

        {/* main content */}

        <div className="max-w-4xl mx-auto">
          {/* intro section */}
          <section className="mb-1">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0, delay: 0 }}
              className="p-8 backdrop-blur-md bg-neutral-500/10 border-neutral-500/20"
            >
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
            </motion.div>
          </section>

          {/* journey section */}
          <section className="mb-16">
            
            <div className="grid md:grid-cols-2 gap-1">
              {/* current focus */}
              <motion.div 
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0, delay: 0 }}
                className="p-8 backdrop-blur-md bg-neutral-500/10 border-neutral-500/20"
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
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0, delay: 0 }}
                className="p-8 backdrop-blur-md bg-neutral-500/10 border-neutral-500/20"
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
          </section>

          {/* what im building */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary-500">
              What I'm Building
            </h2>
            
            <div className="grid md:grid-cols-2 gap-1">
              {[
                { title: 'Responsive Web Applications', icon: '', color: 'text-primary-500' },
                { title: 'Lightweight Mobile Apps', icon: '', color: 'text-green-400' },
                { title: 'Automation Tools', icon: '', color: 'text-yellow-400' },
                { title: 'Interactive User Interfaces', icon: '', color: 'text-purple-400' }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0, delay: 0 }}
                  className="flex items-center space-x-4 backdrop-blur-md bg-neutral-500/10 border-neutral-500/20 p-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`text-lg font-medium ${item.color}`}>
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* call to action */}
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Open to work opportunities and collaborations
            </p>
            <motion.a 
              href="/contact"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0, delay: 0 }}
              className="inline-block bg-primary-500 hover:bg-primary-500 text-black px-8 py-3  font-medium transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default About;