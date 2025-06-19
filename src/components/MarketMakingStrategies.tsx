
import React from 'react';
import { Rocket, Building, TrendingUp, Users } from 'lucide-react';

const MarketMakingStrategies = () => {
  const strategies = [
    {
      icon: Rocket,
      title: 'New Token Launch Support',
      features: ['Initial liquidity bootstrapping', 'Price discovery optimization', 'Community trading incentives', 'Anti-dump protection mechanisms'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Building,
      title: 'DeFi Protocol Enhancement',
      features: ['TVL (Total Value Locked) maximization', 'Token utility optimization', 'Governance token distribution', 'Protocol fee optimization'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: TrendingUp,
      title: 'Exchange Listing Support',
      features: ['Pre-listing liquidity preparation', 'Market making during price discovery', 'Volume generation for listing requirements', 'Long-term liquidity sustainability'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Users,
      title: 'Institutional Crypto Trading',
      features: ['Large order execution (TWAP/VWAP)', 'Dark pool integration', 'OTC desk connectivity', 'Compliance and reporting tools'],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Advanced Strategies for Every
          </h2>
          <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Crypto Asset
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => {
            const IconComponent = strategy.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden ${strategy.bgColor} border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105`}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${strategy.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                        '--tw-gradient-from': strategy.color.split(' ')[0].replace('from-', ''),
                        '--tw-gradient-to': strategy.color.split(' ')[2].replace('to-', '')
                      }}>
                    {strategy.title}
                  </h3>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {strategy.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${strategy.color} rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Interactive element */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`h-1 bg-gradient-to-r ${strategy.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-slate-800/30 border border-slate-700 rounded-2xl px-8 py-6">
            <div>
              <div className="text-2xl font-bold text-green-400">300%+</div>
              <div className="text-gray-400 text-sm">Volume Increase</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div>
              <div className="text-2xl font-bold text-blue-400">80%</div>
              <div className="text-gray-400 text-sm">Spread Reduction</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div>
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400 text-sm">Market Making</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketMakingStrategies;
