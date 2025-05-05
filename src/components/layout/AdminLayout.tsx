
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
  ChevronDown
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

  // Video background URL
  // Updated to a direct path that should be accessible in the public folder
  const videoUrl = "https://videos.pexels.com/video-files/855859/855859-hd_1920_1080_30fps.mp4";

  const menuItems = [
    {
      title: "Dashboard",
      icon: <BarChart4 size={20} />,
      path: "/admin",
    },
    {
      title: "User Management",
      icon: <Users size={20} />,
      path: "/admin/users",
    },
    {
      title: "Company Management",
      icon: <Building size={20} />,
      path: "/admin/companies",
    },
    {
      title: "Supplier Verification",
      icon: <ClipboardCheck size={20} />,
      path: "/admin/supplier-verification",
    },
    {
      title: "Audit Management",
      icon: <ClipboardCheck size={20} />,
      path: "/admin/audit-management",
    },
    {
      title: "Product Catalog",
      icon: <Package size={20} />,
      path: "/admin/products",
    },
    {
      title: "Order Management",
      icon: <ShoppingCart size={20} />,
      path: "/admin/orders",
    },
    {
      title: "Financial Management",
      icon: <BarChart4 size={20} />,
      path: "/admin/financials",
    },
    {
      title: "Reports & Analytics",
      icon: <BarChart4 size={20} />,
      path: "/admin/analytics",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
    {
      title: "Support",
      icon: <HelpCircle size={20} />,
      path: "/admin/support",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
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
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm z-10"></div>
      </div>
      
      {/* Header/Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-md py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/admin" className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Package size={28} className="text-toreso-blue" />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-display font-semibold tracking-tight text-white"
              >
                Toreso
              </motion.span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.slice(0, 6).map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path 
                      ? "text-white bg-white/10" 
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  <span className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </span>
                </Button>
              ))}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10"
                  >
                    More <ChevronDown size={14} className="ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-black/90 backdrop-blur-lg border-white/10 text-white">
                  {menuItems.slice(6).map((item) => (
                    <DropdownMenuItem 
                      key={item.path}
                      className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"
                      onClick={() => navigate(item.path)}
                    >
                      <span className="flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full bg-white/10 border-transparent focus:border-white/20 focus:bg-white/5 text-white placeholder-white/50 text-sm w-40 lg:w-56 transition-all focus:w-64"
                />
              </div>

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 bg-black/90 backdrop-blur-lg border-white/10 text-white">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <div className="max-h-80 overflow-y-auto">
                    {[1, 2, 3].map((i) => (
                      <DropdownMenuItem key={i} className="py-3 hover:bg-white/5 cursor-pointer">
                        <div className="flex space-x-3">
                          <div className="bg-toreso-blue/20 p-2 rounded-full">
                            {i === 1 ? <Building size={18} className="text-toreso-blue" /> : 
                             i === 2 ? <ClipboardCheck size={18} className="text-toreso-teal" /> :
                             <Bell size={18} className="text-toreso-orange" />}
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              {i === 1 ? "New Supplier Registration" : 
                               i === 2 ? "Audit Scheduled" : 
                               "Certificate Expiring"}
                            </p>
                            <p className="text-xs text-white/60">
                              {i === 1 ? "EcoPackage Co. submitted registration documents" : 
                               i === 2 ? "Quality audit scheduled for XYZ Materials" :
                               "QualiPack's ISO certification expires in 7 days"}
                            </p>
                            <p className="text-xs text-white/40 mt-1">
                              {i === 1 ? "10 minutes ago" : 
                               i === 2 ? "2 hours ago" : 
                               "1 day ago"}
                            </p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem className="text-center text-toreso-blue hover:bg-white/5 cursor-pointer">
                    View all notifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 text-white/90 hover:text-white hover:bg-white/10"
                  >
                    <Avatar className="h-8 w-8 border-2 border-white/10">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-toreso-blue text-white">AD</AvatarFallback>
                    </Avatar>
                    <div className="text-left hidden md:block">
                      <p className="text-sm font-medium">Admin User</p>
                      <p className="text-xs text-white/60">administrator</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-black/90 backdrop-blur-lg border-white/10 text-white">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                    <User size={16} className="mr-2" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                    <Settings size={16} className="mr-2" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-white/10 cursor-pointer">
                    <LogOut size={16} className="mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-black/95 backdrop-blur-lg overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <Package size={24} className="text-toreso-blue mr-2" />
                    <span className="font-display text-lg text-white">
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
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-toreso-blue text-white">AD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-white">Admin User</p>
                      <p className="text-sm text-white/60">administrator</p>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Search
                      size={16}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 rounded-full w-full bg-white/10 border-transparent text-white placeholder-white/50 text-sm"
                    />
                  </div>
                </div>

                <nav className="space-y-1 flex-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        location.pathname === item.path 
                          ? "bg-white/10 text-white" 
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-toreso-blue">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-white/10">
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
            transition={{ duration: 0.6 }}
            className="relative min-h-[90vh] flex items-center justify-center"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
            >
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white tracking-tight leading-tight mb-6"
              >
                We are <span className="text-toreso-blue">Toreso</span>
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Revolutionizing the packaging industry through innovation, quality, and sustainability.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button size="lg" className="bg-toreso-blue hover:bg-toreso-blue/90 text-white border-0">
                  Platform Overview
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 bg-black/30">
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

