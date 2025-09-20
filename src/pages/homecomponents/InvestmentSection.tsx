import React from 'react';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';

const InvestmentSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-purple-500/10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-white font-semibold">Investment Opportunity</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Don't Miss Out—Create the Next<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mobility Revolution
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Uber transformed on-demand transportation, and early believers saw returns of up to 5000x. 
            Today, Pliyt is reimagining shared mobility with a privacy-first approach.
          </p>
        </div>

        {/* Partnership Announcement */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-16 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 flex-1">
              <div className="flex items-center gap-4">
                <img 
                  src="/logo-transparent.png" 
                  alt="Pliyt Logo" 
                  className="w-16 h-16 object-contain rounded-xl"
                />
                <span className="text-4xl text-white/60">×</span>
                <img 
                  src="/microventures-logo.png" 
                  alt="MicroVentures Logo" 
                  className="h-12 object-contain"
                />
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-bold text-white mb-2">Now Live on MicroVentures</h3>
              <p className="text-blue-200">
                Pliyt is now live on the world's leading crowdfunding platform
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-lg text-white leading-relaxed">
              <strong className="text-blue-300">Become a shareholder of Pliyt</strong> by investing any amount above $500. 
              Join the revolution that's transforming urban mobility with privacy-first autonomous pods.
            </p>
          </div>
        </div>

        {/* Investment Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Anyone Can Invest</h4>
            <p className="text-blue-200">Minimum investment of just $500 to become a Pliyt shareholder</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Historic Returns</h4>
            <p className="text-blue-200">Early Uber investors saw returns of up to 5000x their investment</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Limited Window</h4>
            <p className="text-blue-200">Exclusive investor perks available only during this campaign</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-2xl text-white mb-8 font-light">
            Now, it's your turn to become part of this <strong>once-in-a-generation disruption.</strong>
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            The window to invest is limited, and investor perks are only available during our MicroVentures campaign. 
            Don't let this wave pass you by—history rewards the bold.
          </p>
          
          <a 
            href="https://invest.microventures.com/offerings/pliyt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>Invest in Pliyt Today</span>
            <ArrowRight className="w-6 h-6" />
          </a>
          
          <p className="text-sm text-blue-300 mt-6">
            Minimum investment: $500 • Powered by MicroVentures
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;