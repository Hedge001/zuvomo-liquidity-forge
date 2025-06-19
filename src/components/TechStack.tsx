
import React from 'react';
import { Network, Database, Shield, Zap } from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      icon: Network,
      title: 'Blockchain Support',
      items: ['Ethereum', 'BSC', 'Polygon', 'Solana', 'Avalanche', 'Fantom', 'Arbitrum', 'Optimism'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'DEX Integration',
      items: ['Uniswap V3', 'SushiSwap', 'PancakeSwap', 'TraderJoe', 'Curve', 'Balancer', '50+ Others'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'DeFi Protocols',
      items: ['Aave', 'Compound', 'MakerDAO', 'Yearn', 'Convex', 'Chainlink Oracles'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Advanced Features',
      items: ['MEV Protection', 'Flash Loans', 'Private Mempools', 'Gas Optimization', 'Cross-chain Bridges'],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Built on Multi-Chain Infrastructure
          </h2>
          <p className="text-xl text-gray-300">Enterprise-grade technology stack powering the future of DeFi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/30 border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* Tech items */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className={`px-3 py-1.5 text-sm bg-gradient-to-r ${category.color} bg-opacity-20 border border-opacity-30 rounded-full text-white hover:bg-opacity-30 transition-all duration-300 hover:scale-105`}
                      style={{
                        borderColor: `${category.color.includes('blue') ? '#3b82f6' : 
                                      category.color.includes('green') ? '#10b981' :
                                      category.color.includes('purple') ? '#8b5cf6' : '#f59e0b'}40`
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Architecture diagram */}
        <div className="bg-slate-800/20 border border-slate-700 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">ZUVOMO Architecture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Input layer */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Ingestion</h4>
              <p className="text-gray-400 text-sm">Multi-chain price feeds, order books, social sentiment</p>
            </div>
            
            {/* Processing layer */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI Processing</h4>
              <p className="text-gray-400 text-sm">Machine learning algorithms, risk management, strategy optimization</p>
            </div>
            
            {/* Output layer */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Execution</h4>
              <p className="text-gray-400 text-sm">Multi-DEX order placement, cross-chain arbitrage, liquidity provision</p>
            </div>
          </div>
          
          {/* Connection lines */}
          <div className="hidden md:block relative mt-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2"></div>
            <div className="flex justify-between items-center relative z-10">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
