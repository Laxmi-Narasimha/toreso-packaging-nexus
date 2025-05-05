
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface UserType {
  type: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

interface LoginOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userTypes: UserType[];
}

const LoginOptionsModal: React.FC<LoginOptionsModalProps> = ({ isOpen, onClose, userTypes }) => {
  // Stop propagation for the modal content
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 300 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
          onClick={onClose}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="bg-black/80 border border-white/20 backdrop-blur-lg rounded-xl p-6 max-w-md w-full"
            onClick={handleContentClick}
            variants={modalVariants}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">Login Options</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <X size={20} />
              </Button>
            </div>
            
            <motion.p className="text-white/70 mb-6">
              Choose your login type to continue
            </motion.p>
            
            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {userTypes.map((userType) => (
                <motion.div 
                  key={userType.type}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="relative overflow-hidden"
                >
                  <Link 
                    to={userType.path}
                    className="block"
                  >
                    <div className={`bg-gradient-to-br ${userType.color} p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                      <div className="flex items-start">
                        <div className="bg-white/20 rounded-full p-3 inline-block mr-4">
                          {userType.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{userType.title}</h3>
                          <p className="text-white/80">{userType.description}</p>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-5 right-5">
                        <motion.div 
                          className="bg-white/30 rounded-full p-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white"/>
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-6 text-center">
              <p className="text-white/50 text-sm">Don't have an account? <Link to="/register" className="text-indigo-400 hover:underline">Sign Up</Link></p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginOptionsModal;
