
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  onLoginClick?: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onLoginClick }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-purple-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid-8 mask-linear-gradient-to-b"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Packaging Procurement?</h2>
          <p className="text-xl text-white/80 mb-10">
            Join thousands of companies already optimizing their supply chain with our platform.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="techPrimary"
              size="xl"
              className="rounded-full"
              onClick={onLoginClick}
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="techOutline"
              size="xl"
              className="rounded-full"
            >
              Request a Demo
            </Button>
          </div>
          
          <p className="mt-8 text-white/60 text-sm">No credit card required. Free trial available.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
