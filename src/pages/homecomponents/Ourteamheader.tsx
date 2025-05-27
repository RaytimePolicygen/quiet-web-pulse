import React from 'react';

const OurTeamHeader: React.FC = () => {
  return (
    <section className="py-16 bg-white mt-[-100px]">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12 pt-12 border-t border-gray-100">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">We're Not Just Engineers.</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We're Urban Optimists.</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pliyt is being built by a cross-functional team of thinkers, makers, and dreamers—united by a 
            belief that better mobility can lead to better cities.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 space-y-6">
            <p className="text-black text-lg">
              Our team combines expertise from autonomous vehicle engineering,
              privacy-first software development, urban planning, and human-centered
              design.
            </p>
            
            <p className="text-gray-800 text-lg">
              We're based in California, operating in stealth, and committed to deploying
              our first pilot in 2026.
            </p>
            
            <p className="text-blue-600 font-medium">
              Catch our global debut at CES 2026.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-[#FFF8F5] p-8 rounded-xl shadow-lg relative">
              <img 
                src="/secondtothelast.png" 
                alt="Pliyt Vehicle with Features" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-24 mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Our Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
        </div>
      </div>
    </section>
  );
};

export default OurTeamHeader;