
import React, { useState } from "react";
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

  // Video background
  const videoUrl = "https://player.vimeo.com/external/515912154.hd.mp4?s=f93d7c1904376355a35573502b082e28840203ad&profile_id=174&oauth2_token_id=57447761";

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-white">Supplier Dashboard</h1>
          <p className="text-gray-200">
            Welcome back, PackRight Industries! Here's your business overview.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="rounded-full p-3 bg-gray-100">
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
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
              <CardDescription>Orders and Revenue Trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      domain={[0, 'dataMax + 10000']}
                    />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="orders"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="revenue"
                      stroke="#00C49F"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Product Performance</CardTitle>
              <CardDescription>Sales distribution by product category</CardDescription>
            </CardHeader>
            <CardContent>
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
                    >
                      {productPerformance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tasks and Orders Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Pending Tasks</span>
                <span className="text-sm bg-toreso-teal text-white px-2 py-1 rounded-full">
                  {pendingTasks.length} tasks
                </span>
              </CardTitle>
              <CardDescription>Tasks requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.map((task) => (
                  <div key={task.id} className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-3">
                      {task.type === "compliance" ? (
                        <div className="p-2 rounded-full bg-red-100 text-red-600">
                          <AlertTriangle size={20} />
                        </div>
                      ) : task.type === "rfq" ? (
                        <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                          <FileText size={20} />
                        </div>
                      ) : task.type === "inventory" ? (
                        <div className="p-2 rounded-full bg-green-100 text-green-600">
                          <Package size={20} />
                        </div>
                      ) : (
                        <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                          <ShoppingCart size={20} />
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900">{task.title}</h4>
                        <div className="flex items-center mt-1">
                          <Calendar size={14} className="text-gray-400 mr-1" />
                          <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                        </div>
                      </div>
                    </div>
                    <span 
                      className={`text-xs px-2 py-1 rounded-full ${
                        task.priority === "High" 
                          ? "bg-red-100 text-red-600" 
                          : task.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="pb-2 font-medium">Order ID</th>
                      <th className="pb-2 font-medium">Buyer</th>
                      <th className="pb-2 font-medium">Amount</th>
                      <th className="pb-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b last:border-0">
                        <td className="py-3">
                          <div className="font-medium">{order.id}</div>
                          <div className="text-xs text-gray-500">{order.date}</div>
                        </td>
                        <td className="py-3">
                          <div className="font-medium">{order.buyerName}</div>
                          <div className="text-xs text-gray-500 truncate max-w-[150px]">
                            {order.products}
                          </div>
                        </td>
                        <td className="py-3 font-medium">{order.amount}</td>
                        <td className="py-3">
                          <span 
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === "Processing" 
                                ? "bg-yellow-100 text-yellow-800"
                                : order.status === "Shipped" 
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {order.status === "Processing" && (
                              <svg className="h-1.5 w-1.5 mr-1 fill-yellow-500" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                            )}
                            {order.status === "Shipped" && (
                              <svg className="h-1.5 w-1.5 mr-1 fill-blue-500" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                            )}
                            {order.status === "Delivered" && (
                              <svg className="h-1.5 w-1.5 mr-1 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                            )}
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <a href="/supplier/orders" className="text-toreso-teal text-sm font-medium hover:underline">
                  View all orders →
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;
