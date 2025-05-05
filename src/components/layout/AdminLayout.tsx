
import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  Package,
  Users,
  Building,
  ClipboardCheck,
  ShoppingCart,
  BarChart4,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Search,
  User,
  Menu,
  X,
  ChevronDown,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const AdminLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Video background URL from public
  const videoUrl = "https://static.videezy.com/system/resources/previews/000/046/569/original/cube_18_4k.mp4";

  const menuItems = [
    {
      title: "Dashboard",
      icon: <BarChart4 size={20} />,
      path: "/admin",
      color: "text-indigo-500",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "User Management",
      icon: <Users size={20} />,
      path: "/admin/users",
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Company Management",
      icon: <Building size={20} />,
      path: "/admin/companies",
      color: "text-cyan-500",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Supplier Verification",
      icon: <ClipboardCheck size={20} />,
      path: "/admin/supplier-verification",
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Audit Management",
      icon: <ClipboardCheck size={20} />,
      path: "/admin/audit-management",
      color: "text-emerald-500",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Product Catalog",
      icon: <Package size={20} />,
      path: "/admin/products",
      color: "text-yellow-500",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Order Management",
      icon: <ShoppingCart size={20} />,
      path: "/admin/orders",
      color: "text-orange-500",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Financial Management",
      icon: <BarChart4 size={20} />,
      path: "/admin/financials",
      color: "text-red-500",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Reports & Analytics",
      icon: <BarChart4 size={20} />,
      path: "/admin/analytics",
      color: "text-pink-500",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/admin/settings",
      color: "text-purple-500",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Support",
      icon: <HelpCircle size={20} />,
      path: "/admin/support",
      color: "text-indigo-400",
      gradient: "from-indigo-400 to-blue-400"
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Video Background - improved loading and visibility */}
      <div className="absolute inset-0 z-[-2]">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px] z-10"></div>
      </div>
      
      {/* Header/Navigation - Glassmorphism */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "backdrop-blur-xl bg-white/10 py-2 shadow-lg" 
            : "backdrop-blur-md bg-white/5 py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/admin" className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg text-white"
              >
                <Package size={24} />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-bold tracking-tight text-white"
              >
                Toreso
              </motion.span>
            </Link>
            
            {/* Desktop Navigation - improved with animations and glassmorphism */}
            <div className="hidden lg:flex items-center space-x-1">
              <motion.div 
                className="flex items-center space-x-1 rounded-full backdrop-blur-md bg-white/10 p-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {menuItems.slice(0, 6).map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
                  >
                    <Button
                      variant="ghost"
                      className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        location.pathname === item.path 
                          ? "bg-gradient-to-r text-white " + item.gradient
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                      onClick={() => navigate(item.path)}
                    >
                      <span className="flex items-center">
                        <span className={location.pathname === item.path ? "text-white" : item.color}>
                          {item.icon}
                        </span>
                        <span className="ml-2">{item.title}</span>
                      </span>
                    </Button>
                  </motion.div>
                ))}
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      More <ChevronDown size={14} className="ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-black/90 backdrop-blur-xl border-white/20 text-white">
                    {menuItems.slice(6).map((item) => (
                      <DropdownMenuItem 
                        key={item.path}
                        className="hover:bg-white/10 focus:bg-white/10 cursor-pointer group"
                        onClick={() => navigate(item.path)}
                      >
                        <span className="flex items-center w-full">
                          <span className={`${item.color} group-hover:text-white transition-colors duration-300`}>
                            {item.icon}
                          </span>
                          <span className="ml-2">{item.title}</span>
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search - Improved design */}
              <motion.div 
                className="hidden md:flex relative"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/20 focus:border-white/40 focus:bg-white/5 text-white placeholder-white/60 text-sm w-40 lg:w-56 transition-all focus:w-64 focus:outline-none"
                />
              </motion.div>

              {/* Notifications - Improved design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                    >
                      <Bell size={20} />
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        3
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 bg-black/90 backdrop-blur-xl border-white/20 text-white">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <div className="max-h-80 overflow-y-auto">
                      {[1, 2, 3].map((i) => (
                        <DropdownMenuItem key={i} className="py-3 hover:bg-white/10 cursor-pointer">
                          <div className="flex space-x-3">
                            <div className={`p-2 rounded-full ${
                              i === 1 ? "bg-gradient-to-br from-blue-500 to-indigo-600" : 
                              i === 2 ? "bg-gradient-to-br from-green-500 to-teal-600" :
                              "bg-gradient-to-br from-orange-500 to-red-500"
                            } text-white`}>
                              {i === 1 ? <Building size={18} /> : 
                               i === 2 ? <ClipboardCheck size={18} /> :
                               <Bell size={18} />}
                            </div>
                            <div>
                              <p className="text-sm font-medium">
                                {i === 1 ? "New Supplier Registration" : 
                                 i === 2 ? "Audit Scheduled" : 
                                 "Certificate Expiring"}
                              </p>
                              <p className="text-xs text-white/70">
                                {i === 1 ? "EcoPackage Co. submitted registration documents" : 
                                 i === 2 ? "Quality audit scheduled for XYZ Materials" :
                                 "QualiPack's ISO certification expires in 7 days"}
                              </p>
                              <p className="text-xs text-white/50 mt-1">
                                {i === 1 ? "10 minutes ago" : 
                                 i === 2 ? "2 hours ago" : 
                                 "1 day ago"}
                              </p>
                            </div>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuItem className="text-center text-indigo-400 hover:text-indigo-300 hover:bg-white/10 cursor-pointer">
                      View all notifications
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              {/* User Menu - Improved design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 text-white hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <Avatar className="h-8 w-8 border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">AD</AvatarFallback>
                      </Avatar>
                      <div className="text-left hidden md:block">
                        <p className="text-sm font-medium">Admin User</p>
                        <p className="text-xs text-white/70">administrator</p>
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-black/90 backdrop-blur-xl border-white/20 text-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                      <User size={16} className="mr-2" /> Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                      <Settings size={16} className="mr-2" /> Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-white/10 cursor-pointer">
                      <LogOut size={16} className="mr-2" /> Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              {/* Mobile Menu Toggle - Improved design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="lg:hidden"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  onClick={toggleMobileMenu}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Improved with backdrop blur and animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl overflow-y-auto border-l border-white/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-1.5 rounded text-white mr-2">
                      <Package size={22} />
                    </div>
                    <span className="text-lg font-bold text-white">
                      Toreso
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMobileMenu}
                    className="text-white hover:bg-white/10"
                  >
                    <X size={18} />
                  </Button>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Avatar className="h-10 w-10 border-2 border-white/20">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">AD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-white">Admin User</p>
                      <p className="text-sm text-white/70">administrator</p>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Search
                      size={16}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60"
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 rounded-full w-full bg-white/10 border border-white/20 text-white placeholder-white/60 text-sm"
                    />
                  </div>
                </div>

                <nav className="space-y-1 flex-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          location.pathname === item.path 
                            ? `bg-gradient-to-r ${item.gradient} text-white` 
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className={location.pathname === item.path ? "text-white" : item.color}>
                          {item.icon}
                        </span>
                        <span>{item.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-white/10"
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="pt-16 min-h-screen">
        {/* Introductory section for admin landing */}
        {location.pathname === "/admin" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[60vh] flex items-center justify-center"
          >
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
            >
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
              >
                Welcome to <span className="text-white">Toreso</span>
              </motion.h1>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Revolutionizing the packaging industry through innovation, quality, and sustainability.
              </motion.p>
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-600/40 transition-all duration-300 hover:scale-105"
                >
                  Platform Overview
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  System Status
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
