
import React from 'react';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import SolutionOverview from '../components/SolutionOverview';
import HowItWorks from '../components/HowItWorks';
import CryptoFeatures from '../components/CryptoFeatures';
import MarketMakingStrategies from '../components/MarketMakingStrategies';
import Benefits from '../components/Benefits';
import TechStack from '../components/TechStack';
import SuccessStories from '../components/SuccessStories';
import Pricing from '../components/Pricing';
import Security from '../components/Security';
import Contact from '../components/Contact';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <HowItWorks />
      <CryptoFeatures />
      <MarketMakingStrategies />
      <Benefits />
      <TechStack />
      <SuccessStories />
      <Pricing />
      <Security />
      <Contact />
    </div>
  );
};

export default Index;
