import React from 'react';
import HeroSection from '../components/HeroSection';
import TechStackSection from '../components/TechStackSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';

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
