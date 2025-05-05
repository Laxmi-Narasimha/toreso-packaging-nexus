
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, RefreshCw } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-purple-500" />,
      title: "Verified Suppliers",
      description: "Every supplier on our platform undergoes a rigorous verification process to ensure quality and reliability."
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Fast Procurement",
      description: "Reduce procurement cycles and get your packaging materials faster with our streamlined process."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-green-500" />,
      title: "Data-Driven Insights",
      description: "Leverage analytics to make informed decisions about your packaging supply chain."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-orange-500" />,
      title: "Sustainable Options",
      description: "Find eco-friendly packaging alternatives that reduce your environmental footprint."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
            Key Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why Choose Toreso</h2>
          <p className="text-xl text-gray-600">
            Our platform offers comprehensive tools and services to transform your packaging procurement process.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative bg-white p-4 rounded-full inline-block shadow-md group-hover:shadow-lg transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
