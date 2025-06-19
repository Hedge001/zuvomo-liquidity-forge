
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'DeFi Starter',
      icon: Zap,
      price: '0.3%',
      subtitle: 'of trading volume',
      description: 'Perfect for new token launches and small DeFi projects',
      features: [
        'Up to 5 token pairs',
        'Single chain support (Ethereum or BSC)',
        'Basic liquidity provision',
        'Community Discord support',
        'Standard MEV protection',
        'Basic analytics dashboard'
      ],
      gradient: 'from-green-500 to-emerald-500',
      popular: false
    },
    {
      name: 'Multi-Chain Pro',
      icon: Star,
      price: '0.2%',
      subtitle: 'of trading volume',
      description: 'Advanced features for growing protocols and exchanges',
      features: [
        'Up to 25 token pairs',
        '5 blockchain networks',
        'Advanced MEV protection',
        'Dedicated Telegram support',
        'Custom trading strategies',
        'Real-time analytics',
        'Cross-chain arbitrage',
        'Priority order execution'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      name: 'Institutional Enterprise',
      icon: Crown,
      price: 'Custom',
      subtitle: 'pricing (0.1-0.15%)',
      description: 'White-label solutions for exchanges and institutions',
      features: [
        'Unlimited token pairs',
        'All supported chains',
        'White-label solutions',
        '24/7 priority support',
        'Custom algorithm development',
        'Regulatory compliance tools',
        'Dedicated infrastructure',
        'Custom reporting & APIs'
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transparent Crypto
          </h2>
          <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Market Making Fees
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden bg-slate-800/40 border-2 ${
                  plan.popular ? 'border-blue-500' : 'border-slate-700'
                } rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <div className="mb-4">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-lg ml-2">
                        {plan.subtitle}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm">
                      {plan.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105`}
                  >
                    {plan.name === 'Institutional Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Volume-Based Pricing</h3>
            <p className="text-gray-300 mb-6">
              All fees are calculated as a percentage of successful trading volume. No setup costs, no monthly fees - you only pay when we generate volume for your tokens.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-green-400 font-bold text-lg">No Setup Fees</div>
                <div className="text-gray-400 text-sm">Get started immediately</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-bold text-lg">No Monthly Costs</div>
                <div className="text-gray-400 text-sm">Pay only for performance</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold text-lg">Volume Discounts</div>
                <div className="text-gray-400 text-sm">Lower rates for higher volumes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
