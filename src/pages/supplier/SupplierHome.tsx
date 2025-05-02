import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SupplierHome = () => {
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
  
  // Benefits list
  const benefits = [
    {
      title: "Expanded Reach",
      description: "Connect with hundreds of businesses across industries looking for quality packaging solutions.",
      icon: "🌐"
    },
    {
      title: "Verified Status",
      description: "Gain a competitive edge with official verification that builds immediate trust with buyers.",
      icon: "✓"
    },
    {
      title: "Streamlined Orders",
      description: "Manage all orders through a single platform with automated processing and tracking.",
      icon: "📦"
    },
    {
      title: "Market Insights",
      description: "Access detailed analytics on market trends and buyer preferences to optimize your offerings.",
      icon: "📊"
    },
  ];
  
  // Success stories
  const successStories = [
    {
      company: "EcoPack Solutions",
      quote: "Joining Toreso helped us expand our eco-friendly packaging line to new industries we hadn't previously reached. Our sales increased by 40% in just six months.",
      person: "Rajiv Patel, CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      company: "FlexiWrap Industries",
      quote: "The verification process gave our business immediate credibility with large enterprises. We've secured three major contracts that would have been impossible before.",
      person: "Neha Singh, Operations Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      company: "SafeShip Packaging",
      quote: "The analytics tools helped us identify a gap in the market for specialized electronics packaging. We've since developed a new product line that's now our best seller.",
      person: "Amir Khan, Product Manager",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
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
            <source src="https://videos.pexels.com/video-files/6167566/6167566-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
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
                Grow Your <span className="text-toreso-teal">Packaging Business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
              >
                Connect with enterprise buyers and expand your business through our trusted B2B platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild size="lg" className="bg-toreso-teal hover:bg-toreso-darkBlue text-white">
                  <Link to="/supplier/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/supplier/orders">Manage Orders</Link>
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

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-toreso-teal/10 text-toreso-teal border-none">
              For Suppliers
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Why Partner with <span className="text-toreso-teal">Toreso</span>
            </h2>
            <p className="text-lg text-gray-600 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Join our network of verified suppliers and transform how you connect with enterprise buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-toreso-purple/10 text-toreso-purple border-none">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Supplier <span className="text-toreso-teal">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Hear from suppliers who have grown their business through the Toreso platform.
            </p>
          </div>

          <Tabs defaultValue="story-0" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-2xl mx-auto">
              {successStories.map((story, index) => (
                <TabsTrigger key={index} value={`story-${index}`}>
                  {story.company}
                </TabsTrigger>
              ))}
            </TabsList>
            {successStories.map((story, index) => (
              <TabsContent key={index} value={`story-${index}`}>
                <Card className="border-none shadow-md mt-6 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="bg-gray-100">
                        <img 
                          src={story.image} 
                          alt={story.person} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <p className="text-gray-600 italic text-lg mb-6">"{story.quote}"</p>
                        <div>
                          <p className="font-semibold text-lg">{story.person}</p>
                          <p className="text-toreso-teal">{story.company}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-toreso-teal/20 text-toreso-teal border-none">
                Platform Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8 text-white">
                Powerful <span className="text-toreso-teal">Tools</span> for Suppliers
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our platform provides all the tools you need to showcase your products, manage orders, and grow your business efficiently.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From detailed analytics to streamlined order management, we've designed our supplier portal to give you a competitive edge in the B2B packaging market.
              </p>
              <Button asChild size="lg" className="bg-toreso-teal hover:bg-toreso-blue text-white">
                <Link to="/supplier/dashboard">Access Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { title: "Product Catalog", description: "Showcase your products with detailed specifications" },
                { title: "Order Management", description: "Process and track orders in real-time" },
                { title: "RFQ System", description: "Respond to quote requests from potential clients" },
                { title: "Performance Analytics", description: "Track your business growth and identify opportunities" }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-toreso-teal to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Ready to Expand Your Market Reach?
            </h2>
            <p className="text-xl text-white/80 mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Access your supplier dashboard to manage products, orders, and grow your business.
            </p>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/supplier/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplierHome;
