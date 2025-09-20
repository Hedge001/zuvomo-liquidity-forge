import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Shield } from 'lucide-react';

const HowMarketMakingWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Improve',
      subtitle: 'Improving liquidity depth in the order books.',
    },
    {
      title: 'Lower', 
      subtitle: 'Lowering the spread between the bid & ask.',
    },
    {
      title: 'Arbitrage',
      subtitle: 'Arbitrage between pairs, exchanges and liquidity pools.',
    },
    {
      title: 'Support',
      subtitle: 'Supporting market stability and fair price discovery.',
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('market-making-works');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / (sectionHeight * 0.7), 1);
      
      const stepIndex = Math.floor(progress * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="market-making-works" className="py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How market making works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                activeStep >= index ? 'opacity-100 transform translate-y-0' : 'opacity-40 transform translate-y-8'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowMarketMakingWorks;