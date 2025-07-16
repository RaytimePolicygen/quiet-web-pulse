
import React from 'react';
import { Mail } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Investors Section */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center text-4xl bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Investors</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Invest in the future of ethical autonomy.</p>
            <a 
              href="mailto:hello@pliyt.com" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 group-hover:scale-105 border border-blue-200"
            >
              <span className="text-blue-700 font-semibold">Contact Our Team</span>
              <Mail className="ml-2 h-4 w-4 text-blue-600" />
            </a>
          </div>

          {/* Talent Section */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center text-4xl bg-gradient-to-br from-green-100 to-green-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              🧠
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Talent</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Build something meaningful. Work on what matters.</p>
            <a 
              href="mailto:jobs@pliyt.com" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 group-hover:scale-105 border border-green-200"
            >
              <span className="text-green-700 font-semibold">Reach out to Us</span>
              <Mail className="ml-2 h-4 w-4 text-green-600" />
            </a>
          </div>

          {/* Cities & Partners Section */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center text-4xl bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              🏙️
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Cities & Partners</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Let's shape the urban commute—together.</p>
            <a 
              href="mailto:pradeep.ps@pliyt.com" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 group-hover:scale-105 border border-purple-200"
            >
              <span className="text-purple-700 font-semibold">Partner With Us</span>
              <Mail className="ml-2 h-4 w-4 text-purple-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
