
import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Package,
  Clipboard,
  ShoppingCart,
  BarChart4,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
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

const SupplierLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
      path: "/supplier",
    },
    {
      title: "Product Catalog",
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
      title: "Company Profile",
      icon: <Building size={20} />,
      path: "/supplier/profile",
    },
    {
      title: "Audit & Compliance",
      icon: <BadgeCheck size={20} />,
      path: "/supplier/compliance",
    },
    {
      title: "Financial Management",
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
      title: "Help & Support",
      icon: <HelpCircle size={20} />,
      path: "/supplier/support",
    },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Desktop */}
      <aside
        className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 hidden md:block ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex flex-col h-full">
          <div
            className={`flex items-center p-4 border-b border-gray-200 ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            {!collapsed && (
              <div className="flex items-center">
                <Package size={24} className="text-toreso-teal mr-2" />
                <span className="font-bold text-lg">
                  Toreso<span className="text-toreso-teal">Supplier</span>
                </span>
              </div>
            )}
            {collapsed && (
              <Package size={24} className="text-toreso-teal" />
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className={collapsed ? "hidden" : ""}
            >
              <ChevronLeft size={18} />
            </Button>
          </div>

          {/* Collapsed toggle button */}
          {collapsed && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="mx-auto mt-2"
            >
              <ChevronRight size={18} />
            </Button>
          )}

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`flex items-center ${
                    collapsed ? "justify-center" : "justify-between"
                  } px-4 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-teal-50 text-toreso-teal"
                      : "text-gray-600 hover:bg-gray-100"
                  } relative`}
                >
                  <div className="flex items-center">
                    <span className="flex-shrink-0">{item.icon}</span>
                    {!collapsed && <span className="ml-3">{item.title}</span>}
                  </div>
                  
                  {!collapsed && item.badge && (
                    <Badge variant="default" className="bg-toreso-teal">
                      {item.badge}
                    </Badge>
                  )}
                  
                  {collapsed && item.badge && (
                    <Badge 
                      variant="default" 
                      className="absolute -top-1 -right-1 bg-toreso-teal text-xs h-5 w-5 flex items-center justify-center"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div
            className={`p-4 border-t border-gray-200 ${
              collapsed ? "flex justify-center" : ""
            }`}
          >
            <Button
              variant="ghost"
              className={`text-gray-600 hover:bg-gray-100 ${
                collapsed ? "w-10 h-10 p-0" : "w-full justify-start"
              }`}
              onClick={() => console.log("Log out")}
            >
              <LogOut size={20} />
              {!collapsed && <span className="ml-2">Logout</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="w-64 h-screen bg-white">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                <Package size={24} className="text-toreso-teal mr-2" />
                <span className="font-bold text-lg">
                  Toreso<span className="text-toreso-teal">Supplier</span>
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

            <div className="flex-1 overflow-y-auto py-4">
              <nav className="px-2 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-teal-50 text-toreso-teal"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <div className="flex items-center">
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="ml-3">{item.title}</span>
                    </div>
                    
                    {item.badge && (
                      <Badge variant="default" className="bg-toreso-teal">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-gray-200">
              <Button
                variant="ghost"
                className="text-gray-600 hover:bg-gray-100 w-full justify-start"
                onClick={() => console.log("Log out")}
              >
                <LogOut size={20} />
                <span className="ml-2">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-2"
                onClick={toggleMobileMenu}
              >
                <Menu size={20} />
              </Button>
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search orders, products..."
                  className="pl-10 pr-4 py-2 border rounded-md w-56 md:w-80 lg:w-96 focus:outline-none focus:ring-2 focus:ring-toreso-teal focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                  >
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-toreso-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">6</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-80 overflow-y-auto">
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">New order received</p>
                        <p className="text-xs text-gray-500">Maruti Corp. placed an order for 2,000 corrugated boxes</p>
                        <p className="text-xs text-gray-500 mt-1">30 minutes ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">Audit reminder</p>
                        <p className="text-xs text-gray-500">Quality audit scheduled for next week</p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">RFQ received</p>
                        <p className="text-xs text-gray-500">JCB Ltd. has sent an RFQ for industrial pallets</p>
                        <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">Certificate expiring</p>
                        <p className="text-xs text-gray-500">Your ISO certification expires in 30 days</p>
                        <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">Payment received</p>
                        <p className="text-xs text-gray-500">Payment of ₹125,000 received from Volvo India</p>
                        <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-2 px-4 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">Invoice due</p>
                        <p className="text-xs text-gray-500">Invoice #INV2023-456 is due in 3 days</p>
                        <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                      </div>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-center text-toreso-teal hover:text-toreso-teal hover:bg-teal-50">
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
                      <AvatarFallback>SP</AvatarFallback>
                    </Avatar>
                    <div className="text-left hidden md:block">
                      <p className="text-sm font-medium">Supplier Name</p>
                      <p className="text-xs text-gray-500">PackRight Industries</p>
                    </div>
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
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SupplierLayout;
