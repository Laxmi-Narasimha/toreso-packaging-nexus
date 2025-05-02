
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BuyerHome = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
    
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
  
  // Trending products
  const trendingProducts = [
    {
      name: "Eco-Friendly Corrugated Boxes",
      category: "Shipping Supplies",
      image: "https://images.unsplash.com/photo-1600494448859-54ee4a13494b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Biodegradable Void Fill",
      category: "Protective Packaging",
      image: "https://images.unsplash.com/photo-1605640156485-d7613916e5da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Custom Printed Kraft Paper",
      category: "Branding Solutions",
      image: "https://images.unsplash.com/photo-1579170053380-58064b2dee67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
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
        </div>

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
                className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6"
              >
                Source the <span className="text-toreso-blue">Perfect Packaging</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
              >
                Find the right packaging solutions for your business from verified suppliers at competitive prices.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                  <Link to="/buyer/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
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

      {/* Featured Suppliers */}
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
                className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 rounded-lg overflow-hidden">
                  <img 
                    src={supplier.image} 
                    alt={supplier.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
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
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/buyer/suppliers">View All Suppliers <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-toreso-orange/10 text-toreso-orange border-none">
                Trending Now
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8">
                Popular <span className="text-toreso-blue">Products</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Discover the most sought-after packaging solutions that businesses like yours are using to enhance their operations and customer experience.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From eco-friendly alternatives to high-performance protective solutions, find exactly what your business needs at competitive prices.
              </p>
              <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                <Link to="/buyer/products">Browse Catalog <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {trendingProducts.map((product, index) => (
                  <Card key={index} className={`overflow-hidden shadow-md hover:shadow-lg transition-shadow ${index === 2 ? "sm:col-span-2" : ""}`}>
                    <div className="h-48 bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge className="mb-2 bg-gray-100 text-gray-800 border-none">
                        {product.category}
                      </Badge>
                      <h3 className="font-medium">{product.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
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
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
