
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          We are Zuvomo.
        </h2>
        
        <p className="text-xl md:text-2xl leading-relaxed mb-8">
          We partner with crypto projects to provide professional market making services 
          that increase liquidity, reduce spreads, and boost trading volume.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">What We Do</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Provide deep liquidity across exchanges</li>
              <li>• Reduce bid-ask spreads</li>
              <li>• Increase trading volume</li>
              <li>• 24/7 automated market making</li>
            </ul>
          </div>
          
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Expertise</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Multi-exchange integration</li>
              <li>• DeFi protocol optimization</li>
              <li>• Risk management systems</li>
              <li>• Regulatory compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
