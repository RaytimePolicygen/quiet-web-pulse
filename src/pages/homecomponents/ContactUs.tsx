import React from 'react';
import { Mail } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            News & Launch Updates
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Be The First To Know</h2>
          <p className="text-xl text-gray-600 mb-8">Sign up to receive exclusive updates and first look invitations.</p>
          
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-yellow-500 text-xl">👉</span>
              <p className="text-gray-900 font-medium">Be the first to ride Pliyt</p>
            </div>
            <button className="w-full bg-[#4052AB] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#364291] transition-colors duration-200">
              Notify Me
            </button>
          </div>
        </div>

        {/* Contact Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Investors Section */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-4xl">
              🚀
            </div>
            <h3 className="text-xl font-semibold mb-3">Investors</h3>
            <p className="text-gray-600 mb-6">Invest in the future of ethical autonomy.</p>
            <a
              href="mailto:hello@pliyt.com"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-700">Contact Our Team</span>
              <Mail className="ml-2 h-4 w-4 text-gray-600" />
            </a>
          </div>

          {/* Talent Section */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-4xl">
              🧠
            </div>
            <h3 className="text-xl font-semibold mb-3">Talent</h3>
            <p className="text-gray-600 mb-6">Build something meaningful. Work on what matters.</p>
            <a
              href="mailto:jobs@pliyt.com"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-700">Reach out to Us</span>
              <Mail className="ml-2 h-4 w-4 text-gray-600" />
            </a>
          </div>

          {/* Cities & Partners Section */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-4xl">
              🏙️
            </div>
            <h3 className="text-xl font-semibold mb-3">Cities & Partners</h3>
            <p className="text-gray-600 mb-6">Let's shape the urban commute—together.</p>
            <a
              href="mailto:pradeep.ps@pliyt.com"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-700">Partner With Us</span>
              <Mail className="ml-2 h-4 w-4 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
