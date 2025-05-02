
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, Box } from 'lucide-react';

const RobotArmAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Motion values for animations
  const armRotation = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, -30, 20, 0]);
  const secondaryArmRotation = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 40, -20, 10]);
  const gripperRotation = useTransform(scrollYProgress, [0, 0.5, 1], [0, -30, 0]);
  
  const boxX = useTransform(scrollYProgress, [0.3, 0.6, 1], [-100, 0, 100]);
  const boxY = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 1], [0, -30, -10, 0]);
  const boxRotate = useTransform(scrollYProgress, [0.3, 0.6, 1], [45, 0, -10]);
  
  // Line path animation
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // SVG path for the assembly line
  const linePath = "M50,400 C150,350 250,450 350,400 C450,350 550,450 650,400 C750,350 850,450 950,400";

  return (
    <div ref={containerRef} className="relative h-[600px] w-full overflow-hidden">
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" className="text-blue-200" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>

      {/* Robot arm base */}
      <div className="absolute left-1/4 bottom-1/4">
        <svg width="400" height="400" viewBox="0 0 400 400">
          {/* Robot base */}
          <rect x="50" y="350" width="100" height="40" rx="5" className="robot-body" />
          
          {/* Main arm */}
          <motion.g style={{ rotate: armRotation, originX: 100, originY: 350 }}>
            <rect x="95" y="250" width="10" height="100" className="robot-body" />
            
            {/* Secondary arm */}
            <motion.g style={{ rotate: secondaryArmRotation, originX: 100, originY: 250 }}>
              <rect x="100" y="150" width="120" height="10" className="robot-body" />
              
              {/* Tertiary arm */}
              <motion.g style={{ rotate: gripperRotation, originX: 220, originY: 155 }}>
                <rect x="220" y="150" width="60" height="10" className="robot-body" />
                
                {/* Gripper */}
                <motion.path 
                  d="M280,140 L295,120 M280,170 L295,190" 
                  stroke="#aaadb0"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </motion.g>
            </motion.g>
            
            {/* Joints */}
            <circle cx="100" cy="350" r="15" className="robot-joint" />
            <circle cx="100" cy="250" r="12" className="robot-joint" />
            <circle cx="220" cy="155" r="10" className="robot-joint" />
            <circle cx="280" cy="155" r="8" className="robot-joint" />
          </motion.g>
        </svg>
      </div>
      
      {/* Assembly line path */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path 
          d={linePath}
          fill="none"
          stroke="#1A1F2C"
          strokeWidth="10"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
      
      {/* Animated packages */}
      <motion.div 
        className="absolute bottom-1/4 right-1/4"
        style={{ 
          x: boxX,
          y: boxY,
          rotate: boxRotate
        }}
      >
        <Box className="h-16 w-16 text-blue-400" />
      </motion.div>
      
      {/* Robot icons */}
      <motion.div 
        className="absolute top-1/4 right-1/4"
        style={{ 
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
        }}
      >
        <Bot className="h-24 w-24 text-purple-400/50" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 left-1/5"
        style={{ 
          rotate: useTransform(scrollYProgress, [0, 1], [0, -180]),
          scale: useTransform(scrollYProgress, [0, 0.7, 1], [0.8, 1.1, 0.9])
        }}
      >
        <Bot className="h-16 w-16 text-blue-400/50" />
      </motion.div>
      
      {/* Handwritten-style path animations */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M100,100 C150,50 200,150 250,100 S350,50 400,100 S500,150 550,100"
          className="handwritten-path"
          stroke="#9b87f5"
          strokeWidth="2"
          style={{
            pathLength: useTransform(scrollYProgress, [0, 0.6], [0, 1])
          }}
        />
      </svg>
    </div>
  );
};

export default RobotArmAnimation;
