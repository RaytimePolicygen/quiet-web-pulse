import React from 'react';
import { Car, Leaf, Shield } from 'lucide-react';

const Autonomous: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-300 text-black text-sm font-medium mb-4">
            The Pliyt Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Autonomous Pods, Designed for<br />Humans</h2>
          <p className="text-black max-w-2xl mx-auto">
            Not just self-driving. Self-aware of your need for space, silence, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-black">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Emotionally Owned Mobility</h3>
            <p className="text-black text-sm">
              Even when you don't own the vehicle, you own the experience. Each ride is personalized, consistent, and interruption-free.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Zero-Emissions. Nearly Zero Noise.</h3>
            <p className="text-black text-sm">
              Designed to glide—not roar—through your city. Pliyt pods are engineered for clean performance and minimal environmental impact.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Consistent Quality</h3>
            <p className="text-black text-sm">
              Unlike traditional ride-sharing, every Pliyt vehicle offers the exact same high standard of cleanliness, comfort, and technology.
            </p>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-ratio-container" style={{ aspectRatio: '16/9' }}>
            <img 
              src="/section4carffront.png" 
              alt="Pliyt Autonomous Pod" 
              className="w-full h-full object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-[-10px] right-3 sm:right-6 bg-white rounded-lg p-2 sm:p-4 shadow-lg max-w-[200px] sm:max-w-xs">
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-0.5 sm:mb-1">Pod Interior</h4>
            <p className="text-xs sm:text-sm text-black">
              Soft lighting, ergonomic seats, and intuitive controls. Every element designed for comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autonomous;