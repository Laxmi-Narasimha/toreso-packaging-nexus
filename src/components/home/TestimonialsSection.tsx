
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Toreso has completely transformed how we source packaging materials. We've reduced procurement time by 60% and found higher quality suppliers.",
      author: "Sarah Johnson",
      title: "Procurement Director",
      company: "GlobalBrands Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "As a packaging supplier, Toreso has helped us connect with serious buyers who value quality and reliability. Our sales have increased by 40% since joining.",
      author: "Michael Chen",
      title: "CEO",
      company: "EcoPack Solutions",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The analytics dashboard gives us incredible insights into our packaging spend. We've optimized our supply chain and reduced costs by 25%.",
      author: "Jessica Martinez",
      title: "Supply Chain Manager",
      company: "Tech Innovations Ltd.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
        
        <motion.div 
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-[80px]"
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-[80px]"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white/90 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-xl text-white/80">
            Join hundreds of businesses transforming their packaging procurement process with Toreso.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 relative"
              >
                <div className="absolute -top-6 -left-6 text-purple-300 opacity-50">
                  <Quote size={60} />
                </div>
                
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-3">
                    <p className="text-xl md:text-2xl font-light mb-8 relative z-10">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    
                    <div>
                      <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                      <p className="text-white/70">
                        {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 flex justify-center md:justify-end">
                    <motion.div 
                      className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white scale-125" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextTestimonial}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
