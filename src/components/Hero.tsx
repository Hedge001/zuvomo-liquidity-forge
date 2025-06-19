
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <img 
            src="/lovable-uploads/b84cbea5-5f92-4aca-9015-046830648343.png" 
            alt="Media Coverage" 
            className="w-full max-w-3xl mx-auto mb-8 opacity-60"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
          ZUVOMO
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-medium mb-8 text-gray-700">
          Professional Crypto Market Making
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          We provide deep liquidity for crypto exchanges, DeFi protocols, and digital assets. 
          Professional market making services that increase trading volume and reduce spreads.
        </p>
        
        <Button 
          size="lg" 
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-6 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Market Making
        </Button>
      </div>
    </section>
  );
};

export default Hero;
