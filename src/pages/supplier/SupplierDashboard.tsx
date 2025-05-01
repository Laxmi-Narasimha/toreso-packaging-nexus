
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
  FileText,
  Users,
  TrendingUp,
  TrendingDown,
  DollarSign,
  AlertCircle,
  ArrowRight,
  Calendar,
  Building,
  CheckCircle,
  FileCheck,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const SupplierDashboard = () => {
  // Sample data for charts
  const salesData = [
    { name: "Jan", sales: 120000 },
    { name: "Feb", sales: 135000 },
    { name: "Mar", sales: 180000 },
    { name: "Apr", sales: 210000 },
    { name: "May", sales: 190000 },
    { name: "Jun", sales: 220000 },
    { name: "Jul", sales: 250000 },
  ];

  const productPerformanceData = [
    { name: "Corrugated Boxes", sales: 350 },
    { name: "Packaging Tapes", sales: 240 },
    { name: "Bubble Wrap", sales: 190 },
    { name: "Kraft Paper", sales: 130 },
    { name: "Pallets", sales: 120 },
  ];

  // Sample data for stats
  const stats = [
    {
      title: "Monthly Revenue",
      value: "₹2.5M",
      change: "+15%",
      trend: "up",
      icon: <DollarSign className="h-5 w-5 text-toreso-teal" />,
    },
    {
      title: "New Orders",
      value: "18",
      change: "+4",
      trend: "up",
      icon: <ShoppingCart className="h-5 w-5 text-toreso-blue" />,
    },
    {
      title: "Active Buyers",
      value: "43",
      change: "+7",
      trend: "up",
      icon: <Users className="h-5 w-5 text-toreso-purple" />,
    },
    {
      title: "Product Catalog",
      value: "85",
      change: "+3",
      trend: "up",
      icon: <Package className="h-5 w-5 text-toreso-orange" />,
    },
  ];

  // Sample data for new orders
  const newOrders = [
    {
      id: "ORD-8956",
      buyer: "Maruti Suzuki India Ltd.",
      product: "Heavy-Duty Corrugated Boxes",
      quantity: "5,000 units",
      value: "₹450,000",
      date: "Today",
      status: "New",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "ORD-8952",
      buyer: "Volvo Trucks India",
      product: "Custom Packaging Tapes",
      quantity: "200 rolls",
      value: "₹36,000",
      date: "Today",
      status: "New",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "ORD-8945",
      buyer: "JCB India",
      product: "Industrial Pallets",
      quantity: "150 units",
      value: "₹112,500",
      date: "Yesterday",
      status: "Processing",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "ORD-8942",
      buyer: "Tata Motors",
      product: "Anti-Static Bubble Wrap",
      quantity: "300 rolls",
      value: "₹78,000",
      date: "Yesterday",
      status: "Processing",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
  ];

  // Sample data for RFQs
  const rfqs = [
    {
      id: "RFQ-472",
      buyer: "Mahindra Automotive",
      product: "Shipping Containers (Large)",
      quantity: "10,000 units",
      deadline: "Tomorrow",
      views: 4,
      status: "Urgent",
    },
    {
      id: "RFQ-468",
      buyer: "Honda Cars India",
      product: "Corrugated Dividers",
      quantity: "8,000 units",
      deadline: "Jul 28, 2023",
      views: 2,
      status: "New",
    },
    {
      id: "RFQ-465",
      buyer: "Ashok Leyland",
      product: "Stretch Films (Heavy-Duty)",
      quantity: "500 rolls",
      deadline: "Jul 30, 2023",
      views: 3,
      status: "New",
    },
  ];

  // Sample data for upcoming audits and certifications
  const auditsCertifications = [
    {
      type: "audit",
      name: "Quality Management Audit",
      requested: "Maruti Suzuki India Ltd.",
      date: "Aug 5, 2023",
      status: "Scheduled",
      daysLeft: 7,
    },
    {
      type: "certification",
      name: "ISO 9001:2015",
      issued: "Quality Certification Board",
      expiry: "Oct 15, 2023",
      status: "Valid",
      daysLeft: 78,
    },
    {
      type: "certification",
      name: "FSC Certification",
      issued: "Forest Stewardship Council",
      expiry: "Sep 30, 2023",
      status: "Renewal Required",
      daysLeft: 62,
    },
  ];

  // Sample data for shipments
  const upcomingShipments = [
    {
      id: "SHP-6752",
      order: "ORD-8923",
      buyer: "JCB India",
      product: "Protective Packaging",
      quantity: "2,500 units",
      shipDate: "Tomorrow",
      destination: "Faridabad Plant",
    },
    {
      id: "SHP-6748",
      order: "ORD-8915",
      buyer: "Maruti Suzuki India Ltd.",
      product: "Corrugated Sheets",
      quantity: "10,000 units",
      shipDate: "Jul 28, 2023",
      destination: "Gurugram Plant",
    },
    {
      id: "SHP-6743",
      order: "ORD-8902",
      buyer: "Tata Motors",
      product: "Industrial Packaging",
      quantity: "1,200 sets",
      shipDate: "Jul 30, 2023",
      destination: "Pune Plant",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-1">Supplier Dashboard</h1>
        <p className="text-gray-500">
          Welcome back, PackRight Industries! Here's an overview of your business activities.
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

      {/* Sales Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <CardDescription>Your sales performance over time</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={salesData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#00C9B6"
                    strokeWidth={3}
                    dot={{ r: 5, strokeWidth: 1 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Performance</CardTitle>
            <CardDescription>Top selling products this month</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={productPerformanceData}
                  margin={{ top: 10, right: 30, left: 50, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip formatter={(value) => `${value} units sold`} />
                  <Bar dataKey="sales" fill="#00C9B6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Orders and RFQs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>New Orders</CardTitle>
              <CardDescription>Recently received purchase orders</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-toreso-teal">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="divide-y">
              {newOrders.map((order, index) => (
                <div key={index} className="py-3">
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <p className="font-medium">{order.product}</p>
                      <Badge variant="outline" className={order.statusColor + " ml-2"}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="font-semibold text-toreso-teal">{order.value}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Building className="h-3 w-3 mr-1" />
                    <span>{order.buyer}</span>
                    <span className="mx-2">•</span>
                    <span>{order.quantity}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500">
                      Order #{order.id} • Received {order.date}
                    </p>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        View
                      </Button>
                      <Button size="sm" className="h-7 px-2 text-xs bg-toreso-teal hover:bg-toreso-teal/90">
                        Process
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>RFQ Opportunities</CardTitle>
              <CardDescription>Request for quotes awaiting your response</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-toreso-teal">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="divide-y">
              {rfqs.map((rfq, index) => (
                <div key={index} className="py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium">{rfq.product}</p>
                    <Badge 
                      variant="outline" 
                      className={
                        rfq.status === 'Urgent' 
                          ? "bg-red-100 text-red-800 border-red-200" 
                          : "bg-blue-100 text-blue-800 border-blue-200"
                      }
                    >
                      {rfq.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Building className="h-3 w-3 mr-1" />
                    <span>{rfq.buyer}</span>
                    <span className="mx-2">•</span>
                    <span>{rfq.quantity}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-xs">
                      <Clock className="h-3 w-3 mr-1 text-gray-400" />
                      <span className={rfq.deadline === "Tomorrow" ? "text-red-500 font-medium" : "text-gray-500"}>
                        Deadline: {rfq.deadline}
                      </span>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-gray-500">{rfq.views} views</span>
                    </div>
                    <Button size="sm" className="h-7 px-2 text-xs bg-toreso-teal hover:bg-toreso-teal/90">
                      Send Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Audits & Certifications and Upcoming Shipments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Audits & Certifications</CardTitle>
            <CardDescription>Track your quality compliance requirements</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="divide-y">
              {auditsCertifications.map((item, index) => (
                <div key={index} className="py-3">
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      {item.type === "audit" ? (
                        <FileCheck className="h-4 w-4 text-toreso-blue mr-2" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-toreso-green mr-2" />
                      )}
                      <p className="font-medium">{item.name}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        item.daysLeft < 30
                          ? "bg-orange-100 text-orange-800 border-orange-200"
                          : "bg-green-100 text-green-800 border-green-200"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Building className="h-3 w-3 mr-1" />
                    <span>
                      {item.type === "audit" ? item.requested : item.issued}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs">
                      <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                      <span 
                        className={
                          item.daysLeft < 10 
                            ? "text-red-500 font-medium" 
                            : item.daysLeft < 30
                              ? "text-orange-500 font-medium"
                              : "text-gray-500"
                        }
                      >
                        {item.type === "audit" ? item.date : `Expires: ${item.expiry}`}
                      </span>
                      <span className="ml-2">
                        ({item.daysLeft} days {item.type === "audit" ? "away" : "left"})
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      variant={item.daysLeft < 30 ? "default" : "outline"} 
                      className={
                        item.daysLeft < 30 
                          ? "h-7 px-2 text-xs bg-toreso-teal hover:bg-toreso-teal/90" 
                          : "h-7 px-2 text-xs"
                      }
                    >
                      {item.type === "audit" ? "Prepare" : "Renew"}
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
              <CardTitle>Upcoming Shipments</CardTitle>
              <CardDescription>Orders scheduled for delivery</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-toreso-teal">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="divide-y">
              {upcomingShipments.map((shipment, index) => (
                <div key={index} className="py-3">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium">{shipment.product}</p>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                      {shipment.destination}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Building className="h-3 w-3 mr-1" />
                    <span>{shipment.buyer}</span>
                    <span className="mx-2">•</span>
                    <span>{shipment.quantity}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-xs">
                      <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                      <span className={shipment.shipDate === "Tomorrow" ? "text-orange-500 font-medium" : "text-gray-500"}>
                        Ship date: {shipment.shipDate}
                      </span>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-gray-500">Order #{shipment.order}</span>
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        Shipment #{shipment.id}
                      </Button>
                      <Button size="sm" className="h-7 px-2 text-xs bg-toreso-teal hover:bg-toreso-teal/90">
                        Prepare
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

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
              <Clock className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
              <p className="text-amber-800">Urgent RFQ from Mahindra Automotive requires your response by tomorrow</p>
            </li>
            <li className="flex items-start">
              <FileText className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
              <p className="text-amber-800">FSC Certification will expire in 62 days - renewal process should begin</p>
            </li>
            <li className="flex items-start">
              <Package className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
              <p className="text-amber-800">Low inventory alert for corrugated sheets - currently at 15% of optimal level</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplierDashboard;
