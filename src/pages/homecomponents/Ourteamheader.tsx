
import React from 'react';

const OurTeamHeader: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-8">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We're Not Just Engineers.<br />
            We're <span className="text-green-600">Urban Optimists.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pliyt is being built by a cross-functional team of thinkers, makers, and dreamers—united by a 
            belief that better mobility can lead to better cities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our team combines expertise from autonomous vehicle engineering,
                privacy-first software development, urban planning, and human-centered
                design.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                We're based in California, operating in stealth, and committed to deploying
                our first pilot in 2026.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <p className="text-purple-700 font-semibold text-lg">
                Catch our global debut at CES 2026.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-yellow-100/50"></div>
              <img 
                src="/secondtothelast.png" 
                alt="Pliyt Vehicle with Features" 
                className="relative z-10 w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <span className="inline-block px-6 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold mb-8">
            Our Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our <span className="text-purple-600">Team</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurTeamHeader;
