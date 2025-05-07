import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import UserTypeSelector from "./UserTypeSelector";

interface TechHeroProps {
  showUserSelector?: boolean;
}

const TechHero: React.FC<TechHeroProps> = ({ showUserSelector = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [showSelector, setShowSelector] = React.useState(false);

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ opacity, y, scale }}
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-6"
          >
            <span className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-blue-300 border border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              Next-Generation Packaging Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600"
          >
            Revolutionize Your Packaging Procurement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            Connect with verified suppliers, optimize your supply chain, and transform how you source packaging materials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {!showSelector ? (
              <>
                <Button
                  size="xl"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setShowSelector(true)}
                >
                  Get Started<ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="rounded-full text-white border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </>
            ) : null}
          </motion.div>

          {/* User Type Selector */}
          <AnimatePresence>
            {(showSelector || showUserSelector) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-2">Choose Your Role</h2>
                  <p className="text-white/70">Select how you want to use the platform</p>
                </div>
                <UserTypeSelector />
              </motion.div>
            )}
          </AnimatePresence>

          {!showSelector && !showUserSelector && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="relative mt-16"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none h-20 -bottom-20"></div>
              <motion.img
                src="https://images.unsplash.com/photo-1596443686119-d301ef73f496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                alt="Dashboard Preview"
                className="rounded-2xl shadow-2xl border border-white/10 max-w-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-blue-500/20 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-white font-medium">Real-time analytics</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-20 -left-8 bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-purple-500/20 shadow-xl hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <span className="text-white font-medium">AI-powered recommendations</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-blue-400/70 rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechHero;
