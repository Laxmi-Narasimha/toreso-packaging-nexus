
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, ShoppingBag, Users } from "lucide-react";

type UserType = 'admin' | 'supplier' | 'buyer';

interface UserTypeSelectorProps {
  onSelect?: (type: UserType) => void;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ onSelect }) => {
  const userTypes = [
    {
      type: 'admin' as UserType,
      title: 'Admin',
      description: 'Manage the platform and users',
      icon: <Users className="h-6 w-6" />,
      path: '/admin',
      color: 'from-purple-600 to-indigo-700'
    },
    {
      type: 'supplier' as UserType,
      title: 'Supplier',
      description: 'Provide packaging solutions',
      icon: <Building className="h-6 w-6" />,
      path: '/supplier',
      color: 'from-blue-600 to-cyan-700'
    },
    {
      type: 'buyer' as UserType,
      title: 'Buyer',
      description: 'Find packaging solutions',
      icon: <ShoppingBag className="h-6 w-6" />,
      path: '/buyer',
      color: 'from-teal-600 to-green-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="w-full max-w-5xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {userTypes.map((userType) => (
          <motion.div 
            key={userType.type}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden"
          >
            <Link 
              to={userType.path}
              className="block"
              onClick={() => onSelect && onSelect(userType.type)}
            >
              <div className={`bg-gradient-to-br ${userType.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                <div className="bg-white/20 rounded-full p-3 inline-block mb-4">
                  {userType.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{userType.title}</h3>
                <p className="text-white/80">{userType.description}</p>
                
                <div className="absolute bottom-6 right-6">
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
      </div>
    </motion.div>
  );
};

export default UserTypeSelector;
