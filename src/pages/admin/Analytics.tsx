
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { 
  BarChart4, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Activity, 
  CreditCard, 
  Package, 
  Users, 
  ArrowUpRight, 
  Download, 
  FileText, 
  Filter, 
  Calendar, 
  Search,
  ShoppingCart,
  Globe,
  Settings
} from "lucide-react";
import { 
  LineChart as RechartLineChart, 
  Line, 
  BarChart as RechartBarChart, 
  Bar, 
  PieChart as RechartPieChart,
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  Cell, 
  AreaChart, 
  Area 
} from "recharts";

const Analytics = () => {
  // Sample data for charts
  const salesData = [
    { name: 'Jan', value: 65000 },
    { name: 'Feb', value: 72000 },
    { name: 'Mar', value: 80000 },
    { name: 'Apr', value: 78000 },
    { name: 'May', value: 85000 },
    { name: 'Jun', value: 90000 },
    { name: 'Jul', value: 95000 },
    { name: 'Aug', value: 102000 },
    { name: 'Sep', value: 106000 },
    { name: 'Oct', value: 112000 },
    { name: 'Nov', value: 118000 },
    { name: 'Dec', value: 125000 },
  ];

  const categoryData = [
    { name: 'Corrugated Boxes', value: 35 },
    { name: 'Food Packaging', value: 25 },
    { name: 'Pouches', value: 20 },
    { name: 'Industrial', value: 15 },
    { name: 'Others', value: 5 },
  ];

  const customerData = [
    { name: 'Manufacturing', value: 40 },
    { name: 'Food & Beverage', value: 30 },
    { name: 'Retail', value: 20 },
    { name: 'Pharmaceuticals', value: 7 },
    { name: 'Others', value: 3 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EFF'];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          Reports & Analytics
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Gain actionable insights into your packaging supply chain with comprehensive analytics and reporting.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
            <input
              type="text"
              placeholder="Search reports..."
              className="pl-10 pr-4 py-2 rounded-md bg-black/30 border-white/10 text-white w-full md:w-64"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-2 w-full md:w-auto justify-center md:justify-end">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Filter size={16} className="mr-2" /> Filters
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Calendar size={16} className="mr-2" /> Apr - Jun 2025
          </Button>
          <Button className="bg-toreso-blue hover:bg-toreso-darkBlue">
            <FileText size={16} className="mr-2" /> Generate Report
          </Button>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Sales</CardTitle>
              <CardDescription className="text-white/60">Year to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <ShoppingCart className="text-toreso-blue" size={20} />
                <span className="text-3xl font-bold">$1.48M</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-400 mr-1" size={16} />
                <span className="text-green-400 text-sm">+18.4% from last year</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Active Suppliers</CardTitle>
              <CardDescription className="text-white/60">Platform wide</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <CreditCard className="text-toreso-purple" size={20} />
                <span className="text-3xl font-bold">428</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-400 mr-1" size={16} />
                <span className="text-green-400 text-sm">+24 this quarter</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Products</CardTitle>
              <CardDescription className="text-white/60">In catalog</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Package className="text-toreso-teal" size={20} />
                <span className="text-3xl font-bold">3,752</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-400 mr-1" size={16} />
                <span className="text-green-400 text-sm">+285 new products</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Active Buyers</CardTitle>
              <CardDescription className="text-white/60">Platform users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Users className="text-toreso-orange" size={20} />
                <span className="text-3xl font-bold">642</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-400 mr-1" size={16} />
                <span className="text-green-400 text-sm">+18% from last year</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="w-full mb-12">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-black/40 p-1 mb-8">
          <TabsTrigger value="overview" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="sales" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Sales Analytics
          </TabsTrigger>
          <TabsTrigger value="suppliers" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Supplier Analytics
          </TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Platform Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="bg-black/40 border-white/10 text-white lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <LineChart className="mr-2 text-toreso-blue" size={20} />
                      Sales Trend (2025)
                    </CardTitle>
                    <Button variant="ghost" size="sm" className="text-white/70">
                      <Download size={16} className="mr-1" /> Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={salesData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1A1F2C', border: '1px solid #333', borderRadius: '4px' }} 
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          name="Sales ($)"
                          stroke="#3b82f6" 
                          fill="url(#colorGradient)" 
                          strokeWidth={2} 
                        />
                        <defs>
                          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="mr-2 text-toreso-purple" size={20} />
                    Sales by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartPieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1A1F2C', border: '1px solid #333', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff' }}
                        />
                      </RechartPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 text-green-400" size={20} />
                    Top Performing Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      { name: "Custom Shipping Boxes", sales: "$142,850", growth: "+24%" },
                      { name: "Biodegradable Mailers", sales: "$118,420", growth: "+32%" },
                      { name: "Food-grade Containers", sales: "$98,750", growth: "+18%" },
                      { name: "Industrial Packaging Film", sales: "$84,320", growth: "+12%" },
                      { name: "Eco-friendly Pouches", sales: "$72,650", growth: "+28%" },
                    ].map((product, i) => (
                      <li key={i} className="flex items-start justify-between">
                        <span className="font-medium">{product.name}</span>
                        <div className="text-right">
                          <div className="font-medium">{product.sales}</div>
                          <div className="text-xs text-green-400">{product.growth}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-toreso-blue" size={20} />
                    Customer Segments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartPieChart>
                        <Pie
                          data={customerData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {customerData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1A1F2C', border: '1px solid #333', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff' }}
                        />
                      </RechartPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 text-toreso-teal" size={20} />
                    Regional Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartBarChart
                        data={[
                          { name: 'North America', value: 450000 },
                          { name: 'Europe', value: 320000 },
                          { name: 'Asia Pacific', value: 280000 },
                          { name: 'Latin America', value: 190000 },
                          { name: 'MEA', value: 140000 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1A1F2C', border: '1px solid #333', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Bar dataKey="value" name="Sales ($)" fill="#4ade80" />
                      </RechartBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="sales" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Sales by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10">
                        <TableHead>Category</TableHead>
                        <TableHead>Sales</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead>Growth</TableHead>
                        <TableHead>Trend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { category: "Corrugated Boxes", sales: "$450,850", volume: "28,450 units", growth: "+18%" },
                        { category: "Food Packaging", sales: "$325,750", volume: "42,850 units", growth: "+24%" },
                        { category: "Pouches", sales: "$246,400", volume: "158,200 units", growth: "+32%" },
                        { category: "Industrial Packaging", sales: "$198,680", volume: "12,450 units", growth: "+8%" },
                        { category: "Others", sales: "$68,420", volume: "24,680 units", growth: "+15%" },
                      ].map((item, i) => (
                        <TableRow key={i} className="border-white/10">
                          <TableCell className="font-medium">{item.category}</TableCell>
                          <TableCell>{item.sales}</TableCell>
                          <TableCell>{item.volume}</TableCell>
                          <TableCell className="text-green-400">{item.growth}</TableCell>
                          <TableCell>
                            <div className="w-24 h-8">
                              <ResponsiveContainer width="100%" height="100%">
                                <RechartLineChart data={[
                                  { value: Math.random() * 10 + 10 },
                                  { value: Math.random() * 10 + 15 },
                                  { value: Math.random() * 10 + 20 },
                                  { value: Math.random() * 10 + 18 },
                                  { value: Math.random() * 10 + 25 },
                                ]}>
                                  <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
                                </RechartLineChart>
                              </ResponsiveContainer>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Top Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10">
                        <TableHead>Customer</TableHead>
                        <TableHead>Industry</TableHead>
                        <TableHead>Orders</TableHead>
                        <TableHead>Spend</TableHead>
                        <TableHead>YoY Growth</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: "Acme Industries", industry: "Manufacturing", orders: 285, spend: "$178,450", growth: "+24%" },
                        { name: "TechTron Corp", industry: "Electronics", orders: 218, spend: "$145,750", growth: "+18%" },
                        { name: "Fresh Foods Co", industry: "Food & Beverage", orders: 192, spend: "$124,800", growth: "+32%" },
                        { name: "MediHealth Labs", industry: "Pharmaceuticals", orders: 156, spend: "$98,350", growth: "+15%" },
                        { name: "Global Retail Inc", industry: "Retail", orders: 124, spend: "$85,620", growth: "+12%" },
                      ].map((customer, i) => (
                        <TableRow key={i} className="border-white/10">
                          <TableCell className="font-medium">{customer.name}</TableCell>
                          <TableCell>{customer.industry}</TableCell>
                          <TableCell>{customer.orders}</TableCell>
                          <TableCell>{customer.spend}</TableCell>
                          <TableCell className="text-green-400">{customer.growth}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart4 className="mr-2 text-toreso-blue" size={20} />
                    Monthly Sales Performance (2024 vs 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartBarChart
                        data={[
                          { name: 'Jan', '2024': 55000, '2025': 65000 },
                          { name: 'Feb', '2024': 58000, '2025': 72000 },
                          { name: 'Mar', '2024': 62000, '2025': 80000 },
                          { name: 'Apr', '2024': 65000, '2025': 78000 },
                          { name: 'May', '2024': 70000, '2025': 85000 },
                          { name: 'Jun', '2024': 72000, '2025': 90000 },
                          { name: 'Jul', '2024': 75000, '2025': 95000 },
                          { name: 'Aug', '2024': 80000, '2025': 102000 },
                          { name: 'Sep', '2024': 82000, '2025': 106000 },
                          { name: 'Oct', '2024': 85000, '2025': 112000 },
                          { name: 'Nov', '2024': 90000, '2025': 118000 },
                          { name: 'Dec', '2024': 95000, '2025': 125000 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1A1F2C', border: '1px solid #333', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Bar dataKey="2024" name="2024 Sales ($)" fill="#9ca3af" />
                        <Bar dataKey="2025" name="2025 Sales ($)" fill="#3b82f6" />
                      </RechartBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="suppliers" className="mt-0">
          {/* Suppliers tab content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Top Performing Suppliers</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10">
                        <TableHead>Supplier</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Sales</TableHead>
                        <TableHead>On-time Delivery</TableHead>
                        <TableHead>Quality Score</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: "EcoPackage Solutions", products: 124, sales: "$284,750", delivery: "98.5%", quality: "4.9/5" },
                        { name: "PaperCraft Industries", products: 86, sales: "$215,420", delivery: "97.2%", quality: "4.8/5" },
                        { name: "Global Pack Solutions", products: 108, sales: "$198,650", delivery: "96.8%", quality: "4.7/5" },
                        { name: "BioWrap Packaging", products: 72, sales: "$185,320", delivery: "95.4%", quality: "4.8/5" },
                        { name: "Sustainable Materials Inc", products: 94, sales: "$165,780", delivery: "94.8%", quality: "4.6/5" },
                      ].map((supplier, i) => (
                        <TableRow key={i} className="border-white/10">
                          <TableCell className="font-medium">{supplier.name}</TableCell>
                          <TableCell>{supplier.products}</TableCell>
                          <TableCell>{supplier.sales}</TableCell>
                          <TableCell>{supplier.delivery}</TableCell>
                          <TableCell>{supplier.quality}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Supplier Onboarding Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartLineChart
                        data={[
                          { month: 'Jan', value: 12 },
                          { month: 'Feb', value: 18 },
                          { month: 'Mar', value: 22 },
                          { month: 'Apr', value: 15 },
                          { month: 'May', value: 24 },
                          { month: 'Jun', value: 28 },
                          { month: 'Jul', value: 30 },
                          { month: 'Aug', value: 26 },
                          { month: 'Sep', value: 32 },
                          { month: 'Oct', value: 38 },
                          { month: 'Nov', value: 42 },
                          { month: 'Dec', value: 36 },
                        ]}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="month" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1A1F2C', border: '1px solid #333', borderRadius: '4px' }} 
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          name="New Suppliers" 
                          stroke="#a855f7" 
                          strokeWidth={2} 
                          activeDot={{ r: 8 }} 
                        />
                      </RechartLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Supplier Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-black/20 border-white/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium">Average Quality Score</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-3xl font-bold">4.7/5</span>
                          <div className="text-green-400 text-sm">+0.2 YoY</div>
                        </div>
                        <div className="w-full bg-black/30 h-2 rounded-full mt-4">
                          <div className="bg-toreso-blue h-2 rounded-full" style={{ width: "94%" }}></div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/20 border-white/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium">On-time Delivery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-3xl font-bold">95.8%</span>
                          <div className="text-green-400 text-sm">+1.2% YoY</div>
                        </div>
                        <div className="w-full bg-black/30 h-2 rounded-full mt-4">
                          <div className="bg-toreso-teal h-2 rounded-full" style={{ width: "95.8%" }}></div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/20 border-white/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium">Compliance Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-3xl font-bold">92.4%</span>
                          <div className="text-green-400 text-sm">+3.6% YoY</div>
                        </div>
                        <div className="w-full bg-black/30 h-2 rounded-full mt-4">
                          <div className="bg-toreso-purple h-2 rounded-full" style={{ width: "92.4%" }}></div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/20 border-white/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium">Sustainability Score</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-3xl font-bold">87.2%</span>
                          <div className="text-green-400 text-sm">+5.8% YoY</div>
                        </div>
                        <div className="w-full bg-black/30 h-2 rounded-full mt-4">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "87.2%" }}></div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="performance" className="mt-0">
          {/* Performance tab content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="bg-black/40 border-white/10 text-white lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 text-toreso-blue" size={20} />
                    Platform Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartLineChart
                        data={[
                          { date: '1 May', users: 842, orders: 124, rfqs: 58 },
                          { date: '2 May', users: 875, orders: 132, rfqs: 62 },
                          { date: '3 May', users: 912, orders: 145, rfqs: 75 },
                          { date: '4 May', users: 948, orders: 158, rfqs: 82 },
                          { date: '5 May', users: 975, orders: 168, rfqs: 78 },
                          { date: '6 May', users: 1024, orders: 182, rfqs: 94 },
                          { date: '7 May', users: 1075, orders: 196, rfqs: 102 },
                        ]}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="date" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1A1F2C', border: '1px solid #333', borderRadius: '4px' }} 
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="users" name="Active Users" stroke="#3b82f6" strokeWidth={2} />
                        <Line type="monotone" dataKey="orders" name="Orders" stroke="#10b981" strokeWidth={2} />
                        <Line type="monotone" dataKey="rfqs" name="RFQs" stroke="#f59e0b" strokeWidth={2} />
                      </RechartLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle>User Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Daily Active Users</span>
                        <span className="text-green-400">+18%</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                        <div className="bg-toreso-blue h-2 rounded-full" style={{ width: "76%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-white/60">Previous: 842</span>
                        <span className="text-xs font-medium">Current: 994</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Session Duration</span>
                        <span className="text-green-400">+24%</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                        <div className="bg-toreso-purple h-2 rounded-full" style={{ width: "82%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-white/60">Previous: 12:24</span>
                        <span className="text-xs font-medium">Current: 15:22</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Order Completion Rate</span>
                        <span className="text-green-400">+8%</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                        <div className="bg-toreso-teal h-2 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-white/60">Previous: 63%</span>
                        <span className="text-xs font-medium">Current: 68%</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Platform Satisfaction</span>
                        <span className="text-green-400">+5%</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-white/60">Previous: 88%</span>
                        <span className="text-xs font-medium">Current: 92%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/40 border-white/10 text-white mb-6">
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="bg-black/20 border-white/5">
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">Uptime</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold">99.97%</div>
                        <div className="text-xs text-white/60 mt-1">Last 30 days</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-black/20 border-white/5">
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold">248ms</div>
                        <div className="text-xs text-green-400 mt-1">-12% from last month</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-black/20 border-white/5">
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold">0.08%</div>
                        <div className="text-xs text-green-400 mt-1">-0.03% from last month</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-black/20 border-white/5">
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">API Requests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold">2.4M</div>
                        <div className="text-xs text-white/60 mt-1">Daily average</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8"
      >
        <Card className="bg-toreso-blue/20 border-toreso-blue/30 text-white">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-medium flex items-center">
                  <Settings className="mr-2" size={20} />
                  Customize your analytics dashboard
                </h3>
                <p className="text-white/70">
                  Configure reports, metrics, and visualizations to meet your specific needs
                </p>
              </div>
              <Button className="bg-toreso-blue hover:bg-toreso-darkBlue">
                Configure Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Analytics;
