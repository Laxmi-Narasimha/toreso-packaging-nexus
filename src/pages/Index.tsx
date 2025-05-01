
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, CheckCircle, BarChart3, Users, Truck, Shield, Award } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animatedElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Animation for scroll reveal
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Get all elements to observe
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      animatedElements.current.push(el as HTMLElement);
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        animatedElements.current.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  // Animated box that follows cursor
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    if (boxRef.current) {
      const box = boxRef.current;
      const rect = box.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (mousePosition.x - centerX) * 0.02;
      const deltaY = (mousePosition.y - centerY) * 0.02;
      
      box.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  }, [mousePosition]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-gray-50 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          {/* Floating Shapes */}
          <div className="absolute top-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute top-40 left-1/4 w-12 h-12 bg-indigo-200 rounded opacity-30 animate-float delay-500"></div>

          {/* Hero Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Revolutionizing 
              <span className="text-gradient"> Packaging Procurement</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              The premier B2B marketplace connecting buyers and suppliers in the packaging materials industry. 
              Streamline procurement, consolidate volumes, and optimize costs across multiple plants.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                <Link to="/register">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 relative">
            <div ref={boxRef} className="transition-transform duration-300 ease-out">
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="box-decoration-1 bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md mx-auto"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-toreso-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">Volume Discounts</h3>
                      <p className="text-sm text-gray-500">Across multiple plants</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="h-2 bg-gray-100 rounded-full w-full">
                      <div className="h-2 bg-gradient-to-r from-toreso-blue to-toreso-teal rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Current volume</span>
                      <span className="text-xs font-medium">75% savings achieved</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Standard Price</span>
                      <span className="text-sm line-through text-gray-500">₹120 per unit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Consolidated Price</span>
                      <span className="text-sm text-toreso-teal font-bold">₹85 per unit</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-toreso-green mr-2" />
                    <span>Aggregated across 5 manufacturing plants</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-10 -right-10 bg-white p-3 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-toreso-green" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Quality Verified</p>
                      <p className="text-xs text-gray-500">ISO 9001 Certified</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="absolute -top-10 -left-10 bg-white p-3 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Truck className="h-4 w-4 text-toreso-blue" />
                    </div>
                    <p className="text-sm font-medium">On-time Delivery</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted by brands */}
        <div className="container mx-auto mt-16 md:mt-24 px-4">
          <p className="text-center text-gray-500 mb-4">Trusted by leading manufacturers</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <div className="text-gray-400 font-semibold text-lg">MARUTI SUZUKI</div>
            <div className="text-gray-400 font-semibold text-lg">VOLVO</div>
            <div className="text-gray-400 font-semibold text-lg">JCB</div>
            <div className="text-gray-400 font-semibold text-lg">TATA MOTORS</div>
            <div className="text-gray-400 font-semibold text-lg">MAHINDRA</div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-20 reveal-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Toreso Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform streamlines the entire packaging procurement process, 
              saving you time, reducing costs, and ensuring quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Register",
                description: "Sign up as a buyer or supplier and complete your company profile",
                color: "bg-blue-50 text-toreso-blue",
              },
              {
                step: "2",
                title: "Connect",
                description: "Buyers discover verified suppliers, or suppliers showcase products to buyers",
                color: "bg-teal-50 text-toreso-teal",
              },
              {
                step: "3",
                title: "Transact",
                description: "Request quotes, place orders, and manage fulfillment seamlessly",
                color: "bg-purple-50 text-toreso-purple",
              },
              {
                step: "4", 
                title: "Optimize",
                description: "Gain insights, consolidate volumes, and maximize procurement efficiency",
                color: "bg-orange-50 text-toreso-orange",
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
                <div className={`${item.color} h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white reveal-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Platform Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optimized for the unique needs of the packaging materials industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Volume Consolidation",
                description: "Aggregate demand across multiple plants to secure significant volume discounts from suppliers.",
                icon: <BarChart3 className="h-6 w-6 text-toreso-blue" />,
              },
              {
                title: "Supplier Verification",
                description: "Access thoroughly vetted suppliers with verified quality management systems and capabilities.",
                icon: <Shield className="h-6 w-6 text-toreso-green" />,
              },
              {
                title: "Dynamic Pricing",
                description: "See real-time price adjustments based on order volumes, with transparent tiered pricing.",
                icon: <DollarSign className="h-6 w-6 text-toreso-purple" />,
              },
              {
                title: "Quality Assurance",
                description: "Comprehensive audit management and certification tracking for consistent quality standards.",
                icon: <Award className="h-6 w-6 text-toreso-teal" />,
              },
              {
                title: "Centralized Procurement",
                description: "Manage all packaging purchases through one intuitive platform for greater efficiency.",
                icon: <Package className="h-6 w-6 text-toreso-orange" />,
              },
              {
                title: "Analytics Dashboard",
                description: "Gain actionable insights into spending patterns, supplier performance, and cost savings.",
                icon: <LineChart className="h-6 w-6 text-toreso-blue" />,
              },
            ].map((feature, index) => (
              <div key={index} className="feature-box hover:border-toreso-blue/20">
                <div className="mb-4 bg-blue-50 p-3 rounded-full inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* User Interfaces Section */}
      <section className="py-16 md:py-20 reveal-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored For Every User</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform offers customized experiences for all participants in the packaging ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Buyer Interface",
                description: "For manufacturing companies that need packaging materials across multiple plants.",
                points: [
                  "Consolidate purchasing power across facilities",
                  "Discover verified packaging suppliers",
                  "Track orders in real-time",
                  "Access detailed supplier analytics"
                ],
                btnText: "For Buyers",
                link: "/buyer-features",
                color: "from-blue-500 to-toreso-blue",
                icon: <Building className="h-6 w-6" />,
              },
              {
                title: "Supplier Interface",
                description: "For packaging manufacturers seeking to connect with large enterprise buyers.",
                points: [
                  "Showcase products to qualified buyers",
                  "Manage orders and production schedules",
                  "Handle certification and compliance",
                  "Access new market opportunities"
                ],
                btnText: "For Suppliers",
                link: "/supplier-features",
                color: "from-teal-500 to-toreso-teal",
                icon: <Package className="h-6 w-6" />,
              },
              {
                title: "Admin Interface",
                description: "Comprehensive platform management tools for the Toreso operations team.",
                points: [
                  "Verify and onboard suppliers",
                  "Manage user accounts",
                  "Oversee platform transactions",
                  "Generate detailed reports"
                ],
                btnText: "Platform Overview",
                link: "/platform-overview",
                color: "from-purple-500 to-toreso-purple",
                icon: <Users className="h-6 w-6" />,
              },
            ].map((ui, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className={`bg-gradient-to-r ${ui.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      {ui.icon}
                    </div>
                    <h3 className="text-xl font-bold ml-3">{ui.title}</h3>
                  </div>
                  <p className="text-white/90">{ui.description}</p>
                </div>
                
                <div className="p-6">
                  <ul className="mb-6 space-y-3">
                    {ui.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to={ui.link}>{ui.btnText}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50 reveal-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from companies that have transformed their packaging procurement with Toreso
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Toreso has completely transformed how we manage packaging procurement across our 7 manufacturing plants. We've realized 23% cost savings through volume consolidation.",
                author: "Rajiv Sharma",
                position: "Procurement Director",
                company: "Maruti Suzuki India Ltd.",
              },
              {
                quote: "As an MSME packaging supplier, Toreso has opened doors to large enterprise clients we couldn't reach before. Our sales have increased by 45% in just six months.",
                author: "Anjali Gupta",
                position: "CEO",
                company: "EcoPack Solutions",
              },
              {
                quote: "The supplier verification system gives us confidence that we're working with quality vendors. Streamlining our procurement has reduced operational costs by 18%.",
                author: "Thomas Chen",
                position: "Supply Chain Manager",
                company: "Volvo Trucks India",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-6 text-lg text-gray-600 italic">"{testimonial.quote}"</div>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-white">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-toreso-dark text-white reveal-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Packaging Procurement?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of companies optimizing their packaging supply chain with Toreso Nexus.
              Get started today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                <Link to="/register">Sign Up for Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              No credit card required. Free trial for 30 days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

// Helper components
const LineChart = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 16L7 12L11 16L21 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 6H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 6V11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 22V8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 22V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 8H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DollarSign = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2V22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
