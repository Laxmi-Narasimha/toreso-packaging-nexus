
import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Package,
  Clipboard,
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
  Home,
  DollarSign,
  FileText,
  Building,
  BadgeCheck,
  MessageSquare,
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
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const SupplierLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
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

  const menuItems = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
      path: "/supplier",
    },
    {
      title: "Products",
      icon: <Package size={20} />,
      path: "/supplier/products",
    },
    {
      title: "Orders",
      icon: <ShoppingCart size={20} />,
      path: "/supplier/orders",
      badge: 2,
    },
    {
      title: "RFQ/RFI",
      icon: <FileText size={20} />,
      path: "/supplier/rfq",
      badge: 3,
    },
    {
      title: "Profile",
      icon: <Building size={20} />,
      path: "/supplier/profile",
    },
    {
      title: "Compliance",
      icon: <BadgeCheck size={20} />,
      path: "/supplier/compliance",
    },
    {
      title: "Financial",
      icon: <DollarSign size={20} />,
      path: "/supplier/financials",
    },
    {
      title: "Analytics",
      icon: <BarChart4 size={20} />,
      path: "/supplier/analytics",
    },
    {
      title: "Messages",
      icon: <MessageSquare size={20} />,
      path: "/supplier/messages",
      badge: 5,
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/supplier/settings",
    },
    {
      title: "Support",
      icon: <HelpCircle size={20} />,
      path: "/supplier/support",
    },
  ];

  // Updated video URL for supplier portal - high quality manufacturing/industrial video
  const videoUrl = "https://videos.pexels.com/video-files/6167566/6167566-hd_1920_1080_30fps.mp4";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen Video Background - only shown on supplier home route */}
      {location.pathname === "/supplier" && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black z-10"></div>
          <video
            className="full-video-background"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Horizontal Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-lg py-2" 
            : "bg-black/50 backdrop-blur-md py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/supplier" className="flex items-center space-x-3">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Package size={28} className="text-toreso-teal" />
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl font-display font-medium text-white"
                >
                  Toreso
                </motion.span>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.slice(0, 7).map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`text-white opacity-80 hover:opacity-100 font-medium transition-colors relative ${
                    location.pathname === item.path 
                      ? "opacity-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-toreso-teal" 
                      : "hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/50 after:transition-all"
                  }`}
                >
                  <span className="flex items-center">
                    {item.title}
                    {item.badge && (
                      <Badge variant="default" className="ml-1 bg-toreso-teal text-xs h-5 w-5 flex items-center justify-center p-0 rounded-full">
                        {item.badge}
                      </Badge>
                    )}
                  </span>
                </Link>
              ))}
              
              {/* More Dropdown for remaining items */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-white opacity-80 hover:opacity-100 font-medium"
                  >
                    More
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-black/90 text-white border-gray-800">
                  {menuItems.slice(7).map((item) => (
                    <DropdownMenuItem key={item.path} className="focus:bg-white/10">
                      <Link to={item.path} className="flex items-center w-full">
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                        {item.badge && (
                          <Badge variant="default" className="ml-2 bg-toreso-teal">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-1 md:space-x-4">
              {/* Search - Hidden on smaller screens */}
              <div className="hidden md:flex items-center relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white/10 border-0 text-white w-40 lg:w-56 focus:bg-white/20 focus:outline-none rounded"
                />
              </div>

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-white hover:bg-white/10"
                  >
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-toreso-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      6
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 bg-black/90 text-white border-gray-800">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <div className="max-h-80 overflow-y-auto">
                    {/* Notification items */}
                    {[
                      { 
                        title: "New order received", 
                        description: "Maruti Corp. placed an order for 2,000 corrugated boxes", 
                        time: "30 minutes ago" 
                      },
                      { 
                        title: "Audit reminder", 
                        description: "Quality audit scheduled for next week", 
                        time: "2 hours ago" 
                      },
                      { 
                        title: "RFQ received", 
                        description: "JCB Ltd. has sent an RFQ for industrial pallets", 
                        time: "1 day ago" 
                      },
                    ].map((notification, idx) => (
                      <DropdownMenuItem key={idx} className="py-3 px-4 cursor-pointer focus:bg-white/10">
                        <div>
                          <p className="text-sm font-medium text-white">{notification.title}</p>
                          <p className="text-xs text-gray-400">{notification.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="text-center text-toreso-teal hover:text-toreso-teal focus:bg-white/10">
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
                    className="flex items-center text-white hover:bg-white/10"
                  >
                    <Avatar className="h-8 w-8 mr-2 border border-white/20">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-toreso-teal text-white">SP</AvatarFallback>
                    </Avatar>
                    <div className="text-left hidden md:block">
                      <p className="text-sm font-medium text-white">PackRight Ind.</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-black/90 text-white border-gray-800">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="focus:bg-white/10 text-white">
                    <User size={16} className="mr-2" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-white/10 text-white">
                    <Building size={16} className="mr-2" /> Company Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-white/10 text-white">
                    <Settings size={16} className="mr-2" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="text-red-400 focus:bg-white/10">
                    <LogOut size={16} className="mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
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
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              className="fixed right-0 top-0 h-screen w-64 bg-black border-l border-gray-800 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package size={24} className="text-toreso-teal mr-2" />
                    <span className="font-display font-medium text-lg text-white">
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
              </div>

              <div className="px-4 py-2 border-b border-gray-800">
                <div className="flex items-center space-x-3 py-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-toreso-teal text-white">SP</AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <p className="font-medium">PackRight Industries</p>
                    <p className="text-sm text-gray-400">Supplier</p>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="px-4 py-2">
                  <div className="relative">
                    <Search
                      size={16}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-9 pr-4 py-2 bg-white/10 border-0 text-white w-full focus:bg-white/20 focus:outline-none rounded"
                    />
                  </div>
                </div>

                <nav className="mt-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className={`flex items-center justify-between px-4 py-3 text-white border-b border-gray-800/50 ${
                        location.pathname === item.path ? "bg-white/10" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <span className="mr-3 text-toreso-teal">{item.icon}</span>
                        <span className="text-white">{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="default" className="bg-toreso-teal text-white">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="border-t border-gray-800 p-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-400 hover:bg-white/10"
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 pt-16 md:pt-24">
        {/* Immersive landing content for supplier route */}
        {location.pathname === "/supplier" && (
          <section className="immersive-hero">
            <div className="immersive-hero-content text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-6 tracking-tight text-white"
              >
                Revolutionizing Packaging Supply
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10"
              >
                Transform your business with direct access to verified buyers, 
                streamlined operations, and simplified compliance – all in one platform.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Button className="bg-toreso-teal hover:bg-toreso-teal/90 text-white border-0 rounded-none py-6 px-8 text-lg">
                  Explore Platform
                </Button>
                <Button variant="contrast" className="text-white border-white/20 hover:border-white/50 hover:bg-white/5 rounded-none py-6 px-8 text-lg">
                  Watch Demo
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm text-white/50 mb-2">Scroll to explore</span>
                  <div className="w-6 h-10 border border-white/20 rounded-full flex items-center justify-center">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-white rounded-full"
                      animate={{ 
                        y: [0, 12, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
        
        <Outlet />
      </main>
    </div>
  );
};

export default SupplierLayout;
