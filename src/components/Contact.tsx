
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Calendar, Users, Zap } from 'lucide-react';

const Contact = () => {
  const contactOptions = [
    {
      icon: Calendar,
      title: 'Schedule Demo',
      description: 'Book a personalized demo with our crypto specialists',
      action: 'Schedule Now',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'Telegram Channel',
      description: 'Join our community for real-time DeFi discussions',
      action: 't.me/zuvomo_crypto',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Discord Community',
      description: 'Connect with other crypto projects and market makers',
      action: 'Join Discord',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Direct Contact',
      description: 'Reach out to our crypto market making team',
      action: 'crypto@zuvomo.com',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Supercharge Your
          </h2>
          <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Crypto Liquidity?
          </p>
        </div>

        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/40 border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${option.gradient} mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {option.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {option.description}
                    </p>
                    <Button
                      variant="outline"
                      className={`bg-gradient-to-r ${option.gradient} bg-opacity-10 border-opacity-30 text-white hover:bg-opacity-20 transition-all duration-300`}
                    >
                      {option.action}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Zap className="h-12 w-12 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Launch Crypto Market Making
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Join 500+ crypto projects already powered by ZUVOMO's market making solutions
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-xl rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
              >
                <Zap className="mr-2 h-6 w-6" />
                Start Market Making
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-xl rounded-full transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-2 h-6 w-6" />
                Schedule Consultation
              </Button>
            </div>
            
            {/* Urgency indicator */}
            <div className="mt-8 inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm">
                Limited spots available for Q1 2024 launches
              </span>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Projects Launched' },
            { value: '$2.5B+', label: 'Volume Generated' },
            { value: '15+', label: 'Blockchain Networks' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, i) => (
            <div key={i} className="group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-green-400 mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
