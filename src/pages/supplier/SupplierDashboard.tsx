
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DollarSign,
  Users,
  Package,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  FileText,
  CheckCircle,
  Truck,
  Calendar,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const SupplierDashboard = () => {
  // Sample data for charts
  const monthlyData = [
    { name: "Jan", orders: 25, revenue: 52000 },
    { name: "Feb", orders: 30, revenue: 58000 },
    { name: "Mar", orders: 38, revenue: 69000 },
    { name: "Apr", orders: 35, revenue: 64000 },
    { name: "May", orders: 40, revenue: 75000 },
    { name: "Jun", orders: 48, revenue: 86000 },
    { name: "Jul", orders: 42, revenue: 78000 },
  ];

  const productPerformance = [
    { name: "Corrugated Boxes", value: 45 },
    { name: "Bubble Wrap", value: 25 },
    { name: "Poly Bags", value: 15 },
    { name: "Pallets", value: 15 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const stats = [
    {
      title: "Monthly Revenue",
      value: "₹78,500",
      change: "+12%",
      trend: "up",
      icon: <DollarSign className="h-8 w-8 text-toreso-teal" />,
      description: "Compared to last month",
    },
    {
      title: "Pending Orders",
      value: "12",
      change: "-3",
      trend: "down",
      icon: <ShoppingCart className="h-8 w-8 text-toreso-orange" />,
      description: "Orders awaiting processing",
    },
    {
      title: "Active RFQs",
      value: "7",
      change: "+2",
      trend: "up",
      icon: <FileText className="h-8 w-8 text-toreso-blue" />,
      description: "Quotes awaiting response",
    },
    {
      title: "On-time Delivery",
      value: "95%",
      change: "+2%",
      trend: "up",
      icon: <Truck className="h-8 w-8 text-toreso-purple" />,
      description: "Last 30 days performance",
    },
  ];

  // Pending tasks
  const pendingTasks = [
    {
      id: 1,
      title: "ISO 9001 Certificate Renewal",
      dueDate: "July 15, 2023",
      priority: "High",
      type: "compliance",
    },
    {
      id: 2,
      title: "Respond to RFQ from Maruti Corp.",
      dueDate: "July 10, 2023",
      priority: "High",
      type: "rfq",
    },
    {
      id: 3,
      title: "Update inventory levels for corrugated boxes",
      dueDate: "July 12, 2023",
      priority: "Medium",
      type: "inventory",
    },
    {
      id: 4,
      title: "Process order #1254 for shipment",
      dueDate: "July 8, 2023",
      priority: "High",
      type: "order",
    },
    {
      id: 5,
      title: "Complete monthly compliance report",
      dueDate: "July 31, 2023",
      priority: "Medium",
      type: "compliance",
    },
  ];

  // Recent orders
  const recentOrders = [
    {
      id: "ORD-2326",
      buyerName: "Maruti Corp.",
      products: "Corrugated Boxes (500pcs)",
      date: "July 5, 2023",
      amount: "₹12,500",
      status: "Processing",
    },
    {
      id: "ORD-2325",
      buyerName: "JCB Ltd.",
      products: "Industrial Pallets (100pcs)",
      date: "July 4, 2023",
      amount: "₹35,000",
      status: "Shipped",
    },
    {
      id: "ORD-2324",
      buyerName: "Volvo India",
      products: "Bubble Wrap Rolls (200pcs)",
      date: "July 3, 2023",
      amount: "₹8,000",
      status: "Delivered",
    },
    {
      id: "ORD-2323",
      buyerName: "TATA Motors",
      products: "Custom Packaging Kit",
      date: "July 1, 2023",
      amount: "₹22,800",
      status: "Delivered",
    },
  ];

  // Animation for chart elements
  const [chartAnimate, setChartAnimate] = useState(false);
  
  useEffect(() => {
    // Start animation after component mounts
    setChartAnimate(true);
  }, []);

  // Video background
  const videoUrl = "https://player.vimeo.com/external/515912154.hd.mp4?s=f93d7c1904376355a35573502b082e28840203ad&profile_id=174&oauth2_token_id=57447761";

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/50 to-black z-10"></div>
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

      <div className="container mx-auto px-4 py-8 pt-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-white">Supplier Dashboard</h1>
          <p className="text-gray-200">
            Welcome back, PackRight Industries! Here's your business overview.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="rounded-full p-3 bg-white/10">
                      {stat.icon}
                    </div>
                    <div className="flex items-center">
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-5 w-5 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500 mr-1" />
                      )}
                      <span
                        className={`text-sm ${
                          stat.trend === "up" ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">{stat.title}</p>
                    <p className="text-3xl font-bold mt-2 text-white">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg h-full">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="text-white">Monthly Performance</CardTitle>
                <CardDescription className="text-gray-400">Orders and Revenue Trends</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                      data={monthlyData} 
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                      <XAxis 
                        dataKey="name" 
                        stroke="rgba(255,255,255,0.6)" 
                        tick={{ fill: 'rgba(255,255,255,0.6)' }} 
                      />
                      <YAxis 
                        yAxisId="left" 
                        orientation="left" 
                        stroke="rgba(255,255,255,0.6)" 
                        tick={{ fill: 'rgba(255,255,255,0.6)' }}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        domain={[0, 'dataMax + 10000']}
                        stroke="rgba(255,255,255,0.6)"
                        tick={{ fill: 'rgba(255,255,255,0.6)' }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0,0,0,0.8)', 
                          border: '1px solid rgba(255,255,255,0.2)', 
                          borderRadius: '4px',
                          color: 'white'
                        }} 
                        labelStyle={{ color: 'white' }}
                        itemStyle={{ color: 'white' }}
                      />
                      <Legend wrapperStyle={{ color: 'white' }} />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="orders"
                        stroke="#8884d8"
                        strokeWidth={3}
                        dot={{ r: 4, strokeWidth: 2 }}
                        activeDot={{ r: 8 }}
                        animationDuration={2000}
                        animationEasing="ease-in-out"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="revenue"
                        stroke="#00C49F"
                        strokeWidth={3}
                        dot={{ r: 4, strokeWidth: 2 }}
                        animationDuration={2000}
                        animationEasing="ease-in-out"
                        animationBegin={300}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg h-full">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="text-white">Product Performance</CardTitle>
                <CardDescription className="text-gray-400">Sales distribution by product category</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={productPerformance}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={{ stroke: 'rgba(255,255,255,0.3)' }}
                        animationBegin={300}
                        animationDuration={1500}
                        animationEasing="ease-out"
                      >
                        {productPerformance.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]} 
                            stroke="rgba(0,0,0,0.3)"
                            strokeWidth={1}
                          />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0,0,0,0.8)', 
                          border: '1px solid rgba(255,255,255,0.2)', 
                          borderRadius: '4px',
                          color: 'white'
                        }}
                        itemStyle={{ color: 'white' }}
                      />
                      <Legend 
                        layout="vertical" 
                        verticalAlign="middle" 
                        align="right"
                        wrapperStyle={{ color: 'white' }}
                        formatter={(value, entry, index) => (
                          <span style={{ color: 'white' }}>{value}</span>
                        )}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tasks and Orders Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex justify-between items-center text-white">
                  <span>Pending Tasks</span>
                  <span className="text-sm bg-toreso-teal text-black font-bold px-2 py-1 rounded-full">
                    {pendingTasks.length} tasks
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-400">Tasks requiring your attention</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  {pendingTasks.map((task, index) => (
                    <motion.div 
                      key={task.id} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex justify-between items-center p-3 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        {task.type === "compliance" ? (
                          <div className="p-2 rounded-full bg-red-900/30 text-red-400">
                            <AlertTriangle size={20} />
                          </div>
                        ) : task.type === "rfq" ? (
                          <div className="p-2 rounded-full bg-blue-900/30 text-blue-400">
                            <FileText size={20} />
                          </div>
                        ) : task.type === "inventory" ? (
                          <div className="p-2 rounded-full bg-green-900/30 text-green-400">
                            <Package size={20} />
                          </div>
                        ) : (
                          <div className="p-2 rounded-full bg-orange-900/30 text-orange-400">
                            <ShoppingCart size={20} />
                          </div>
                        )}
                        <div>
                          <h4 className="font-medium text-white">{task.title}</h4>
                          <div className="flex items-center mt-1">
                            <Calendar size={14} className="text-gray-400 mr-1" />
                            <p className="text-xs text-gray-400">Due: {task.dueDate}</p>
                          </div>
                        </div>
                      </div>
                      <span 
                        className={`text-xs px-2 py-1 rounded-full ${
                          task.priority === "High" 
                            ? "bg-red-900/30 text-red-400" 
                            : task.priority === "Medium"
                            ? "bg-yellow-900/30 text-yellow-400"
                            : "bg-blue-900/30 text-blue-400"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="text-white">Recent Orders</CardTitle>
                <CardDescription className="text-gray-400">Latest customer orders</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left border-b border-white/10">
                        <th className="pb-2 font-medium text-gray-300">Order ID</th>
                        <th className="pb-2 font-medium text-gray-300">Buyer</th>
                        <th className="pb-2 font-medium text-gray-300">Amount</th>
                        <th className="pb-2 font-medium text-gray-300">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <motion.tr 
                          key={order.id} 
                          className="border-b border-white/10 last:border-0"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                        >
                          <td className="py-3 text-white">
                            <div className="font-medium">{order.id}</div>
                            <div className="text-xs text-gray-400">{order.date}</div>
                          </td>
                          <td className="py-3 text-white">
                            <div className="font-medium">{order.buyerName}</div>
                            <div className="text-xs text-gray-400 truncate max-w-[150px]">
                              {order.products}
                            </div>
                          </td>
                          <td className="py-3 font-medium text-white">{order.amount}</td>
                          <td className="py-3">
                            <span 
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                order.status === "Processing" 
                                  ? "bg-yellow-900/30 text-yellow-400"
                                  : order.status === "Shipped" 
                                  ? "bg-blue-900/30 text-blue-400"
                                  : "bg-green-900/30 text-green-400"
                              }`}
                            >
                              {order.status === "Processing" && (
                                <span className="h-1.5 w-1.5 mr-1 rounded-full bg-yellow-400"></span>
                              )}
                              {order.status === "Shipped" && (
                                <span className="h-1.5 w-1.5 mr-1 rounded-full bg-blue-400"></span>
                              )}
                              {order.status === "Delivered" && (
                                <span className="h-1.5 w-1.5 mr-1 rounded-full bg-green-400"></span>
                              )}
                              {order.status}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="glass" asChild className="text-sm">
                    <a href="/supplier/orders">
                      <span>View all orders</span>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;
