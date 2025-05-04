
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Settings, ClipboardCheck, BarChart4 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SimpleWarehouseIllustration from "@/components/illustrations/SimpleWarehouseIllustration";
import SimplePackagingIllustration from "@/components/illustrations/SimplePackagingIllustration";
import SimpleRobotArm from "@/components/illustrations/SimpleRobotArm";

const AdminHome = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
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

  const featureIcons = [
    <Package className="text-toreso-blue" />, 
    <ClipboardCheck className="text-toreso-blue" />, 
    <BarChart4 className="text-toreso-blue" />, 
    <Settings className="text-toreso-blue" />
  ];

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-white">
      {/* Hero Section with Full Screen Video Background */}
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
            <source src="https://videos.pexels.com/video-files/855859/855859-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Animated Content */}
        <motion.div 
          className="container mx-auto px-4 z-10 text-white relative"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6 text-center"
            >
              Welcome to the <span className="text-toreso-blue">Admin Portal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 text-center"
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
        </motion.div>
      </section>

      {/* Admin Features Section with Illustrative Animations */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Powerful <span className="text-toreso-blue">Admin Tools</span>
            </h2>
            <p className="text-lg text-gray-600 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Everything you need to manage the Toreso platform efficiently and effectively.
            </p>

            {/* Integrated warehouse illustration */}
            <div className="my-12">
              <SimpleWarehouseIllustration className="w-full h-auto max-w-2xl mx-auto" variant="light" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "User Management",
                description: "Manage user accounts, permissions, and access controls.",
                link: "/admin/users",
                badge: "Core",
                icon: 0,
                illustration: <SimpleRobotArm size="sm" className="mb-4 mx-auto" />
              },
              {
                title: "Supplier Verification",
                description: "Review and approve supplier applications with comprehensive verification.",
                link: "/admin/supplier-verification",
                badge: "Active",
                icon: 1,
                illustration: <SimplePackagingIllustration className="h-20 mb-4 mx-auto" />
              },
              {
                title: "Analytics Dashboard",
                description: "Gain insights with real-time data visualization and reporting.",
                link: "/admin/analytics",
                badge: "Premium",
                icon: 2,
                illustration: null
              },
              {
                title: "Financial Controls",
                description: "Monitor transactions, payments, and financial operations.",
                link: "/admin/financials",
                badge: "Advanced",
                icon: 3,
                illustration: null
              },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 overflow-hidden group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <Badge className="mb-4 bg-toreso-blue/10 text-toreso-blue border-none">
                  {feature.badge}
                </Badge>
                
                {feature.illustration && (
                  <div className="h-20 w-full mb-4">
                    {feature.illustration}
                  </div>
                )}
                
                {!feature.illustration && (
                  <motion.div 
                    className="mb-5 p-3 bg-gray-50 rounded-full inline-block"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    {featureIcons[feature.icon]}
                  </motion.div>
                )}
                
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-8">{feature.description}</p>
                <Link 
                  to={feature.link}
                  className="text-toreso-blue font-medium hover:text-toreso-darkBlue flex items-center group-hover:underline"
                >
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 3 }}
                  >
                    Explore Now 
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </Link>
                
                {/* Dynamic background pattern */}
                <svg className="absolute top-0 right-0 w-32 h-32 text-gray-50 opacity-70 pointer-events-none">
                  <pattern id={`grid-pattern-${index}`} patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                    <rect width="2" height="2" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#grid-pattern-${index})`} />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview Section with Animation */}
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
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-toreso-blue to-toreso-teal opacity-80 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" 
                  alt="Admin Dashboard" 
                  className="w-full h-full object-cover"
                />
                
                {/* Integrated robot arm animation */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 z-10">
                  <SimpleRobotArm size="lg" variant="dark" />
                </div>
                
                {/* Animated UI Elements */}
                <motion.div 
                  className="absolute left-4 top-4 w-24 h-4 bg-white/20 rounded"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute left-4 top-12 w-32 h-4 bg-white/15 rounded"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Badge className="bg-green-500">Platform Status: Operational</Badge>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Integrated Packaging Illustration */}
      <section className="py-20 md:py-32 bg-toreso-blue text-white overflow-hidden relative">
        {/* Background illustrations */}
        <div className="absolute top-0 left-0 w-full">
          <SimplePackagingIllustration className="w-full opacity-20" variant="dark" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Access your administrative dashboard to begin managing the Toreso platform.
            </p>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/admin/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
