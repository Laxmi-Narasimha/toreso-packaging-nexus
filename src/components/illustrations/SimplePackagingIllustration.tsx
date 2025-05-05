
import React from 'react';
import { motion } from 'framer-motion';

interface SimplePackagingIllustrationProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const SimplePackagingIllustration = ({ className = "", variant = 'light' }: SimplePackagingIllustrationProps) => {
  // Enhanced color scheme
  const colors = {
    line: variant === 'light' ? '#222' : '#fff',
    accent: '#2C5EF6', // toreso-blue
    accentSecondary: variant === 'light' ? '#00C9B6' : '#9b87f5', // toreso-teal or purple
    accentTertiary: variant === 'light' ? '#F97316' : '#F97316', // orange
    background: variant === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)',
    box: variant === 'light' ? '#F97316' : '#F97316', // orange
    dotted: variant === 'light' ? '#555' : '#aaa',
    highlight: variant === 'light' ? '#9b87f5' : '#9b87f5', // purple
    softBlue: variant === 'light' ? 'rgba(44, 94, 246, 0.2)' : 'rgba(155, 135, 245, 0.2)', 
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
    <div className={`relative overflow-visible ${className}`}>
      <svg 
        viewBox="0 0 550 280" 
        className="w-full h-full"
        style={{ maxHeight: "280px" }}
      >
        {/* Background gradient and pattern */}
        <defs>
          <linearGradient id="packaging-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.softBlue} />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
          <pattern id="packaging-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={colors.line} strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        
        {/* Background elements */}
        <rect width="100%" height="100%" fill="url(#packaging-grid)" />
        <circle cx="100" cy="130" r="80" fill="url(#packaging-bg-gradient)" opacity="0.5" />
        <circle cx="400" cy="150" r="100" fill="url(#packaging-bg-gradient)" opacity="0.7" />
        
        {/* Main process flow line */}
        <motion.path
          d="M60,140 C120,100 200,160 300,120 C400,80 480,140 520,120"
          stroke={colors.line}
          strokeWidth="1.5"
          strokeDasharray="5,5"
          fill="none"
          variants={drawPath}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        
        {/* Step 1: Design Station */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <rect x="50" y="50" width="60" height="70" rx="3" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <line x1="60" y1="70" x2="100" y2="70" stroke={colors.accent} strokeWidth="1.5" />
          <line x1="60" y1="85" x2="90" y2="85" stroke={colors.accent} strokeWidth="1.5" />
          <line x1="60" y1="100" x2="80" y2="100" stroke={colors.accent} strokeWidth="1.5" />
          
          {/* Computer screen */}
          <rect x="65" y="60" width="30" height="25" rx="2" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <motion.rect
            x="70" y="65" width="20" height="3" 
            fill={colors.accent}
            animate={{ width: [5, 20, 5], x: [70, 70, 85] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.rect
            x="70" y="70" width="15" height="3" 
            fill={colors.accentSecondary}
            animate={{ width: [15, 5, 15], x: [70, 85, 70] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          <motion.rect
            x="70" y="75" width="10" height="3" 
            fill={colors.accentTertiary}
            animate={{ width: [10, 18, 10], x: [70, 72, 70] }}
            transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
          />
          
          {/* Designer figure */}
          <circle cx="60" cy="45" r="5" fill={colors.highlight} stroke={colors.line} strokeWidth="0.5" />
          <line x1="60" y1="50" x2="60" y2="60" stroke={colors.line} strokeWidth="1" />
          <line x1="55" y1="55" x2="65" y2="55" stroke={colors.line} strokeWidth="1" />
          
          <text x="80" y="35" fontSize="12" textAnchor="middle" fill={colors.line}>Design</text>
        </motion.g>
        
        {/* Connection lines with animated dots */}
        <motion.g>
          <path d="M110,85 C130,65 150,95 180,75" stroke={colors.accent} strokeWidth="1" fill="none" />
          <motion.circle 
            cx="0" cy="0" r="3" 
            fill={colors.accent}
            animate={{ 
              offsetDistance: ["0%", "100%"] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{ 
              offsetPath: `path('M110,85 C130,65 150,95 180,75')`,
              offsetRotate: "0deg"
            }}
          />
        </motion.g>
        
        {/* Step 2: Production Factory */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Factory building */}
          <rect x="200" y="50" width="70" height="50" rx="2" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <rect x="215" y="100" width="40" height="20" rx="1" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <rect x="225" y="40" width="20" height="10" rx="1" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          
          {/* Factory chimney with smoke */}
          <motion.path
            d="M225,30 C225,25 245,25 245,30"
            stroke={colors.accent}
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          
          {/* Animated smoke */}
          <motion.circle 
            cx="235" cy="20" r="3" 
            fill={colors.line} 
            opacity="0.2"
            animate={{ 
              y: [-10, -30],
              opacity: [0.4, 0],
              scale: [0.5, 2]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
          <motion.circle 
            cx="230" cy="15" r="2" 
            fill={colors.line} 
            opacity="0.2"
            animate={{ 
              y: [-5, -20],
              opacity: [0.3, 0],
              scale: [0.3, 1.5]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              delay: 0.7,
              repeatDelay: 0.3
            }}
          />
          
          {/* Conveyor belt */}
          <rect x="190" y="120" width="90" height="10" rx="2" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          
          {/* Factory wheels */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ originX: "235px", originY: "75px" }}
          >
            <circle cx="235" cy="75" r="12" stroke={colors.line} strokeWidth="1" fill="none" />
            <line x1="235" y1="63" x2="235" y2="87" stroke={colors.line} strokeWidth="1" />
            <line x1="223" y1="75" x2="247" y2="75" stroke={colors.line} strokeWidth="1" />
          </motion.g>
          
          <text x="235" textAnchor="middle" y="150" fontSize="12" fill={colors.line}>Production</text>
        </motion.g>
        
        {/* Moving boxes animation */}
        <motion.rect
          x="170" 
          y="120" 
          width="15" 
          height="15" 
          fill={colors.box}
          animate={{ 
            x: [170, 230, 230, 280],
            y: [120, 120, 110, 120]
          }}
          transition={{ 
            duration: 4,
            times: [0, 0.5, 0.7, 1],
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
            x: [150, 210, 210, 260],
            y: [125, 125, 115, 125],
            rotate: [0, 0, -5, 0]
          }}
          transition={{ 
            duration: 4.5,
            times: [0, 0.5, 0.7, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Connection from production to delivery */}
        <motion.g>
          <path d="M290,85 C310,65 330,95 340,75" stroke={colors.accentSecondary} strokeWidth="1" fill="none" />
          <motion.circle 
            cx="0" cy="0" r="3" 
            fill={colors.accentSecondary}
            animate={{ 
              offsetDistance: ["0%", "100%"] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              delay: 0.5,
              ease: "linear" 
            }}
            style={{ 
              offsetPath: `path('M290,85 C310,65 330,95 340,75')`,
              offsetRotate: "0deg"
            }}
          />
        </motion.g>
        
        {/* Step 3: Delivery */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Truck enhanced design */}
          <rect x="370" y="80" width="70" height="30" rx="3" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <rect x="370" y="90" width="25" height="20" rx="2" fill={colors.background} stroke={colors.line} strokeWidth="1" />
          <rect x="395" y="95" width="40" height="15" rx="1" fill={colors.accentSecondary} opacity="0.2" stroke={colors.line} strokeWidth="0.5" />
          
          {/* Wheels with animation */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ originX: "380px", originY: "115px" }}
          >
            <circle cx="380" cy="115" r="6" stroke={colors.line} strokeWidth="1" fill="none" />
            <line x1="380" y1="109" x2="380" y2="121" stroke={colors.line} strokeWidth="0.5" />
            <line x1="374" y1="115" x2="386" y2="115" stroke={colors.line} strokeWidth="0.5" />
          </motion.g>
          
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ originX: "425px", originY: "115px" }}
          >
            <circle cx="425" cy="115" r="6" stroke={colors.line} strokeWidth="1" fill="none" />
            <line x1="425" y1="109" x2="425" y2="121" stroke={colors.line} strokeWidth="0.5" />
            <line x1="419" y1="115" x2="431" y2="115" stroke={colors.line} strokeWidth="0.5" />
          </motion.g>
          
          {/* Moving truck animation */}
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
            {/* Packages in truck */}
            <rect x="400" y="90" width="8" height="8" fill={colors.box} opacity="0.8" />
            <rect x="410" y="93" width="6" height="5" fill={colors.accentSecondary} opacity="0.6" />
            <rect x="418" y="91" width="7" height="7" fill={colors.highlight} opacity="0.7" />
          </motion.g>
          
          {/* Road */}
          <line x1="350" y1="120" x2="470" y2="120" stroke={colors.line} strokeWidth="1" strokeDasharray="4,4" />
          
          <text x="405" textAnchor="middle" y="150" fontSize="12" fill={colors.line}>Delivery</text>
        </motion.g>
        
        {/* Finishing details */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 2, delay: 2 }}
        >
          {/* Cities/destination dots */}
          <circle cx="460" cy="90" r="4" fill={colors.accent} opacity="0.6" />
          <circle cx="480" cy="60" r="3" fill={colors.accentSecondary} opacity="0.5" />
          <circle cx="500" cy="100" r="5" fill={colors.highlight} opacity="0.4" />
          
          {/* Destination lines */}
          <motion.path
            d="M440,85 C450,80 455,75 460,90"
            stroke={colors.accent}
            strokeWidth="0.7"
            fill="none"
            strokeDasharray="2,2"
            variants={drawPath}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.5, duration: 1 }}
          />
          
          <motion.path
            d="M450,75 C460,70 470,65 480,60"
            stroke={colors.accentSecondary}
            strokeWidth="0.7"
            fill="none"
            strokeDasharray="2,2"
            variants={drawPath}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.7, duration: 1 }}
          />
          
          <motion.path
            d="M445,95 C460,100 480,105 500,100"
            stroke={colors.highlight}
            strokeWidth="0.7"
            fill="none"
            strokeDasharray="2,2"
            variants={drawPath}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.9, duration: 1 }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default SimplePackagingIllustration;
