
import React from 'react';
import { motion } from 'framer-motion';

interface SimpleRobotArmProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const SimpleRobotArm = ({ className = "", variant = 'light', size = 'md' }: SimpleRobotArmProps) => {
  // Color scheme based on variant
  const colors = {
    line: variant === 'light' ? '#222' : '#fff',
    accent: '#2C5EF6', // toreso-blue
    secondary: variant === 'light' ? '#00C9B6' : '#9b87f5', // toreso-teal or purple
    background: variant === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)',
    joint: variant === 'light' ? '#F97316' : '#F97316', // orange
  };

  // Size mapping
  const sizeMap = {
    sm: { width: 120, height: 120 },
    md: { width: 200, height: 200 },
    lg: { width: 300, height: 300 },
  };
  
  const { width, height } = sizeMap[size];

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Base */}
        <motion.rect 
          x="70" 
          y="160" 
          width="60" 
          height="20" 
          rx="3" 
          fill={colors.background}
          stroke={colors.line}
          strokeWidth="1.5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "70px 180px" }}
        />
        
        {/* Main arm */}
        <motion.g
          initial={{ rotate: -45 }}
          animate={{ 
            rotate: [-45, -20, -40, -15, -45]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          style={{ transformOrigin: "100px 160px" }}
        >
          <motion.rect
            x="95" 
            y="100" 
            width="10" 
            height="60" 
            rx="2"
            fill={colors.background}
            stroke={colors.line}
            strokeWidth="1.5"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ transformOrigin: "100px 160px" }}
          />
          
          {/* Secondary arm */}
          <motion.g
            style={{ transformOrigin: "100px 100px" }}
            initial={{ rotate: 15 }}
            animate={{ 
              rotate: [15, 45, 20, 40, 15]
            }}
            transition={{ 
              duration: 8, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <motion.rect
              x="100" 
              y="95" 
              width="70" 
              height="10" 
              rx="2"
              fill={colors.background}
              stroke={colors.line}
              strokeWidth="1.5"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{ transformOrigin: "100px 100px" }}
            />
            
            {/* Gripper arm */}
            <motion.g
              style={{ transformOrigin: "170px 100px" }}
              initial={{ rotate: 0 }}
              animate={{ 
                rotate: [0, -20, 10, -15, 0]
              }}
              transition={{ 
                duration: 7, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <motion.rect
                x="170" 
                y="95" 
                width="30" 
                height="10" 
                rx="2"
                fill={colors.background}
                stroke={colors.line}
                strokeWidth="1.5"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                style={{ transformOrigin: "170px 100px" }}
              />
              
              {/* Gripper claws */}
              <motion.g>
                <motion.path
                  d="M200,95 L210,85"
                  stroke={colors.line}
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 2 }}
                />
                
                <motion.path
                  d="M200,105 L210,115"
                  stroke={colors.line}
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 2 }}
                />
                
                <motion.g
                  animate={{
                    rotate: [0, -15, 0, 15, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2.5
                  }}
                  style={{ transformOrigin: "200px 95px" }}
                >
                  <motion.path
                    d="M200,95 L210,85"
                    stroke={colors.line}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 2 }}
                  />
                </motion.g>
                
                <motion.g
                  animate={{
                    rotate: [0, 15, 0, -15, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2.5
                  }}
                  style={{ transformOrigin: "200px 105px" }}
                >
                  <motion.path
                    d="M200,105 L210,115"
                    stroke={colors.line}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 2 }}
                  />
                </motion.g>
              </motion.g>
            </motion.g>
          </motion.g>
          
          {/* Joints */}
          <circle cx="100" cy="160" r="5" fill={colors.joint} />
          <circle cx="100" cy="100" r="5" fill={colors.joint} />
          <circle cx="170" cy="100" r="4" fill={colors.joint} />
          <circle cx="200" cy="100" r="3" fill={colors.joint} />
        </motion.g>
        
        {/* Box animation */}
        <motion.rect
          x="135"
          y="130"
          width="20"
          height="20"
          rx="2"
          fill={colors.accent}
          opacity="0.8"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0.8, 0],
            y: [130, 120, 100, 80],
            x: [135, 140, 170, 190],
            rotate: [0, 0, 45, 90]
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.7, 1],
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      </svg>
    </div>
  );
};

export default SimpleRobotArm;
