
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/radialpattern-b9QK3RbQTkvRJ9NrM3egXEFZ/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          style={{ pointerEvents: 'all' }}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-950/40 z-10"></div>
      
      {/* Navigation with Logo */}
      <nav className="relative z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-wider">
            ZUVOMO
          </div>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[85vh] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Market Making
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Deep liquidity solutions for crypto exchanges and digital assets. 
            We provide professional market making services that increase trading volume and reduce spreads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-12 py-6 text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
            >
              Get Started
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-12 py-6 text-xl rounded-lg transition-all duration-300 bg-slate-900/50 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
