
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold">Pliyt</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              The future of private, autonomous ride-sharing.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/pliyt/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/pliyt.mobility" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@pliyt.com" 
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1">About Us</Link>
              <Link to="/careers" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1">Careers</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1">Contact</Link>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Resources</h3>
            <div className="space-y-3">
              <Link to="/privacy" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1">Terms of Service</Link>
              <Link to="/updates" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1">Updates</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Connect</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                Stay updated with the latest news and insights from Pliyt.
              </p>
              <div className="pt-4">
                <Link 
                  to="/partner" 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © 2025 Pliyt, Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/careers" className="hover:text-white transition-colors duration-300">Careers</Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
