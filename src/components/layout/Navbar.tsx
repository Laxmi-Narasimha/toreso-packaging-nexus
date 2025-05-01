
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Package 
            size={28} 
            className="text-toreso-blue" 
          />
          <span className="text-xl font-bold text-toreso-dark">
            Toreso
            <span className="text-toreso-blue">Nexus</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 relative ${
                location.pathname === link.path
                  ? "text-toreso-blue"
                  : "text-gray-700 hover:text-toreso-blue"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-toreso-blue rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" size="sm">
              <User size={16} className="mr-2" />
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu} 
          className="md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full w-full pb-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "bg-blue-50 text-toreso-blue"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-4 flex flex-col space-y-2">
              <Link 
                to="/login" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-2 px-4 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center"
              >
                <User size={16} className="mr-2" /> Log In
              </Link>
              <Link 
                to="/register" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-2 px-4 rounded-md bg-toreso-blue text-white hover:bg-toreso-darkBlue text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
