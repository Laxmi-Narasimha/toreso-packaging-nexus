
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Building,
  ShoppingCart,
  FileCheck,
  CalendarClock,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Package,
  FileText,
  CheckCircle,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, Area, AreaChart } from "recharts";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  useEffect(() => {
    // Animation initialization or data loading could go here
    
    // Set page title
    document.title = "Admin Dashboard | Toreso";
  }, []);

  // Sample data for charts
  const orderData = [
    { name: "Jan", orders: 65, target: 70 },
    { name: "Feb", orders: 59, target: 70 },
    { name: "Mar", orders: 80, target: 70 },
    { name: "Apr", orders: 81, target: 70 },
    { name: "May", orders: 56, target: 70 },
    { name: "Jun", orders: 55, target: 70 },
    { name: "Jul", orders: 40, target: 70 },
  ];

  const supplierStatusData = [
    { name: "Verified", value: 68, color: "#4F46E5" },
    { name: "Pending", value: 15, color: "#F59E0B" },
    { name: "Rejected", value: 7, color: "#EF4444" },
    { name: "Inactive", value: 10, color: "#64748B" },
  ];

  // Sample data for stats
  const stats = [
    {
      title: "Active Buyers",
      value: "87",
      change: "+12%",
      trend: "up",
      icon: <Users className="h-5 w-5 text-white" />,
      bg: "from-indigo-500 to-blue-600",
    },
    {
      title: "Active Suppliers",
      value: "152",
      change: "+8%",
      trend: "up",
      icon: <Building className="h-5 w-5 text-white" />,
      bg: "from-cyan-500 to-teal-600",
    },
    {
      title: "Orders this Month",
      value: "328",
      change: "-3%",
      trend: "down",
      icon: <ShoppingCart className="h-5 w-5 text-white" />,
      bg: "from-orange-400 to-red-500",
    },
    {
      title: "Transaction Volume",
      value: "₹42.5M",
      change: "+18%",
      trend: "up",
      icon: <FileCheck className="h-5 w-5 text-white" />,
      bg: "from-purple-500 to-pink-600",
    },
  ];

  // Sample data for recent activities
  const recentActivities = [
    {
      id: 1,
      type: "verification",
      title: "New Supplier Registration",
      description: "EcoPackage Co. submitted registration documents",
      time: "10 minutes ago",
      icon: <Building className="h-5 w-5" />,
      color: "bg-indigo-500",
    },
    {
      id: 2,
      type: "audit",
      title: "Quality Audit Completed",
      description: "BoxCraft Ltd. passed quality audit with 92% score",
      time: "2 hours ago",
      icon: <FileCheck className="h-5 w-5" />,
      color: "bg-green-500",
    },
    {
      id: 3,
      type: "alert",
      title: "Supplier Certificate Expiring",
      description: "Packaging Solutions Inc. ISO cert expires in 7 days",
      time: "5 hours ago",
      icon: <AlertCircle className="h-5 w-5" />,
      color: "bg-orange-500",
    },
    {
      id: 4,
      type: "audit",
      title: "Audit Scheduled",
      description: "Quality audit scheduled for FlexiPack Industries",
      time: "1 day ago",
      icon: <CalendarClock className="h-5 w-5" />,
      color: "bg-purple-500",
    },
    {
      id: 5,
      type: "verification",
      title: "Supplier Verification Approved",
      description: "Premium Containers Ltd. verification completed",
      time: "1 day ago",
      icon: <FileCheck className="h-5 w-5" />,
      color: "bg-blue-500",
    },
  ];

  // Sample data for pending approvals
  const pendingApprovals = [
    {
      id: 1,
      type: "supplier",
      name: "GreenBox Packaging Ltd.",
      details: "Corrugated box manufacturer",
      status: "Verification Pending",
      time: "Submitted 2 days ago",
    },
    {
      id: 2,
      type: "product",
      name: "Industrial Grade Bubble Wrap",
      details: "By SafeWrap Packaging Co.",
      status: "Review Pending",
      time: "Submitted yesterday",
    },
    {
      id: 3,
      type: "audit",
      name: "Quality Certification",
      details: "For TotalPack Solutions",
      status: "Approval Needed",
      time: "Audit completed yesterday",
    },
  ];

  // Animation variants for motion elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="relative pb-12 pt-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 space-y-8 relative z-10">
        {/* Welcome Header */}
        <motion.div 
          className="text-center md:text-left mb-8"
          variants={itemVariants}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here's what's happening with your platform today
          </p>
        </motion.div>

        {/* Stats Grid with glass morphism */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full border-0 shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-90 z-0`}></div>
                <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] z-0"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-white/80">{stat.title}</p>
                      <p className="text-3xl font-bold mt-2 text-white">{stat.value}</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-300 mr-2" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-300 mr-2" />
                    )}
                    <span
                      className={`text-sm ${
                        stat.trend === "up" ? "text-green-300" : "text-red-300"
                      }`}
                    >
                      {stat.change} from last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Action Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          {/* Pending Approvals Card */}
          <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="border-0 bg-white/80 dark:bg-black/40 backdrop-blur-lg shadow-xl overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-full p-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                    <FileText className="h-6 w-6" />
                  </div>
                  <span className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                    {pendingApprovals.length}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">Pending Approvals</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Registration and verification requests that need review
                </p>
                <Button variant="outline" className="w-full justify-between group">
                  View Requests 
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Scheduled Audits Card */}
          <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="border-0 bg-white/80 dark:bg-black/40 backdrop-blur-lg shadow-xl overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-600"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-full p-3 bg-gradient-to-br from-green-500 to-teal-600 text-white">
                    <CalendarClock className="h-6 w-6" />
                  </div>
                  <span className="text-sm px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                    12
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">Scheduled Audits</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Upcoming supplier quality and compliance audits
                </p>
                <Button variant="outline" className="w-full justify-between group">
                  View Schedule 
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* System Alerts Card */}
          <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="border-0 bg-white/80 dark:bg-black/40 backdrop-blur-lg shadow-xl overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-full p-3 bg-gradient-to-br from-orange-500 to-red-500 text-white">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <span className="text-sm px-2 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
                    5
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">System Alerts</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Issues that require immediate attention
                </p>
                <Button variant="outline" className="w-full justify-between group">
                  View Alerts 
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Charts Row */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={itemVariants}
        >
          {/* Monthly Orders Chart */}
          <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="border-0 bg-white/80 dark:bg-black/40 backdrop-blur-lg shadow-xl overflow-hidden">
              <CardHeader className="pb-0 pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold">Monthly Orders</CardTitle>
                    <CardDescription>Platform-wide order volume trend</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="h-8">This Year</Button>
                    <Button variant="outline" size="sm" className="h-8">Last Year</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={orderData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="orderGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                          borderRadius: '8px', 
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="orders" 
                        stroke="#4F46E5" 
                        fillOpacity={1} 
                        fill="url(#orderGradient)" 
                        strokeWidth={2}
                        activeDot={{ r: 8, strokeWidth: 0 }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="target" 
                        stroke="#10B981" 
                        strokeDasharray="5 5"
                        fillOpacity={0.2}
                        fill="url(#targetGradient)" 
                        strokeWidth={2} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Supplier Status Chart */}
          <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="border-0 bg-white/80 dark:bg-black/40 backdrop-blur-lg shadow-xl overflow-hidden">
              <CardHeader className="pb-0 pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold">Supplier Status</CardTitle>
                    <CardDescription>Current supplier verification status</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="h-8">Export</Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        {supplierStatusData.map((entry, index) => (
                          <linearGradient key={`gradient-${index}`} id={`gradient-${entry.name}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={entry.color} stopOpacity={0.9}/>
                            <stop offset="100%" stopColor={entry.color} stopOpacity={0.7}/>
                          </linearGradient>
                        ))}
                      </defs>
                      <Pie
                        data={supplierStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={3}
                        dataKey="value"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {supplierStatusData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={`url(#gradient-${entry.name})`} 
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth={2}
                          />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                          borderRadius: '8px', 
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
                        }}
                        formatter={(value, name) => [`${value} suppliers`, name]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Recent Activity and Pending Approvals */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={itemVariants}
        >
          {/* Recent Activity */}
          <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="border-0 bg-white/80 dark:bg-black/40 backdrop-blur-lg shadow-xl overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
                    <CardDescription>Latest activities across the platform</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-5">
                  {recentActivities.map((activity, index) => (
                    <motion.div 
                      key={activity.id} 
                      className="flex items-start transition-all duration-300 hover:bg-black/5 rounded-lg p-2 -mx-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`p-2 rounded-full flex-shrink-0 text-white ${activity.color}`}>
                        {activity.icon}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{activity.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pending Approvals List */}
          <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="border-0 bg-white/80 dark:bg-black/40 backdrop-blur-lg shadow-xl overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl font-bold">Pending Approvals</CardTitle>
                    <CardDescription>Items waiting for administrator approval</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-5">
                  {pendingApprovals.map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      className="flex items-start transition-all duration-300 hover:bg-black/5 rounded-lg p-2 -mx-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`p-2 rounded-full flex-shrink-0 text-white bg-gradient-to-r 
                        ${item.type === 'supplier' ? 'from-blue-500 to-indigo-600' : 
                          item.type === 'product' ? 'from-purple-500 to-pink-600' : 
                          'from-orange-500 to-red-500'}`}
                      >
                        {item.type === 'supplier' ? <Building className="h-5 w-5" /> : 
                         item.type === 'product' ? <Package className="h-5 w-5" /> :
                         <FileCheck className="h-5 w-5" />}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{item.name}</p>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.details}</p>
                        <div className="flex justify-between mt-1">
                          <p className="text-xs text-gray-400">{item.time}</p>
                          <div className="space-x-2">
                            <button className="text-xs text-green-600 hover:underline">Approve</button>
                            <button className="text-xs text-red-600 hover:underline">Reject</button>
                            <button className="text-xs text-blue-600 hover:underline">Review</button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
