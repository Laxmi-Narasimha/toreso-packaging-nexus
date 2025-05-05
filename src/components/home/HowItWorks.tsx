
import React from "react";
import { motion } from "framer-motion";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Sign up as a buyer, supplier, or platform administrator.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      number: "02",
      title: "Browse or List Products",
      description: "Explore packaging solutions or list your offerings on our marketplace.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      number: "03",
      title: "Connect & Transact",
      description: "Communicate directly with suppliers or buyers and complete transactions.",
      color: "from-teal-500 to-green-600"
    },
    {
      number: "04",
      title: "Optimize with Analytics",
      description: "Use data insights to continuously improve your procurement process.",
      color: "from-orange-500 to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute -top-40 -right-40 opacity-10 text-purple-500" width="600" height="600" viewBox="0 0 600 600">
          <g transform="translate(300,300)">
            <path d="M129,-185.9C164.3,-143.9,188.9,-99.7,206.3,-51.4C223.7,-3.1,233.8,49.3,216.8,92.2C199.8,135.1,155.7,168.4,108.7,189.8C61.7,211.2,11.8,220.7,-41.4,218.6C-94.5,216.5,-151,202.8,-188.9,169.1C-226.8,135.3,-246.2,81.5,-244.1,29.9C-242,-21.7,-218.5,-71.1,-183.8,-115C-149.1,-158.9,-103.3,-197.3,-54.2,-215.6C-5.1,-233.9,48.3,-232.1,93.7,-227.9C139.2,-223.8,167.8,-167.2,129,-185.9Z" fill="currentColor" />
          </g>
        </svg>
        <svg className="absolute -bottom-20 -left-20 opacity-10 text-blue-500" width="400" height="400" viewBox="0 0 600 600">
          <g transform="translate(300,300)">
            <path d="M142.1,-191.4C173.5,-166.1,182.1,-112.2,201.7,-59.4C221.3,-6.6,251.8,45.1,245.1,89.9C238.4,134.7,194.4,172.7,147.4,200.8C100.4,229,50.2,247.3,1,246.6C-48.2,245.9,-96.5,226.2,-144.2,198.2C-192,170.2,-239.3,133.8,-256.9,85.8C-274.4,37.7,-262.3,-22,-238.7,-73.3C-215.2,-124.7,-180.1,-167.6,-138.7,-189.7C-97.3,-211.8,-49.6,-213,-1.7,-210.9C46.3,-208.7,92.6,-203.2,142.1,-191.4Z" fill="currentColor" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600">
            Our platform streamlines the packaging procurement process from start to finish.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 min-h-[300px] flex flex-col justify-between relative z-10 overflow-hidden">
                <div>
                  <div className={`bg-gradient-to-r ${step.color} text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="mt-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Decorative background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2 z-0">
                  <div className="w-3 h-3 rounded-full bg-gray-300 absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
