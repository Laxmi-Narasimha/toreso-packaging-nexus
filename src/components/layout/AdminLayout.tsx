import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
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
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const AdminLayout = () => {
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

  // Video background URL from Benz Packaging
  const videoUrl = "https://www.benz-packaging.com/wp-content/uploads/2022/04/homepage-banner-1.mp4";

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
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Header/Navigation - now horizontal top navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
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
                  className="text-xl font-bold text-white"
                >
                  Toreso<span className="text-toreso-blue">Admin</span>
                </motion.span>
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  {menuItems.slice(0, 6).map((item) => (
                    <NavigationMenuItem key={item.path}>
                      <Link to={item.path}>
                        <NavigationMenuLink 
                          className={navigationMenuTriggerStyle() + ` ${
                            location.pathname === item.path 
                              ? "bg-blue-50 text-toreso-blue" 
                              : ""
                          }`}
                        >
                          <motion.span 
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {item.icon}
                            <span className="ml-2">{item.title}</span>
                          </motion.span>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>More</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {menuItems.slice(6).map((item) => (
                          <li key={item.path}>
                            <Link 
                              to={item.path}
                              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${
                                location.pathname === item.path 
                                  ? "bg-blue-50 text-toreso-blue" 
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                {item.icon}
                                <span className="text-sm font-medium">{item.title}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-full w-56 md:w-64 focus:outline-none focus:ring-2 focus:ring-toreso-blue focus:border-transparent"
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                  >
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-80 overflow-y-auto">
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">New supplier registration</p>
                        <p className="text-xs text-gray-500">ABC Packaging Ltd. has registered as a supplier</p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">Audit scheduled</p>
                        <p className="text-xs text-gray-500">Quality audit scheduled for XYZ Materials Inc.</p>
                        <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">Certificate expiring</p>
                        <p className="text-xs text-gray-500">QualiPack's ISO certification expires in 7 days</p>
                        <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                      </div>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-center text-toreso-blue hover:text-toreso-blue hover:bg-blue-50">
                    View all notifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center"
                  >
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="text-left hidden md:block">
                      <p className="text-sm font-medium">Admin User</p>
                      <p className="text-xs text-gray-500">administrator</p>
                    </div>
                    <ChevronDown size={14} className="ml-1 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User size={16} className="mr-2" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings size={16} className="mr-2" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut size={16} className="mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
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
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              className="fixed right-0 top-0 h-screen w-64 bg-white overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package size={24} className="text-toreso-blue mr-2" />
                    <span className="font-bold text-lg">
                      Toreso<span className="text-toreso-blue">Admin</span>
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMobileMenu}
                  >
                    <X size={18} />
                  </Button>
                </div>
              </div>

              <div className="px-4 py-2 border-b">
                <div className="flex items-center space-x-3 py-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Admin User</p>
                    <p className="text-sm text-gray-500">administrator</p>
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
                      className="pl-9 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-toreso-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <nav className="mt-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className={`flex items-center justify-between px-4 py-3 hover:bg-gray-100 ${
                        location.pathname === item.path ? "bg-blue-50 text-toreso-blue" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="border-t p-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600"
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
      <main className="flex-1 pt-16 md:pt-20">
        {/* Introductory section for admin landing */}
        {location.pathname === "/admin" && (
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Unified Packaging Industry Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Empowering administrators with comprehensive tools to oversee and optimize the entire packaging ecosystem, from supplier verification to transaction monitoring, all in one powerful platform.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-toreso-blue hover:bg-toreso-blue/90 text-white mr-4">
                Platform Overview
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                System Status
              </Button>
            </div>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
