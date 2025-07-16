
import React from 'react';

const TheTimeIsRight: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-8">
            Why Now
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Time Is <span className="text-orange-600">Right</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe now is the moment to reclaim personal space—in transit, in data, and in design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Cities are congested.</h3>
            <p className="text-gray-600 leading-relaxed">
              Urban centers are struggling with traffic, pollution, and inefficient vehicle usage patterns.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Ride-sharing has become impersonal.</h3>
            <p className="text-gray-600 leading-relaxed">
              The human element of mobility has been replaced with algorithmic efficiency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Surveillance fatigue is real.</h3>
            <p className="text-gray-600 leading-relaxed">
              People are increasingly aware of and concerned about constant monitoring in shared services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
              <span className="text-2xl">💔</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Trust is fading.</h3>
            <p className="text-gray-600 leading-relaxed">
              Confidence in traditional platforms is eroding as business models prioritize data over people.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-xl font-bold">
            Pliyt exists to fill that void.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheTimeIsRight;
