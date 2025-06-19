
import React from 'react';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Multi-Signature Wallets',
      description: 'Hardware Security Modules (HSM) across all supported chains',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: 'Smart Contract Insurance',
      description: 'Coverage up to $50M through leading DeFi insurance protocols',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'AI-powered anomaly detection and automatic risk management',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle,
      title: 'Audited & Verified',
      description: 'Regular security audits by CertiK, ConsenSys, and Trail of Bits',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  const complianceItems = [
    'KYC/AML for institutional clients',
    'Smart contract verification',
    'Transparent on-chain transactions',
    'Governance token compliance',
    'Tax reporting tools',
    'Regulatory consultation for new tokens'
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            Fort Knox Security
          </h2>
          <p className="text-2xl text-white">for Digital Assets</p>
        </div>

        {/* Security features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/40 border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Security stats */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Security Track Record</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '$0', label: 'Funds Lost', color: 'text-green-400' },
              { value: '99.9%', label: 'Uptime', color: 'text-blue-400' },
              { value: '24/7', label: 'Monitoring', color: 'text-purple-400' },
              { value: '5+', label: 'Security Audits', color: 'text-amber-400' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* DeFi compliance */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-3xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">DeFi Compliance</h3>
              <p className="text-gray-300 mb-6">
                ZUVOMO operates with full regulatory compliance across all jurisdictions, ensuring your projects meet the highest standards.
              </p>
              
              <ul className="space-y-3">
                {complianceItems.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-24 w-24 text-green-400" />
                </div>
                <div className="absolute inset-0 border-4 border-green-400/30 rounded-full animate-pulse"></div>
              </div>
              <p className="text-green-400 font-semibold mt-4">Fully Compliant & Audited</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
