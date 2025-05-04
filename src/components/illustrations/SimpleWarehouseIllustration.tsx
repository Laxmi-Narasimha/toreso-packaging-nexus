
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SimpleWarehouseIllustrationProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const SimpleWarehouseIllustration = ({ className = "", variant = 'light' }: SimpleWarehouseIllustrationProps) => {
  const controls = useAnimation();
  
  // Color scheme based on variant
  const colors = {
    line: variant === 'light' ? '#222' : '#fff',
    accent: '#2C5EF6', // toreso-blue
    background: variant === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)',
    box: variant === 'light' ? '#2C5EF6' : '#9b87f5',
    dotted: variant === 'light' ? '#555' : '#aaa',
  };

  // Start animations when component mounts
  useEffect(() => {
    const startAnimations = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      });
      
      // Start repeated animations
      controls.start({
        y: [0, -5, 0, 5, 0],
        transition: { repeat: Infinity, duration: 5, ease: "easeInOut" }
      });
    };
    
    startAnimations();
  }, [controls]);

  // Drawing path animations
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        delay: 0.2
      }
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg 
        viewBox="0 0 600 300" 
        className="w-full h-full"
        style={{ maxHeight: "300px" }}
      >
        {/* Background grid pattern */}
        <pattern id="warehouse-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke={colors.line} strokeWidth="0.5" opacity="0.1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#warehouse-grid)" />

        {/* Dotted path for movement */}
        <motion.path
          d="M50,150 C150,120 250,180 350,150 C450,120 550,180 580,150"
          stroke={colors.dotted}
          strokeWidth="1"
          strokeDasharray="5,5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Conveyor belt (simplified) */}
        <motion.rect
          x="100" 
          y="170" 
          width="400" 
          height="10" 
          rx="2"
          fill={colors.background}
          stroke={colors.line}
          strokeWidth="1"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          style={{ transformOrigin: "100px 175px" }}
        />

        {/* Support legs */}
        <motion.rect x="120" y="180" width="5" height="20" fill={colors.line} opacity="0.5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{ transformOrigin: "120px 180px" }}
        />
        <motion.rect x="300" y="180" width="5" height="20" fill={colors.line} opacity="0.5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{ transformOrigin: "300px 180px" }}
        />
        <motion.rect x="480" y="180" width="5" height="20" fill={colors.line} opacity="0.5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          style={{ transformOrigin: "480px 180px" }}
        />

        {/* Robot arm */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Base */}
          <rect x="150" y="210" width="30" height="15" rx="2" fill={colors.line} />
          
          {/* Main arm */}
          <motion.line
            x1="165" 
            y1="210" 
            x2="165" 
            y2="170"
            stroke={colors.line}
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
          
          {/* Secondary arm */}
          <motion.line 
            x1="165" 
            y1="170" 
            x2="210" 
            y2="170"
            stroke={colors.line}
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
          />
          
          {/* Gripper */}
          <motion.path
            d="M210,168 L220,158 M210,172 L220,182"
            stroke={colors.line}
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          />

          {/* Joints */}
          <circle cx="165" cy="210" r="3" fill={colors.accent} />
          <circle cx="165" cy="170" r="3" fill={colors.accent} />
          <circle cx="210" cy="170" r="3" fill={colors.accent} />
        </motion.g>

        {/* Warehouse shelves (simplified) */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <rect x="50" y="90" width="60" height="80" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <line x1="50" y1="120" x2="110" y2="120" stroke={colors.line} strokeWidth="1" />
          <line x1="50" y1="150" x2="110" y2="150" stroke={colors.line} strokeWidth="1" />
          
          {/* Items on shelves */}
          <rect x="60" y="95" width="15" height="20" fill={colors.box} opacity="0.6" />
          <rect x="85" y="100" width="15" height="15" fill={colors.accent} opacity="0.4" />
          <rect x="65" y="125" width="20" height="20" fill={colors.box} opacity="0.5" />
          <rect x="90" y="130" width="15" height="15" fill={colors.accent} opacity="0.6" />
        </motion.g>

        {/* Moving boxes */}
        <motion.rect
          x="250" 
          y="155" 
          width="20" 
          height="15" 
          fill={colors.box}
          animate={{ 
            x: [250, 400, 400], 
            y: [155, 155, 145, 155],
            rotate: [0, 0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            times: [0, 0.6, 0.8, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.rect
          x="180" 
          y="153" 
          width="15" 
          height="17" 
          fill={colors.accent}
          opacity="0.8"
          animate={{ 
            x: [180, 320, 320], 
            y: [153, 153, 140, 153],
            rotate: [0, 0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            times: [0, 0.7, 0.85, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Forklift (simplified) */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: 1, 
            x: 0,
          }}
          transition={{ 
            duration: 0.8, 
            delay: 1
          }}
        >
          <motion.g
            animate={{
              x: [0, 80, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Body */}
            <rect x="350" y="200" width="30" height="20" rx="2" fill={colors.line} />
            
            {/* Lift */}
            <rect x="345" y="185" width="5" height="35" fill={colors.line} />
            <rect x="342" y="185" width="11" height="3" fill={colors.accent} />
            
            {/* Wheels */}
            <circle cx="355" cy="220" r="5" fill={colors.accent} />
            <circle cx="375" cy="220" r="5" fill={colors.accent} />
          </motion.g>
        </motion.g>

        {/* Dashed connecting lines */}
        <motion.path
          d="M400,100 Q450,130 500,100"
          stroke={colors.accent}
          strokeWidth="1"
          strokeDasharray="5,5"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </div>
  );
};

export default SimpleWarehouseIllustration;
