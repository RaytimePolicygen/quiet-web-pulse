
import React from 'react';
import { Lock, Shield } from 'lucide-react';

const YourPod: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-8">
            Privacy-First by Design
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Pod. Your Privacy. <br />
            <span className="text-blue-400">Your Space.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Pliyt, privacy isn't a feature—it's a foundation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full flex items-center justify-center relative backdrop-blur-sm border border-blue-400/20">
                <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border-2 border-purple-400/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <Lock className="w-24 h-24 text-blue-300 relative z-10" />
              </div>
              <div className="text-center mt-8">
                <p className="text-blue-300 text-xl font-semibold">Built for trust, not tracking.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Complete Anonymity</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Each autonomous pod is designed for complete in-ride anonymity, even in 
                    shared trips. No one knows who you're riding with—and that's the point.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold mb-2 text-white">No Surveillance</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe that true innovation in mobility doesn't require constant 
                surveillance or data harvesting. Instead, we've built a system that respects 
                digital boundaries as much as physical ones.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold mb-2 text-white">Modern Convenience</h3>
              <p className="text-gray-300 leading-relaxed">
                You shouldn't have to choose between modern convenience and basic 
                privacy rights. With Pliyt, you don't have to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourPod;
