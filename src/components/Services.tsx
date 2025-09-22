
import React from 'react';
import { TrendingUp, DollarSign, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Exchange Market Making',
      description: 'Professional liquidity provision for crypto exchanges with tight spreads and deep order books.'
    },
    {
      icon: DollarSign,
      title: 'DeFi Protocol Support',
      description: 'Boost your DeFi protocol TVL and trading volume with our automated market making strategies.'
    },
    {
      icon: Shield,
      title: 'Token Launch Support',
      description: 'Launch your token with immediate liquidity across multiple exchanges and DEX platforms.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-ubuntu">
            Our Market Making Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-ubuntu font-light">
            Professional liquidity solutions for the crypto ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-full bg-cyan-100 mb-6">
                  <IconComponent className="h-8 w-8 text-cyan-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-ubuntu">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-ubuntu font-light">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
