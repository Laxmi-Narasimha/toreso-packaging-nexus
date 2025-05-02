
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  BarChart4, 
  Truck, 
  Package, 
  Clock, 
  AlertCircle, 
  FileText, 
  ShoppingCart 
} from "lucide-react";
import { Input } from "@/components/ui/input";

const OrderManagement = () => {
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
          Order Management
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Track, manage and optimize orders across your supplier network with real-time visibility and powerful analytics.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
          <Input 
            placeholder="Search orders, suppliers, products..." 
            className="bg-black/30 border-white/10 pl-10 text-white placeholder:text-white/50" 
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Filter size={16} className="mr-2" /> Filter
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <ArrowUpDown size={16} className="mr-2" /> Sort
          </Button>
          <Button className="bg-toreso-blue hover:bg-toreso-darkBlue text-white">
            <FileText size={16} className="mr-2" /> Export
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
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Total Orders</CardTitle>
              <CardDescription className="text-white/60">This month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold">672</span>
                <span className="text-green-400 text-sm">+12% MoM</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Order Value</CardTitle>
              <CardDescription className="text-white/60">This month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold">$1.2M</span>
                <span className="text-green-400 text-sm">+8.5% MoM</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Pending</CardTitle>
              <CardDescription className="text-white/60">Orders awaiting action</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold">42</span>
                <span className="text-amber-400 text-sm">5 urgent</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 border-white/10 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">On-time Delivery</CardTitle>
              <CardDescription className="text-white/60">Performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold">94.8%</span>
                <span className="text-green-400 text-sm">+2.3% YTD</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid grid-cols-5 gap-4 bg-black/40 p-1 mb-8">
          <TabsTrigger value="active" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Active Orders
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Pending Approval
          </TabsTrigger>
          <TabsTrigger value="shipping" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            In Transit
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Completed
          </TabsTrigger>
          <TabsTrigger value="issues" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Issues
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Active Orders</CardTitle>
                <CardDescription className="text-white/60">
                  Orders currently in process across the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Delivery</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "ORD-78542", customer: "Acme Industries", supplier: "EcoPackage Solutions", products: "Corrugated Boxes", value: "$24,850", status: "Processing", delivery: "May 15, 2025" },
                      { id: "ORD-78539", customer: "TechTron Corp", supplier: "PaperCraft Industries", products: "Kraft Paper Rolls", value: "$12,350", status: "Ready for Shipment", delivery: "May 10, 2025" },
                      { id: "ORD-78536", customer: "BioTech Solutions", supplier: "Global Pack Solutions", products: "Biodegradable Mailers", value: "$18,620", status: "Quality Check", delivery: "May 18, 2025" },
                      { id: "ORD-78530", customer: "ElectroDev Inc", supplier: "BioWrap Packaging", products: "Anti-static Foam", value: "$8,750", status: "Production", delivery: "May 22, 2025" },
                      { id: "ORD-78527", customer: "Fresh Foods Co", supplier: "Sustainable Materials Inc", products: "Food-grade Containers", value: "$32,400", status: "Processing", delivery: "May 12, 2025" },
                    ].map((order, i) => (
                      <TableRow key={i} className="border-white/10">
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.supplier}</TableCell>
                        <TableCell>{order.products}</TableCell>
                        <TableCell>{order.value}</TableCell>
                        <TableCell>
                          <Badge className={`${
                            order.status === "Ready for Shipment" ? "bg-green-500" :
                            order.status === "Quality Check" ? "bg-amber-500" :
                            "bg-blue-500"
                          } text-white`}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.delivery}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="ghost" className="hover:bg-white/10">
                            View Details
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

        <TabsContent value="pending" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Orders Pending Approval</CardTitle>
                <CardDescription className="text-white/60">
                  Orders requiring review and approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Requested By</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "ORD-78545", customer: "NovaTech Industries", products: "Custom Shipping Boxes", value: "$42,350", requestedBy: "Jennifer Moore", submitted: "May 1, 2025" },
                      { id: "ORD-78544", customer: "GreenGrow Farms", products: "Eco-friendly Pulp Trays", value: "$18,780", requestedBy: "Robert Chen", submitted: "May 1, 2025" },
                      { id: "ORD-78543", customer: "MediHealth Labs", products: "Sterile Packaging", value: "$35,620", requestedBy: "Sarah Johnson", submitted: "Apr 30, 2025" },
                    ].map((order, i) => (
                      <TableRow key={i} className="border-white/10">
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.products}</TableCell>
                        <TableCell>{order.value}</TableCell>
                        <TableCell>{order.requestedBy}</TableCell>
                        <TableCell>{order.submitted}</TableCell>
                        <TableCell className="flex space-x-2">
                          <Button size="sm" className="bg-toreso-blue hover:bg-toreso-darkBlue">
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10">
                            Review
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

        <TabsContent value="shipping" className="mt-0">
          {/* Shipping tab content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>In Transit Orders</CardTitle>
                <CardDescription className="text-white/60">
                  Orders currently being shipped to customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Carrier</TableHead>
                      <TableHead>Tracking</TableHead>
                      <TableHead>Shipped Date</TableHead>
                      <TableHead>ETA</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "ORD-78520", customer: "Quantum Electronics", carrier: "FedEx", tracking: "FX785423195US", shippedDate: "Apr 29, 2025", eta: "May 5, 2025", status: "On Time" },
                      { id: "ORD-78518", customer: "Western Retailers", carrier: "DHL", tracking: "DH45678123DE", shippedDate: "Apr 28, 2025", eta: "May 6, 2025", status: "On Time" },
                      { id: "ORD-78515", customer: "MediCorp Inc", carrier: "UPS", tracking: "1Z9842X37896524", shippedDate: "Apr 27, 2025", eta: "May 3, 2025", status: "Delayed" },
                      { id: "ORD-78512", customer: "Global Foods", carrier: "FedEx", tracking: "FX785421879US", shippedDate: "Apr 26, 2025", eta: "May 2, 2025", status: "On Time" },
                    ].map((order, i) => (
                      <TableRow key={i} className="border-white/10">
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.carrier}</TableCell>
                        <TableCell>{order.tracking}</TableCell>
                        <TableCell>{order.shippedDate}</TableCell>
                        <TableCell>{order.eta}</TableCell>
                        <TableCell>
                          <Badge className={`${
                            order.status === "On Time" ? "bg-green-500" : "bg-amber-500"
                          } text-white`}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="ghost" className="hover:bg-white/10">
                            Track
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

        <TabsContent value="completed" className="mt-0">
          {/* Completed tab content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Content for completed orders */}
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Completed Orders</CardTitle>
                <CardDescription className="text-white/60">
                  Recently completed orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Completion Date</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Order data */}
                    <TableRow className="border-white/10">
                      <TableCell className="font-medium">ORD-78490</TableCell>
                      <TableCell>Acme Industries</TableCell>
                      <TableCell>Branded Shipping Boxes</TableCell>
                      <TableCell>$18,750</TableCell>
                      <TableCell>Apr 25, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 text-white">On Time</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost" className="hover:bg-white/10">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-white/10">
                      <TableCell className="font-medium">ORD-78485</TableCell>
                      <TableCell>EnviroPack Ltd</TableCell>
                      <TableCell>Biodegradable Wrap</TableCell>
                      <TableCell>$12,350</TableCell>
                      <TableCell>Apr 23, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 text-white">On Time</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost" className="hover:bg-white/10">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-white/10">
                      <TableCell className="font-medium">ORD-78482</TableCell>
                      <TableCell>TechSmart Inc</TableCell>
                      <TableCell>Component Packaging</TableCell>
                      <TableCell>$24,680</TableCell>
                      <TableCell>Apr 22, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500 text-white">Delayed</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost" className="hover:bg-white/10">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="issues" className="mt-0">
          {/* Issues tab content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Content for orders with issues */}
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Orders with Issues</CardTitle>
                <CardDescription className="text-white/60">
                  Orders requiring attention due to problems or exceptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Issue Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Reported</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-white/10">
                      <TableCell className="font-medium">ORD-78525</TableCell>
                      <TableCell>MediHealth Labs</TableCell>
                      <TableCell>Quality</TableCell>
                      <TableCell>Product does not meet specifications</TableCell>
                      <TableCell>Apr 30, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500 text-white">Open</Badge>
                      </TableCell>
                      <TableCell className="flex space-x-2">
                        <Button size="sm" className="bg-toreso-blue hover:bg-toreso-darkBlue">
                          Resolve
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-white/10">
                      <TableCell className="font-medium">ORD-78510</TableCell>
                      <TableCell>Global Foods</TableCell>
                      <TableCell>Shipping</TableCell>
                      <TableCell>Delivery delayed by carrier</TableCell>
                      <TableCell>Apr 28, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500 text-white">In Progress</Badge>
                      </TableCell>
                      <TableCell className="flex space-x-2">
                        <Button size="sm" className="bg-toreso-blue hover:bg-toreso-darkBlue">
                          Update
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-white/10">
                      <TableCell className="font-medium">ORD-78498</TableCell>
                      <TableCell>TechTron Corp</TableCell>
                      <TableCell>Inventory</TableCell>
                      <TableCell>Partial shipment due to stock limitations</TableCell>
                      <TableCell>Apr 26, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500 text-white">In Progress</Badge>
                      </TableCell>
                      <TableCell className="flex space-x-2">
                        <Button size="sm" className="bg-toreso-blue hover:bg-toreso-darkBlue">
                          Resolve
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-black/20 border-white/10 text-white col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 text-amber-400" size={20} />
              Attention Required
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-red-400 mt-0.5">•</span>
                <span>3 orders have quality issues requiring immediate attention</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>5 orders are approaching their due date with production delays</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>2 orders have payment discrepancies that need review</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4 border-white/20 hover:bg-white/10">
              View All Issues
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-toreso-blue/30 to-toreso-purple/20 border-white/10 text-white col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Truck className="mr-2 text-toreso-blue" size={20} />
              Shipment Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="h-[160px] w-full bg-black/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Package className="mx-auto mb-2 text-toreso-blue" size={32} />
                  <p className="text-white/70">Interactive shipment map view</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-xs text-white/60">In Transit</p>
                  <p className="text-lg font-medium">42</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-xs text-white/60">Arriving Today</p>
                  <p className="text-lg font-medium">8</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-xs text-white/60">Delayed</p>
                  <p className="text-lg font-medium">3</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-xs text-white/60">Delivered (24h)</p>
                  <p className="text-lg font-medium">24</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8"
      >
        <Card className="bg-toreso-blue/20 border-toreso-blue/30 text-white">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-medium flex items-center">
                  <ShoppingCart className="mr-2" size={20} />
                  Need to place a new order?
                </h3>
                <p className="text-white/70">
                  Quickly create orders with our streamlined order process
                </p>
              </div>
              <Button className="bg-toreso-blue hover:bg-toreso-darkBlue">
                Create New Order
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default OrderManagement;
