import React from 'react';

const TheTimeIsRight: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Why Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Time Is Right</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe now is the moment to reclaim personal space—in transit, in data, and in design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Cities are congested.</h3>
            <p className="text-gray-600 text-sm">
              Urban centers are struggling with traffic, pollution, and inefficient vehicle usage patterns.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Ride-sharing has become impersonal.</h3>
            <p className="text-gray-600 text-sm">
              The human element of mobility has been replaced with algorithmic efficiency.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Surveillance fatigue is real.</h3>
            <p className="text-gray-600 text-sm">
              People are increasingly aware of and concerned about constant monitoring in shared services.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Trust is fading.</h3>
            <p className="text-gray-600 text-sm">
              Confidence in traditional platforms is eroding as business models prioritize data over people.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium">Pliyt exists to fill that void.</p>
        </div>

        
      </div>
    </section>
  );
};

export default TheTimeIsRight;