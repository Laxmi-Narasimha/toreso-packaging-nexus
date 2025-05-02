
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

interface AnimatedBackgroundProps {
  theme: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const { scrollYProgress } = useScroll();
  
  // Transform values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  
  useEffect(() => {
    // Small delay to allow for smooth transition
    const timer = setTimeout(() => {
      setCurrentTheme(theme);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ opacity }}
          className={`absolute inset-0 ${currentTheme}`}
        />
      </AnimatePresence>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated floating shapes */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"
          style={{ y, scale }}
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
          initial={{ top: '10%', right: '5%' }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 50]) }}
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut",
            delay: 2
          }}
          initial={{ bottom: '5%', left: '10%' }}
        />
        
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl"
          style={{ x: useTransform(scrollYProgress, [0, 0.5], [0, -30]) }}
          animate={{ 
            x: [0, 15, 0], 
            y: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18,
            ease: "easeInOut",
            delay: 1
          }}
          initial={{ top: '30%', left: '5%' }}
        />
      </div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
    </div>
  );
};

export default AnimatedBackground;
