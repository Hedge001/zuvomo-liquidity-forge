import React from 'react';

const PartnerExchanges = () => {
  const exchanges = [
    // Tier 1 - Major Exchanges
    { name: 'Binance', type: 'cex', tier: 1 },
    { name: 'Coinbase', type: 'cex', tier: 1 },
    { name: 'Kraken', type: 'cex', tier: 1 },
    { name: 'Bybit', type: 'cex', tier: 1 },
    { name: 'OKX', type: 'cex', tier: 1 },
    { name: 'KuCoin', type: 'cex', tier: 1 },
    { name: 'HTX', type: 'cex', tier: 1 },
    
    // Tier 2 - DeFi Protocols
    { name: 'Uniswap', type: 'dex', tier: 2 },
    { name: 'PancakeSwap', type: 'dex', tier: 2 },
    { name: 'SushiSwap', type: 'dex', tier: 2 },
    { name: 'Curve', type: 'dex', tier: 2 },
    { name: '1inch', type: 'dex', tier: 2 },
    { name: 'Jupiter', type: 'dex', tier: 2 },
    { name: 'Raydium', type: 'dex', tier: 2 },
    
    // Tier 3 - Regional/Emerging
    { name: 'BitMart', type: 'cex', tier: 3 },
    { name: 'MEXC', type: 'cex', tier: 3 },
    { name: 'Bitget', type: 'cex', tier: 3 },
    { name: 'Gate.io', type: 'cex', tier: 3 },
    { name: 'Huobi', type: 'cex', tier: 3 },
    { name: 'BitFinex', type: 'cex', tier: 3 },
  ];

  const getTierColor = (tier: number, type: string) => {
    if (type === 'dex') {
      return tier === 2 ? 'bg-exchange-secondary' : 'bg-exchange-accent';
    }
    switch (tier) {
      case 1: return 'bg-exchange-primary';
      case 2: return 'bg-exchange-secondary';
      case 3: return 'bg-exchange-accent';
      default: return 'bg-exchange-accent';
    }
  };

  const getTypeIndicator = (type: string) => {
    return type === 'dex' ? '🔗' : '🏛️';
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(52,211,153,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.02)_50%,transparent_75%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider font-ubuntu">
            PARTNER EXCHANGES
          </h2>
          <p className="text-xl text-slate-300 font-ubuntu font-light max-w-2xl mx-auto">
            Providing deep liquidity across centralized exchanges and DeFi protocols worldwide
          </p>
        </div>

        {/* Exchange Logo Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 mb-16">
          {exchanges.map((exchange, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-slate-800/30"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 ${getTierColor(exchange.tier, exchange.type)} rounded-2xl flex items-center justify-center text-slate-900 font-bold text-lg md:text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-3 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="relative z-10 font-ubuntu font-bold">
                  {exchange.name.slice(0, 2).toUpperCase()}
                </span>
                <div className="absolute top-1 right-1 text-xs opacity-60">
                  {getTypeIndicator(exchange.type)}
                </div>
              </div>
              <span className="text-xs md:text-sm text-slate-300 font-ubuntu font-medium text-center group-hover:text-white transition-colors duration-300">
                {exchange.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30">
            <div className="text-3xl md:text-4xl font-bold text-exchange-primary mb-2 font-ubuntu">50+</div>
            <div className="text-slate-300 font-ubuntu">Centralized Exchanges</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30">
            <div className="text-3xl md:text-4xl font-bold text-exchange-secondary mb-2 font-ubuntu">25+</div>
            <div className="text-slate-300 font-ubuntu">DeFi Protocols</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30">
            <div className="text-3xl md:text-4xl font-bold text-exchange-accent mb-2 font-ubuntu">100+</div>
            <div className="text-slate-300 font-ubuntu">Trading Pairs</div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="h-px bg-gradient-to-r from-transparent via-exchange-primary/50 to-transparent w-48 mb-6 mx-auto"></div>
            <p className="text-exchange-primary/80 text-lg font-medium tracking-widest font-ubuntu">
              EXPANDING GLOBALLY
            </p>
            <p className="text-slate-400 text-sm mt-2 font-ubuntu font-light">
              New partnerships added weekly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerExchanges;