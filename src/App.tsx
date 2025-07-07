import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation */}
        <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold text-blue-400"
              >
                Portfolio
              </motion.div>

              {/* Navigation Links */}
              <div className="flex space-x-8">
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </main>
      </div>
    </Router>
  );
}

export default App;
