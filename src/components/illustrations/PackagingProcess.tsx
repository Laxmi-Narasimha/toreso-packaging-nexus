
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Factory, Package } from 'lucide-react';

const PackagingProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation progress values
  const processProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const boxOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const factoryOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 0.3, 0.7, 1]);
  
  // Box animations
  const box1Y = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [50, 0, -20, 0]);
  const box2Y = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [70, 20, -10, 10]);
  const box3Y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [90, 40, 0, 20]);
  
  // Lines animation
  const drawPathProgress = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  
  return (
    <div ref={containerRef} className="relative min-h-[600px] w-full">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
      
      {/* Progress indicator */}
      <motion.div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ width: processProgress, translateX: "-50%" }}
      />
      
      {/* Factory illustration */}
      <motion.div 
        className="absolute top-10 left-10"
        style={{ opacity: factoryOpacity }}
      >
        <Factory className="h-40 w-40 text-gray-400/70" />
      </motion.div>
      
      {/* Assembly line illustration */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M100,300 C200,280 300,320 400,300 C500,280 600,320 700,300"
          fill="none"
          stroke="#1A1F2C"
          strokeWidth="8"
          strokeLinecap="round"
          style={{
            pathLength: drawPathProgress
          }}
        />
        
        {/* Supports */}
        <motion.line 
          x1="150" y1="300" x2="150" y2="350" 
          stroke="#1A1F2C" 
          strokeWidth="10"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]) }}
        />
        
        <motion.line 
          x1="350" y1="300" x2="350" y2="350" 
          stroke="#1A1F2C" 
          strokeWidth="10"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [0, 1]) }}
        />
        
        <motion.line 
          x1="550" y1="300" x2="550" y2="350" 
          stroke="#1A1F2C" 
          strokeWidth="10"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
        />
      </svg>
      
      {/* Animated packaging boxes */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            opacity: boxOpacity,
            y: box1Y,
            rotate: useTransform(scrollYProgress, [0, 1], [-10, 10])
          }}
        >
          <Box className="h-24 w-24 text-blue-400" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            opacity: boxOpacity,
            y: box2Y,
            rotate: useTransform(scrollYProgress, [0, 1], [10, -5])
          }}
        >
          <Package className="h-20 w-20 text-purple-400" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            opacity: boxOpacity,
            y: box3Y,
            rotate: useTransform(scrollYProgress, [0, 1], [-5, 15])
          }}
        >
          <Box className="h-16 w-16 text-green-400" />
        </motion.div>
      </div>
      
      {/* Handwritten annotation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M200,100 C250,150 300,100 350,150"
          className="handwritten-path"
          stroke="#9b87f5"
          strokeWidth="2"
          style={{
            pathLength: useTransform(scrollYProgress, [0.1, 0.4], [0, 1])
          }}
        />
        
        <motion.path
          d="M400,120 C450,180 500,140 550,170"
          className="handwritten-path"
          stroke="#0EA5E9"
          strokeWidth="2"
          style={{
            pathLength: useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
          }}
        />
        
        <motion.path
          d="M150,400 C200,380 250,420 300,390"
          className="handwritten-path"
          stroke="#F97316"
          strokeWidth="2"
          style={{
            pathLength: useTransform(scrollYProgress, [0.5, 0.8], [0, 1])
          }}
        />
      </svg>
      
      {/* Process labels */}
      <motion.div 
        className="absolute top-1/4 left-1/4 text-center"
        style={{ 
          opacity: useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7], [0, 1, 1, 0]),
          y: useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7], [20, 0, 0, -20])
        }}
      >
        <h3 className="text-xl font-medium text-blue-500">Design</h3>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center"
        style={{ 
          opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.9], [0, 1, 1, 0]),
          y: useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.9], [20, 0, 0, -20])
        }}
      >
        <h3 className="text-xl font-medium text-purple-500">Production</h3>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/4 left-3/4 transform -translate-x-1/2 text-center"
        style={{ 
          opacity: useTransform(scrollYProgress, [0.5, 0.7, 0.9, 1], [0, 1, 1, 0]),
          y: useTransform(scrollYProgress, [0.5, 0.7, 0.9, 1], [20, 0, 0, -20])
        }}
      >
        <h3 className="text-xl font-medium text-green-500">Delivery</h3>
      </motion.div>
    </div>
  );
};

export default PackagingProcess;
