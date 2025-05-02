
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Package, Shield, Users, TrendingUp, Award, ChevronDown } from "lucide-react";

const Index = () => {
  const videoRef = useRef<HTMLDivElement>(null);
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
  
  const shapes = [
    { id: 1, x: -20, y: 120, color: 'bg-toreso-blue', size: 'h-24 w-24', delay: 0.2, shape: 'rounded-full' },
    { id: 2, x: 420, y: 180, color: 'bg-toreso-teal', size: 'h-32 w-32', delay: 0.4, shape: 'rounded-lg' },
    { id: 3, x: 220, y: 320, color: 'bg-toreso-purple', size: 'h-20 w-20', delay: 0.6, shape: 'rounded-full' },
    { id: 4, x: -120, y: 420, color: 'bg-toreso-orange', size: 'h-28 w-28', delay: 0.8, shape: 'rounded-lg' },
  ];
  
  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-white dark:bg-[#1A1F2C]">
      {/* Interactive background elements */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`fixed ${shape.color} ${shape.size} ${shape.shape} blur-3xl opacity-20 pointer-events-none z-0`}
          initial={{ x: shape.x, y: shape.y, opacity: 0 }}
          animate={{ 
            opacity: 0.2,
            x: isHovering ? shape.x + (cursorPosition.x * 0.02) : shape.x,
            y: isHovering ? shape.y + (cursorPosition.y * 0.02) : shape.y,
          }}
          transition={{ delay: shape.delay, duration: 0.8 }}
        />
      ))}

      {/* Custom cursor follower */}
      <motion.div
        className="fixed w-40 h-40 rounded-full bg-toreso-blue/10 pointer-events-none z-0 hidden md:block"
        animate={{
          x: cursorPosition.x - 80,
          y: cursorPosition.y - 80,
        }}
        transition={{ type: "spring", damping: 10, mass: 0.5 }}
      />

      {/* Hero Section with Illustrated Elements */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale, y }}
          className="absolute inset-0 z-0"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Illustrated Background */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.div 
              className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-toreso-blue/20 to-toreso-teal/20"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-toreso-purple/10 to-toreso-orange/10"
              animate={{ 
                scale: [1.1, 1, 1.1],
                rotate: [10, 0, 10],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  initial={{
                    opacity: Math.random() * 0.5 + 0.1,
                    width: Math.random() * 8 + 2,
                    height: Math.random() * 8 + 2,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{
                    y: [null, Math.random() * -window.innerHeight],
                    opacity: [null, 0],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Floating Graphical Elements */}
            <motion.div
              className="absolute -top-20 -right-20 w-80 h-80"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded bg-toreso-blue/20 transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div
              className="absolute -bottom-40 -left-40 w-120 h-120"
              animate={{ rotate: -360 }}
              transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-toreso-purple/20 transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center bg-gradient-to-tr from-toreso-blue to-toreso-teal p-4 mb-8 cursor-pointer rounded-full hover:shadow-lg hover:shadow-toreso-blue/20 transition-all"
                onClick={() => videoRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="h-6 w-6 text-white" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative inline-block mb-6"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-8xl font-display font-medium tracking-tight relative z-10"
                >
                  We are <span className="text-toreso-blue relative">
                    Toreso
                    <motion.div
                      className="absolute -bottom-2 left-0 h-3 bg-toreso-blue/20 w-full -z-10"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    />
                  </span>
                </motion.h1>
                
                {/* Animated decorative elements */}
                <motion.div
                  className="absolute -right-8 -top-8 w-16 h-16 rounded-full border border-toreso-orange/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                />
                <motion.div
                  className="absolute -left-12 top-1/2 w-8 h-8 rounded border border-toreso-teal/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
              >
                Revolutionizing the packaging industry through innovation, quality, and sustainability.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white relative overflow-hidden group">
                  <Link to="/register">
                    <span className="relative z-10 flex items-center">
                      Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-toreso-blue to-toreso-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300">
                  <Link to="/login">Login</Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <ChevronDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
            <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">Scroll Down</span>
          </motion.div>
        </div>
      </section>

      {/* About Section with Illustrations */}
      <section className="py-20 md:py-32 bg-white dark:bg-[#1A1F2C] relative overflow-hidden">
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
                {/* SVG abstract illustration */}
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
                  </defs>
                  
                  {/* Background */}
                  <rect width="800" height="450" fill="#f8fafc" />
                  
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
                  
                  {/* Package icon */}
                  <motion.g 
                    transform="translate(400, 225) scale(3)"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    fill="white"
                    stroke="#2C5EF6"
                    strokeWidth="1"
                  >
                    <rect x="-15" y="-15" width="30" height="30" rx="2" />
                    <line x1="-15" y1="0" x2="15" y2="0" />
                    <line x1="0" y1="-15" x2="0" y2="15" />
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
                description: "Consolidate purchasing power across multiple facilities for maximum cost savings."
              },
              {
                icon: <Shield className="h-8 w-8 text-toreso-teal" />,
                title: "Supplier Verification",
                description: "Work with thoroughly vetted suppliers that meet the highest quality standards."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-toreso-purple" />,
                title: "Volume Optimization",
                description: "Leverage data-driven insights to optimize purchasing volumes and reduce costs."
              },
              {
                icon: <Award className="h-8 w-8 text-toreso-orange" />,
                title: "Quality Assurance",
                description: "Ensure consistent quality with our comprehensive certification tracking."
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
                className="bg-white dark:bg-[#1A1F2C] p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/30 dark:to-gray-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
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
        </div>
      </section>
    </div>
  );
};

export default Index;
