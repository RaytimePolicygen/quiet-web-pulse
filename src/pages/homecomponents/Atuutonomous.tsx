
import React from 'react';
import { Car, Leaf, Shield } from 'lucide-react';

const Autonomous: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-8">
            The Pliyt Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Autonomous Pods, Designed for<br />
            <span className="text-blue-600">Humans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Not just self-driving. Self-aware of your need for space, silence, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <Car className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Emotionally Owned Mobility</h3>
            <p className="text-gray-600 leading-relaxed">
              Even when you don't own the vehicle, you own the experience. Each ride is personalized, consistent, and interruption-free.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
              <Leaf className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Zero-Emissions. Nearly Zero Noise.</h3>
            <p className="text-gray-600 leading-relaxed">
              Designed to glide—not roar—through your city. Pliyt pods are engineered for clean performance and minimal environmental impact.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
              <Shield className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Consistent Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Unlike traditional ride-sharing, every Pliyt vehicle offers the exact same high standard of cleanliness, comfort, and technology.
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/section4carffront.png" 
            alt="Pliyt Autonomous Pod" 
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Pod Interior</h4>
            <p className="text-gray-600">
              Soft lighting, ergonomic seats, and intuitive controls. Every element designed for comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autonomous;
