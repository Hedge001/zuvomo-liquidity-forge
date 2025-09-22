
import React from 'react';

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-400 to-cyan-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div>
            <div className="text-4xl md:text-6xl font-bold mb-2 font-ubuntu">2017</div>
            <div className="text-lg md:text-xl uppercase tracking-wide font-ubuntu font-medium">ACTIVE SINCE</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-bold mb-2 font-ubuntu">100+</div>
            <div className="text-lg md:text-xl uppercase tracking-wide font-ubuntu font-medium">CRYPTO PROJECTS</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-bold mb-2 font-ubuntu">$500M+</div>
            <div className="text-lg md:text-xl uppercase tracking-wide font-ubuntu font-medium">VOLUME GENERATED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
