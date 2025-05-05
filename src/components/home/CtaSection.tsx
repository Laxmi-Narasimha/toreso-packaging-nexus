
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-gradient-to-br from-purple-50 to-indigo-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-50 to-blue-100 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
          <div className="grid md:grid-cols-2 gap-0">
            <motion.div 
              className="p-12 md:p-16 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Packaging Procurement?</h2>
              <p className="text-white/80 text-lg mb-8">
                Join hundreds of businesses revolutionizing their packaging supply chain with Toreso.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  asChild
                  variant="modern"
                  size="lg"
                  className="rounded-full"
                >
                  <Link to="/register">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="techOutline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-white/10"></div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                alt="Modern Packaging Solutions" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-4 max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Success Rate</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">98.7%</div>
                <div className="mt-1 text-xs text-gray-500">Customer satisfaction</div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-4 max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Average Savings</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">26%</div>
                <div className="mt-1 text-xs text-gray-500">Procurement cost reduction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
