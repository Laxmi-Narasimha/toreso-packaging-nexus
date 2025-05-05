
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Settings, ClipboardCheck, BarChart4, Users, Building, ShoppingCart } from "lucide-react";
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

  // Icons for admin features
  const featureIcons = [
    <Users className="text-toreso-blue h-5 w-5" />, 
    <ClipboardCheck className="text-toreso-blue h-5 w-5" />, 
    <BarChart4 className="text-toreso-blue h-5 w-5" />, 
    <Settings className="text-toreso-blue h-5 w-5" />
  ];

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden">
      {/* Admin Features Section with Improved Illustrations */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 text-white">
              Powerful <span className="text-toreso-blue">Admin Tools</span>
            </h2>
            <p className="text-lg text-white/70 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
              Everything you need to manage the Toreso platform efficiently and effectively.
            </p>

            {/* Enhanced packaging illustration */}
            <div className="my-12">
              <SimplePackagingIllustration className="w-full h-auto max-w-2xl mx-auto" variant="dark" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "User Management",
                description: "Manage user accounts, permissions, and access controls across the platform.",
                link: "/admin/users",
                badge: "Core",
                icon: <Users className="text-toreso-blue h-6 w-6" />,
                illustration: <SimpleRobotArm size="sm" className="mb-4 mx-auto" />
              },
              {
                title: "Supplier Verification",
                description: "Review and approve supplier applications with comprehensive verification.",
                link: "/admin/supplier-verification",
                badge: "Active",
                icon: <ClipboardCheck className="text-toreso-blue h-6 w-6" />,
                illustration: <SimplePackagingIllustration className="h-20 mb-4 mx-auto" variant="dark" />
              },
              {
                title: "Analytics Dashboard",
                description: "Gain insights with real-time data visualization and reporting.",
                link: "/admin/analytics",
                badge: "Premium",
                icon: <BarChart4 className="text-toreso-blue h-6 w-6" />,
                illustration: (
                  <svg className="h-20 w-auto mb-4 mx-auto" viewBox="0 0 120 80">
                    <rect x="10" y="30" width="15" height="40" rx="2" fill="#2C5EF6" opacity="0.7" />
                    <rect x="30" y="20" width="15" height="50" rx="2" fill="#9b87f5" opacity="0.8" />
                    <rect x="50" y="35" width="15" height="35" rx="2" fill="#00C9B6" opacity="0.7" />
                    <rect x="70" y="10" width="15" height="60" rx="2" fill="#F97316" opacity="0.7" />
                    <rect x="90" y="25" width="15" height="45" rx="2" fill="#2C5EF6" opacity="0.7" />
                    <motion.path
                      d="M10,30 L25,10 L45,25 L65,15 L85,30 L105,20"
                      stroke="#fff"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.circle
                      cx="10" cy="30" r="3"
                      fill="#fff"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                    <motion.circle
                      cx="45" cy="25" r="3"
                      fill="#fff"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    />
                    <motion.circle
                      cx="85" cy="30" r="3"
                      fill="#fff"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    />
                  </svg>
                )
              },
              {
                title: "Financial Controls",
                description: "Monitor transactions, payments, and financial operations.",
                link: "/admin/financials",
                badge: "Advanced",
                icon: <Settings className="text-toreso-blue h-6 w-6" />,
                illustration: (
                  <svg className="h-20 w-auto mb-4 mx-auto" viewBox="0 0 120 80">
                    <defs>
                      <linearGradient id="financial-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2C5EF6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#9b87f5" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <rect x="20" y="20" width="80" height="50" rx="4" fill="url(#financial-gradient)" stroke="#fff" strokeWidth="0.5" />
                    <rect x="25" y="30" width="70" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
                    <motion.rect
                      x="25" y="30" width="0" height="10" rx="2"
                      fill="#2C5EF6"
                      animate={{ width: 50 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <circle cx="60" cy="55" r="10" fill="rgba(255,255,255,0.1)" stroke="#fff" strokeWidth="0.5" />
                    <motion.path
                      d="M60,50 L60,55 L65,55"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                  </svg>
                )
              },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 overflow-hidden group relative glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              >
                <Badge className="mb-4 bg-toreso-blue/20 text-toreso-blue border-none">
                  {feature.badge}
                </Badge>
                
                {feature.illustration && (
                  <div className="h-20 w-full mb-4">
                    {feature.illustration}
                  </div>
                )}
                
                {!feature.illustration && (
                  <motion.div 
                    className="mb-5 p-3 bg-white/5 rounded-full inline-block"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                )}
                
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/70 mb-8">{feature.description}</p>
                <Link 
                  to={feature.link}
                  className="text-toreso-blue font-medium hover:text-toreso-blue/80 flex items-center group-hover:underline"
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
                <svg className="absolute top-0 right-0 w-32 h-32 text-white/5 opacity-70 pointer-events-none">
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

      {/* Platform Overview Section with Enhanced Animation */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8 text-white">
                Complete <span className="text-toreso-blue">Administrative Control</span>
              </h2>
              <p className="text-lg text-white/70 mb-6">
                As an administrator, you have the tools to oversee all aspects of the Toreso platform. From user management to financial operations, everything is at your fingertips.
              </p>
              <p className="text-lg text-white/70 mb-8">
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
                
                {/* Enhanced robot arm animation */}
                <div className="absolute top-0 right-0 -mr-5 -mt-5 z-10 transform scale-125">
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
                
                {/* Animated data points */}
                <motion.div
                  className="absolute bottom-8 left-8 flex space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.div 
                    className="h-12 w-3 bg-white rounded-sm"
                    animate={{ height: [12, 24, 8, 12] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="h-16 w-3 bg-white rounded-sm"
                    animate={{ height: [16, 8, 20, 16] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="h-10 w-3 bg-white rounded-sm"
                    animate={{ height: [10, 16, 6, 10] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  />
                  <motion.div 
                    className="h-14 w-3 bg-white rounded-sm"
                    animate={{ height: [14, 6, 18, 14] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </motion.div>
              </div>
              
              {/* Status indicator */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-black/40 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Badge className="bg-green-500 text-white">Platform Status: Operational</Badge>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Packaging Illustration */}
      <section className="py-20 md:py-32 bg-toreso-blue/30 backdrop-blur text-white overflow-hidden relative">
        {/* Enhanced background illustrations */}
        <div className="absolute top-0 left-0 w-full">
          <SimplePackagingIllustration className="w-full opacity-30" variant="dark" />
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
                <Button asChild size="lg" className="bg-white text-toreso-blue hover:bg-white/90 border-0">
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

