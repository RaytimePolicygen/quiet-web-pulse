import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const landingpagesection2 = '/landingpagesection2.jpg';

const Rethink: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 animate-fade-in">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-black leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Rethinking Mobility from the Ground<br />Up
          </h2>
          <p className="text-center text-gray-700 max-w-2xl text-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
            We're building a ride-sharing platform for a new era—where every journey feels like your own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-6">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="space-y-6">
              <p className="text-gray-800 font-medium text-lg leading-relaxed">
                Pliyt is pioneering a radically human-centric approach to autonomous travel
                —private, quiet, seamless, and purpose-built for the cities of tomorrow.
              </p>

              <p className="text-gray-800 font-medium text-lg leading-relaxed">
                In a world where transportation is increasingly becoming impersonal and
                data-driven, we're returning to a fundamental question: <span className="italic">How should mobility
                feel?</span>
              </p>

              <p className="text-gray-800 font-medium text-lg leading-relaxed">
                Our answer is simple: like it's yours. Like it sees you as a person, not a data
                point. Like it was designed for human comfort first, not corporate efficiency.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden relative animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10 rounded-xl"></div>
            <img
              src={landingpagesection2}
              alt="Autonomous vehicle"
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
            <div className="bg-blue-700 text-white p-6 rounded-lg inline-block absolute bottom-6 left-6 shadow-lg z-20 transform hover:translate-y-[-5px] transition-transform duration-300">
              <p className="font-medium text-lg text-white">"Own your ride, not just your destination."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rethink;