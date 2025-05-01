
import React, { useState } from "react";
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
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  User,
  Menu,
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

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
                <Package size={24} className="text-toreso-blue mr-2" />
                <span className="font-bold text-lg">
                  Toreso<span className="text-toreso-blue">Admin</span>
                </span>
              </div>
            )}
            {collapsed && (
              <Package size={24} className="text-toreso-blue" />
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
                    collapsed ? "justify-center" : ""
                  } px-4 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-50 text-toreso-blue"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && <span className="ml-3">{item.title}</span>}
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
        <div className="md:hidden absolute inset-0 z-50 bg-black bg-opacity-50">
          <div className="w-64 h-screen bg-white">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
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

            <div className="flex-1 overflow-y-auto py-4">
              <nav className="px-2 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-blue-50 text-toreso-blue"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="ml-3">{item.title}</span>
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
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-toreso-blue focus:border-transparent"
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
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
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

export default AdminLayout;
