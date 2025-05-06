import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const TechNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "About Us", href: "/about-us" },
    { title: "Platform", href: "/platform" },
    { title: "Innovation", href: "/innovation" },
    { title: "Sustainability", href: "/sustainability" },
    { title: "Resources", href: "/resources" },
    { title: "Solutions", href: "/solutions" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const renderNavLinks = (isMobile = false) => (
    <>
      {navLinks.map((link, index) => (
        <motion.div
          key={index}
          whileHover={!isMobile ? { y: -2 } : {}}
          whileTap={!isMobile ? { y: 0 } : {}}
          className={isMobile ? "w-full" : ""}
        >
          <Link
            to={link.href}
            className={`text-white/90 hover:text-white transition-colors font-medium relative group ${
              isMobile ? "text-lg py-2 block" : "text-sm"
            }`}
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
          >
            {link.title}
            {!isMobile && (
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-toreso-teal group-hover:w-full transition-all duration-300"></span>
            )}
          </Link>
        </motion.div>
      ))}
    </>
  );

  const renderAuthButtons = (isMobile = false) => (
    <>
      <Button
        asChild
        variant="techOutline"
        size="sm"
        className={isMobile ? "flex-1" : "rounded-full"}
      >
        <Link to="/login" onClick={() => isMobile && setIsMobileMenuOpen(false)}>
          Login
        </Link>
      </Button>
      <Button
        asChild
        variant="techPrimary"
        size="sm"
        className={isMobile ? "flex-1" : "rounded-full"}
      >
        <Link to="/register" onClick={() => isMobile && setIsMobileMenuOpen(false)}>
          Get Started
        </Link>
      </Button>
    </>
  );

  return (
    <header className="fixed w-full z-50">
      <motion.nav
        className={`w-full transition-colors duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg py-2 shadow-lg" : "bg-transparent py-4"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isScrolled ? 0 : -100,
          opacity: isScrolled ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white"
              >
                TORESO
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {renderNavLinks()}
              </div>
              <div className="flex items-center space-x-4">
                {renderAuthButtons()}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {renderNavLinks(true)}
                  <div className="flex space-x-4 pt-4">
                    {renderAuthButtons(true)}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default TechNavigation;
