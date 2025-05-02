
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AdminHome = () => {
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
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

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
            <source src="/videos/packaging-video.mp4" type="video/mp4" />
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
                Welcome to the <span className="text-toreso-blue">Admin Portal</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
              >
                Manage users, suppliers, and operations with complete control and oversight.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                  <Link to="/admin/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/admin/supplier-verification">Verify Suppliers</Link>
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

      {/* Admin Features Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Powerful <span className="text-toreso-blue">Admin Tools</span>
            </h2>
            <p className="text-lg text-gray-600 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Everything you need to manage the Toreso platform efficiently and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "User Management",
                description: "Manage user accounts, permissions, and access controls.",
                link: "/admin/users",
                badge: "Core"
              },
              {
                title: "Supplier Verification",
                description: "Review and approve supplier applications with comprehensive verification.",
                link: "/admin/supplier-verification",
                badge: "Active"
              },
              {
                title: "Analytics Dashboard",
                description: "Gain insights with real-time data visualization and reporting.",
                link: "/admin/analytics",
                badge: "Premium"
              },
              {
                title: "Financial Controls",
                description: "Monitor transactions, payments, and financial operations.",
                link: "/admin/financials",
                badge: "Advanced"
              },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 overflow-hidden group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-toreso-blue/10 text-toreso-blue border-none">
                  {feature.badge}
                </Badge>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-8">{feature.description}</p>
                <Link 
                  to={feature.link}
                  className="text-toreso-blue font-medium hover:text-toreso-darkBlue flex items-center group-hover:underline"
                >
                  Explore Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8">
                Complete <span className="text-toreso-blue">Administrative Control</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As an administrator, you have the tools to oversee all aspects of the Toreso platform. From user management to financial operations, everything is at your fingertips.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our intuitive admin interface provides powerful controls while maintaining ease of use, allowing you to focus on what matters most—growing the platform and ensuring quality service.
              </p>
              <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                <Link to="/admin/dashboard">Access Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-toreso-blue to-toreso-teal opacity-80 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" 
                  alt="Admin Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <Badge className="bg-green-500">Platform Status: Operational</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-toreso-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Access your administrative dashboard to begin managing the Toreso platform.
            </p>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/admin/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
