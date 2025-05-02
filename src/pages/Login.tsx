
import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  
  const handleDemoLogin = (role: string) => {
    // In a real app, we would handle authentication here
    // For demo purposes, we just navigate to the respective dashboard
    switch(role) {
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
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Welcome to Toreso</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to access your account
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <LoginForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 space-y-6"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or try demo access</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="w-full border-toreso-blue text-toreso-blue hover:bg-toreso-blue/5 transition-colors"
              onClick={() => handleDemoLogin("admin")}
            >
              Admin Demo
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-toreso-teal text-toreso-teal hover:bg-toreso-teal/5 transition-colors"
              onClick={() => handleDemoLogin("buyer")}
            >
              Buyer Demo
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-toreso-purple text-toreso-purple hover:bg-toreso-purple/5 transition-colors"
              onClick={() => handleDemoLogin("supplier")}
            >
              Supplier Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-toreso-blue hover:text-toreso-darkBlue transition-colors inline-flex items-center"
            >
              Register here <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
