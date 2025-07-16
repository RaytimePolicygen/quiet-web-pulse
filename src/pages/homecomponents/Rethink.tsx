
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const landingpagesection2 = '/landingpagesection2.jpg';

const Rethink: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-8 animate-fade-in">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Rethinking Mobility from the<br />
            <span className="text-blue-600">Ground Up</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            We're building a ride-sharing platform for a new era—where every journey feels like your own.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Pliyt is pioneering a radically human-centric approach to autonomous travel
                —private, quiet, seamless, and purpose-built for the cities of tomorrow.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                In a world where transportation is increasingly becoming impersonal and
                data-driven, we're returning to a fundamental question: <span className="italic font-medium text-blue-600">How should mobility
                feel?</span>
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Our answer is simple: like it's yours. Like it sees you as a person, not a data
                point. Like it was designed for human comfort first, not corporate efficiency.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
              <img
                src={landingpagesection2}
                alt="Autonomous vehicle"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-sm">
                <p className="font-semibold text-lg text-gray-900">"Own your ride, not just your destination."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rethink;
