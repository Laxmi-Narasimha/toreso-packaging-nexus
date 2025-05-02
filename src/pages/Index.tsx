
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Bot, Package, Shield, TrendingUp } from "lucide-react";
import WarehouseScene from "@/components/illustrations/WarehouseScene";
import RobotArmAnimation from "@/components/illustrations/RobotArmAnimation";
import PackagingProcess from "@/components/illustrations/PackagingProcess";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      elements.forEach((el) => observer.unobserve(el));
    }
  }, []);

  // SVG path drawing animation
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.8,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#1A1F2C] to-[#0f1319]">
      {/* Dynamic background with SVG patterns */}
      <div className="fixed inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <filter id="hand-drawn-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      {/* Custom cursor follower */}
      <motion.div
        className="fixed w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 pointer-events-none z-0 hidden md:block"
        animate={{
          x: cursorPosition.x - 80,
          y: cursorPosition.y - 80,
        }}
        transition={{ type: "spring", damping: 10, mass: 0.5 }}
      />

      {/* Hero Section with Warehouse Illustration */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-6 leading-tight text-white"
            >
              <span className="text-toreso-blue">Packaging</span> Solutions
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="block h-1 bg-gradient-to-r from-toreso-blue to-toreso-teal mt-2 mx-auto"
                style={{ maxWidth: "300px" }}
              ></motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-3xl text-white/80 max-w-3xl mx-auto mb-12 font-light"
            >
              Find the right packaging materials for your business from verified suppliers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white text-lg py-6 px-8">
                <Link to="/buyer/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                <Link to="/buyer/products">Browse Products</Link>
              </Button>
            </motion.div>
          </div>

          {/* Warehouse Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-[500px] mb-12"
          >
            <WarehouseScene />
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
        >
          <ChevronDown className="h-6 w-6" />
          <span className="text-xs mt-1">Scroll Down</span>
        </motion.div>
      </section>

      {/* Packaging Process Animation Section */}
      <section className="py-24 relative bg-gradient-to-b from-[#1A1F2C] to-[#161B26] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
                Our <span className="text-toreso-blue">Process</span>
              </h2>
              <p className="text-xl text-white/70 mb-8">
                From design to delivery, our automated systems ensure your packaging needs are met with precision.
              </p>
            </motion.div>
          </div>

          <div className="w-full h-[600px]">
            <PackagingProcess />
          </div>
        </div>
      </section>

      {/* Robot Arm Animation Section */}
      <section className="py-24 relative bg-gradient-to-b from-[#161B26] to-[#0f1319] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
                  <span className="text-toreso-blue">Robotic</span> Integration
                </h2>
                <p className="text-lg text-white/70 mb-6">
                  Our platform connects you with suppliers who integrate cutting-edge robotics into their packaging solutions, enhancing efficiency and precision.
                </p>
                <p className="text-lg text-white/70 mb-8">
                  Leverage automated systems to streamline your production process and reduce costs while maintaining quality.
                </p>
                <Button asChild className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                  <Link to="/solutions">Explore Solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="h-[600px]">
              <RobotArmAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 relative bg-[#0f1319] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6"
            >
              Our <span className="text-toreso-blue">Solutions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70"
            >
              Explore our comprehensive suite of packaging solutions designed for modern enterprises.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Package className="h-8 w-8 text-toreso-blue" />,
                title: "Multi-Plant Procurement",
                description: "Consolidate purchasing power across multiple facilities for maximum cost savings."
              },
              {
                icon: <Shield className="h-8 w-8 text-toreso-teal" />,
                title: "Supplier Verification",
                description: "Work with thoroughly vetted suppliers that meet the highest quality standards."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
                title: "Volume Optimization",
                description: "Leverage data-driven insights to optimize purchasing volumes and reduce costs."
              },
              {
                icon: <Bot className="h-8 w-8 text-orange-400" />,
                title: "Robotic Integration",
                description: "Seamlessly integrate modern robotics systems into your packaging operations."
              }
            ].map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-white/10 to-transparent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{solution.title}</h3>
                <p className="text-white/70">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SVG Illustration background */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0,400 C200,300 400,500 600,400 S800,300 1000,400" 
            fill="none" 
            stroke="#2C5EF6" 
            strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.path 
            d="M0,200 C200,100 400,300 600,200 S800,100 1000,200" 
            fill="none" 
            stroke="#00C9B6" 
            strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />
          <motion.path 
            d="M0,600 C200,500 400,700 600,600 S800,500 1000,600" 
            fill="none" 
            stroke="#9b87f5" 
            strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          />
        </svg>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-toreso-blue to-blue-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6"
            >
              Ready to Transform Your Packaging Procurement?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl text-white/80 mb-10"
            >
              Join hundreds of enterprises that have revolutionized their packaging supply chain with Toreso.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 relative overflow-hidden group">
                <Link to="/login">
                  <span className="relative z-10">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Handwritten style path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M-100,400 C100,300 300,500 500,400 S700,300 900,200 S1100,400 1300,300" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            strokeDasharray="4,4"
            opacity="0.2"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </svg>
      </section>
    </div>
  );
};

export default Index;
