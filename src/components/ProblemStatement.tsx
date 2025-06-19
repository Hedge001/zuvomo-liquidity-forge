
import React from 'react';
import { AlertTriangle, TrendingDown, DollarSign, Users } from 'lucide-react';

const ProblemStatement = () => {
  const stats = [
    {
      icon: AlertTriangle,
      stat: '78%',
      description: 'of new tokens fail due to poor liquidity',
      color: 'text-red-400'
    },
    {
      icon: TrendingDown,
      stat: '2.5%',
      description: 'Average bid-ask spread on new listings',
      color: 'text-orange-400'
    },
    {
      icon: Users,
      stat: '90%',
      description: 'of DeFi protocols struggle with token liquidity',
      color: 'text-yellow-400'
    },
    {
      icon: DollarSign,
      stat: '$400B+',
      description: 'locked in illiquid crypto assets',
      color: 'text-red-400'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            The $400 Billion Crypto Liquidity Challenge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Despite massive growth in DeFi and crypto markets, liquidity remains the #1 challenge preventing token success and protocol adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center hover:border-slate-600 transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-6">
                  <IconComponent className={`h-12 w-12 mx-auto ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className={`text-4xl font-bold mb-4 ${item.color}`}>
                  {item.stat}
                </div>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Liquidity visualization */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Liquidity Crisis Visualization</h3>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 border-2 border-red-500 rounded-full flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-red-400 text-sm">Illiquid Token</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-green-500"></div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-green-400 text-sm">ZUVOMO Solution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
