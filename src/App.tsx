import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollBtn';
import Navigation from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-900 text-white">
        <Navigation />
        
        {/* main content */}
        <main>
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

        {/* footer */}
        <Footer />

        {/* scroll to top button */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
