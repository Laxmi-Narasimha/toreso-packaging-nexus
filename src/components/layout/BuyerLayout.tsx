
import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Package,
  ShoppingCart,
  FileText,
  Building,
  BarChart4,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Search,
  User,
  Menu,
  X,
  Heart,
  Clock,
  MessageSquare,
  Home,
  ChevronDown,
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
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const BuyerLayout = () => {
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
      path: "/buyer",
    },
    {
      title: "Products",
      icon: <Package size={20} />,
      path: "/buyer/products",
    },
    {
      title: "Suppliers",
      icon: <Building size={20} />,
      path: "/buyer/suppliers",
    },
    {
      title: "Cart",
      icon: <ShoppingCart size={20} />,
      path: "/buyer/cart",
      badge: 3,
    },
    {
      title: "Orders",
      icon: <FileText size={20} />,
      path: "/buyer/orders",
    },
    {
      title: "RFQ",
      icon: <FileText size={20} />,
      path: "/buyer/rfq",
    },
    {
      title: "Favorites",
      icon: <Heart size={20} />,
      path: "/buyer/favorites",
    },
    {
      title: "History",
      icon: <Clock size={20} />,
      path: "/buyer/order-history",
    },
    {
      title: "Analytics",
      icon: <BarChart4 size={20} />,
      path: "/buyer/analytics",
    },
    {
      title: "Messages",
      icon: <MessageSquare size={20} />,
      path: "/buyer/messages",
      badge: 5,
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/buyer/settings",
    },
    {
      title: "Support",
      icon: <HelpCircle size={20} />,
      path: "/buyer/support",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation - now top navigation only, inspired by the design reference */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/buyer" className="flex items-center space-x-2">
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
                  className="text-xl font-bold text-toreso-dark"
                >
                  Toreso<span className="text-toreso-blue">Nexus</span>
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
                            {item.badge && (
                              <Badge variant="default" className="ml-2 bg-toreso-blue">
                                {item.badge}
                              </Badge>
                            )}
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
                                {item.badge && (
                                  <Badge variant="default" className="bg-toreso-blue">
                                    {item.badge}
                                  </Badge>
                                )}
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
                  placeholder="Search products, suppliers..."
                  className="pl-10 pr-4 py-2 border rounded-full w-56 md:w-64 focus:outline-none focus:ring-2 focus:ring-toreso-blue focus:border-transparent"
                />
              </div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="/buyer/cart">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                  >
                    <ShoppingCart size={20} />
                    <span className="absolute -top-1 -right-1 bg-toreso-blue text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                  </Button>
                </Link>
              </motion.div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                  >
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-toreso-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">4</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-80 overflow-y-auto">
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">Order #12345 shipped</p>
                        <p className="text-xs text-gray-500">Your order of corrugated boxes has been shipped</p>
                        <p className="text-xs text-gray-500 mt-1">10 minutes ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">Quote received</p>
                        <p className="text-xs text-gray-500">PackRight Industries has sent a quote for your RFQ</p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">Price alert</p>
                        <p className="text-xs text-gray-500">Price drop on kraft paper packaging</p>
                        <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">New supplier</p>
                        <p className="text-xs text-gray-500">EcoPackage Co. has joined your supplier network</p>
                        <p className="text-xs text-gray-500 mt-1">2 days ago</p>
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
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-left hidden md:block">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-500">Maruti Corp.</p>
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
                    <Building size={16} className="mr-2" /> Company Profile
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
                      Toreso<span className="text-toreso-blue">Nexus</span>
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
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">Maruti Corp.</p>
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
                      {item.badge && (
                        <Badge variant="default" className="bg-toreso-blue">
                          {item.badge}
                        </Badge>
                      )}
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
      <main className="flex-1 mt-16 md:mt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default BuyerLayout;
