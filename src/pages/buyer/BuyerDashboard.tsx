
import React, { useRef, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ShoppingCart,
  Package,
  Clock,
  TrendingUp,
  TrendingDown,
  DollarSign,
  AlertCircle,
  ArrowRight,
  Calendar,
  FileText,
  Building,
  Star,
  Box,
  PackageCheck,
  Layers,
  ArrowDown,
  Filter,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BuyerDashboard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const [popularPackaging, setPopularPackaging] = useState([
    {
      id: 1,
      name: "Bubble Wrap Rolls",
      description: "Premium quality bubble wrap with air-filled bubbles for cushioning and protection.",
      image: "https://5.imimg.com/data5/YN/PT/CP/ANDROID-27589775/product-jpeg-500x500.jpg",
      price: 350,
      unit: "per roll",
      supplier: "Benz Packaging Solutions",
      rating: 4.8,
      category: "Protective Packaging"
    },
    {
      id: 2,
      name: "Corrugated Boxes",
      description: "Strong and durable corrugated shipping boxes available in multiple sizes.",
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/1/SZ/AN/FP/40524380/product-jpeg-500x500.jpg",
      price: 12,
      unit: "per box",
      supplier: "EcoPack Industries",
      rating: 4.7,
      category: "Shipping Supplies"
    },
    {
      id: 3,
      name: "Air Pillow Cushioning",
      description: "On-demand air pillows perfect for void fill and protecting products during shipping.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/UO/BU/BZ/121686138/packair-air-pillows-make-machine-500x500.jpg",
      price: 500,
      unit: "per roll",
      supplier: "SecurePack Ltd.",
      rating: 4.6,
      category: "Protective Packaging"
    },
    {
      id: 4,
      name: "Kraft Paper Sheets",
      description: "Eco-friendly kraft paper for wrapping, void fill, and product protection.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/FX/CO/BD/121686138/kraft-paper-500x500.jpg",
      price: 8,
      unit: "per sheet",
      supplier: "GreenWrap Co.",
      rating: 4.9,
      category: "Sustainable Packaging"
    }
  ]);

  // Video parallax effect
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  
  // Animation for content sections
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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

  // Sample data for charts
  const spendingData = [
    { name: "Jan", amount: 12000 },
    { name: "Feb", amount: 15000 },
    { name: "Mar", amount: 18000 },
    { name: "Apr", amount: 14000 },
    { name: "May", amount: 21000 },
    { name: "Jun", amount: 19000 },
    { name: "Jul", amount: 23000 },
  ];

  // Sample data for stats
  const stats = [
    {
      title: "Monthly Spend",
      value: "₹2.3M",
      change: "+12%",
      trend: "up",
      icon: <DollarSign className="h-5 w-5 text-toreso-blue" />,
    },
    {
      title: "Active Orders",
      value: "14",
      change: "-3",
      trend: "down",
      icon: <ShoppingCart className="h-5 w-5 text-toreso-orange" />,
    },
    {
      title: "Total Products",
      value: "837",
      change: "+24",
      trend: "up",
      icon: <Package className="h-5 w-5 text-toreso-teal" />,
    },
    {
      title: "Avg. Lead Time",
      value: "6 days",
      change: "-1.2 days",
      trend: "up",
      icon: <Clock className="h-5 w-5 text-toreso-purple" />,
    },
  ];

  // Sample data for recent orders
  const recentOrders = [
    {
      id: "ORD-7829",
      product: "Corrugated Shipping Boxes",
      supplier: "EcoBox Solutions",
      date: "Today",
      status: "Processing",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "ORD-7823",
      product: "Packaging Tapes (Clear)",
      supplier: "SecurePack Ltd.",
      date: "Yesterday",
      status: "Shipped",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      id: "ORD-7814",
      product: "Bubble Wrap Rolls",
      supplier: "SafeWrap Inc.",
      date: "Jul 23, 2023",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "ORD-7802",
      product: "Kraft Paper Sheets (800 GSM)",
      supplier: "PaperCraft Co.",
      date: "Jul 21, 2023",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
  ];

  // Package categories from IndiaMART
  const packageCategories = [
    { name: "Protective Packaging", icon: <PackageCheck size={24} /> },
    { name: "Corrugated Boxes", icon: <Box size={24} /> },
    { name: "Void Fill Solutions", icon: <Layers size={24} /> },
    { name: "Packaging Machines", icon: <Package size={24} /> },
    { name: "Sustainable Options", icon: <Package size={24} /> },
  ];

  // Simulating automatic video play on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Video hero section with parallax effect */}
      <div className="relative h-[80vh] overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 w-full h-full"
        >
          <video 
            ref={videoRef}
            className="object-cover w-full h-full"
            autoPlay 
            muted 
            loop 
            playsInline
            src="https://videos.pexels.com/video-files/7955998/7955998-uhd_2560_1440_25fps.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
        </motion.div>
        
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-start px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Optimize Your Packaging Solutions</h1>
            <p className="text-xl text-gray-200 mb-8">Discover efficient, sustainable, and cost-effective packaging materials for your business.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
                Explore Products
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Request Quote
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ArrowDown className="h-8 w-8 text-white animate-bounce" />
        </motion.div>
      </div>
      
      {/* Main content container */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          {/* Overview section */}
          <section className="mb-16">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Dashboard Overview</h2>
                <p className="text-gray-600">Welcome back, John! Here's what's happening with your procurement.</p>
              </div>
              <Button variant="outline" className="flex items-center mt-4 md:mt-0">
                <Filter size={16} className="mr-2" /> Filter Data
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
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
                            (stat.trend === "up" && stat.title !== "Avg. Lead Time") || 
                            (stat.trend === "down" && stat.title === "Avg. Lead Time")
                              ? "text-green-500"
                              : "text-red-500"
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
          </section>

          {/* Popular Packaging Materials section - using data from IndiaMART */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Popular Packaging Materials</h2>
                <p className="text-gray-600">Featured products based on your industry and requirements</p>
              </div>
              <Button variant="ghost" className="text-toreso-blue flex items-center mt-4 md:mt-0">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                {packageCategories.map((category, index) => (
                  <TabsTrigger key={index} value={category.name.toLowerCase().replace(/\s+/g, '-')}>
                    <span className="hidden sm:flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPackaging.map((product, index) => (
                <motion.div 
                  key={product.id}
                  custom={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow border-none shadow-md group">
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <motion.img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-white text-toreso-blue">{product.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-3">{product.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{product.rating}</span>
                        </div>
                        <div className="text-sm text-gray-500">{product.supplier}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-lg">₹{product.price} <span className="text-xs text-gray-500 font-normal">{product.unit}</span></p>
                        <Button size="sm" className="bg-toreso-blue hover:bg-toreso-darkBlue">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Spending Chart & Recent Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-md border-none">
                <CardHeader>
                  <CardTitle>Monthly Procurement Spend</CardTitle>
                  <CardDescription>Track your packaging procurement costs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={spendingData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                        <Bar dataKey="amount" fill="#2C5EF6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-md border-none">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Your latest procurement activities</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" className="text-toreso-blue">
                    View All <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="divide-y">
                    {recentOrders.map((order, index) => (
                      <div key={index} className="py-3 flex justify-between items-center">
                        <div>
                          <p className="font-medium">{order.product}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>{order.supplier}</span>
                            <span className="mx-2">•</span>
                            <span>{order.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge variant="outline" className={order.statusColor}>
                            {order.status}
                          </Badge>
                          <Button variant="ghost" size="sm" className="ml-2">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA section */}
          <motion.section 
            className="rounded-3xl bg-gradient-to-r from-toreso-blue to-blue-700 text-white p-10 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">Ready to optimize your packaging?</h2>
                <p className="text-blue-100">Get personalized recommendations based on your specific requirements.</p>
              </div>
              <Button size="lg" className="bg-white text-toreso-blue hover:bg-blue-50">
                Schedule Consultation
              </Button>
            </div>
          </motion.section>

          {/* Alerts and Reminders */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-amber-50 border-amber-200 shadow-md mb-8">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                  <CardTitle className="text-amber-800">Alerts & Reminders</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FileText className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                    <p className="text-amber-800">RFQ #385 for Custom Printed Boxes needs your review (3 quotes received)</p>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                    <p className="text-amber-800">Order #ORD-7712 is scheduled for delivery tomorrow to Gurugram plant</p>
                  </li>
                  <li className="flex items-start">
                    <Package className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                    <p className="text-amber-800">Low stock alert for Packaging Tapes at Chennai plant (estimated to last 5 days)</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
