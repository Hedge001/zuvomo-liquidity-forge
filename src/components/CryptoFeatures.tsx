
import React from 'react';
import { Activity, Cpu, TrendingUp, Shield } from 'lucide-react';

const CryptoFeatures = () => {
  const features = [
    {
      icon: Activity,
      title: 'Real-Time Crypto Analytics',
      items: ['Live trading volume across all DEXs', 'Token price movement predictions', 'Liquidity depth heatmaps', 'Whale wallet tracking and alerts'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Smart Contract Automation',
      items: ['Automated liquidity mining rewards', 'Yield farming optimization', 'Impermanent loss protection', 'Gas fee optimization algorithms'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Multi-Chain Arbitrage',
      items: ['Cross-chain price difference detection', 'Automated arbitrage execution', 'Bridge fee optimization', 'Slippage minimization'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'DeFi Yield Strategies',
      items: ['Liquidity provider token staking', 'Governance token farming', 'Flash loan arbitrage', 'Compound strategy automation'],
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Institutional-Grade Technology
          </h2>
          <p className="text-xl text-gray-300">Advanced crypto market making powered by cutting-edge algorithms</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-slate-800/30 border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Feature list */}
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-opacity-30 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Performance metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { metric: '99.9%', label: 'Uptime', color: 'text-green-400' },
            { metric: '<10ms', label: 'Latency', color: 'text-blue-400' },
            { metric: '50+', label: 'DEX Integrations', color: 'text-purple-400' },
            { metric: '15+', label: 'Blockchain Networks', color: 'text-amber-400' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 bg-slate-800/20 border border-slate-700 rounded-xl hover:border-slate-600 transition-colors duration-300">
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.metric}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoFeatures;
