import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from "../components/theme-provider";
import { Button } from "./ui/button";
const logo = "/logo.png"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
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
      className={`sticky top-0 z-50 py-2 w-full transition-all duration-200 bg-[#ced1d6] ${
        scrolled ? "bg-[#ced1d6]" : "bg-[#ced1d6]"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/">
          <img src={logo} alt=""  className='w-32'/>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm text-black font-medium px-3 py-2 hover:text-blue-400 ${
                location.pathname === item.path ? "text-black" : "text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
         
          
          <Button
            asChild
           
            className="hidden md:flex gap-2 items-center"
            size="sm"
          >
            <Link to="/partner">
              <span>Partner With Us</span>
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
          
          <button
            className="block md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-background border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium px-3 py-2 transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/partner"
              className="flex items-center gap-2 text-sm font-medium px-3 py-2 transition-colors hover:text-primary"
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
