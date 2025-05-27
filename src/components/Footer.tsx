
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1F2E] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
       

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Links */}
          <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#1C1F2E] font-bold">P</span>
            </div>
            <span className="text-xl font-semibold">Pliyt</span>
          </div>
          <p className="text-gray-400 max-w-xs mb-4">The future of private, autonomous ride-sharing.</p>
          
        </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/careers" className="block text-gray-400 hover:text-white transition-colors">Careers</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="space-y-3">
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/updates" className="block text-gray-400 hover:text-white transition-colors">Updates</Link>
            </div>
          </div>
          

          {/* Connect Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a 
                href="https://www.linkedin.com/company/pliyt/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.instagram.com/pliyt.mobility" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:text-pink-400 transition-colors" />
                <span>Instagram</span>
              </a>
              <a 
                href="mailto:contact@pliyt.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
         
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 Pliyt, Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
