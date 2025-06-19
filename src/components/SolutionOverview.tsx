
import React from 'react';
import { Network, Brain, Shield, Zap } from 'lucide-react';

const SolutionOverview = () => {
  const features = [
    {
      icon: Network,
      title: 'Cross-Chain Liquidity',
      description: 'Provide liquidity across Ethereum, BSC, Polygon, Solana, Avalanche, and 15+ other chains simultaneously',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning Trading',
      description: 'Advanced ML algorithms analyze 1000+ market signals to optimize spreads and maximize volume',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'Native DeFi Support',
      description: 'Direct integration with Uniswap, SushiSwap, PancakeSwap, and 50+ DEX protocols',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'MEV-Resistant Trading',
      description: 'Advanced protection against MEV attacks with private mempool and flashloan arbitrage defense',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            ZUVOMO Crypto Market Making
          </h2>
          <p className="text-2xl text-gray-300 mb-4">Liquidity at Light Speed</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105"
              >
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500/50 group-hover:to-green-500/50 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Center connecting element */}
        <div className="flex justify-center mt-12">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center animate-pulse">
            <Zap className="h-16 w-16 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
