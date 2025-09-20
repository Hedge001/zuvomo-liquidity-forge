
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import HowMarketMakingWorks from '../components/HowMarketMakingWorks';
import PartnerExchanges from '../components/PartnerExchanges';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <HowMarketMakingWorks />
      <PartnerExchanges />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
