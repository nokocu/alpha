import React from 'react';
import HeroSection from '../components/Hero';
import TechStackSection from '../components/TechStack';
import FeaturedProjectsSection from '../components/Featured';

const Home: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <HeroSection />
      <TechStackSection />
      <FeaturedProjectsSection />
    </div>
  );
};

export default Home;
