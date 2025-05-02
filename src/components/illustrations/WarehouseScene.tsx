
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Box, Container, Forklift, Truck, Warehouse } from 'lucide-react';

const WarehouseScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Motion values for animations
  const robotArmRotation = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -20, 10, -15]);
  const robotBaseX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 0]);
  const conveyorProgress = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const forkliftX = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 200, 400, 200]);
  const craneY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -50, -100, -50]);
  
  // Package animation values
  const packageOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const package1X = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7], [-100, 0, 100, 200]);
  const package2X = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [-150, -50, 50, 150]);
  const package3X = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.9], [-200, -100, 0, 100]);

  // Path animations for handwritten effect
  const path1Length = useMotionValue(0);
  const path2Length = useMotionValue(0);
  const path3Length = useMotionValue(0);

  useEffect(() => {
    const pathAnimation1 = scrollYProgress.onChange(value => {
      const pathValue = Math.max(0, Math.min(1, (value - 0.1) / 0.3));
      path1Length.set(pathValue);
    });

    const pathAnimation2 = scrollYProgress.onChange(value => {
      const pathValue = Math.max(0, Math.min(1, (value - 0.3) / 0.3));
      path2Length.set(pathValue);
    });

    const pathAnimation3 = scrollYProgress.onChange(value => {
      const pathValue = Math.max(0, Math.min(1, (value - 0.5) / 0.3));
      path3Length.set(pathValue);
    });

    return () => {
      pathAnimation1();
      pathAnimation2();
      pathAnimation3();
    };
  }, [scrollYProgress, path1Length, path2Length, path3Length]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[800px]">
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <pattern id="warehouse-grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" className="warehouse-grid" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#warehouse-grid)" />
      </svg>

      {/* Warehouse building outlines */}
      <motion.div 
        className="absolute top-10 left-10"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
      >
        <Warehouse className="h-40 w-40 text-blue-200/30" />
      </motion.div>
      
      <motion.div 
        className="absolute top-20 right-20"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
      >
        <Warehouse className="h-32 w-32 text-purple-200/30" />
      </motion.div>

      {/* Conveyor belt system */}
      <div className="absolute left-0 right-0 bottom-1/4 h-20 overflow-hidden">
        <motion.svg 
          className="w-full h-40" 
          viewBox="0 0 1000 100"
          style={{ x: conveyorProgress }}
        >
          {/* Conveyor belt */}
          <rect x="0" y="60" width="2000" height="20" className="conveyor-belt" />
          
          {/* Support legs */}
          <rect x="100" y="80" width="10" height="20" className="conveyor-belt" />
          <rect x="300" y="80" width="10" height="20" className="conveyor-belt" />
          <rect x="500" y="80" width="10" height="20" className="conveyor-belt" />
          <rect x="700" y="80" width="10" height="20" className="conveyor-belt" />
          <rect x="900" y="80" width="10" height="20" className="conveyor-belt" />
          <rect x="1100" y="80" width="10" height="20" className="conveyor-belt" />
          <rect x="1300" y="80" width="10" height="20" className="conveyor-belt" />
          <rect x="1500" y="80" width="10" height="20" className="conveyor-belt" />
          <rect x="1700" y="80" width="10" height="20" className="conveyor-belt" />
          <rect x="1900" y="80" width="10" height="20" className="conveyor-belt" />
          
          {/* Conveyor rollers */}
          {[...Array(40)].map((_, i) => (
            <rect 
              key={i} 
              x={i * 50} 
              y="55" 
              width="40" 
              height="5" 
              fill="#494e5c" 
              rx="2"
            />
          ))}
        </motion.svg>
      </div>

      {/* Robot arm */}
      <motion.div 
        className="absolute bottom-1/3 left-1/4"
        style={{ x: robotBaseX }}
      >
        <svg width="150" height="200" viewBox="0 0 150 200">
          {/* Robot base */}
          <rect x="10" y="160" width="60" height="20" rx="3" className="robot-body" />
          
          {/* Main arm */}
          <motion.g style={{ rotate: robotArmRotation, originX: 40, originY: 160 }}>
            <rect x="35" y="100" width="10" height="60" className="robot-body" />
            
            {/* Secondary arm */}
            <motion.g style={{ rotate: useTransform(scrollYProgress, [0, 0.5, 1], [-20, 30, -10]), originX: 40, originY: 100 }}>
              <rect x="40" y="50" width="60" height="8" className="robot-body" />
              
              {/* Tertiary arm / gripper */}
              <motion.g style={{ rotate: useTransform(scrollYProgress, [0, 0.5, 1], [0, -40, 20]), originX: 100, originY: 54 }}>
                <rect x="100" y="50" width="30" height="8" className="robot-body" />
                
                {/* Gripper claws */}
                <motion.path 
                  d="M130,46 L140,36"
                  className="robot-arm"
                  stroke="#aaadb0"
                  strokeWidth="5"
                  style={{ rotate: useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 20, -10, 0]) }}
                />
                
                <motion.path 
                  d="M130,62 L140,72"
                  className="robot-arm"
                  stroke="#aaadb0"
                  strokeWidth="5"
                  style={{ rotate: useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -20, 10, 0]) }}
                />
              </motion.g>
            </motion.g>
            
            {/* Joints */}
            <circle cx="40" cy="160" r="6" className="robot-joint" />
            <circle cx="40" cy="100" r="5" className="robot-joint" />
            <circle cx="100" cy="54" r="4" className="robot-joint" />
            <circle cx="130" cy="54" r="3" className="robot-joint" />
          </motion.g>
        </svg>
      </motion.div>
      
      {/* Packages on conveyor */}
      <motion.div 
        className="absolute bottom-1/4 left-1/2 h-16 w-16"
        style={{ 
          opacity: packageOpacity,
          x: package1X,
          y: -10,
          rotate: useTransform(scrollYProgress, [0, 1], [-5, 5])
        }}
      >
        <Box className="h-full w-full text-blue-400/70" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/2 h-14 w-14"
        style={{ 
          opacity: packageOpacity,
          x: package2X,
          y: -8,
          rotate: useTransform(scrollYProgress, [0, 1], [5, -5])
        }}
      >
        <Box className="h-full w-full text-purple-400/70" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/2 h-12 w-12"
        style={{ 
          opacity: packageOpacity,
          x: package3X,
          y: -6,
          rotate: useTransform(scrollYProgress, [0, 1], [-8, 8])
        }}
      >
        <Box className="h-full w-full text-green-400/70" />
      </motion.div>

      {/* Forklift */}
      <motion.div 
        className="absolute bottom-20 left-0"
        style={{ x: forkliftX }}
      >
        <Forklift className="h-20 w-20 text-yellow-400/70" />
      </motion.div>
      
      {/* Truck */}
      <motion.div 
        className="absolute bottom-10 right-10"
        style={{ 
          x: useTransform(scrollYProgress, [0, 0.5, 1], [300, 0, -300]),
          rotate: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0])
        }}
      >
        <Truck className="h-24 w-24 text-blue-400/70" />
      </motion.div>

      {/* Crane */}
      <motion.div 
        className="absolute top-20 left-1/3"
        style={{ y: craneY }}
      >
        <svg width="100" height="300" viewBox="0 0 100 300">
          <rect x="45" y="0" width="10" height="200" fill="#1A1F2C" stroke="#000000e6" />
          <motion.rect 
            x="20" 
            y="200" 
            width="60" 
            height="10" 
            fill="#1A1F2C"
            stroke="#000000e6" 
            style={{ rotate: useTransform(scrollYProgress, [0, 0.5, 1], [-10, 20, -10]) }}
            transformOrigin="50 200"
          />
          <motion.line 
            x1="50" 
            y1="200" 
            x2="50" 
            y2="250" 
            stroke="#000000e6" 
            strokeWidth="2" 
            strokeDasharray="4"
            style={{ 
              y2: useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [220, 270, 250, 230])
            }}
          />
          <motion.rect 
            x="40" 
            y="250" 
            width="20" 
            height="15" 
            fill="#9b87f5"
            stroke="#000000e6" 
            style={{ 
              y: useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [220, 270, 250, 230])
            }}
          />
        </svg>
      </motion.div>

      {/* Handwritten path animations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M100,200 C150,150 200,180 250,150 C300,120 350,200 400,180 C450,160 500,100 550,120"
          className="handwritten-path"
          stroke="#9b87f5"
          strokeWidth="2"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: useTransform(path1Length, [0, 1], [1000, 0])
          }}
        />
        
        <motion.path
          d="M150,300 C200,280 250,320 300,290 C350,260 400,300 450,270 C500,240 550,270 600,240"
          className="handwritten-path"
          stroke="#0EA5E9"
          strokeWidth="2"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: useTransform(path2Length, [0, 1], [1000, 0])
          }}
        />
        
        <motion.path
          d="M50,100 C100,120 150,80 200,100 C250,120 300,80 350,100 C400,120 450,80 500,100"
          className="handwritten-path"
          stroke="#F97316"
          strokeWidth="2"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: useTransform(path3Length, [0, 1], [1000, 0])
          }}
        />
      </svg>

      {/* Containers or shelves in the background */}
      <motion.div 
        className="absolute top-1/3 right-10"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]) }}
      >
        <Container className="h-32 w-32 text-red-400/30" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 left-20"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]) }}
      >
        <Container className="h-24 w-24 text-green-400/30" />
      </motion.div>
      
      {/* Shelving units */}
      <div className="absolute top-10 right-1/3">
        <svg width="120" height="200" viewBox="0 0 120 200">
          {/* Shelf structure */}
          <rect x="10" y="10" width="100" height="180" className="warehouse-shelf" fillOpacity="0.2" />
          <rect x="10" y="10" width="100" height="10" className="warehouse-shelf" />
          <rect x="10" y="70" width="100" height="10" className="warehouse-shelf" />
          <rect x="10" y="130" width="100" height="10" className="warehouse-shelf" />
          <rect x="10" y="190" width="100" height="10" className="warehouse-shelf" />
          <rect x="10" y="10" width="5" height="190" className="warehouse-shelf" />
          <rect x="105" y="10" width="5" height="190" className="warehouse-shelf" />
          
          {/* Items on shelves */}
          <motion.g style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 5]) }}>
            <rect x="20" y="25" width="30" height="40" fill="#9b87f5" opacity="0.6" />
            <rect x="60" y="35" width="40" height="30" fill="#0EA5E9" opacity="0.6" />
            <rect x="25" y="85" width="35" height="25" fill="#F97316" opacity="0.6" />
            <rect x="70" y="80" width="25" height="45" fill="#9b87f5" opacity="0.6" />
            <rect x="30" y="145" width="40" height="35" fill="#0EA5E9" opacity="0.6" />
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default WarehouseScene;
