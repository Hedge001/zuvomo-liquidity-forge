
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Zap, Shield, Globe } from 'lucide-react';
import CryptoTicker from './CryptoTicker';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl mx-auto text-center z-10">
        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-fade-in">
          ZUVOMO
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Next-Gen Crypto Market Making Solutions
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          AI-powered algorithmic trading that provides deep liquidity for tokens, DeFi protocols, and crypto exchanges. 
          <span className="text-green-400 font-semibold"> Boost your trading volume by 300%+</span>
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 animate-pulse"
        >
          <Zap className="mr-2 h-6 w-6" />
          Launch Market Making
        </Button>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">$2.5B+</div>
            <div className="text-gray-400">Trading Volume</div>
          </div>
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-400">Tokens Supported</div>
          </div>
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-400">Automated Trading</div>
          </div>
        </div>
        
        {/* Floating crypto logos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['₿', 'Ξ', '◉', '⟠'].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-4xl text-blue-400/20 animate-bounce"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + Math.sin(i) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>
      
      {/* Crypto ticker at bottom */}
      <CryptoTicker />
    </section>
  );
};

export default Hero;
