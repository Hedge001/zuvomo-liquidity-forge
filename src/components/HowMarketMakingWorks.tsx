import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Shield } from 'lucide-react';

const HowMarketMakingWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'improve',
      title: 'Improve',
      subtitle: 'Improving liquidity depth in the order books.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      graph: 'deep-liquidity'
    },
    {
      id: 'lower',
      title: 'Lower', 
      subtitle: 'Lowering the spread between the bid & ask.',
      icon: TrendingDown,
      color: 'from-blue-500 to-cyan-500',
      graph: 'tight-spread'
    },
    {
      id: 'arbitrage',
      title: 'Arbitrage',
      subtitle: 'Arbitrage between pairs, exchanges and liquidity pools.',
      icon: BarChart3,
      color: 'from-purple-500 to-indigo-500',
      graph: 'arbitrage'
    },
    {
      id: 'support',
      title: 'Support',
      subtitle: 'Supporting market stability and fair price discovery.',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      graph: 'stability'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('market-making-works');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / (sectionHeight * 0.8), 1);
      
      const stepIndex = Math.floor(progress * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const GraphVisualization = ({ type }: { type: string }) => {
    const getGraphData = () => {
      switch (type) {
        case 'deep-liquidity':
          return {
            askData: [85, 87, 88, 90, 92, 95, 98],
            bidData: [75, 78, 80, 82, 85, 88, 90],
            spreadWidth: 20
          };
        case 'tight-spread':
          return {
            askData: [82, 83, 84, 85, 86, 87, 88],
            bidData: [78, 79, 80, 81, 82, 83, 84],
            spreadWidth: 8
          };
        case 'arbitrage':
          return {
            askData: [88, 85, 90, 87, 92, 89, 86],
            bidData: [78, 81, 80, 83, 82, 85, 84],
            spreadWidth: 12
          };
        default:
          return {
            askData: [84, 85, 86, 87, 88, 89, 90],
            bidData: [76, 77, 78, 79, 80, 81, 82],
            spreadWidth: 14
          };
      }
    };

    const { askData, bidData, spreadWidth } = getGraphData();

    return (
      <div className="relative w-full h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Graph Grid */}
        <div className="relative w-full h-full">
          {/* Vertical Grid Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute h-full w-px bg-slate-600/30"
              style={{ left: `${(i * 100) / 7}%` }}
            />
          ))}
          
          {/* Horizontal Grid Lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-full h-px bg-slate-600/30"
              style={{ top: `${(i * 100) / 5}%` }}
            />
          ))}

          {/* Labels */}
          <div className="absolute top-4 left-4 flex gap-4 text-sm z-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-orange-400 font-medium">Ask</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-emerald-400 font-medium">Bid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-2 bg-slate-500/50 rounded"></div>
              <span className="text-slate-400 font-medium">Spread</span>
            </div>
          </div>

          {/* Chart Area */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Ask Line */}
            <polyline
              points={askData.map((value, i) => `${(i * 100) / (askData.length - 1)},${100 - value}`).join(' ')}
              fill="none"
              stroke="url(#askGradient)"
              strokeWidth="0.8"
              className="drop-shadow-lg"
            />
            
            {/* Bid Line */}
            <polyline
              points={bidData.map((value, i) => `${(i * 100) / (bidData.length - 1)},${100 - value}`).join(' ')}
              fill="none"
              stroke="url(#bidGradient)"
              strokeWidth="0.8"
              className="drop-shadow-lg"
            />

            {/* Spread Area */}
            <polygon
              points={[
                ...askData.map((value, i) => `${(i * 100) / (askData.length - 1)},${100 - value}`),
                ...bidData.map((value, i) => `${((bidData.length - 1 - i) * 100) / (bidData.length - 1)},${100 - value}`).reverse()
              ].join(' ')}
              fill="url(#spreadGradient)"
              opacity="0.3"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="askGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
              <linearGradient id="bidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="spreadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>
          </svg>

          {/* Data Points */}
          {askData.map((value, i) => (
            <div
              key={`ask-${i}`}
              className="absolute w-2 h-2 bg-orange-500 rounded-full border border-orange-300 shadow-lg transform -translate-x-1 -translate-y-1"
              style={{
                left: `${(i * 100) / (askData.length - 1)}%`,
                top: `${100 - value}%`
              }}
            />
          ))}
          
          {bidData.map((value, i) => (
            <div
              key={`bid-${i}`}
              className="absolute w-2 h-2 bg-emerald-500 rounded-full border border-emerald-300 shadow-lg transform -translate-x-1 -translate-y-1"
              style={{
                left: `${(i * 100) / (bidData.length - 1)}%`,
                top: `${100 - value}%`
              }}
            />
          ))}
        </div>

        {/* BEFORE/AFTER Label */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="text-slate-400 text-sm font-medium tracking-wider">
            {type === 'tight-spread' ? 'AFTER' : 'BEFORE'}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="market-making-works" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            How Market Making Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our sophisticated algorithms and strategies work around the clock to provide deep liquidity and tight spreads
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ${
                    isActive 
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-xl scale-105' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} ${isActive ? 'shadow-lg' : ''}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                        isActive ? 'text-blue-900' : 'text-slate-900'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-lg transition-colors ${
                        isActive ? 'text-blue-700' : 'text-slate-600'
                      }`}>
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side - Graph */}
          <div className="lg:sticky lg:top-24">
            <GraphVisualization type={steps[activeStep]?.graph || 'stability'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowMarketMakingWorks;