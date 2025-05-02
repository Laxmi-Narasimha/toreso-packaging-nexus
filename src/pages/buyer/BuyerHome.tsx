
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BuyerHome = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Featured suppliers
  const featuredSuppliers = [
    {
      name: "PackRight Industries",
      category: "Corrugated Packaging",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.8
    },
    {
      name: "EcoPack Solutions",
      category: "Sustainable Packaging",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.9
    },
    {
      name: "SecurePack Ltd.",
      category: "Protective Packaging",
      image: "https://images.unsplash.com/photo-1530315449555-479768a2d74a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.7
    },
    {
      name: "FlexiWrap Co.",
      category: "Flexible Packaging",
      image: "https://images.unsplash.com/photo-1574068455509-a006e20d7962?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5
    }
  ];
  
  // Solutions
  const solutions = [
    {
      icon: "🌱",
      title: "Sustainable Solutions",
      description: "Find eco-friendly packaging options that reduce environmental impact while maintaining quality."
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description: "Access competitive pricing and volume discounts from verified suppliers."
    },
    {
      icon: "🚚",
      title: "Supply Chain Efficiency",
      description: "Streamline your procurement process with direct supplier connections."
    },
    {
      icon: "🛡️",
      title: "Quality Assurance",
      description: "All suppliers are vetted to ensure they meet strict quality standards."
    }
  ];

  // Certification badges
  const certifications = [
    { name: "ISO 9001", image: "/lovable-uploads/a92d8832-2660-493b-acc7-490f799adcf3.png" },
    { name: "IATF 16949", image: "/lovable-uploads/ade7c73d-1bce-4d10-9047-b9ad090db91d.png" },
    { name: "ISO 17025", image: "/lovable-uploads/fc5679b9-ca4b-49f5-81d9-ead1d1b214a1.png" },
    { name: "VDA 6.1", image: "/lovable-uploads/9a2d42e0-19ec-4599-9d6a-d63cc2f4a8d4.png" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity, scale }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://videos.pexels.com/video-files/7955998/7955998-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-white relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full p-4 mb-8 cursor-pointer hover:bg-white/20 transition-all"
              >
                <Play className="h-6 w-6 text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-6 leading-tight"
              >
                <span className="text-toreso-blue block md:inline">Packaging</span> Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-3xl text-white/80 max-w-3xl mx-auto mb-12 font-light"
              >
                Find the right packaging materials for your business from verified suppliers at competitive prices.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white text-lg py-6 px-8">
                  <Link to="/buyer/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                  <Link to="/buyer/products">Browse Products</Link>
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
            <ChevronDown className="h-6 w-6 text-white/80" />
            <span className="text-xs text-white/80 mt-1">Scroll Down</span>
          </motion.div>
        </div>
      </section>

      {/* Quote Section - Inspired by Flex-N-Gate */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-display mb-6 leading-tight">
                <span className="text-toreso-blue block">"Working today</span> towards a better tomorrow"
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
                Toreso, as a leader in packaging procurement solutions, is committed to connecting businesses with sustainable and innovative packaging options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions with Icons - Inspired by Flex-N-Gate */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-y-20 gap-x-16 items-start">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="text-4xl">{solution.icon}</div>
                <div>
                  <h3 className="text-2xl font-medium mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-lg">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Certifications - Inspired by Flex-N-Gate */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/3">
                <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
                  Our <span className="text-toreso-blue">certifications</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Toreso is committed to continual improvement of its supply chain management systems and collaborating with our vendors to provide World Class Quality products.
                </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className="h-32 flex items-center justify-center mb-4">
                      <img 
                        src={cert.image} 
                        alt={cert.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-medium text-center">{cert.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section with Large Text - Flex-N-Gate Style */}
      <section className="py-24 bg-[#1A1F2C] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            <h2 className="text-[10rem] lg:text-[15rem] font-display font-bold text-opacity-10 text-blue-400/10 absolute -top-20 left-0 whitespace-nowrap">
              Quality First
            </h2>
            
            <div className="relative z-10 max-w-5xl ml-auto">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-4xl md:text-5xl font-display mb-6 text-blue-400">Impactful design</h3>
                <p className="text-xl text-gray-300 max-w-xl">
                  Our platform always looks for innovative packaging solutions that not only protect products but also enhance their appeal and reduce environmental impact.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <p className="text-lg text-gray-300">
                    Our sourcing teams always look for suppliers with new materials and innovative solutions to enhance the appeal and functionality of packaging.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <p className="text-lg text-gray-300">
                    At Toreso, we keep looking for suppliers that deliver at an industrial maturity level that allows safe launches and perfect quality levels.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Suppliers with Modern Card Layout */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-toreso-blue/10 text-toreso-blue border-none">
              Verified Partners
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Top <span className="text-toreso-blue">Suppliers</span>
            </h2>
            <p className="text-lg text-gray-600 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Discover quality packaging materials from our verified supplier network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSuppliers.map((supplier, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={supplier.image} 
                    alt={supplier.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-2 bg-gray-100 text-gray-800 border-none">
                    {supplier.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{supplier.name}</h3>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(supplier.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{supplier.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-toreso-blue text-toreso-blue hover:bg-toreso-blue/5">
              <Link to="/buyer/suppliers">View All Suppliers <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-toreso-blue to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Ready to Optimize Your Packaging?
            </h2>
            <p className="text-xl text-white/80 mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Access your dashboard to start finding the perfect packaging solutions for your business.
            </p>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                <Link to="/buyer/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyerHome;
