
import React from 'react';
import { Coins, Building2, TrendingUp, Users2 } from 'lucide-react';

const Benefits = () => {
  const benefitCategories = [
    {
      icon: Coins,
      title: 'For Token Projects',
      benefits: ['Increase trading volume by 300%+', 'Reduce bid-ask spreads by 80%', 'Attract more holders and traders', 'Improve exchange listing chances'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Building2,
      title: 'For DeFi Protocols',
      benefits: ['Boost TVL and protocol revenue', 'Enhance token utility and governance', 'Attract institutional liquidity providers', 'Optimize yield farming strategies'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'For Crypto Exchanges',
      benefits: ['Increase trading fees and volume', 'Attract market makers and traders', 'Provide deep order books', 'Reduce price volatility'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users2,
      title: 'For Institutional Investors',
      benefits: ['Execute large orders with minimal slippage', 'Access to pre-launch token opportunities', 'Professional-grade risk management', 'Regulatory compliant trading solutions'],
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Why Choose ZUVOMO
          </h2>
          <p className="text-2xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            for Crypto Market Making?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefitCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-slate-800/40 border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105"
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Benefits list */}
                  <ul className="space-y-4">
                    {category.benefits.map((benefit, i) => (
                      <li 
                        key={i} 
                        className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <div 
                          className={`w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full mt-1.5 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        ></div>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Success indicator */}
                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-2 animate-pulse`}></div>
                      <span>Proven results across 500+ projects</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Global impact stats */}
        <div className="mt-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Global Impact</h3>
            <p className="text-gray-300">ZUVOMO's market making solutions have transformed the crypto ecosystem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '$2.5B+', label: 'Total Volume Generated', color: 'text-green-400' },
              { value: '500+', label: 'Tokens Supported', color: 'text-blue-400' },
              { value: '15+', label: 'Blockchain Networks', color: 'text-purple-400' },
              { value: '50+', label: 'DEX Integrations', color: 'text-amber-400' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
