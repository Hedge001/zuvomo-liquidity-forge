
import React from 'react';
import { TrendingUp, DollarSign, Users, BarChart3 } from 'lucide-react';

const SuccessStories = () => {
  const caseStudies = [
    {
      icon: TrendingUp,
      title: 'SafeMoonX Token Launch',
      challenge: 'New BSC token needed sustainable liquidity',
      solution: 'Multi-DEX market making with anti-whale protection',
      result: '$50M trading volume in first week',
      metric: '90% reduction in price volatility',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      title: 'DeFiYield Protocol TVL Boost',
      challenge: 'Low TVL affecting protocol growth',
      solution: 'Incentivized liquidity mining with automated strategies',
      result: 'TVL increased from $2M to $100M in 3 months',
      metric: '5000% TVL growth, 300% APY for LPs',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'CryptoExchange Integration',
      challenge: 'New exchange needed market depth',
      solution: 'Professional market making across 200+ pairs',
      result: '$500M daily trading volume within 60 days',
      metric: '0.1% average spread, 99.9% uptime',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Proven Results in
          </h2>
          <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Crypto Markets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-slate-800/40 border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${study.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                  </div>
                  
                  {/* Case study details */}
                  <div className="space-y-4">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-1">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-1">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    {/* Result */}
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-1">Result</h4>
                      <p className="text-gray-300 text-sm">{study.result}</p>
                    </div>
                    
                    {/* Key metric */}
                    <div className={`p-4 bg-gradient-to-r ${study.gradient} bg-opacity-10 border border-opacity-20 rounded-xl group-hover:bg-opacity-20 transition-all duration-300`}>
                      <p className="text-white font-semibold text-center">{study.metric}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Overall success metrics */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Collective Impact</h3>
            <p className="text-gray-300">Success stories from across the crypto ecosystem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Projects Launched', icon: Users, color: 'text-green-400' },
              { value: '$2.5B+', label: 'Volume Generated', icon: TrendingUp, color: 'text-blue-400' },
              { value: '95%', label: 'Success Rate', icon: BarChart3, color: 'text-purple-400' },
              { value: '24/7', label: 'Market Support', icon: DollarSign, color: 'text-amber-400' }
            ].map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-3">
                    <IconComponent className={`h-8 w-8 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
