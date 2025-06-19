
import React from 'react';

const CryptoTicker = () => {
  const cryptoData = [
    { symbol: 'BTC', price: '$45,234', change: '+2.4%', positive: true },
    { symbol: 'ETH', price: '$3,156', change: '+1.8%', positive: true },
    { symbol: 'SOL', price: '$98.45', change: '-0.5%', positive: false },
    { symbol: 'AVAX', price: '$34.67', change: '+5.2%', positive: true },
    { symbol: 'MATIC', price: '$0.89', change: '+3.1%', positive: true },
    { symbol: 'UNI', price: '$6.78', change: '-1.2%', positive: false },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-slate-800/80 border-t border-slate-700 py-3 overflow-hidden">
      <div className="flex animate-scroll">
        {[...cryptoData, ...cryptoData].map((crypto, i) => (
          <div key={i} className="flex items-center space-x-4 px-8 whitespace-nowrap">
            <span className="text-white font-semibold">{crypto.symbol}</span>
            <span className="text-gray-300">{crypto.price}</span>
            <span className={`font-medium ${crypto.positive ? 'text-green-400' : 'text-red-400'}`}>
              {crypto.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
