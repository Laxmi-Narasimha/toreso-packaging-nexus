
import React, { useRef, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Package, 
  Users, 
  Calendar,
  Filter,
  Download,
  ArrowRight,
  ChevronDown,
  FileText,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SupplierAnalytics = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dateRange, setDateRange] = useState("last-30-days");
  
  // Sample data for charts
  const salesData = [
    { month: "Jan", revenue: 320000, orders: 182, target: 300000 },
    { month: "Feb", revenue: 290000, orders: 165, target: 300000 },
    { month: "Mar", revenue: 350000, orders: 198, target: 320000 },
    { month: "Apr", revenue: 420000, orders: 237, target: 340000 },
    { month: "May", revenue: 400000, orders: 223, target: 350000 },
    { month: "Jun", revenue: 510000, orders: 285, target: 370000 },
    { month: "Jul", revenue: 480000, orders: 265, target: 380000 },
  ];

  const productCategoryData = [
    { name: "Corrugated Boxes", value: 42 },
    { name: "Bubble Wrap", value: 23 },
    { name: "Packaging Tape", value: 15 },
    { name: "Pallets", value: 12 },
    { name: "Other", value: 8 },
  ];

  const buyerDistributionData = [
    { name: "Automotive", value: 38 },
    { name: "Electronics", value: 27 },
    { name: "Consumer Goods", value: 22 },
    { name: "Industrial", value: 13 },
  ];

  const performanceData = [
    { name: "On-Time Delivery", value: 96, target: 95 },
    { name: "Quality Rating", value: 92, target: 90 },
    { name: "Return Rate", value: 2.3, target: 3 },
    { name: "Response Time", value: 4.2, target: 6 },
  ];

  const topProductsData = [
    { 
      id: 1, 
      name: "Heavy-Duty Corrugated Box (Large)", 
      sales: 8500, 
      growth: 15, 
      customers: 28 
    },
    { 
      id: 2, 
      name: "Premium Bubble Wrap Roll (300ft)", 
      sales: 6200, 
      growth: 8, 
      customers: 34 
    },
    { 
      id: 3, 
      name: "Industrial Pallets (Standard)", 
      sales: 5800, 
      growth: 12, 
      customers: 16 
    },
    { 
      id: 4, 
      name: "Custom Printed Boxes (Medium)", 
      sales: 4900, 
      growth: 22, 
      customers: 9 
    },
    { 
      id: 5, 
      name: "Packaging Tape (Clear, 48mm)", 
      sales: 4100, 
      growth: -2, 
      customers: 43 
    },
  ];

  const topBuyersData = [
    {
      name: "Maruti Suzuki India Ltd.",
      purchases: "₹1,250,000",
      orders: 18,
      growth: 22,
      products: 6,
    },
    {
      name: "Tata Motors",
      purchases: "₹980,000",
      orders: 14,
      growth: 15,
      products: 4,
    },
    {
      name: "Volvo India",
      purchases: "₹850,000",
      orders: 12,
      growth: 8,
      products: 3,
    },
    {
      name: "JCB India",
      purchases: "₹720,000",
      orders: 10,
      growth: -5,
      products: 5,
    },
    {
      name: "Honda Cars India",
      purchases: "₹650,000",
      orders: 8,
      growth: 18,
      products: 3,
    },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Video loading
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;  // Slow down the video for better effect
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative">
      {/* Video Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
            src="https://player.vimeo.com/progressive_redirect/playback/710123872/rendition/720p/file.mp4?loc=external&signature=0ae4e26e5168abfac595c27b1786558def1d72afceca4607b08d143d2f82c140"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        </div>

        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-start px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Performance Analytics</h1>
            <p className="text-xl text-gray-200 mb-8">
              Gain valuable insights into your business performance and make data-driven decisions
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 items-center">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-48 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                <SelectItem value="last-90-days">Last 90 Days</SelectItem>
                <SelectItem value="last-12-months">Last 12 Months</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Filter size={16} className="mr-2" />
              More Filters
            </Button>

            <Button className="ml-auto bg-toreso-teal hover:bg-toreso-teal/90">
              <Download size={16} className="mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </div>

      {/* Main Analysis Dashboard */}
      <div className="container mx-auto px-4 py-8 -mt-10 relative z-20">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { 
              title: "Monthly Revenue", 
              value: "₹4.8M", 
              change: "+12%", 
              trend: "up", 
              icon: <DollarSign className="h-5 w-5 text-toreso-teal" />
            },
            { 
              title: "Orders", 
              value: "285", 
              change: "+8%", 
              trend: "up", 
              icon: <ShoppingCart className="h-5 w-5 text-toreso-blue" />
            },
            { 
              title: "Active Buyers", 
              value: "48", 
              change: "+5", 
              trend: "up", 
              icon: <Users className="h-5 w-5 text-toreso-purple" />
            },
            { 
              title: "Products Sold", 
              value: "12,450", 
              change: "+18%", 
              trend: "up", 
              icon: <Package className="h-5 w-5 text-toreso-orange" />
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                      <p className="text-3xl font-bold mt-2">{stat.value}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-full">
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
            </motion.div>
          ))}
        </div>

        {/* Revenue and Orders Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="shadow-md border-none">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Revenue & Orders Analysis</CardTitle>
                  <CardDescription>Monthly performance and target comparison</CardDescription>
                </div>
                <Tabs defaultValue="revenue" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="revenue">Revenue</TabsTrigger>
                    <TabsTrigger value="orders">Orders</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salesData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip 
                      formatter={(value) => 
                        typeof value === 'number' && value > 1000 
                          ? `₹${(value).toLocaleString()}` 
                          : value
                      } 
                    />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      name="Revenue"
                      stroke="#00C9B6"
                      strokeWidth={3}
                      dot={{ r: 5, strokeWidth: 1 }}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="target"
                      name="Target"
                      stroke="#8884d8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="orders"
                      name="Orders"
                      stroke="#FF8042"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Product and Customer Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Category Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-md border-none h-full">
              <CardHeader>
                <CardTitle>Product Category Distribution</CardTitle>
                <CardDescription>Sales breakdown by product categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={productCategoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {productCategoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, 'Percentage']}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Buyer Industry Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-md border-none h-full">
              <CardHeader>
                <CardTitle>Buyer Industry Distribution</CardTitle>
                <CardDescription>Revenue breakdown by buyer industry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={buyerDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {buyerDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, 'Percentage']}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="shadow-md border-none">
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Key performance indicators compared to targets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={performanceData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 60, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" name="Actual" fill="#00C9B6" radius={[0, 4, 4, 0]}>
                      {performanceData.map((entry, index) => {
                        const isGood = 
                          (entry.name === "Return Rate" && entry.value <= entry.target) || 
                          (entry.name === "Response Time" && entry.value <= entry.target) || 
                          (entry.name !== "Return Rate" && entry.name !== "Response Time" && entry.value >= entry.target);
                        
                        return (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={isGood ? "#00C9B6" : "#FF8042"} 
                          />
                        );
                      })}
                    </Bar>
                    <Bar dataKey="target" name="Target" fill="#8884d8" radius={[0, 4, 4, 0]} opacity={0.5} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Top Products & Top Buyers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-md border-none">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>Your best-performing products this month</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-toreso-teal">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="divide-y">
                  {topProductsData.map((product, index) => (
                    <div key={index} className="py-3">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-medium">{product.name}</p>
                        <div className="flex items-center">
                          {product.growth > 0 ? (
                            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                          )}
                          <span
                            className={`text-sm font-medium ${
                              product.growth > 0 ? "text-green-500" : "text-red-500"
                            }`}
                          >
                            {product.growth > 0 ? "+" : ""}{product.growth}%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>₹{product.sales.toLocaleString()} sales</span>
                        <span>{product.customers} buyers</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Buyers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-md border-none">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Top Buyers</CardTitle>
                  <CardDescription>Your highest-spending clients this month</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-toreso-teal">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="divide-y">
                  {topBuyersData.map((buyer, index) => (
                    <div key={index} className="py-3">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-medium">{buyer.name}</p>
                        <p className="font-semibold text-toreso-teal">{buyer.purchases}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          <span>{buyer.orders} orders</span>
                          <span className="mx-1.5">•</span>
                          <Package className="h-3 w-3 mr-1" />
                          <span>{buyer.products} products</span>
                        </div>
                        <div className="flex items-center">
                          {buyer.growth > 0 ? (
                            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                          )}
                          <span
                            className={`text-xs font-medium ${
                              buyer.growth > 0 ? "text-green-500" : "text-red-500"
                            }`}
                          >
                            {buyer.growth > 0 ? "+" : ""}{buyer.growth}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Reports */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="shadow-md border-none">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Recent Analytics Reports</CardTitle>
                <CardDescription>Access detailed reports for deeper insights</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-toreso-teal">
                All Reports <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="divide-y">
                {[
                  {
                    title: "Monthly Sales Performance",
                    description: "Detailed analysis of revenue, products sold, and buyer trends",
                    date: "Generated today",
                    type: "Sales"
                  },
                  {
                    title: "Buyer Behavior Analysis",
                    description: "Understanding purchase patterns and preferences",
                    date: "3 days ago",
                    type: "Market"
                  },
                  {
                    title: "Product Performance Report",
                    description: "Analysis of top and underperforming products",
                    date: "1 week ago",
                    type: "Product"
                  },
                  {
                    title: "Compliance & Quality Metrics",
                    description: "Overview of audit results and quality metrics",
                    date: "2 weeks ago",
                    type: "Compliance"
                  }
                ].map((report, index) => (
                  <div key={index} className="py-3">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="font-medium">{report.title}</p>
                        <p className="text-sm text-gray-500">{report.description}</p>
                      </div>
                      <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                        {report.type}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <FileText className="h-3 w-3 mr-1" />
                        <span>PDF Report</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{report.date}</span>
                      </div>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                          Preview
                        </Button>
                        <Button size="sm" className="h-7 px-2 text-xs bg-toreso-teal hover:bg-toreso-teal/90">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SupplierAnalytics;
