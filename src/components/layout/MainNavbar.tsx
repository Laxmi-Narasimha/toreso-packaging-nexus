
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navItems = [
    { title: "About Us", path: "/about" },
    { title: "Platform", path: "/platform" },
    { title: "Innovation", path: "/innovation" },
    { title: "Sustainability", path: "/sustainability" },
    { title: "Resources", path: "/resources" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#1A1F2C]/90 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-toreso-blue" />
            <span className="text-2xl font-display font-medium text-white tracking-tight">
              Toreso
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={cn(
                  "text-white/80 hover:text-white transition-colors text-sm font-medium",
                  location.pathname === item.path && "text-white"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#1A1F2C] border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className={cn(
                      "text-white/80 hover:text-white transition-colors py-2 px-4 text-lg",
                      location.pathname === item.path && "text-white"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
                  <Button asChild className="w-full bg-transparent border border-white/20 text-white hover:bg-white/10">
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                  </Button>
                  <Button asChild className="w-full bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                    <Link to="/register" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MainNavbar;
