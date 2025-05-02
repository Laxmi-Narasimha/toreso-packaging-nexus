
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
      
      {/* Illustrated elements - packaging theme */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      
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

        {/* Illustrated robot arm - abstract */}
        <motion.svg 
          className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-20 text-white" 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.path 
            d="M50,180 L50,100 L80,70 L140,70 L170,100 L170,130" 
            stroke="currentColor" 
            strokeWidth="4" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.circle 
            cx="170" 
            cy="130" 
            r="10" 
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.8 }}
          />
          <motion.path 
            d="M80,70 L80,40 L100,20" 
            stroke="currentColor" 
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2 }}
          />
          <motion.circle 
            cx="100" 
            cy="20" 
            r="8" 
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          />
        </motion.svg>

        {/* Illustrated packaging elements - abstract */}
        <motion.svg 
          className="absolute top-[20%] right-0 w-[350px] h-[350px] opacity-20 text-white" 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <motion.rect 
            x="50" 
            y="50" 
            width="100" 
            height="100" 
            stroke="currentColor" 
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <motion.line 
            x1="50" 
            y1="50" 
            x2="100" 
            y2="20" 
            stroke="currentColor" 
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
          />
          <motion.line 
            x1="150" 
            y1="50" 
            x2="100" 
            y2="20" 
            stroke="currentColor" 
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 4.2 }}
          />
          <motion.line 
            x1="150" 
            y1="50" 
            x2="180" 
            y2="75" 
            stroke="currentColor" 
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 5.2 }}
          />
          <motion.line 
            x1="180" 
            y1="75" 
            x2="180" 
            y2="125" 
            stroke="currentColor" 
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 6 }}
          />
          <motion.line 
            x1="180" 
            y1="125" 
            x2="150" 
            y2="150" 
            stroke="currentColor" 
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 6.8 }}
          />
          <motion.line 
            x1="50" 
            y1="150" 
            x2="150" 
            y2="150" 
            stroke="currentColor" 
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 7.6 }}
          />
        </motion.svg>
      </div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
    </div>
  );
};

export default AnimatedBackground;
