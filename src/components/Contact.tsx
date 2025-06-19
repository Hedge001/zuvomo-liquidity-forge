
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-cyan-400 to-cyan-500">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Boost Your Liquidity?
        </h2>
        
        <p className="text-xl mb-12">
          Contact us to discuss your market making needs
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-lg shadow-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Email Us
          </Button>
          
          <Button 
            size="lg" 
            className="bg-cyan-600 text-white hover:bg-cyan-700 px-8 py-4 text-lg rounded-lg shadow-lg border-2 border-white"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Schedule Call
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-cyan-100">
            Trusted by 100+ crypto projects worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
