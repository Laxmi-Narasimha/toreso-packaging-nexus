
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TechNavigation from "@/components/home/TechNavigation";
import TechHero from "@/components/home/TechHero";
import BackgroundEffects from "@/components/home/BackgroundEffects";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import LoginOptionsModal from "@/components/home/LoginOptionsModal";
import { Users, Building, ShoppingBag } from "lucide-react";

const Index = () => {
  const [showLoginOptions, setShowLoginOptions] = React.useState(false);

  useEffect(() => {
    // Smooth scroll to top when page loads
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLoginClick = () => {
    setShowLoginOptions(true);
  };

  const handleCloseLoginOptions = () => {
    setShowLoginOptions(false);
  };

  const userTypes = [
    {
      type: 'admin',
      title: 'Admin',
      description: 'Manage the platform and users',
      icon: <Users size={24} />,
      path: '/admin',
      color: 'from-purple-600 to-indigo-700',
    },
    {
      type: 'supplier',
      title: 'Supplier',
      description: 'Provide packaging solutions',
      icon: <Building size={24} />,
      path: '/supplier',
      color: 'from-blue-600 to-cyan-700',
    },
    {
      type: 'buyer',
      title: 'Buyer',
      description: 'Find packaging solutions',
      icon: <ShoppingBag size={24} />,
      path: '/buyer',
      color: 'from-teal-600 to-green-700',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background effects */}
      <BackgroundEffects />
      
      {/* Modern Navigation with Login Option */}
      <div className="fixed top-0 w-full z-50">
        <TechNavigation 
          onLoginClick={handleLoginClick}
          loginButton={
            <Button 
              variant="techOutline" 
              className="hover:bg-white/10 transition-all duration-300 hover:scale-105"
              onClick={handleLoginClick}
            >
              Login / Sign Up
            </Button>
          }
        />
      </div>
      
      {/* Hero Section with video background */}
      <TechHero showUserSelector={false} />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Call to Action */}
      <CtaSection 
        onLoginClick={handleLoginClick}
      />
      
      {/* Login options modal */}
      <LoginOptionsModal 
        isOpen={showLoginOptions} 
        onClose={handleCloseLoginOptions}
        userTypes={userTypes}
      />
      
      {/* Go to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full shadow-lg z-50 text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Index;
