import { Mail } from 'lucide-react';

const Partner = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">We'd Love to Hear From You</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Whether you're a city partner, investor, or talented individual ready to build the future of
          autonomous ride-sharing, we're open to conversations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* General Inquiries */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6">
              <img src="/public/message-icon.png" alt="General Inquiries" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-3">General Inquiries</h3>
            <p className="text-gray-600 mb-6">Questions about Pliyt? We'd be happy to help.</p>
            <a
              href="mailto:hello@pliyt.com"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-700 text-sm sm:text-base">hello@pliyt.com</span>
              <Mail className="ml-2 h-4 w-4 text-gray-600" />
            </a>
          </div>

          {/* Partnerships */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6">
              <img src="/public/handshake-icon.png" alt="Partnerships" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Partnerships</h3>
            <p className="text-gray-600 mb-6">Interested in working with us? Let's talk.</p>
            <a
              href="mailto:pradeep.ps@pliyt.com"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-700 text-sm sm:text-base">pradeep.ps@pliyt.com</span>
              <Mail className="ml-2 h-4 w-4 text-gray-600" />
            </a>
          </div>

          {/* Careers */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6">
              <img src="/public/briefcase-icon.png" alt="Careers" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Careers</h3>
            <p className="text-gray-600 mb-6">Join our team and build the future.</p>
            <a
              href="mailto:jobs@pliyt.com"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-700">jobs@pliyt.com</span>
              <Mail className="ml-2 h-4 w-4 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;