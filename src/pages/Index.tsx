
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Package, Shield, Bot, TrendingUp, Award, ChevronDown } from "lucide-react";
import ProductCarousel from "@/components/home/ProductCarousel";
import AnimatedBackground from "@/components/home/AnimatedBackground";

const Index = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("bg-gradient-to-br from-toreso-teal/30 to-toreso-blue/30");

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
  
  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
  };

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
    <div ref={containerRef} className="min-h-screen overflow-x-hidden">
      {/* Dynamic background */}
      <AnimatedBackground theme={currentTheme} />

      {/* Custom cursor follower */}
      <motion.div
        className="fixed w-40 h-40 rounded-full bg-toreso-blue/10 pointer-events-none z-0 hidden md:block"
        animate={{
          x: cursorPosition.x - 80,
          y: cursorPosition.y - 80,
        }}
        transition={{ type: "spring", damping: 10, mass: 0.5 }}
      />

      {/* Hero Section with Dynamic Product Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10">
          <ProductCarousel onThemeChange={handleThemeChange} />
        </div>

        {/* Illustrated decorative elements */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          {/* Grid pattern */}
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" className="text-white opacity-10" />
          
          {/* Decorative shapes */}
          <motion.circle 
            cx="10%" 
            cy="20%" 
            r="30" 
            stroke="white" 
            strokeWidth="0.5" 
            fill="none" 
            opacity="0.2"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.circle 
            cx="90%" 
            cy="80%" 
            r="40" 
            stroke="white" 
            strokeWidth="0.5" 
            fill="none" 
            opacity="0.2"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          />
          <motion.path 
            d="M 10%,50% Q 50%,0% 90%,50% T 10%,50%" 
            fill="none" 
            stroke="white" 
            strokeWidth="0.5" 
            opacity="0.1"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          />
        </svg>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        >
          <ChevronDown className="h-6 w-6 text-white" />
          <span className="text-xs text-white mt-1">Scroll Down</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-[#1A1F2C]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8 dark:text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
                Transforming the <span className="text-toreso-blue">Packaging Industry</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
                At Toreso, we combine cutting-edge technology with industry expertise to revolutionize packaging procurement and supply chain management.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
                Our platform connects enterprises with verified suppliers, ensuring quality, sustainability, and efficiency across all operations.
              </p>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
                <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white group">
                  <Link to="/about">
                    Learn More 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-400">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                {/* Illustrative SVG animation */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2C5EF6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00C9B6" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#F97316" stopOpacity="0.3" />
                    </linearGradient>
                    <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#2C5EF6" opacity="0.3" />
                    </pattern>
                  </defs>
                  
                  {/* Background */}
                  <rect width="800" height="450" fill="#f8fafc" />
                  <rect width="800" height="450" fill="url(#dotPattern)" />
                  
                  {/* Abstract shapes */}
                  <motion.circle 
                    cx="200" cy="225" r="100" 
                    fill="url(#gradient1)" 
                    animate={{ r: [100, 110, 100] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <motion.rect 
                    x="400" y="150" width="300" height="300" rx="20" 
                    fill="url(#gradient2)"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 12, repeat: Infinity }}
                  />
                  
                  {/* Robot arm illustration */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {/* Base */}
                    <motion.rect 
                      x="100" y="350" width="150" height="30" rx="5"
                      fill="#2C5EF6" opacity="0.8"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Main arm */}
                    <motion.path 
                      d="M175,350 L175,250" 
                      stroke="#2C5EF6" strokeWidth="20" strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                    
                    {/* Secondary arm */}
                    <motion.path 
                      d="M175,250 L275,200" 
                      stroke="#2C5EF6" strokeWidth="15" strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    />
                    
                    {/* Tertiary arm */}
                    <motion.path 
                      d="M275,200 L350,230" 
                      stroke="#2C5EF6" strokeWidth="10" strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 2.6 }}
                    />
                    
                    {/* Gripper */}
                    <motion.path 
                      d="M350,220 L365,205 M350,240 L365,255" 
                      stroke="#2C5EF6" strokeWidth="8" strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 3.2 }}
                    />
                    
                    {/* Package */}
                    <motion.rect 
                      x="380" y="210" width="60" height="40" rx="5" 
                      fill="#00C9B6" opacity="0.5"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 0.5, x: 0 }}
                      transition={{ duration: 0.8, delay: 3.6 }}
                    />
                    
                    {/* Joints */}
                    <motion.circle cx="175" cy="350" r="12" fill="#1a1f2c" opacity="0.8" 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 1 }}
                    />
                    <motion.circle cx="175" cy="250" r="10" fill="#1a1f2c" opacity="0.8"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.8 }}
                    />
                    <motion.circle cx="275" cy="200" r="8" fill="#1a1f2c" opacity="0.8"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 2.6 }}
                    />
                    <motion.circle cx="350" cy="230" r="6" fill="#1a1f2c" opacity="0.8"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 3.2 }}
                    />
                    
                    {/* Conveyor belt */}
                    <motion.rect 
                      x="450" y="250" width="250" height="10" 
                      fill="#1a1f2c" opacity="0.6"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 4 }}
                    />
                    
                    {/* Conveyor belt supports */}
                    <motion.rect x="480" y="260" width="10" height="40" fill="#1a1f2c" opacity="0.6"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 4.2 }}
                    />
                    <motion.rect x="660" y="260" width="10" height="40" fill="#1a1f2c" opacity="0.6"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 4.4 }}
                    />
                    
                    {/* Packages on conveyor */}
                    <motion.rect 
                      x="500" y="225" width="40" height="25" rx="3" 
                      fill="#00C9B6" opacity="0.6"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 0.6, y: 0 }}
                      transition={{ duration: 0.5, delay: 4.6 }}
                    />
                    <motion.rect 
                      x="560" y="225" width="40" height="25" rx="3" 
                      fill="#00C9B6" opacity="0.6"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 0.6, y: 0 }}
                      transition={{ duration: 0.5, delay: 4.8 }}
                    />
                    <motion.rect 
                      x="620" y="225" width="40" height="25" rx="3" 
                      fill="#00C9B6" opacity="0.6"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 0.6, y: 0 }}
                      transition={{ duration: 0.5, delay: 5 }}
                    />
                  </motion.g>
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div ref={videoRef} className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                  <Play className="h-6 w-6 text-toreso-blue ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-64 h-64 bg-toreso-blue/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-toreso-teal/5 rounded-full filter blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-[#161B26] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 dark:text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Our Core Capabilities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Discover how Toreso is revolutionizing packaging procurement and supply chain management for enterprises worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Package className="h-8 w-8 text-toreso-blue" />,
                title: "Multi-Plant Procurement",
                description: "Consolidate purchasing power across multiple facilities for maximum cost savings.",
                illustration: (
                  <motion.svg viewBox="0 0 100 100" className="absolute top-0 right-0 w-28 h-28 opacity-10">
                    <motion.rect 
                      x="20" 
                      y="20" 
                      width="60" 
                      height="60" 
                      rx="5" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                    <motion.path 
                      d="M20,50 L80,50 M50,20 L50,80" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.svg>
                )
              },
              {
                icon: <Shield className="h-8 w-8 text-toreso-teal" />,
                title: "Supplier Verification",
                description: "Work with thoroughly vetted suppliers that meet the highest quality standards.",
                illustration: (
                  <motion.svg viewBox="0 0 100 100" className="absolute top-0 right-0 w-28 h-28 opacity-10">
                    <motion.path 
                      d="M50,10 L80,25 L80,55 C80,70 65,85 50,90 C35,85 20,70 20,55 L20,25 L50,10 Z" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                    <motion.path 
                      d="M40,50 L50,60 L65,40" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                    />
                  </motion.svg>
                )
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-toreso-purple" />,
                title: "Volume Optimization",
                description: "Leverage data-driven insights to optimize purchasing volumes and reduce costs.",
                illustration: (
                  <motion.svg viewBox="0 0 100 100" className="absolute top-0 right-0 w-28 h-28 opacity-10">
                    <motion.path 
                      d="M10,80 L90,80" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.path 
                      d="M10,80 L10,20" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                    <motion.path 
                      d="M10,60 L30,45 L50,65 L70,25 L90,25" 
                      stroke="currentColor" 
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </motion.svg>
                )
              },
              {
                icon: <Robot className="h-8 w-8 text-toreso-orange" />,
                title: "Robotic Integration",
                description: "Seamlessly integrate modern robotics systems into your packaging operations.",
                illustration: (
                  <motion.svg viewBox="0 0 100 100" className="absolute top-0 right-0 w-28 h-28 opacity-10">
                    <motion.rect 
                      x="30" 
                      y="30" 
                      width="40" 
                      height="50" 
                      rx="5" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                    <motion.circle 
                      cx="40" 
                      cy="45" 
                      r="5" 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                    />
                    <motion.circle 
                      cx="60" 
                      cy="45" 
                      r="5" 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    />
                    <motion.path 
                      d="M40,65 Q50,75 60,65" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    />
                  </motion.svg>
                )
              },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white dark:bg-[#1A1F2C] p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 relative overflow-hidden"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/30 dark:to-gray-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                
                {/* Illustrated element */}
                {feature.illustration}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-toreso-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-toreso-orange/5 rounded-full filter blur-3xl"></div>
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0,225 Q200,100 400,225 T800,225" 
            fill="none" 
            stroke="rgba(44, 94, 246, 0.07)" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          <motion.path 
            d="M0,250 Q200,375 400,250 T800,250" 
            fill="none" 
            stroke="rgba(0, 201, 182, 0.07)" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
        </svg>
        
        {/* Illustrated flow lines */}
        <motion.svg 
          className="absolute top-1/4 left-0 w-full h-1/2 opacity-10 pointer-events-none" 
          viewBox="0 0 1000 300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <motion.path 
            d="M0,150 C200,50 300,250 500,150 C700,50 800,250 1000,150" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="10,10" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="500" 
            cy="150" 
            r="10" 
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              cx: [500, 1000, 500],
              transition: {
                scale: { duration: 0.5, delay: 1 },
                cx: { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }
              }
            }}
          />
        </motion.svg>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-toreso-blue text-white relative overflow-hidden">
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
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-10 right-10 w-80 h-80 rounded-full bg-white/5"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5"
            animate={{ 
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          />
          
          {/* Floating particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -200, null],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
          
          {/* Illustrated packaging nodes */}
          <motion.svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 1000 500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
          >
            <motion.path 
              d="M100,400 L300,350 L500,400 L700,350 L900,400" 
              stroke="white" 
              strokeWidth="1" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path 
              d="M100,400 L100,300 L300,250 L300,350" 
              stroke="white" 
              strokeWidth="1" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            <motion.path 
              d="M300,250 L500,300 L500,400" 
              stroke="white" 
              strokeWidth="1" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
            />
            <motion.path 
              d="M500,300 L700,250 L700,350" 
              stroke="white" 
              strokeWidth="1" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 3 }}
            />
            <motion.path 
              d="M700,250 L900,300 L900,400" 
              stroke="white" 
              strokeWidth="1" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 4 }}
            />
            
            {/* Nodes */}
            <motion.circle 
              cx="300" 
              cy="250" 
              r="8" 
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            />
            <motion.circle 
              cx="500" 
              cy="300" 
              r="8" 
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 2 }}
            />
            <motion.circle 
              cx="700" 
              cy="250" 
              r="8" 
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 3 }}
            />
            <motion.circle 
              cx="900" 
              cy="300" 
              r="8" 
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 4 }}
            />
            
            {/* Moving blob/data point */}
            <motion.circle 
              cx="100" 
              cy="400" 
              r="5" 
              fill="white"
              animate={{ 
                cx: [100, 300, 500, 700, 900],
                cy: [400, 350, 400, 350, 400],
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{ 
                duration: 8, 
                ease: "easeInOut", 
                repeat: Infinity 
              }}
            />
          </motion.svg>
        </div>
      </section>
    </div>
  );
};

export default Index;
