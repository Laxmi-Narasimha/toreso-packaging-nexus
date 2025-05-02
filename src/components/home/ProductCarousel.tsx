
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Package, Robot, TrendingUp, Shield } from "lucide-react";

interface ProductData {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  image: string;
  actionText: string;
  icon: React.ReactNode;
  illustration: JSX.Element;
}

const products: ProductData[] = [
  {
    id: 1,
    title: "Multi-Plant Procurement",
    description: "Streamline your organization's procurement process across multiple facilities, optimizing costs and ensuring consistency.",
    bgColor: "bg-gradient-to-br from-toreso-teal/30 to-toreso-blue/30",
    image: "/lovable-uploads/50d6e765-5da0-4142-a896-ac386b1added.png",
    actionText: "Explore Solutions",
    icon: <Package className="h-6 w-6" />,
    illustration: (
      <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M60,100 L150,50 L240,100 L150,150 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path 
          d="M60,100 L60,200 L150,250 L150,150 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path 
          d="M150,150 L150,250 L240,200 L240,100 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.path 
          d="M90,125 Q150,160 210,125" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        />
        <motion.circle 
          cx="90" 
          cy="125" 
          r="8" 
          fill="currentColor" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        />
        <motion.circle 
          cx="210" 
          cy="125" 
          r="8" 
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2.7 }}
        />
      </svg>
    )
  },
  {
    id: 2,
    title: "Supplier Verification",
    description: "Work with thoroughly vetted suppliers that meet the highest quality standards, ensuring reliable and consistent partnerships.",
    bgColor: "bg-gradient-to-br from-toreso-purple/30 to-toreso-blue/30",
    image: "/lovable-uploads/593b42dc-c30c-44d2-815b-b0858d29981e.png",
    actionText: "View Process",
    icon: <Shield className="h-6 w-6" />,
    illustration: (
      <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle 
          cx="150" 
          cy="150" 
          r="80" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path 
          d="M130,120 L150,140 L180,110" 
          stroke="currentColor" 
          strokeWidth="3" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.path 
          d="M150,90 L150,210" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        />
        <motion.path 
          d="M90,150 L210,150" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
        />
        <motion.path 
          d="M110,110 L190,190" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
        />
        <motion.path 
          d="M110,190 L190,110" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
        />
      </svg>
    )
  },
  {
    id: 3,
    title: "Volume Optimization",
    description: "Leverage data-driven insights to optimize purchasing volumes and reduce costs while maintaining the highest quality standards.",
    bgColor: "bg-gradient-to-br from-toreso-orange/30 to-toreso-teal/30",
    image: "/lovable-uploads/12e02e86-7701-4ed5-8812-6920bd392825.png",
    actionText: "Get Started",
    icon: <TrendingUp className="h-6 w-6" />,
    illustration: (
      <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.line 
          x1="50" 
          y1="230" 
          x2="250" 
          y2="230" 
          stroke="currentColor" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.line 
          x1="50" 
          y1="230" 
          x2="50" 
          y2="70" 
          stroke="currentColor" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.path 
          d="M50,190 L90,160 L130,180 L170,120 L210,80 L250,70" 
          stroke="currentColor" 
          strokeWidth="3" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 1.2 }}
        />
        <motion.circle 
          cx="90" 
          cy="160" 
          r="6" 
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.8 }}
        />
        <motion.circle 
          cx="130" 
          cy="180" 
          r="6" 
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 2 }}
        />
        <motion.circle 
          cx="170" 
          cy="120" 
          r="6" 
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 2.2 }}
        />
        <motion.circle 
          cx="210" 
          cy="80" 
          r="6" 
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 2.4 }}
        />
        <motion.circle 
          cx="250" 
          cy="70" 
          r="6" 
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 2.6 }}
        />
      </svg>
    )
  },
  {
    id: 4,
    title: "Robotic Integration",
    description: "Integrate robotics into your packaging workflow for increased efficiency, precision, and reduced operational costs.",
    bgColor: "bg-gradient-to-br from-toreso-blue/30 to-toreso-purple/30",
    image: "/lovable-uploads/ade7c73d-1bce-4d10-9047-b9ad090db91d.png",
    actionText: "View Robots",
    icon: <Robot className="h-6 w-6" />,
    illustration: (
      <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.rect 
          x="100" 
          y="100" 
          width="100" 
          height="130" 
          rx="10" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.circle 
          cx="130" 
          cy="130" 
          r="10" 
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        />
        <motion.circle 
          cx="170" 
          cy="130" 
          r="10" 
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        />
        <motion.path 
          d="M130,180 Q150,200 170,180" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
        />
        <motion.path 
          d="M80,130 L100,130" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
        />
        <motion.path 
          d="M200,130 L220,130" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 3.2 }}
        />
        <motion.path 
          d="M150,70 L150,100" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 3.4 }}
        />
        <motion.circle 
          cx="150" 
          cy="70" 
          r="15" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 3.9 }}
        />
      </svg>
    )
  }
];

interface ProductCarouselProps {
  onThemeChange: (color: string) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ onThemeChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation tracking
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start", "end"]
  });
  
  // Map scroll progress to carousel index
  const scrollIndex = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [0, 1, 2, 3, 0]
  );
  
  // Update index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollIndex.on("change", (latest) => {
      const rounded = Math.round(latest);
      if (rounded !== currentIndex && rounded < products.length) {
        setDirection(rounded > currentIndex ? 1 : -1);
        setCurrentIndex(rounded % products.length);
      }
    });
    
    return () => unsubscribe();
  }, [scrollIndex, currentIndex]);

  useEffect(() => {
    // Change theme when product changes
    onThemeChange(products[currentIndex].bgColor);
    
    // Auto-advance the carousel every 6 seconds only if not being scrolled
    const interval = setInterval(() => {
      if (!document.documentElement.classList.contains("scrolling")) {
        handleNext();
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex, onThemeChange]);

  // Track scroll state
  useEffect(() => {
    let scrollTimeout: number;
    
    const handleScroll = () => {
      document.documentElement.classList.add("scrolling");
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        document.documentElement.classList.remove("scrolling");
      }, 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  // Animation variants for products
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  // Drawing animation variants
  const drawingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div ref={carouselRef} className="relative h-full w-full overflow-hidden">
      {/* Product display */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentProduct.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                  {currentProduct.icon}
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.5 }}
                  className="h-[2px] bg-white/30"
                />
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              >
                {currentProduct.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl mb-8 max-w-lg"
              >
                {currentProduct.description}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                  {currentProduct.actionText}
                </Button>
              </motion.div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <motion.div
                className="w-full max-w-md h-[300px] md:h-[400px] relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                {/* Hand-drawn style illustrations */}
                <motion.div 
                  className="absolute inset-0 w-full h-full text-white"
                  variants={drawingVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {currentProduct.illustration}
                </motion.div>

                {/* Product image with parallax effect */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    transition: { delay: 0.5, duration: 0.7 }
                  }}
                >
                  <motion.img
                    src={currentProduct.image}
                    alt={currentProduct.title}
                    className="w-full max-w-md object-contain h-[300px] md:h-[400px]"
                    animate={{ 
                      y: [0, -10, 0],
                      transition: { 
                        repeat: Infinity, 
                        duration: 5,
                        ease: "easeInOut" 
                      }
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="absolute z-10 flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrevious}
          className="bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/30 rounded-full shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext}
          className="bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/30 rounded-full shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {products.map((product, index) => (
          <button
            key={product.id}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            } transition-all duration-300`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>

      {/* Illustrated dotted line path connecting products */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M200,50 C300,100 100,200 200,250 C300,300 100,400 200,450"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default ProductCarousel;
