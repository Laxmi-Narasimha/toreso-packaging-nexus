
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductData {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  image: string;
  actionText: string;
}

const products: ProductData[] = [
  {
    id: 1,
    title: "Multi-Plant Procurement",
    description: "Streamline your organization's procurement process across multiple facilities.",
    bgColor: "bg-gradient-to-br from-toreso-teal/30 to-toreso-blue/30",
    image: "/lovable-uploads/50d6e765-5da0-4142-a896-ac386b1added.png",
    actionText: "Explore Solutions"
  },
  {
    id: 2,
    title: "Supplier Verification",
    description: "Work with thoroughly vetted suppliers that meet the highest quality standards.",
    bgColor: "bg-gradient-to-br from-toreso-purple/30 to-toreso-blue/30",
    image: "/lovable-uploads/593b42dc-c30c-44d2-815b-b0858d29981e.png",
    actionText: "View Process"
  },
  {
    id: 3,
    title: "Volume Optimization",
    description: "Leverage data-driven insights to optimize purchasing volumes and reduce costs.",
    bgColor: "bg-gradient-to-br from-toreso-orange/30 to-toreso-teal/30",
    image: "/lovable-uploads/12e02e86-7701-4ed5-8812-6920bd392825.png",
    actionText: "Get Started"
  }
];

interface ProductCarouselProps {
  onThemeChange: (color: string) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ onThemeChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    // Change theme when product changes
    onThemeChange(products[currentIndex].bgColor);
    
    // Auto-advance the carousel every 6 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex, onThemeChange]);

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

  return (
    <div className="relative h-full w-full overflow-hidden">
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
              <motion.img
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-full max-w-md object-contain h-[300px] md:h-[400px]"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  transition: { delay: 0.3, duration: 0.7 }
                }}
              />
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
    </div>
  );
};

export default ProductCarousel;
