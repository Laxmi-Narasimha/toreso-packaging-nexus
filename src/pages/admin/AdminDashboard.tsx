
import React from "react";
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
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const AdminDashboard = () => {
  // Sample data for charts
  const orderData = [
    { name: "Jan", orders: 65 },
    { name: "Feb", orders: 59 },
    { name: "Mar", orders: 80 },
    { name: "Apr", orders: 81 },
    { name: "May", orders: 56 },
    { name: "Jun", orders: 55 },
    { name: "Jul", orders: 40 },
  ];

  const supplierStatusData = [
    { name: "Verified", value: 68 },
    { name: "Pending", value: 15 },
    { name: "Rejected", value: 7 },
    { name: "Inactive", value: 10 },
  ];

  const COLORS = ["#2C5EF6", "#F97316", "#F43F5E", "#64748B"];

  // Sample data for stats
  const stats = [
    {
      title: "Active Buyers",
      value: "87",
      change: "+12%",
      trend: "up",
      icon: <Users className="h-5 w-5 text-toreso-blue" />,
    },
    {
      title: "Active Suppliers",
      value: "152",
      change: "+8%",
      trend: "up",
      icon: <Building className="h-5 w-5 text-toreso-teal" />,
    },
    {
      title: "Orders this Month",
      value: "328",
      change: "-3%",
      trend: "down",
      icon: <ShoppingCart className="h-5 w-5 text-toreso-orange" />,
    },
    {
      title: "Transaction Volume",
      value: "₹42.5M",
      change: "+18%",
      trend: "up",
      icon: <FileCheck className="h-5 w-5 text-toreso-purple" />,
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
      icon: <Building className="h-5 w-5 text-toreso-blue" />,
    },
    {
      id: 2,
      type: "audit",
      title: "Quality Audit Completed",
      description: "BoxCraft Ltd. passed quality audit with 92% score",
      time: "2 hours ago",
      icon: <FileCheck className="h-5 w-5 text-toreso-green" />,
    },
    {
      id: 3,
      type: "alert",
      title: "Supplier Certificate Expiring",
      description: "Packaging Solutions Inc. ISO cert expires in 7 days",
      time: "5 hours ago",
      icon: <AlertCircle className="h-5 w-5 text-toreso-orange" />,
    },
    {
      id: 4,
      type: "audit",
      title: "Audit Scheduled",
      description: "Quality audit scheduled for FlexiPack Industries",
      time: "1 day ago",
      icon: <CalendarClock className="h-5 w-5 text-toreso-purple" />,
    },
    {
      id: 5,
      type: "verification",
      title: "Supplier Verification Approved",
      description: "Premium Containers Ltd. verification completed",
      time: "1 day ago",
      icon: <FileCheck className="h-5 w-5 text-toreso-blue" />,
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-1">Admin Dashboard</h1>
        <p className="text-gray-500">
          Welcome back! Here's what's happening on the platform today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-center mt-4">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-2" />
                )}
                <span
                  className={`text-sm ${
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.change} from last month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Monthly Orders</CardTitle>
            <CardDescription>Platform-wide order volume trend</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={orderData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#2C5EF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Supplier Status</CardTitle>
            <CardDescription>Current supplier verification status</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={supplierStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {supplierStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Pending Approvals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest activities across the platform</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-5">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className={`p-2 rounded-full flex-shrink-0 
                    ${activity.type === 'verification' ? 'bg-blue-100' : 
                      activity.type === 'audit' ? 'bg-green-100' : 
                      'bg-orange-100'}`}
                  >
                    {activity.icon}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
            <CardDescription>Items waiting for administrator approval</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-5">
              {pendingApprovals.map((item) => (
                <div key={item.id} className="flex items-start">
                  <div className={`p-2 rounded-full flex-shrink-0 
                    ${item.type === 'supplier' ? 'bg-blue-100' : 
                      item.type === 'product' ? 'bg-purple-100' : 
                      'bg-orange-100'}`}
                  >
                    {item.type === 'supplier' ? <Building className="h-5 w-5 text-toreso-blue" /> : 
                     item.type === 'product' ? <Package className="h-5 w-5 text-toreso-purple" /> :
                     <FileCheck className="h-5 w-5 text-toreso-orange" />}
                  </div>
                  <div className="ml-4">
                    <div className="flex justify-between">
                      <p className="font-medium">{item.name}</p>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{item.details}</p>
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-gray-400">{item.time}</p>
                      <div className="space-x-2">
                        <button className="text-xs text-green-600 hover:underline">Approve</button>
                        <button className="text-xs text-red-600 hover:underline">Reject</button>
                        <button className="text-xs text-blue-600 hover:underline">Review</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
