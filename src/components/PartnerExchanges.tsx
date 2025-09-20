import React from 'react';

const PartnerExchanges = () => {
  const exchanges = [
    // Row 1
    { name: 'Binance', symbol: '⬥', bgColor: 'bg-emerald-400' },
    { name: 'Bybit', symbol: 'b', bgColor: 'bg-emerald-300' },
    { name: 'HTX', symbol: '⬛', bgColor: 'bg-emerald-500' },
    { name: 'KuCoin', symbol: '◊', bgColor: 'bg-emerald-400' },
    { name: 'Crypto.US', symbol: '❋.US', bgColor: 'bg-emerald-300' },
    { name: 'Huobi', symbol: '●', bgColor: 'bg-emerald-500' },
    { name: 'Kraken', symbol: '◐', bgColor: 'bg-emerald-400' },
    
    // Row 2
    { name: 'Bitcoin', symbol: '₿', bgColor: 'bg-emerald-300' },
    { name: 'DeGods', symbol: '▲', bgColor: 'bg-emerald-500' },
    { name: 'Blast', symbol: '△', bgColor: 'bg-emerald-400' },
    { name: 'Bybit', symbol: 'BYBIT', bgColor: 'bg-emerald-300' },
    { name: 'Uniswap', symbol: 'UP', bgColor: 'bg-emerald-500' },
    { name: 'Pancake', symbol: '⟐', bgColor: 'bg-emerald-400' },
    { name: 'Coinbase', symbol: 'C', bgColor: 'bg-emerald-300' },
    
    // Row 3
    { name: 'Pancake', symbol: '☺', bgColor: 'bg-emerald-300' },
    { name: 'Curve', symbol: '◑', bgColor: 'bg-emerald-400' },
    { name: 'BitMart', symbol: '◊', bgColor: 'bg-emerald-500' },
    { name: 'Uniswap', symbol: '🦄', bgColor: 'bg-emerald-300' },
    { name: 'Jupiter', symbol: '◆', bgColor: 'bg-emerald-400' },
    { name: 'Ethereum', symbol: '⬟', bgColor: 'bg-emerald-500' },
    { name: 'Messari', symbol: 'm', bgColor: 'bg-emerald-300' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(52,211,153,0.1),transparent_70%)]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-emerald-400 mb-8 tracking-wider">
            PARTNER EXCHANGES
          </h2>
        </div>

        {/* Exchange Logo Grid */}
        <div className="grid grid-cols-7 gap-8 mb-16">
          {exchanges.map((exchange, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center rounded-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 ${exchange.bgColor} rounded-full flex items-center justify-center text-slate-800 font-bold text-xl md:text-2xl shadow-lg`}>
                {exchange.symbol}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent w-32 mb-6 mx-auto"></div>
            <p className="text-emerald-400/70 text-lg font-medium tracking-widest">
              AND 100+ MORE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerExchanges;