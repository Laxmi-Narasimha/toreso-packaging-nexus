
import React from "react";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const BuyerDashboard = () => {
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

  // Sample data for RFQ responses
  const rfqResponses = [
    {
      id: "RFQ-392",
      item: "Pallets (Standard Size)",
      supplier: "WoodWorks Solutions",
      quote: "₹750 per unit",
      expires: "in 3 days",
    },
    {
      id: "RFQ-385",
      item: "Custom Printed Boxes",
      supplier: "ColorPrint Packaging",
      quote: "₹35 per unit",
      expires: "in 5 days",
    },
    {
      id: "RFQ-379",
      item: "Anti-Static Bags (Large)",
      supplier: "TechPack Industries",
      quote: "₹12 per unit",
      expires: "today",
    },
  ];

  // Sample data for volume savings
  const volumeSavings = [
    {
      product: "Corrugated Boxes",
      standardPrice: 120,
      currentPrice: 92,
      volume: 15000,
      savings: 420000,
    },
    {
      product: "Packaging Tapes",
      standardPrice: 45,
      currentPrice: 36,
      volume: 5000,
      savings: 45000,
    },
    {
      product: "Stretch Films",
      standardPrice: 85,
      currentPrice: 68,
      volume: 8000,
      savings: 136000,
    },
  ];

  // Sample data for upcoming deliveries
  const upcomingDeliveries = [
    {
      id: "DEL-4283",
      order: "ORD-7712",
      product: "Corrugated Boxes (Large)",
      quantity: "5,000 units",
      delivery: "Tomorrow",
      plant: "Gurugram",
    },
    {
      id: "DEL-4280",
      order: "ORD-7708",
      product: "Cushioning Materials",
      quantity: "200 rolls",
      delivery: "Jul 27, 2023",
      plant: "Chennai",
    },
    {
      id: "DEL-4275",
      order: "ORD-7698",
      product: "Void Fillers",
      quantity: "300 bags",
      delivery: "Jul 29, 2023",
      plant: "Pune",
    },
  ];

  // Sample data for recommended suppliers
  const recommendedSuppliers = [
    {
      name: "Premium Packaging Ltd.",
      category: "Corrugated Boxes",
      rating: 4.8,
      plants: "Near your Gurugram plant",
      savings: "Avg. 18% below market",
    },
    {
      name: "EcoWrap Solutions",
      category: "Sustainable Packaging",
      rating: 4.7,
      plants: "Near your Chennai plant",
      savings: "Avg. 12% below market",
    },
    {
      name: "IndusPack Co.",
      category: "Industrial Packaging",
      rating: 4.9,
      plants: "Near your Pune plant",
      savings: "Avg. 15% below market",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-1">Buyer Dashboard</h1>
        <p className="text-gray-500">
          Welcome back, John! Here's an overview of your procurement activities.
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
        ))}
      </div>

      {/* Spending Chart */}
      <Card>
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

      {/* Recent Orders and RFQ Responses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
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

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>RFQ Responses</CardTitle>
              <CardDescription>Recent quotes from suppliers</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-toreso-blue">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="divide-y">
              {rfqResponses.map((rfq, index) => (
                <div key={index} className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{rfq.item}</p>
                      <p className="text-sm text-gray-500">{rfq.supplier}</p>
                    </div>
                    <p className="font-semibold text-toreso-blue">{rfq.quote}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-gray-400" />
                      <span className={rfq.expires === "today" ? "text-red-500" : "text-gray-500"}>
                        Expires {rfq.expires}
                      </span>
                    </p>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        Compare
                      </Button>
                      <Button size="sm" className="h-7 px-2 text-xs bg-toreso-blue hover:bg-toreso-darkBlue">
                        Accept
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Volume Savings and Upcoming Deliveries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Volume Consolidation Savings</CardTitle>
            <CardDescription>Cost savings through multi-plant procurement</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="divide-y">
              {volumeSavings.map((item, index) => (
                <div key={index} className="py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium">{item.product}</p>
                    <p className="font-medium text-green-600">₹{item.savings.toLocaleString()} saved</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Volume: {item.volume.toLocaleString()} units</span>
                    <span className="mx-2">•</span>
                    <span className="line-through">₹{item.standardPrice}/unit</span>
                    <span className="mx-1">→</span>
                    <span className="text-toreso-blue font-semibold">₹{item.currentPrice}/unit</span>
                  </div>
                  <Progress value={((item.standardPrice - item.currentPrice) / item.standardPrice) * 100} className="h-1.5" />
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.round(((item.standardPrice - item.currentPrice) / item.standardPrice) * 100)}% discount from standard pricing
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 pb-0">
            <Button variant="ghost" size="sm" className="text-toreso-blue ml-auto">
              View All Savings <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Upcoming Deliveries</CardTitle>
              <CardDescription>Scheduled packaging deliveries across plants</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-toreso-blue">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="divide-y">
              {upcomingDeliveries.map((delivery, index) => (
                <div key={index} className="py-3">
                  <div className="flex justify-between">
                    <p className="font-medium">{delivery.product}</p>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {delivery.plant}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <p>Quantity: {delivery.quantity}</p>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className={delivery.delivery === "Tomorrow" ? "text-orange-500 font-medium" : ""}>
                        {delivery.delivery}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500">Order #{delivery.order}</p>
                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                      Track
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Suppliers */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>Recommended Suppliers</CardTitle>
            <CardDescription>Based on your procurement history and location</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="text-toreso-blue">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedSuppliers.map((supplier, index) => (
              <div key={index} className="border rounded-lg p-4 hover:border-toreso-blue transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium">{supplier.name}</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">{supplier.rating}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="mb-2">
                  {supplier.category}
                </Badge>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-start">
                    <Building className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    <p>{supplier.plants}</p>
                  </div>
                  <div className="flex items-start">
                    <TrendingDown className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <p className="text-green-500 font-medium">{supplier.savings}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3">
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alerts and Reminders */}
      <Card className="bg-amber-50 border-amber-200">
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
    </div>
  );
};

export default BuyerDashboard;
