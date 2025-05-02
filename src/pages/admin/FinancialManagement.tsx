
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  AreaChart, 
  BarChart4, 
  Download, 
  FileText, 
  Filter, 
  DollarSign, 
  TrendingUp, 
  Wallet, 
  CreditCard, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  PieChart,
  Percent,
  BellRing
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartPieChart, Pie, Cell } from "recharts";

const FinancialManagement = () => {
  // Sample data for charts
  const revenueData = [
    { name: 'Jan', revenue: 65000 },
    { name: 'Feb', revenue: 72000 },
    { name: 'Mar', revenue: 80000 },
    { name: 'Apr', revenue: 78000 },
    { name: 'May', revenue: 85000 },
    { name: 'Jun', revenue: 90000 },
    { name: 'Jul', revenue: 95000 },
    { name: 'Aug', revenue: 102000 },
    { name: 'Sep', revenue: 106000 },
    { name: 'Oct', revenue: 112000 },
    { name: 'Nov', revenue: 118000 },
    { name: 'Dec', revenue: 125000 },
  ];

  const supplierData = [
    { name: 'EcoPackage', value: 35 },
    { name: 'BioWraps', value: 25 },
    { name: 'GreenPack', value: 20 },
    { name: 'SustainCo', value: 15 },
    { name: 'Others', value: 5 },
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
          Financial Management
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Track expenses, manage budgets, and optimize financial performance across your packaging supply chain.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <div className="w-full">
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:w-auto justify-center md:justify-start">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Filter size={16} className="mr-2" /> Filters
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Calendar size={16} className="mr-2" /> Q2 2025
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <TrendingUp size={16} className="mr-2" /> Forecast
            </Button>
            <Button className="bg-toreso-blue hover:bg-toreso-darkBlue ml-auto hidden md:flex">
              <FileText size={16} className="mr-2" /> Export Reports
            </Button>
          </div>
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
              <CardTitle className="text-lg font-medium">Total Revenue</CardTitle>
              <CardDescription className="text-white/60">Year to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <DollarSign className="text-toreso-blue" size={20} />
                <span className="text-3xl font-bold">$1.28M</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-400 mr-1" size={16} />
                <span className="text-green-400 text-sm">+12.8% from last year</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Expenses</CardTitle>
              <CardDescription className="text-white/60">Year to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <CreditCard className="text-toreso-purple" size={20} />
                <span className="text-3xl font-bold">$876K</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-amber-400 mr-1" size={16} />
                <span className="text-amber-400 text-sm">+8.3% from last year</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Net Profit</CardTitle>
              <CardDescription className="text-white/60">Year to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-green-400" size={20} />
                <span className="text-3xl font-bold">$404K</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-400 mr-1" size={16} />
                <span className="text-green-400 text-sm">+18.5% from last year</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Profit Margin</CardTitle>
              <CardDescription className="text-white/60">Current quarter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Percent className="text-toreso-teal" size={20} />
                <span className="text-3xl font-bold">31.6%</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-400 mr-1" size={16} />
                <span className="text-green-400 text-sm">+2.4% from last quarter</span>
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
          <TabsTrigger value="invoices" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Invoices
          </TabsTrigger>
          <TabsTrigger value="payments" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Payments
          </TabsTrigger>
          <TabsTrigger value="budget" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Budget
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
                      <BarChart4 className="mr-2 text-toreso-blue" size={20} />
                      Revenue Trend (2025)
                    </CardTitle>
                    <Button variant="ghost" size="sm" className="text-white/70">
                      <Download size={16} className="mr-1" /> Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={revenueData}
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
                        <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="mr-2 text-toreso-purple" size={20} />
                    Top Suppliers by Spend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartPieChart>
                        <Pie
                          data={supplierData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {supplierData.map((entry, index) => (
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AreaChart className="mr-2 text-toreso-teal" size={20} />
                    Financial Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="bg-green-500/20 p-1.5 rounded-full mt-0.5">
                        <ArrowUpRight size={14} className="text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium">Revenue Growth</p>
                        <p className="text-sm text-white/60">12.8% increase in annual revenue compared to last year</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-green-500/20 p-1.5 rounded-full mt-0.5">
                        <ArrowUpRight size={14} className="text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium">Cost Optimization</p>
                        <p className="text-sm text-white/60">8.2% reduction in operational costs through supplier consolidation</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-amber-500/20 p-1.5 rounded-full mt-0.5">
                        <ArrowDownRight size={14} className="text-amber-500" />
                      </div>
                      <div>
                        <p className="font-medium">Payment Processing</p>
                        <p className="text-sm text-white/60">Average payment processing time increased by 1.5 days</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 text-white lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wallet className="mr-2 text-toreso-blue" size={20} />
                    Cash Flow Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: 'Jan', income: 85000, expenses: 65000 },
                          { name: 'Feb', income: 92000, expenses: 70000 },
                          { name: 'Mar', income: 95000, expenses: 72000 },
                          { name: 'Apr', income: 98000, expenses: 78000 },
                          { name: 'May', income: 102000, expenses: 82000 },
                          { name: 'Jun', income: 105000, expenses: 80000 },
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
                        <Bar dataKey="income" name="Income" fill="#3b82f6" />
                        <Bar dataKey="expenses" name="Expenses" fill="#ec4899" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="invoices" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
                <CardDescription className="text-white/60">
                  Manage and track all supplier invoices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "INV-7842", supplier: "EcoPackage Solutions", date: "May 1, 2025", amount: "$24,850", status: "Pending", dueDate: "May 15, 2025" },
                      { id: "INV-7839", supplier: "PaperCraft Industries", date: "Apr 28, 2025", amount: "$12,350", status: "Paid", dueDate: "May 12, 2025" },
                      { id: "INV-7836", supplier: "Global Pack Solutions", date: "Apr 25, 2025", amount: "$18,620", status: "Processing", dueDate: "May 9, 2025" },
                      { id: "INV-7830", supplier: "BioWrap Packaging", date: "Apr 22, 2025", amount: "$8,750", status: "Paid", dueDate: "May 6, 2025" },
                      { id: "INV-7827", supplier: "Sustainable Materials Inc", date: "Apr 20, 2025", amount: "$32,400", status: "Overdue", dueDate: "May 4, 2025" },
                    ].map((invoice, i) => (
                      <TableRow key={i} className="border-white/10">
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.supplier}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <Badge className={`${
                            invoice.status === "Paid" ? "bg-green-500" :
                            invoice.status === "Processing" ? "bg-blue-500" :
                            invoice.status === "Pending" ? "bg-amber-500" :
                            "bg-red-500"
                          } text-white`}>
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost" className="hover:bg-white/10">
                              View
                            </Button>
                            {invoice.status !== "Paid" && (
                              <Button size="sm" className="bg-toreso-blue hover:bg-toreso-darkBlue">
                                Pay
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="payments" className="mt-0">
          {/* Payments tab content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription className="text-white/60">
                  Track all financial transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "TXN-45890", recipient: "EcoPackage Solutions", date: "Apr 28, 2025", amount: "$18,750", method: "Bank Transfer", status: "Completed" },
                      { id: "TXN-45885", recipient: "QualiPack Corp", date: "Apr 25, 2025", amount: "$12,350", method: "Credit Card", status: "Completed" },
                      { id: "TXN-45882", recipient: "Green Solutions Ltd", date: "Apr 22, 2025", amount: "$24,680", method: "Bank Transfer", status: "Processing" },
                      { id: "TXN-45878", recipient: "BoxCraft Manufacturers", date: "Apr 20, 2025", amount: "$8,950", method: "ACH", status: "Failed" },
                      { id: "TXN-45875", recipient: "EnviroPack Ltd", date: "Apr 18, 2025", amount: "$32,400", method: "Wire Transfer", status: "Completed" },
                    ].map((payment, i) => (
                      <TableRow key={i} className="border-white/10">
                        <TableCell className="font-medium">{payment.id}</TableCell>
                        <TableCell>{payment.recipient}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell>
                          <Badge className={`${
                            payment.status === "Completed" ? "bg-green-500" :
                            payment.status === "Processing" ? "bg-blue-500" :
                            "bg-red-500"
                          } text-white`}>
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="ghost" className="hover:bg-white/10">
                            Receipt
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="budget" className="mt-0">
          {/* Budget tab content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="bg-black/40 border-white/10 text-white lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart4 className="mr-2 text-toreso-purple" size={20} />
                    Budget vs. Actual (Q2 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: 'Materials', budget: 280000, actual: 295000 },
                          { name: 'Logistics', budget: 120000, actual: 118000 },
                          { name: 'Operations', budget: 180000, actual: 175000 },
                          { name: 'Marketing', budget: 90000, actual: 88000 },
                          { name: 'Admin', budget: 60000, actual: 58000 },
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
                        <Bar dataKey="budget" name="Budget" fill="#8884d8" />
                        <Bar dataKey="actual" name="Actual" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Budget Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex justify-between mb-1">
                        <span>Materials</span>
                        <span>39%</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                        <div className="bg-toreso-blue h-2 rounded-full" style={{ width: "39%" }}></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between mb-1">
                        <span>Logistics</span>
                        <span>16%</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                        <div className="bg-toreso-purple h-2 rounded-full" style={{ width: "16%" }}></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between mb-1">
                        <span>Operations</span>
                        <span>25%</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                        <div className="bg-toreso-teal h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between mb-1">
                        <span>Marketing</span>
                        <span>12%</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between mb-1">
                        <span>Admin</span>
                        <span>8%</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
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
                  <BellRing className="mr-2" size={20} />
                  Financial alerts and notifications
                </h3>
                <p className="text-white/70">
                  Get real-time notifications about important financial events
                </p>
              </div>
              <Button className="bg-toreso-blue hover:bg-toreso-darkBlue">
                Configure Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default FinancialManagement;
