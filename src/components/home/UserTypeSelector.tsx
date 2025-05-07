import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building, ShoppingBag, Users, Settings, Briefcase } from "lucide-react";

type UserType = 'admin' | 'supplier' | 'buyer';

interface UserTypeSelectorProps {
  onSelect?: (type: UserType) => void;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ onSelect }) => {
  const userTypes = [
    {
      type: 'admin' as UserType,
      title: 'Admin Portal',
      description: 'Oversee platform operations and user management.',
      icon: <Settings className="h-6 w-6 text-blue-300" />,
      path: '/admin',
      bgColor: 'from-blue-600/20 to-blue-900/30',
      borderColor: 'border-blue-500/30',
      hoverBorderColor: 'group-hover:border-blue-400',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
      iconColor: 'text-white',
      arrowBg: 'bg-blue-500/20',
      arrowHoverBg: 'group-hover:bg-blue-500/40',
      arrowColor: 'text-blue-400',
      arrowHoverColor: 'group-hover:text-white'
    },
    {
      type: 'supplier' as UserType,
      title: 'Supplier Hub',
      description: 'Manage your products and connect with buyers.',
      icon: <Briefcase className="h-6 w-6 text-teal-300" />,
      path: '/supplier',
      bgColor: 'from-teal-600/20 to-teal-900/30',
      borderColor: 'border-teal-500/30',
      hoverBorderColor: 'group-hover:border-teal-400',
      iconBg: 'bg-gradient-to-br from-teal-500 to-teal-700',
      iconColor: 'text-white',
      arrowBg: 'bg-teal-500/20',
      arrowHoverBg: 'group-hover:bg-teal-500/40',
      arrowColor: 'text-teal-400',
      arrowHoverColor: 'group-hover:text-white'
    },
    {
      type: 'buyer' as UserType,
      title: 'Buyer Dashboard',
      description: 'Discover products and streamline procurement.',
      icon: <ShoppingBag className="h-6 w-6 text-purple-300" />,
      path: '/buyer',
      bgColor: 'from-purple-600/20 to-purple-900/30',
      borderColor: 'border-purple-500/30',
      hoverBorderColor: 'group-hover:border-purple-400',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-700',
      iconColor: 'text-white',
      arrowBg: 'bg-purple-500/20',
      arrowHoverBg: 'group-hover:bg-purple-500/40',
      arrowColor: 'text-purple-400',
      arrowHoverColor: 'group-hover:text-white'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="w-full max-w-5xl mx-auto mt-12 md:mt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {userTypes.map((userType) => (
          <motion.div 
            key={userType.type}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.04 }}
            className="relative overflow-hidden rounded-xl group cursor-pointer"
          >
            <Link 
              to={userType.path}
              className="block h-full"
              onClick={() => onSelect && onSelect(userType.type)}
            >
              <div className={`bg-gradient-to-br ${userType.bgColor} backdrop-blur-md p-6 md:p-8 rounded-xl h-full flex flex-col justify-between border ${userType.borderColor} ${userType.hoverBorderColor} transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div>
                  <div className={`${userType.iconBg} rounded-lg p-3.5 inline-flex items-center justify-center mb-5 shadow-lg`}>
                    {React.cloneElement(userType.icon, { className: `h-7 w-7 ${userType.iconColor}` })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{userType.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{userType.description}</p>
                </div>
                
                <div className="mt-8 self-end">
                  <motion.div 
                    className={`${userType.arrowBg} ${userType.arrowHoverBg} rounded-full p-2.5 transition-colors duration-300 transform group-hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" className={`fill-current ${userType.arrowColor} ${userType.arrowHoverColor} transition-colors duration-300`}/>
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
