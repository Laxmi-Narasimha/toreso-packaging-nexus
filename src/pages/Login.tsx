
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleDemoLogin = (role: string) => {
    switch (role) {
      case "admin":
        navigate("/admin");
        break;
      case "buyer":
        navigate("/buyer");
        break;
      case "supplier":
        navigate("/supplier");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://ik.imagekit.io/rqegzjddo/packaging-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-md mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <div className="text-center mb-8">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl font-display font-medium text-white mb-2"
              >
                Welcome to Toreso
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white/70"
              >
                Revolutionizing the packaging industry
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-xl text-white mb-4 text-center">Demo Login</h2>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-toreso-blue hover:bg-toreso-darkBlue text-white"
                  onClick={() => handleDemoLogin("admin")}
                >
                  Login as Admin
                </Button>
                <Button 
                  className="w-full bg-toreso-teal hover:bg-toreso-teal/90 text-white"
                  onClick={() => handleDemoLogin("buyer")}
                >
                  Login as Buyer
                </Button>
                <Button 
                  className="w-full bg-toreso-purple hover:bg-toreso-purple/90 text-white"
                  onClick={() => handleDemoLogin("supplier")}
                >
                  Login as Supplier
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center text-sm text-white/60"
            >
              <p>Click any button above to explore the demo</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
