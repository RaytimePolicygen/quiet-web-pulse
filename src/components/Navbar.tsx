
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from "./ui/button";
const logo = "/logo-new.png"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Mission", path: "/ourmission" },
    { name: "The Experience", path: "/experience" },
    { name: "Privacy-First", path: "/yourpod" },
    { name: "About Us", path: "/about" },
    { name: "Updates", path: "/updates" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Pliyt Logo" className='w-32'/>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
                location.pathname === item.path 
                  ? "text-blue-600 bg-blue-50 font-semibold" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden md:flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            size="sm"
          >
            <Link to="/partner">
              <span>Partner With Us</span>
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
          
          <button
            className="block md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path 
                    ? "text-blue-600 bg-blue-50 font-semibold" 
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/partner"
              className="flex items-center gap-2 text-sm font-medium px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="h-4 w-4" />
              Partner with us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
