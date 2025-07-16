
import React from 'react';

const YourPod: React.FC = () => {
  return <section className="py-16 bg-[#1e2130] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-200 text-sm font-medium mb-4">
            Privacy-First by Design
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Pod. Your Privacy. Your Space.</h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-[30px]">
            At Pliyt, privacy isn't a feature—it's a foundation
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center relative backdrop-blur-sm border border-white/20">
                <div className="absolute w-[200px] h-[200px] border-4 border-purple-500 rounded-full animate-pulse" style={{
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)'
              }}></div>
                <img 
                  src="/lovable-uploads/a804102a-a654-4ffe-bb45-c368b7d924fe.png" 
                  alt="Privacy and Safety in Mobility" 
                  className="w-24 h-24 relative z-10 object-contain" 
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div>
              <p className="text-gray-200 mb-4 ">
                Each autonomous pod is designed for complete in-ride anonymity, even in 
                shared trips. No one knows who you're riding with—and that's the point.
              </p>
            </div>

            <div>
              <p className="text-gray-200 mb-4">Built for Privacy and Safety.</p>
            </div>

            <div>
              <p className="text-gray-200">
                You shouldn't have to choose between modern convenience and basic 
                privacy rights. With Pliyt, you don't have to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default YourPod;
