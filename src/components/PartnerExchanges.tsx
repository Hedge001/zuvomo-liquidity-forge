import React from 'react';
import { ExternalLink } from 'lucide-react';

const PartnerExchanges = () => {
  const exchanges = [
    { name: 'Binance', category: 'CEX', volume: '$15.2B', pairs: '1,400+' },
    { name: 'Coinbase', category: 'CEX', volume: '$2.1B', pairs: '200+' },
    { name: 'Kraken', category: 'CEX', volume: '$1.8B', pairs: '500+' },
    { name: 'Uniswap', category: 'DEX', volume: '$1.2B', pairs: '3,000+' },
    { name: 'KuCoin', category: 'CEX', volume: '$980M', pairs: '800+' },
    { name: 'PancakeSwap', category: 'DEX', volume: '$450M', pairs: '2,500+' },
    { name: 'Bybit', category: 'CEX', volume: '$3.1B', pairs: '300+' },
    { name: 'OKX', category: 'CEX', volume: '$4.5B', pairs: '400+' },
    { name: 'Gate.io', category: 'CEX', volume: '$870M', pairs: '1,200+' },
    { name: 'SushiSwap', category: 'DEX', volume: '$180M', pairs: '1,800+' },
    { name: 'Huobi', category: 'CEX', volume: '$1.3B', pairs: '600+' },
    { name: '1inch', category: 'DEX', volume: '$250M', pairs: '5,000+' }
  ];

  const stats = [
    { label: 'Total Exchanges', value: '100+', color: 'from-blue-500 to-cyan-500' },
    { label: 'Daily Volume', value: '$32B+', color: 'from-emerald-500 to-teal-500' },
    { label: 'Trading Pairs', value: '15K+', color: 'from-purple-500 to-indigo-500' },
    { label: 'Markets Covered', value: '24/7', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Partner Exchanges
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're actively providing liquidity across the world's leading cryptocurrency exchanges and decentralized platforms
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Exchange Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {exchanges.map((exchange, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {exchange.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                      {exchange.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      exchange.category === 'CEX' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {exchange.category}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Volume (24h)</span>
                  <span className="text-white font-semibold">{exchange.volume}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Trading Pairs</span>
                  <span className="text-white font-semibold">{exchange.pairs}</span>
                </div>
              </div>

              {/* Pulse indicator for active trading */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/50">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-sm font-medium">Active Trading</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see your exchange here?
            </h3>
            <p className="text-slate-300 mb-6">
              We're always looking to expand our network of partner exchanges
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerExchanges;