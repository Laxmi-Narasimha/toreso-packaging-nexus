
import React from 'react';
import { motion } from 'framer-motion';

interface SimplePackagingIllustrationProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const SimplePackagingIllustration = ({ className = "", variant = 'light' }: SimplePackagingIllustrationProps) => {
  // Color scheme based on variant
  const colors = {
    line: variant === 'light' ? '#222' : '#fff',
    accent: '#2C5EF6', // toreso-blue
    accentSecondary: variant === 'light' ? '#00C9B6' : '#9b87f5', // toreso-teal or purple
    background: variant === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)',
    box: variant === 'light' ? '#F97316' : '#F97316', // orange
    dotted: variant === 'light' ? '#555' : '#aaa',
  };

  const drawPath = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 500 250" 
        className="w-full h-full"
        style={{ maxHeight: "250px" }}
      >
        {/* Background grid pattern */}
        <pattern id="packaging-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke={colors.line} strokeWidth="0.5" opacity="0.1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#packaging-grid)" />
        
        {/* Process flow line */}
        <motion.path
          d="M50,120 C100,100 150,140 200,120 C250,100 300,140 350,120 C400,100 450,140 480,120"
          stroke={colors.dotted}
          strokeWidth="1.5"
          strokeDasharray="5,5"
          fill="none"
          variants={drawPath}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        
        {/* Step 1: Design */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <rect x="60" y="60" width="40" height="50" rx="2" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <line x1="70" y1="75" x2="90" y2="75" stroke={colors.accent} strokeWidth="1.5" />
          <line x1="70" y1="85" x2="90" y2="85" stroke={colors.accent} strokeWidth="1.5" />
          <line x1="70" y1="95" x2="80" y2="95" stroke={colors.accent} strokeWidth="1.5" />
          <text x="80" y="40" fontSize="12" fill={colors.line} textAnchor="middle">Design</text>
        </motion.g>
        
        {/* Step 2: Production */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Factory */}
          <rect x="200" y="50" width="50" height="40" rx="2" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <rect x="210" y="90" width="30" height="20" rx="2" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <rect x="217" y="40" width="16" height="10" rx="1" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <motion.path
            d="M220,35 C220,30 230,30 230,35"
            stroke={colors.accent}
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <text x="225" y="40" fontSize="12" fill={colors.line} textAnchor="middle" y="130">Production</text>
        </motion.g>
        
        {/* Moving boxes animation */}
        <motion.rect
          x="170" 
          y="120" 
          width="15" 
          height="15" 
          fill={colors.box}
          animate={{ 
            x: [170, 230, 230],
            y: [120, 120, 110, 120],
            rotate: [0, 0, 5, 0]
          }}
          transition={{ 
            duration: 3,
            times: [0, 0.7, 0.85, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.rect
          x="150" 
          y="125" 
          width="10" 
          height="10" 
          fill={colors.accentSecondary}
          opacity="0.8"
          animate={{ 
            x: [150, 210, 210],
            y: [125, 125, 115, 125],
            rotate: [0, 0, -5, 0]
          }}
          transition={{ 
            duration: 3.5,
            times: [0, 0.7, 0.85, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Step 3: Delivery */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {/* Truck simple outline */}
          <rect x="350" y="80" width="60" height="30" rx="2" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <rect x="350" y="90" width="20" height="20" rx="1" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <circle cx="360" cy="115" r="5" stroke={colors.line} strokeWidth="1" fill="none" />
          <circle cx="390" cy="115" r="5" stroke={colors.line} strokeWidth="1" fill="none" />
          <text x="380" y="40" fontSize="12" fill={colors.line} textAnchor="middle" y="130">Delivery</text>
          
          {/* Animation for truck */}
          <motion.g
            animate={{
              x: [0, 10, 0],
              y: [0, -2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <rect x="410" y="90" width="10" height="5" fill={colors.box} opacity="0.8" />
          </motion.g>
        </motion.g>
        
        {/* Connection lines */}
        <motion.path
          d="M100,80 C120,60 140,90 160,70"
          stroke={colors.accent}
          strokeWidth="1"
          strokeDasharray="3,3"
          fill="none"
          variants={drawPath}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.5 }}
        />
        
        <motion.path
          d="M250,70 C270,50 290,80 310,60"
          stroke={colors.accentSecondary}
          strokeWidth="1"
          strokeDasharray="3,3"
          fill="none"
          variants={drawPath}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 2 }}
        />
      </svg>
    </div>
  );
};

export default SimplePackagingIllustration;
