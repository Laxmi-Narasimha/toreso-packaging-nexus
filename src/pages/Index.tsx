
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Package, Shield, Users, TrendingUp, Award, ChevronDown } from "lucide-react";

const Index = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-[#1A1F2C]">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://ik.imagekit.io/rqegzjddo/packaging-video.mp4" type="video/mp4" />
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
                onClick={() => videoRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="h-6 w-6 text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-6"
              >
                We are <span className="text-toreso-blue">Toreso</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
              >
                Revolutionizing the packaging industry through innovation, quality, and sustainability.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                  <Link to="/register">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
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
            <ChevronDown className="h-6 w-6 text-white/80" />
            <span className="text-xs text-white/80 mt-1">Scroll Down</span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-[#1A1F2C]">
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
                <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                  <Link to="/about">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-400">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-toreso-blue to-toreso-teal opacity-80"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div ref={videoRef} className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-toreso-blue ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-[#161B26]">
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
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A1F2C] p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000"
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-toreso-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Ready to Transform Your Packaging Procurement?
            </h2>
            <p className="text-xl text-white/80 mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Join hundreds of enterprises that have revolutionized their packaging supply chain with Toreso.
            </p>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/login">Get Started Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
