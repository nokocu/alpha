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
      icon: 'x',
      label: 'Email',
      value: 'nokocu@gmail.com',
      link: 'mailto:nokocu@gmail.com'
    },
    {
      icon: 'x',
      label: 'LinkedIn',
      value: 'michalow-michal',
      link: 'https://www.linkedin.com/in/michalow-michal/'
    },
    {
      icon: 'x',
      label: 'GitHub',
      value: 'nokocu',
      link: 'https://github.com/nokocu'
    },
    {
      icon: 'x',
      label: 'Location',
      value: 'Rzeszów, Poland (open to relocate)',
      link: null
    }
  ];

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* header section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6, delay: 0.2 }}
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
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-neutral-800  p-6 hover:bg-neutral-750 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{item.icon}</span>
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
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-neutral-800  p-8 shadow-lg">
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
                      className="w-full px-4 py-3 bg-neutral-700 border border-gray-600  focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 text-white placeholder-gray-400 transition-colors duration-300"
                      placeholder="Your full name"
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
                      className="w-full px-4 py-3 bg-neutral-700 border border-gray-600  focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 text-white placeholder-gray-400 transition-colors duration-300"
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
                      className="w-full px-4 py-3 bg-neutral-700 border border-gray-600  focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 text-white placeholder-gray-400 transition-colors duration-300"
                      placeholder="What's this about?"
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
                      className="w-full px-4 py-3 bg-neutral-700 border border-gray-600  focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
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
    </div>
  );
};

export default Contact;