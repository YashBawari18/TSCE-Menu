import React from 'react';
import LandingPage from '../components/LandingPage';
import ProblemSection from '../components/ProblemSection';
import FeaturesSection from '../components/FeaturesSection';
import RequirementsSection from '../components/RequirementsSection';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <LandingPage />
      <ProblemSection />
      <FeaturesSection />
      <RequirementsSection />
    </div>
  );
};

export default HomePage;