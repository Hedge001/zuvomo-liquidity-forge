
import React from 'react';
import { Search, Zap, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Token Analysis',
      subtitle: 'Real-time Analysis',
      description: 'Smart contract audit and verification, tokenomics analysis, market sentiment and social signals analysis',
      features: ['Smart contract verification', 'Tokenomics assessment', 'Social sentiment analysis', 'Market depth evaluation']
    },
    {
      icon: Zap,
      title: 'Liquidity Deployment',
      subtitle: 'Instant Deployment',
      description: 'Multi-DEX liquidity pool creation, automated market maker optimization, cross-chain bridge integration',
      features: ['Multi-DEX pool creation', 'AMM optimization', 'Cross-chain bridges', 'Dynamic pricing activation']
    },
    {
      icon: BarChart3,
      title: '24/7 Market Making',
      subtitle: 'Continuous Trading',
      description: 'Continuous bid/ask order placement, real-time spread optimization, volume amplification strategies',
      features: ['Automated order placement', 'Spread optimization', 'Volume amplification', 'Arbitrage execution']
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            From Token Launch to Deep Liquidity
          </h2>
          <p className="text-2xl text-green-400 font-semibold">in Minutes</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105 group">
                    {/* Step number */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6 mt-4">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-green-400 font-semibold mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-300 mb-6">
                      {step.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-2">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-400 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-8 top-1/2 transform -translate-y-1/2 z-20">
                      <div className="w-16 h-16 bg-slate-800 border-2 border-green-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="h-8 w-8 text-green-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-full px-8 py-4">
            <span className="text-green-400 font-semibold">Timeline:</span>
            <span className="text-white">Setup in &lt; 5 minutes</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
