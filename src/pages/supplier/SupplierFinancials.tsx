
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
  DollarSign,
  Download,
  FileText,
  TrendingUp,
  TrendingDown,
  Calendar,
  Filter,
  CreditCard,
  Wallet,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  ChevronDown,
  ChevronRight,
  Eye,
  MoreHorizontal,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Percent,
  BarChart4,
  PieChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart as RechartsChartPie,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SupplierFinancials = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  
  // Sample data for charts and statistics
  const monthlyRevenue = [
    { name: "Jan", revenue: 520000, target: 500000 },
    { name: "Feb", revenue: 580000, target: 550000 },
    { name: "Mar", revenue: 690000, target: 600000 },
    { name: "Apr", revenue: 640000, target: 600000 },
    { name: "May", revenue: 750000, target: 650000 },
    { name: "Jun", revenue: 860000, target: 700000 },
    { name: "Jul", revenue: 780000, target: 750000 },
    { name: "Aug", revenue: 800000, target: 800000 },
    { name: "Sep", revenue: 850000, target: 850000 },
    { name: "Oct", revenue: 910000, target: 900000 },
    { name: "Nov", revenue: 820000, target: 950000 },
    { name: "Dec", revenue: 950000, target: 1000000 },
  ];

  const revenueByProduct = [
    { name: "Corrugated Boxes", value: 45 },
    { name: "Bubble Wrap", value: 25 },
    { name: "Poly Bags", value: 15 },
    { name: "Pallets", value: 15 },
  ];

  const outstandingInvoices = [
    {
      id: "INV-2326",
      buyerName: "Maruti Corp.",
      amount: "₹135,700",
      issueDate: "15 Jul 2023",
      dueDate: "14 Aug 2023",
      status: "Overdue",
      daysOverdue: 5,
    },
    {
      id: "INV-2320",
      buyerName: "JCB Ltd.",
      amount: "₹85,250",
      issueDate: "10 Jul 2023",
      dueDate: "09 Aug 2023",
      status: "Overdue",
      daysOverdue: 10,
    },
    {
      id: "INV-2318",
      buyerName: "TATA Motors",
      amount: "₹64,800",
      issueDate: "05 Jul 2023",
      dueDate: "04 Aug 2023",
      status: "Paid",
      daysOverdue: 0,
    },
    {
      id: "INV-2315",
      buyerName: "Volvo India",
      amount: "₹42,500",
      issueDate: "01 Jul 2023",
      dueDate: "31 Jul 2023",
      status: "Paid",
      daysOverdue: 0,
    },
    {
      id: "INV-2312",
      buyerName: "Hyundai Motors",
      amount: "₹75,900",
      issueDate: "25 Jun 2023",
      dueDate: "25 Jul 2023",
      status: "Partial",
      daysOverdue: 0,
    },
  ];

  const recentTransactions = [
    {
      id: "TRX-7289",
      type: "Payment Received",
      amount: "₹64,800",
      date: "04 Aug 2023",
      buyer: "TATA Motors",
      status: "Completed",
      invoice: "INV-2318",
    },
    {
      id: "TRX-7282",
      type: "Payment Received",
      amount: "₹42,500",
      date: "31 Jul 2023",
      buyer: "Volvo India",
      status: "Completed",
      invoice: "INV-2315",
    },
    {
      id: "TRX-7275",
      type: "Partial Payment",
      amount: "₹30,000",
      date: "28 Jul 2023",
      buyer: "Hyundai Motors",
      status: "Completed",
      invoice: "INV-2312",
    },
    {
      id: "TRX-7263",
      type: "Commission Fee",
      amount: "-₹12,500",
      date: "25 Jul 2023",
      buyer: "Toreso Platform",
      status: "Completed",
      invoice: "-",
    },
  ];

  const COLORS = ["#2C5EF6", "#00C9B6", "#8B5CF6", "#F97316"];

  // Stats for the cards
  const financialStats = [
    {
      title: "Total Revenue",
      value: "₹82.5L",
      change: "+14.2%",
      trend: "up",
      icon: <DollarSign className="h-5 w-5 text-toreso-teal" />,
      description: "YTD compared to last year",
    },
    {
      title: "Outstanding Amount",
      value: "₹2.94L",
      change: "-8.5%",
      trend: "up",
      icon: <Wallet className="h-5 w-5 text-toreso-orange" />,
      description: "Total unpaid invoices",
    },
    {
      title: "Average Payment Time",
      value: "18 days",
      change: "-2 days",
      trend: "up",
      icon: <Clock className="h-5 w-5 text-toreso-purple" />,
      description: "Average invoice payment time",
    },
    {
      title: "Commission Rate",
      value: "2.5%",
      change: "-0.5%",
      trend: "up",
      icon: <Percent className="h-5 w-5 text-toreso-blue" />,
      description: "Current platform commission",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-screen bg-black pb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-8 pt-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Financial Management</h1>
            <p className="text-gray-300">
              Track revenue, invoices, and financial performance
            </p>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <Download size={16} className="mr-2" />
              Export Report
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Calendar size={16} className="mr-2" />
                  {selectedYear}
                  <ChevronDown size={16} className="ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border border-white/10 text-white">
                <DropdownMenuItem onClick={() => setSelectedYear("2023")} className="focus:bg-white/10">2023</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedYear("2022")} className="focus:bg-white/10">2022</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedYear("2021")} className="focus:bg-white/10">2021</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto bg-black/50 border border-white/10 mb-8">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-toreso-teal data-[state=active]:text-black">Overview</TabsTrigger>
            <TabsTrigger value="invoices" className="text-white data-[state=active]:bg-toreso-teal data-[state=active]:text-black">Invoices</TabsTrigger>
            <TabsTrigger value="transactions" className="text-white data-[state=active]:bg-toreso-teal data-[state=active]:text-black">Transactions</TabsTrigger>
            <TabsTrigger value="reports" className="text-white data-[state=active]:bg-toreso-teal data-[state=active]:text-black">Reports</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Stats Cards */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {financialStats.map((stat, index) => (
                  <Card key={index} className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg overflow-hidden">
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
                              (stat.trend === "up" && stat.title !== "Outstanding Amount" && stat.title !== "Average Payment Time") ||
                              (stat.trend === "down" && (stat.title === "Outstanding Amount" || stat.title === "Average Payment Time"))
                                ? "text-green-500"
                                : "text-red-500"
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
                ))}
              </motion.div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Revenue Trend Chart */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                  <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                    <CardHeader className="border-b border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-white">Revenue Trend</CardTitle>
                          <CardDescription className="text-gray-400">
                            Monthly revenue vs target for {selectedYear}
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                          <Filter size={14} className="mr-2" />
                          Filter
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={monthlyRevenue}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                            <XAxis 
                              dataKey="name" 
                              stroke="rgba(255,255,255,0.6)" 
                              tick={{ fill: 'rgba(255,255,255,0.6)' }}
                            />
                            <YAxis 
                              stroke="rgba(255,255,255,0.6)" 
                              tick={{ fill: 'rgba(255,255,255,0.6)' }}
                              tickFormatter={(value) => `₹${value/100000}L`}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: 'rgba(0,0,0,0.8)', 
                                border: '1px solid rgba(255,255,255,0.2)', 
                                borderRadius: '4px',
                                color: 'white'
                              }}
                              formatter={(value) => [`₹${(value as number)/100000}L`, '']}
                              labelStyle={{ color: 'white' }}
                            />
                            <Legend wrapperStyle={{ color: 'white' }} />
                            <Line
                              type="monotone"
                              dataKey="revenue"
                              stroke="#00C9B6"
                              strokeWidth={3}
                              dot={{ r: 4, strokeWidth: 2 }}
                              activeDot={{ r: 8 }}
                              name="Actual Revenue"
                            />
                            <Line
                              type="monotone"
                              dataKey="target"
                              stroke="#2C5EF6"
                              strokeWidth={3}
                              strokeDasharray="5 5"
                              dot={{ r: 4, strokeWidth: 2 }}
                              name="Target Revenue"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex justify-between mt-4 text-sm">
                        <div className="text-center">
                          <p className="text-gray-400">YTD Revenue</p>
                          <p className="text-white font-medium">₹82.5L</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-400">YTD Target</p>
                          <p className="text-white font-medium">₹75.5L</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-400">Performance</p>
                          <p className="text-green-500 font-medium">+9.3%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Revenue by Product Chart */}
                <motion.div variants={itemVariants} className="lg:col-span-1">
                  <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg h-full">
                    <CardHeader className="border-b border-white/10">
                      <CardTitle className="text-xl text-white">Revenue by Product</CardTitle>
                      <CardDescription className="text-gray-400">
                        Distribution across product categories
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsChartPie>
                            <Pie
                              data={revenueByProduct}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              paddingAngle={2}
                              dataKey="value"
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              labelLine={{ stroke: 'rgba(255,255,255,0.3)' }}
                            >
                              {revenueByProduct.map((entry, index) => (
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
                              formatter={(value) => [`${value}%`, '']}
                            />
                          </RechartsChartPie>
                        </ResponsiveContainer>
                      </div>
                      
                      <div className="space-y-3 mt-3">
                        {revenueByProduct.map((product, index) => (
                          <div key={index} className="flex items-center">
                            <span 
                              className="h-3 w-3 rounded-full mr-2" 
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            ></span>
                            <span className="text-gray-300 text-sm">{product.name}</span>
                            <span className="text-white font-medium ml-auto">{product.value}%</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Outstanding Amount & Payment Schedule */}
              <motion.div variants={itemVariants} className="mb-8">
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-white">Outstanding Invoices</CardTitle>
                        <CardDescription className="text-gray-400">
                          Pending payments and due dates
                        </CardDescription>
                      </div>
                      <Button variant="link" className="text-toreso-teal" asChild>
                        <a href="#invoices">View All Invoices <ArrowRight size={14} className="ml-1" /></a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left border-b border-white/10">
                            <th className="pb-3 font-medium text-gray-300 text-sm">Invoice ID</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Buyer</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Amount</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Due Date</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Status</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {outstandingInvoices.map((invoice, index) => (
                            <tr key={index} className="border-b border-white/10 last:border-0">
                              <td className="py-4 text-white font-medium">{invoice.id}</td>
                              <td className="py-4 text-white">{invoice.buyerName}</td>
                              <td className="py-4 text-white">{invoice.amount}</td>
                              <td className="py-4 text-white">{invoice.dueDate}</td>
                              <td className="py-4">
                                <Badge className={
                                  invoice.status === "Paid" 
                                    ? "bg-green-900/30 text-green-400" 
                                    : invoice.status === "Overdue"
                                    ? "bg-red-900/30 text-red-400"
                                    : "bg-yellow-900/30 text-yellow-400"
                                }>
                                  {invoice.status}
                                  {invoice.status === "Overdue" && ` (${invoice.daysOverdue} days)`}
                                </Badge>
                              </td>
                              <td className="py-4 text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                      <MoreHorizontal size={16} />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="bg-black/90 border border-white/10 text-white">
                                    <DropdownMenuItem className="focus:bg-white/10">
                                      <Eye size={14} className="mr-2" /> View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="focus:bg-white/10">
                                      <Download size={14} className="mr-2" /> Download PDF
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="focus:bg-white/10">
                                      <Mail size={14} className="mr-2" /> Send Reminder
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Invoice Summary */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Invoice Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-300">Total Invoices</p>
                          <FileText className="h-5 w-5 text-toreso-blue" />
                        </div>
                        <p className="text-3xl font-bold text-white">142</p>
                        <div className="flex items-center mt-2">
                          <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                          <span className="text-sm text-green-500">+12.5%</span>
                          <span className="text-xs text-gray-400 ml-2">vs last year</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-300">Paid Invoices</p>
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <p className="text-3xl font-bold text-white">126</p>
                        <div className="mt-2 flex items-center">
                          <span className="text-sm text-white">₹74.3L</span>
                          <span className="text-xs text-gray-400 ml-2">total paid</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-300">Unpaid Invoices</p>
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                        <p className="text-3xl font-bold text-white">12</p>
                        <div className="mt-2 flex items-center">
                          <span className="text-sm text-white">₹8.2L</span>
                          <span className="text-xs text-gray-400 ml-2">outstanding</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-300">Collection Rate</p>
                          <Percent className="h-5 w-5 text-toreso-teal" />
                        </div>
                        <p className="text-3xl font-bold text-white">92%</p>
                        <div className="mt-2">
                          <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div className="bg-toreso-teal h-1.5 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Invoice Management */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                      <div>
                        <CardTitle className="text-xl text-white">Invoice Management</CardTitle>
                        <CardDescription className="text-gray-400">
                          Manage and track all your invoices
                        </CardDescription>
                      </div>
                      <div className="flex gap-3 mt-4 md:mt-0">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <input 
                            type="text" 
                            placeholder="Search invoices..." 
                            className="pl-9 pr-4 py-2 bg-black/50 border border-white/20 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-toreso-teal w-full md:w-64"
                          />
                        </div>
                        <Button className="bg-toreso-teal hover:bg-toreso-teal/80 text-black">
                          Create Invoice
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left border-b border-white/10">
                            <th className="pb-3 font-medium text-gray-300 text-sm">Invoice ID</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Buyer</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Issue Date</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Due Date</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Amount</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Status</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {outstandingInvoices.map((invoice, index) => (
                            <tr key={index} className="border-b border-white/10 last:border-0">
                              <td className="py-4 text-white font-medium">{invoice.id}</td>
                              <td className="py-4 text-white">{invoice.buyerName}</td>
                              <td className="py-4 text-gray-300">{invoice.issueDate}</td>
                              <td className="py-4 text-gray-300">{invoice.dueDate}</td>
                              <td className="py-4 text-white">{invoice.amount}</td>
                              <td className="py-4">
                                <Badge className={
                                  invoice.status === "Paid" 
                                    ? "bg-green-900/30 text-green-400" 
                                    : invoice.status === "Overdue"
                                    ? "bg-red-900/30 text-red-400"
                                    : "bg-yellow-900/30 text-yellow-400"
                                }>
                                  {invoice.status}
                                  {invoice.status === "Overdue" && ` (${invoice.daysOverdue} days)`}
                                </Badge>
                              </td>
                              <td className="py-4 text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                      <MoreHorizontal size={16} />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="bg-black/90 border border-white/10 text-white">
                                    <DropdownMenuItem className="focus:bg-white/10">
                                      <Eye size={14} className="mr-2" /> View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="focus:bg-white/10">
                                      <Download size={14} className="mr-2" /> Download PDF
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-white/10" />
                                    <DropdownMenuItem className="focus:bg-white/10">
                                      <Mail size={14} className="mr-2" /> Send Reminder
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="focus:bg-white/10">
                                      <Edit size={14} className="mr-2" /> Edit Invoice
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <p className="text-gray-400 text-sm">Showing 5 of 142 invoices</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                          Previous
                        </Button>
                        <Button variant="outline" size="sm" className="text-white border-white/20 bg-white/10">
                          1
                        </Button>
                        <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                          2
                        </Button>
                        <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                          3
                        </Button>
                        <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                          Next
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Payment Analytics */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Payment Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-300">Total Revenue</p>
                          <Wallet className="h-5 w-5 text-toreso-teal" />
                        </div>
                        <p className="text-3xl font-bold text-white">₹82.5L</p>
                        <div className="mt-2">
                          <div className="flex items-center">
                            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                            <span className="text-sm text-green-500">+14.2%</span>
                            <span className="text-xs text-gray-400 ml-2">YTD growth</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-300">Avg Order Value</p>
                          <BarChart4 className="h-5 w-5 text-toreso-blue" />
                        </div>
                        <p className="text-3xl font-bold text-white">₹58,100</p>
                        <div className="mt-2">
                          <div className="flex items-center">
                            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                            <span className="text-sm text-green-500">+5.8%</span>
                            <span className="text-xs text-gray-400 ml-2">vs. last year</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-300">Commissions Paid</p>
                          <DollarSign className="h-5 w-5 text-orange-500" />
                        </div>
                        <p className="text-3xl font-bold text-white">₹2.06L</p>
                        <div className="mt-2">
                          <div className="flex items-center">
                            <ArrowDownRight className="h-4 w-4 text-green-500 mr-1" />
                            <span className="text-sm text-green-500">-0.5%</span>
                            <span className="text-xs text-gray-400 ml-2">rate reduction</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Recent Transactions */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                      <div>
                        <CardTitle className="text-xl text-white">Recent Transactions</CardTitle>
                        <CardDescription className="text-gray-400">
                          Recent payments and platform fees
                        </CardDescription>
                      </div>
                      <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 mt-4 md:mt-0">
                        <Filter size={14} className="mr-2" />
                        Filter Transactions
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left border-b border-white/10">
                            <th className="pb-3 font-medium text-gray-300 text-sm">Transaction ID</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Type</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Date</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">From/To</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Amount</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Status</th>
                            <th className="pb-3 font-medium text-gray-300 text-sm">Invoice</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentTransactions.map((transaction, index) => (
                            <tr key={index} className="border-b border-white/10 last:border-0">
                              <td className="py-4 text-white font-medium">{transaction.id}</td>
                              <td className="py-4">
                                <Badge className={
                                  transaction.type.includes("Payment") 
                                    ? "bg-green-900/30 text-green-400"
                                    : "bg-purple-900/30 text-purple-400"
                                }>
                                  {transaction.type}
                                </Badge>
                              </td>
                              <td className="py-4 text-gray-300">{transaction.date}</td>
                              <td className="py-4 text-white">{transaction.buyer}</td>
                              <td className={`py-4 font-medium ${transaction.amount.includes('-') ? 'text-red-400' : 'text-green-400'}`}>
                                {transaction.amount}
                              </td>
                              <td className="py-4">
                                <Badge className="bg-blue-900/30 text-blue-400">
                                  {transaction.status}
                                </Badge>
                              </td>
                              <td className="py-4 text-toreso-blue font-medium">
                                {transaction.invoice !== "-" ? transaction.invoice : "-"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex items-center justify-center mt-6">
                      <Button variant="outline" className="text-toreso-teal border-toreso-teal/20 hover:bg-toreso-teal/10">
                        View All Transactions
                        <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Payment Methods */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Payment Methods & Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-white font-medium mb-4">Bank Accounts</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                            <div className="flex items-center">
                              <div className="p-2 bg-white/10 rounded-full mr-3">
                                <CreditCard size={20} className="text-toreso-teal" />
                              </div>
                              <div>
                                <p className="text-white font-medium">HDFC Bank</p>
                                <p className="text-sm text-gray-400">XXXX XXXX XXXX 5892</p>
                              </div>
                            </div>
                            <Badge className="bg-green-900/30 text-green-400">Primary</Badge>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                            <div className="flex items-center">
                              <div className="p-2 bg-white/10 rounded-full mr-3">
                                <CreditCard size={20} className="text-gray-400" />
                              </div>
                              <div>
                                <p className="text-white font-medium">ICICI Bank</p>
                                <p className="text-sm text-gray-400">XXXX XXXX XXXX 3421</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              Set as Primary
                            </Button>
                          </div>
                          
                          <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                            <CreditCard size={14} className="mr-2" />
                            Add New Bank Account
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-medium mb-4">Invoice Settings</h3>
                        <div className="space-y-4">
                          <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                            <div className="flex items-center justify-between mb-3">
                              <p className="text-white font-medium">Auto-generate Invoices</p>
                              <Switch checked={true} />
                            </div>
                            <p className="text-sm text-gray-400">
                              Automatically generate invoices for new orders
                            </p>
                          </div>
                          
                          <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                            <div className="flex items-center justify-between mb-3">
                              <p className="text-white font-medium">Payment Terms</p>
                              <Badge>Net 30</Badge>
                            </div>
                            <p className="text-sm text-gray-400">
                              Standard payment terms for all invoices
                            </p>
                          </div>
                          
                          <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                            <div className="flex items-center justify-between mb-3">
                              <p className="text-white font-medium">Invoice Prefix</p>
                              <Badge>INV-</Badge>
                            </div>
                            <p className="text-sm text-gray-400">
                              Customize your invoice number format
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Available Reports */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Financial Reports</CardTitle>
                    <CardDescription className="text-gray-400">
                      Download and analyze your financial data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 border border-white/10 rounded-lg bg-white/5 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="p-3 bg-toreso-blue/20 rounded-full mb-4 group-hover:bg-toreso-blue/30 transition-colors">
                          <BarChart4 size={24} className="text-toreso-blue" />
                        </div>
                        <h3 className="text-white font-medium mb-2">Sales Report</h3>
                        <p className="text-sm text-gray-400 mb-4">
                          Detailed breakdown of sales by product, client, and time period
                        </p>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/20 mt-auto">
                          <Download size={14} className="mr-2" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="p-6 border border-white/10 rounded-lg bg-white/5 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="p-3 bg-toreso-teal/20 rounded-full mb-4 group-hover:bg-toreso-teal/30 transition-colors">
                          <DollarSign size={24} className="text-toreso-teal" />
                        </div>
                        <h3 className="text-white font-medium mb-2">Profit & Loss</h3>
                        <p className="text-sm text-gray-400 mb-4">
                          Financial performance summary with revenue, expenses and margins
                        </p>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/20 mt-auto">
                          <Download size={14} className="mr-2" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="p-6 border border-white/10 rounded-lg bg-white/5 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="p-3 bg-toreso-purple/20 rounded-full mb-4 group-hover:bg-toreso-purple/30 transition-colors">
                          <PieChart size={24} className="text-toreso-purple" />
                        </div>
                        <h3 className="text-white font-medium mb-2">Tax Report</h3>
                        <p className="text-sm text-gray-400 mb-4">
                          Comprehensive tax reports for GST filings and compliance
                        </p>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/20 mt-auto">
                          <Download size={14} className="mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Custom Report Generator */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Custom Report Generator</CardTitle>
                    <CardDescription className="text-gray-400">
                      Create tailored financial reports for your specific needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Report Type
                          </label>
                          <select className="w-full bg-black/50 border border-white/20 text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-toreso-teal">
                            <option>Sales Report</option>
                            <option>Profit & Loss</option>
                            <option>Invoice Summary</option>
                            <option>Tax Report</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Date Range
                          </label>
                          <select className="w-full bg-black/50 border border-white/20 text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-toreso-teal">
                            <option>Current Month</option>
                            <option>Last Month</option>
                            <option>Current Quarter</option>
                            <option>Last Quarter</option>
                            <option>Year to Date</option>
                            <option>Last Year</option>
                            <option>Custom Range</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Format
                          </label>
                          <select className="w-full bg-black/50 border border-white/20 text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-toreso-teal">
                            <option>PDF</option>
                            <option>Excel</option>
                            <option>CSV</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Additional Options
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center">
                            <input type="checkbox" id="include-charts" className="mr-2" />
                            <label htmlFor="include-charts" className="text-white">Include Charts</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="include-taxes" className="mr-2" />
                            <label htmlFor="include-taxes" className="text-white">Include Tax Breakdown</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="detailed" className="mr-2" />
                            <label htmlFor="detailed" className="text-white">Detailed View</label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 mr-3">
                          Save Template
                        </Button>
                        <Button className="bg-toreso-teal hover:bg-toreso-teal/80 text-black">
                          Generate Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Saved Reports */}
              <motion.div variants={itemVariants}>
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Recent & Saved Reports</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b border-white/10">
                          <th className="pb-3 font-medium text-gray-300 text-sm">Report Name</th>
                          <th className="pb-3 font-medium text-gray-300 text-sm">Generated On</th>
                          <th className="pb-3 font-medium text-gray-300 text-sm">Type</th>
                          <th className="pb-3 font-medium text-gray-300 text-sm">Period</th>
                          <th className="pb-3 font-medium text-gray-300 text-sm text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="py-4 text-white font-medium">Q2 2023 Sales Report</td>
                          <td className="py-4 text-gray-300">03 Aug 2023</td>
                          <td className="py-4">
                            <Badge className="bg-toreso-blue/20 text-blue-300">Sales</Badge>
                          </td>
                          <td className="py-4 text-gray-300">Apr - Jun 2023</td>
                          <td className="py-4 text-right">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Download size={14} className="mr-2" /> Download
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-4 text-white font-medium">Monthly GST Report</td>
                          <td className="py-4 text-gray-300">01 Aug 2023</td>
                          <td className="py-4">
                            <Badge className="bg-toreso-purple/20 text-purple-300">Tax</Badge>
                          </td>
                          <td className="py-4 text-gray-300">Jul 2023</td>
                          <td className="py-4 text-right">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Download size={14} className="mr-2" /> Download
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-4 text-white font-medium">H1 2023 P&L</td>
                          <td className="py-4 text-gray-300">15 Jul 2023</td>
                          <td className="py-4">
                            <Badge className="bg-toreso-teal/20 text-teal-300">P&L</Badge>
                          </td>
                          <td className="py-4 text-gray-300">Jan - Jun 2023</td>
                          <td className="py-4 text-right">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Download size={14} className="mr-2" /> Download
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const Switch = ({ checked }: { checked: boolean }) => {
  return (
    <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-toreso-teal' : 'bg-gray-600'}`}>
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
    </div>
  );
};

export default SupplierFinancials;
