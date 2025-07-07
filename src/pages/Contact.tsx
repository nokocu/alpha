import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo - form data logged to console)');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: 'Email',
      value: 'nokocu@gmail.com',
      link: 'mailto:nokocu@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'michalow-michal',
      link: 'https://www.linkedin.com/in/michalow-michal/'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'nokocu',
      link: 'https://github.com/nokocu'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      label: 'Location',
      value: 'Rzeszów, Poland (open to relocate)',
      link: null
    }
  ];

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
            Contact Me
          </h1>
          <p className="text-lg text-gray-400 mb-2">
            Open for work - Send me a message.
          </p>
          <p className="text-lg text-gray-400">
            Available almost 24/7, will respond quickly.
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* contact info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0, delay: 0 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-primary-500">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0, delay: 0 + index * 0 }}
                    className="backdrop-blur-md bg-neutral-500/10  p-6 hover:bg-neutral-750 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-primary-500">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-200 mb-1">
                          {item.label}
                        </h3>
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-500 hover:text-primary-500 transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-400">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>


            </motion.div>

            {/* contact form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0, delay: 0 }}
            >
              <form onSubmit={handleSubmit} className="backdrop-blur-md bg-neutral-500/10  p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-primary-500">
                  Send Message
                </h2>
                
                <div className="space-y-6">
                  {/* name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 backdrop-blur-md bg-neutral-500/10 border border-gray-600  focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 text-white placeholder-gray-400 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  {/* email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 backdrop-blur-md bg-neutral-500/10 border border-gray-600  focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 text-white placeholder-gray-400 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 backdrop-blur-md bg-neutral-500/10 border border-gray-600  focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 text-white placeholder-gray-400 transition-colors duration-300"
                      placeholder="Topic of your message"
                    />
                  </div>

                  {/* message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 backdrop-blur-md bg-neutral-500/10 border border-gray-600  focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                      placeholder="I'm listening..."
                    />
                  </div>

                  {/* submit button */}
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-500 hover:bg-primary-500 text-black font-medium py-3 px-6  transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;