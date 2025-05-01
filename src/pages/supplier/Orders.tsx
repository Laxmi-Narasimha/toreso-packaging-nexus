
import React, { useState } from "react";
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
  FileText,
  Clock,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Package,
  Filter,
  Search,
  CheckCircle,
  Truck,
  AlertCircle,
  CalendarCheck,
  Building,
  XCircle,
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Download,
  Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const Orders = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Sample data for analytics 
  const stats = [
    {
      title: "Total Orders",
      value: "285",
      change: "+12%",
      trend: "up",
      icon: <ShoppingCart className="h-5 w-5 text-toreso-blue" />,
    },
    {
      title: "Pending Shipments",
      value: "18",
      change: "-3",
      trend: "down",
      icon: <Truck className="h-5 w-5 text-toreso-orange" />,
    },
    {
      title: "Order Value",
      value: "₹4.8M",
      change: "+15%",
      trend: "up",
      icon: <DollarSign className="h-5 w-5 text-toreso-green" />,
    },
    {
      title: "On-time Delivery",
      value: "96%",
      change: "+2%",
      trend: "up",
      icon: <Clock className="h-5 w-5 text-toreso-purple" />,
    },
  ];

  // Sample orders data
  const ordersData = [
    {
      id: "ORD-8956",
      buyer: "Maruti Suzuki India Ltd.",
      products: [
        { name: "Heavy-Duty Corrugated Boxes", quantity: 5000 }
      ],
      totalValue: "₹450,000",
      date: "Today, 10:28 AM",
      delivery: "Aug 15, 2023",
      status: "New",
      statusColor: "bg-green-100 text-green-800",
      paymentStatus: "Pending",
      destination: "Gurugram Plant"
    },
    {
      id: "ORD-8952",
      buyer: "Volvo Trucks India",
      products: [
        { name: "Custom Packaging Tapes", quantity: 200 },
        { name: "Bubble Wrap Rolls", quantity: 50 }
      ],
      totalValue: "₹65,000",
      date: "Yesterday, 14:45 PM",
      delivery: "Aug 10, 2023",
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-800",
      paymentStatus: "Paid",
      destination: "Bangalore Factory"
    },
    {
      id: "ORD-8945",
      buyer: "JCB India",
      products: [
        { name: "Industrial Pallets", quantity: 150 }
      ],
      totalValue: "₹112,500",
      date: "Aug 2, 2023",
      delivery: "Aug 8, 2023",
      status: "Ready for Shipment",
      statusColor: "bg-purple-100 text-purple-800",
      paymentStatus: "Paid",
      destination: "Faridabad Plant"
    },
    {
      id: "ORD-8942",
      buyer: "Tata Motors",
      products: [
        { name: "Anti-Static Bubble Wrap", quantity: 300 },
        { name: "Heavy-Duty Shrink Film", quantity: 80 }
      ],
      totalValue: "₹178,000",
      date: "Jul 31, 2023",
      delivery: "Aug 6, 2023",
      status: "Shipped",
      statusColor: "bg-indigo-100 text-indigo-800",
      paymentStatus: "Paid",
      destination: "Pune Plant"
    },
    {
      id: "ORD-8938",
      buyer: "Honda Cars India",
      products: [
        { name: "Custom Printed Boxes", quantity: 2000 }
      ],
      totalValue: "₹170,000",
      date: "Jul 28, 2023",
      delivery: "Aug 4, 2023",
      status: "Delivered",
      statusColor: "bg-teal-100 text-teal-800",
      paymentStatus: "Paid",
      destination: "Greater Noida Plant"
    },
    {
      id: "ORD-8932",
      buyer: "Ashok Leyland",
      products: [
        { name: "Packaging Tapes", quantity: 500 },
        { name: "Corrugated Sheets", quantity: 1000 }
      ],
      totalValue: "₹95,000",
      date: "Jul 25, 2023",
      delivery: "Aug 1, 2023",
      status: "Delivered",
      statusColor: "bg-teal-100 text-teal-800",
      paymentStatus: "Paid",
      destination: "Chennai Plant"
    },
    {
      id: "ORD-8923",
      buyer: "Mahindra & Mahindra",
      products: [
        { name: "Industrial Pallets", quantity: 100 },
        { name: "Stretch Films", quantity: 150 }
      ],
      totalValue: "₹165,000",
      date: "Jul 22, 2023",
      delivery: "Jul 29, 2023",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
      paymentStatus: "Refunded",
      destination: "Nashik Plant"
    }
  ];

  // Sample upcoming shipments
  const upcomingShipments = [
    {
      id: "SHP-6752",
      order: "ORD-8945",
      buyer: "JCB India",
      product: "Industrial Pallets",
      quantity: "150 units",
      shipDate: "Aug 5, 2023",
      destination: "Faridabad Plant",
    },
    {
      id: "SHP-6748",
      order: "ORD-8942",
      buyer: "Tata Motors",
      product: "Anti-Static Bubble Wrap & Shrink Film",
      quantity: "380 units",
      shipDate: "Aug 4, 2023",
      destination: "Pune Plant",
    }
  ];

  // Animation variants for content sections
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Order Management</h1>
          <p className="text-gray-500">
            View, process, and track customer orders
          </p>
        </div>

        <div className="mt-4 md:mt-0 space-x-2">
          <Button variant="outline">
            <FileText size={16} className="mr-2" /> Generate Report
          </Button>
          <Button className="bg-toreso-teal hover:bg-toreso-teal/90">
            <Download size={16} className="mr-2" /> Export Orders
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
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
                      (stat.trend === "up" && stat.title !== "Pending Shipments") || 
                      (stat.trend === "down" && stat.title === "Pending Shipments")
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

      {/* Order Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <TabsList className="mb-4 md:mb-0">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          
          <div className="flex space-x-2">
            <div className="relative">
              <Search 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              />
              <Input
                placeholder="Search orders..."
                className="pl-10 w-[200px]"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setFilterOpen(!filterOpen)}
              className={filterOpen ? "bg-gray-100" : ""}
            >
              <Filter size={16} className="mr-2" />
              Filter
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        {filterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-md p-4 mb-4 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Range
                </label>
                <Select defaultValue="all-time">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Date Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                    <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="last-month">Last Month</SelectItem>
                    <SelectItem value="all-time">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Buyer
                </label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All Buyers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Buyers</SelectItem>
                    <SelectItem value="maruti">Maruti Suzuki</SelectItem>
                    <SelectItem value="tata">Tata Motors</SelectItem>
                    <SelectItem value="jcb">JCB India</SelectItem>
                    <SelectItem value="volvo">Volvo Trucks</SelectItem>
                    <SelectItem value="honda">Honda Cars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Status
                </label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                    <SelectItem value="refunded">Refunded</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort By
                </label>
                <Select defaultValue="newest">
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="value-high">Value: High to Low</SelectItem>
                    <SelectItem value="value-low">Value: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button variant="outline" className="mr-2">
                Clear Filters
              </Button>
              <Button>
                Apply Filters
              </Button>
            </div>
          </motion.div>
        )}

        <TabsContent value="all" className="mt-0">
          <Card className="border-none shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-6 py-4 font-medium text-sm flex items-center">
                      Order ID
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </th>
                    <th className="px-6 py-4 font-medium text-sm">Buyer</th>
                    <th className="px-6 py-4 font-medium text-sm">Value</th>
                    <th className="px-6 py-4 font-medium text-sm">
                      Date
                      <ArrowUpDown className="ml-1 h-3 w-3 inline" />
                    </th>
                    <th className="px-6 py-4 font-medium text-sm">Delivery Date</th>
                    <th className="px-6 py-4 font-medium text-sm">Status</th>
                    <th className="px-6 py-4 font-medium text-sm">Payment</th>
                    <th className="px-6 py-4 font-medium text-sm text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {ordersData.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{order.id}</td>
                      <td className="px-6 py-4">
                        <div>
                          <p>{order.buyer}</p>
                          <p className="text-xs text-gray-500">{order.destination}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium">{order.totalValue}</td>
                      <td className="px-6 py-4 text-gray-500">
                        <div>
                          <p>{order.date.split(',')[0]}</p>
                          <p className="text-xs">{order.date.split(',')[1]}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{order.delivery}</td>
                      <td className="px-6 py-4">
                        <Badge className={order.statusColor}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className={
                          order.paymentStatus === "Paid" 
                            ? "bg-green-50 text-green-700 border-green-200" 
                            : order.paymentStatus === "Refunded"
                              ? "bg-red-50 text-red-700 border-red-200"
                              : "bg-yellow-50 text-yellow-700 border-yellow-200"
                        }>
                          {order.paymentStatus}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye size={16} className="mr-2" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText size={16} className="mr-2" /> Generate Invoice
                            </DropdownMenuItem>
                            {(order.status === "New" || order.status === "Processing") && (
                              <DropdownMenuItem>
                                <Truck size={16} className="mr-2" /> Update Status
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Download size={16} className="mr-2" /> Download
                            </DropdownMenuItem>
                            {(order.status === "New") && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-500">
                                  <XCircle size={16} className="mr-2" /> Cancel Order
                                </DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CardFooter className="border-t bg-gray-50 px-6 py-3 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1-7 of 285 orders
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {["new", "processing", "shipping", "delivered", "cancelled"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-0">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center items-center py-8">
                  <div className="text-center">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Switch to the "{tab}" tab</h3>
                    <p className="text-gray-500 mb-4">
                      View filtered orders with {tab} status
                    </p>
                    <Button>View {tab.charAt(0).toUpperCase() + tab.slice(1)} Orders</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Two-column layout for additional information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Upcoming Shipments */}
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Upcoming Shipments</CardTitle>
              <CardDescription>Orders that need to be shipped soon</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-toreso-teal">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="divide-y">
              {upcomingShipments.map((shipment, index) => (
                <div key={index} className="py-4">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium">{shipment.product}</p>
                    <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
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
                      <CalendarCheck className="h-3 w-3 mr-1 text-gray-500" />
                      <span className="text-gray-500">
                        Ship date: {shipment.shipDate}
                      </span>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-gray-500">Order #{shipment.order}</span>
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        View Order
                      </Button>
                      <Button size="sm" className="h-7 px-2 text-xs bg-toreso-teal hover:bg-toreso-teal/90">
                        Process Shipment
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {upcomingShipments.length === 0 && (
                <div className="py-8 text-center">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-1">All caught up!</h3>
                  <p className="text-gray-500">No pending shipments at the moment</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4 bg-gray-50">
            <Button variant="outline" className="w-full">
              Generate Shipping Documents
            </Button>
          </CardFooter>
        </Card>

        {/* Order Summary */}
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Monthly Order Summary</CardTitle>
            <CardDescription>Overview of order status this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>New / Processing</span>
                  <span className="font-medium">28 orders (22%)</span>
                </div>
                <Progress value={22} className="h-2 bg-gray-100" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Ready for Shipment</span>
                  <span className="font-medium">15 orders (12%)</span>
                </div>
                <Progress value={12} className="h-2 bg-gray-100" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Shipped</span>
                  <span className="font-medium">34 orders (27%)</span>
                </div>
                <Progress value={27} className="h-2 bg-gray-100" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Delivered</span>
                  <span className="font-medium">45 orders (36%)</span>
                </div>
                <Progress value={36} className="h-2 bg-gray-100" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Cancelled</span>
                  <span className="font-medium">3 orders (3%)</span>
                </div>
                <Progress value={3} className="h-2 bg-gray-100" />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total Orders This Month</span>
                <span className="font-bold">125 orders</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Compared to last month</span>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm font-medium text-green-500">+18%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Alerts */}
      <Card className="bg-amber-50 border-amber-200 mb-8">
        <CardHeader className="pb-2">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
            <CardTitle className="text-amber-800">Order Alerts</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Clock className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
              <p className="text-amber-800">
                Order <span className="font-medium">#ORD-8942</span> for Tata Motors needs to be shipped by tomorrow
              </p>
            </li>
            <li className="flex items-start">
              <AlertCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
              <p className="text-amber-800">
                Low inventory alert for Industrial Pallets - only 45 units left with pending orders of 35 units
              </p>
            </li>
            <li className="flex items-start">
              <FileText className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
              <p className="text-amber-800">
                Invoice <span className="font-medium">#INV-6542</span> for Volvo Trucks India has been paid and ready for processing
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
