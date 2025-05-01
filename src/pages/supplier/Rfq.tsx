
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
  FileText,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Calendar,
  Check,
  ArrowUpDown,
  MoreHorizontal,
  AlertCircle,
  DollarSign,
  Building,
  Package,
  CheckCircle,
  XCircle,
  Eye,
  BarChart4,
  ChevronDown,
  Mail,
  Send,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Rfq = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  // Sample RFQs data
  const rfqData = [
    {
      id: "RFQ-472",
      title: "Request for Large Shipping Containers",
      buyer: "Mahindra Automotive",
      product: "Shipping Containers (Large)",
      quantity: "10,000 units",
      deadline: "Aug 4, 2023",
      received: "Aug 2, 2023",
      status: "Urgent",
      statusColor: "bg-red-100 text-red-800",
      category: "Corrugated Boxes",
      views: 4,
      estimatedValue: "₹800,000 - ₹950,000",
      location: "Nasik, Maharashtra",
    },
    {
      id: "RFQ-468",
      title: "Corrugated Dividers for Auto Parts",
      buyer: "Honda Cars India",
      product: "Corrugated Dividers",
      quantity: "8,000 units",
      deadline: "Aug 10, 2023",
      received: "Aug 1, 2023",
      status: "New",
      statusColor: "bg-blue-100 text-blue-800",
      category: "Void Fill Solutions",
      views: 2,
      estimatedValue: "₹240,000 - ₹320,000",
      location: "Greater Noida, UP",
    },
    {
      id: "RFQ-465",
      title: "Heavy-Duty Stretch Films Request",
      buyer: "Ashok Leyland",
      product: "Stretch Films (Heavy-Duty)",
      quantity: "500 rolls",
      deadline: "Aug 15, 2023",
      received: "Jul 31, 2023",
      status: "New",
      statusColor: "bg-blue-100 text-blue-800",
      category: "Protective Packaging",
      views: 3,
      estimatedValue: "₹175,000 - ₹225,000",
      location: "Chennai, Tamil Nadu",
    },
    {
      id: "RFQ-462",
      title: "Custom Printed Packaging for New Product Line",
      buyer: "Royal Enfield",
      product: "Custom Printed Packaging Boxes",
      quantity: "15,000 units",
      deadline: "Aug 20, 2023",
      received: "Jul 29, 2023",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      category: "Corrugated Boxes",
      views: 5,
      estimatedValue: "₹1,200,000 - ₹1,500,000",
      location: "Chennai, Tamil Nadu",
    },
    {
      id: "RFQ-458",
      title: "Industrial Pallets for Heavy Machinery",
      buyer: "JCB India",
      product: "Industrial Pallets (Heavy-Duty)",
      quantity: "300 units",
      deadline: "Aug 25, 2023",
      received: "Jul 27, 2023",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      category: "Pallets",
      views: 8,
      estimatedValue: "₹450,000 - ₹525,000",
      location: "Faridabad, Haryana",
    },
    {
      id: "RFQ-455",
      title: "Eco-Friendly Packaging Solutions",
      buyer: "Tata Motors",
      product: "Sustainable Packaging Materials",
      quantity: "Various",
      deadline: "Aug 25, 2023",
      received: "Jul 25, 2023",
      status: "Replied",
      statusColor: "bg-green-100 text-green-800",
      category: "Sustainable Packaging",
      views: 6,
      estimatedValue: "₹750,000 - ₹900,000",
      location: "Pune, Maharashtra",
    },
    {
      id: "RFQ-450",
      title: "Anti-Static Bubble Wrap for Electronics",
      buyer: "Samsung India",
      product: "Anti-Static Bubble Wrap",
      quantity: "2,000 rolls",
      deadline: "Aug 18, 2023",
      received: "Jul 22, 2023",
      status: "Replied",
      statusColor: "bg-green-100 text-green-800",
      category: "Protective Packaging",
      views: 4,
      estimatedValue: "₹380,000 - ₹420,000",
      location: "Noida, UP",
    },
    {
      id: "RFQ-442",
      title: "VCI Paper for Metal Parts Packaging",
      buyer: "Bharat Forge",
      product: "VCI Paper Sheets",
      quantity: "50,000 sheets",
      deadline: "Jul 30, 2023",
      received: "Jul 17, 2023",
      status: "Expired",
      statusColor: "bg-gray-100 text-gray-800",
      category: "Protective Packaging",
      views: 3,
      estimatedValue: "₹350,000 - ₹400,000",
      location: "Pune, Maharashtra",
    },
  ];

  // Sample sent quotes data
  const sentQuotesData = [
    {
      id: "QUO-325",
      rfqId: "RFQ-455",
      buyer: "Tata Motors",
      product: "Sustainable Packaging Materials",
      quoteAmount: "₹825,000",
      sentDate: "Jul 28, 2023",
      validUntil: "Aug 28, 2023",
      status: "Pending Review",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "QUO-320",
      rfqId: "RFQ-450",
      buyer: "Samsung India",
      product: "Anti-Static Bubble Wrap",
      quoteAmount: "₹410,000",
      sentDate: "Jul 25, 2023",
      validUntil: "Aug 25, 2023",
      status: "Under Negotiation",
      statusColor: "bg-purple-100 text-purple-800",
    },
    {
      id: "QUO-315",
      rfqId: "RFQ-438",
      buyer: "Hyundai Motor India",
      product: "Packaging Tapes (Branded)",
      quoteAmount: "₹175,000",
      sentDate: "Jul 20, 2023",
      validUntil: "Aug 20, 2023",
      status: "Accepted",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "QUO-310",
      rfqId: "RFQ-432",
      buyer: "Maruti Suzuki",
      product: "Corrugated Boxes (Custom)",
      quoteAmount: "₹1,250,000",
      sentDate: "Jul 15, 2023",
      validUntil: "Aug 15, 2023",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800",
    },
  ];

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">RFQ/RFI Management</h1>
          <p className="text-gray-500">
            View, respond to, and track requests for quotes and information
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <Button className="bg-toreso-teal hover:bg-toreso-teal/90">
            <BarChart4 size={16} className="mr-2" /> RFQ Analytics
          </Button>
        </div>
      </div>

      {/* RFQ Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "New Requests",
            value: "3",
            description: "Awaiting your review",
            icon: <FileText className="h-8 w-8 text-blue-500" />,
            color: "bg-blue-50",
          },
          {
            title: "Urgent Requests",
            value: "1",
            description: "Need immediate attention",
            icon: <Clock className="h-8 w-8 text-red-500" />,
            color: "bg-red-50",
          },
          {
            title: "In Progress",
            value: "2",
            description: "Working on response",
            icon: <Package className="h-8 w-8 text-yellow-500" />,
            color: "bg-yellow-50",
          },
          {
            title: "Quotes Sent",
            value: "4",
            description: "Awaiting buyer decision",
            icon: <Check className="h-8 w-8 text-green-500" />,
            color: "bg-green-50",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start">
                <div className={`rounded-full p-3 mr-4 ${card.color}`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">{card.title}</h3>
                  <p className="text-3xl font-bold mt-1 mb-1">{card.value}</p>
                  <p className="text-sm text-gray-500">{card.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* RFQ/RFI Tabs */}
      <Tabs defaultValue="incoming" className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <TabsList className="mb-4 md:mb-0">
            <TabsTrigger value="incoming">Incoming RFQs</TabsTrigger>
            <TabsTrigger value="sent-quotes">Sent Quotes</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          
          <div className="flex space-x-2">
            <div className="relative">
              <Search 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              />
              <Input
                placeholder="Search RFQs..."
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="replied">Replied</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="corrugated-boxes">Corrugated Boxes</SelectItem>
                    <SelectItem value="protective-packaging">Protective Packaging</SelectItem>
                    <SelectItem value="pallets">Pallets</SelectItem>
                    <SelectItem value="void-fill">Void Fill Solutions</SelectItem>
                    <SelectItem value="sustainable">Sustainable Packaging</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deadline
                </label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All Deadlines" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Deadlines</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="next-week">Next Week</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
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

        <TabsContent value="incoming" className="mt-0">
          <Card className="border-none shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-6 py-4 font-medium text-sm">
                      <div className="flex items-center">
                        RFQ ID
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </th>
                    <th className="px-6 py-4 font-medium text-sm">Title & Details</th>
                    <th className="px-6 py-4 font-medium text-sm">Buyer</th>
                    <th className="px-6 py-4 font-medium text-sm">
                      <div className="flex items-center">
                        Deadline
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </th>
                    <th className="px-6 py-4 font-medium text-sm">Estimated Value</th>
                    <th className="px-6 py-4 font-medium text-sm">Status</th>
                    <th className="px-6 py-4 font-medium text-sm text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {rfqData.map((rfq, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{rfq.id}</td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium mb-1">{rfq.title}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>{rfq.product}</span>
                            <span className="mx-2">•</span>
                            <span>{rfq.quantity}</span>
                          </div>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {rfq.category}
                          </Badge>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p>{rfq.buyer}</p>
                          <p className="text-xs text-gray-500">{rfq.location}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                            <span className={
                              new Date(rfq.deadline) <= new Date(Date.now() + 86400000) // 24 hours
                              ? "text-red-600 font-medium"
                              : "text-gray-600"
                            }>
                              {rfq.deadline}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Received: {rfq.received}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1 text-gray-400" />
                          {rfq.estimatedValue}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className={rfq.statusColor}>
                          {rfq.status}
                        </Badge>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <Eye className="h-3 w-3 mr-1" />
                          <span>{rfq.views} views</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end">
                          {(rfq.status === "Expired") ? (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="sm" disabled className="text-gray-400">
                                    <Send size={14} className="mr-1" />
                                    Quote
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>RFQ deadline has passed</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ) : 
                          rfq.status === "Replied" ? (
                            <Button variant="ghost" size="sm">
                              <Eye size={14} className="mr-1" />
                              View Quote
                            </Button>
                          ) : (
                            <Button size="sm" className="bg-toreso-teal hover:bg-toreso-teal/90">
                              <Send size={14} className="mr-1" />
                              {rfq.status === "In Progress" ? "Complete" : "Send Quote"}
                            </Button>
                          )}
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="ml-2">
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye size={16} className="mr-2" /> View Details
                              </DropdownMenuItem>
                              {rfq.status !== "Replied" && rfq.status !== "Expired" && (
                                <DropdownMenuItem>
                                  <Mail size={16} className="mr-2" /> Request More Info
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-gray-500">
                                <XCircle size={16} className="mr-2" /> Decline RFQ
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CardFooter className="border-t bg-gray-50 px-6 py-3 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1-8 of 42 RFQs
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
        
        <TabsContent value="sent-quotes" className="mt-0">
          <Card className="border-none shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-6 py-4 font-medium text-sm">Quote ID</th>
                    <th className="px-6 py-4 font-medium text-sm">RFQ ID</th>
                    <th className="px-6 py-4 font-medium text-sm">Buyer & Product</th>
                    <th className="px-6 py-4 font-medium text-sm">Quote Amount</th>
                    <th className="px-6 py-4 font-medium text-sm">Sent Date</th>
                    <th className="px-6 py-4 font-medium text-sm">Valid Until</th>
                    <th className="px-6 py-4 font-medium text-sm">Status</th>
                    <th className="px-6 py-4 font-medium text-sm text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {sentQuotesData.map((quote, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{quote.id}</td>
                      <td className="px-6 py-4">{quote.rfqId}</td>
                      <td className="px-6 py-4">
                        <div>
                          <p>{quote.buyer}</p>
                          <p className="text-sm text-gray-500">{quote.product}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium">{quote.quoteAmount}</td>
                      <td className="px-6 py-4 text-gray-500">{quote.sentDate}</td>
                      <td className="px-6 py-4 text-gray-500">{quote.validUntil}</td>
                      <td className="px-6 py-4">
                        <Badge className={quote.statusColor}>
                          {quote.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm">
                            <Eye size={14} className="mr-1" />
                            View
                          </Button>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="ml-2">
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye size={16} className="mr-2" /> View RFQ
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail size={16} className="mr-2" /> Contact Buyer
                              </DropdownMenuItem>
                              {quote.status !== "Accepted" && quote.status !== "Rejected" && (
                                <>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Send size={16} className="mr-2" /> Revise Quote
                                  </DropdownMenuItem>
                                </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CardFooter className="border-t bg-gray-50 px-6 py-3 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1-4 of 26 quotes
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

        <TabsContent value="archived" className="mt-0">
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex justify-center items-center py-8">
                <div className="text-center">
                  <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">No archived RFQs</h3>
                  <p className="text-gray-500 mb-4">
                    Archived RFQs and quotes will appear here
                  </p>
                  <Button>View Archive Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* RFQ Tips & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Tips for Better RFQ Responses */}
        <Card className="bg-blue-50 border-blue-200 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-blue-800">Tips for Better RFQ Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <p className="text-blue-800">
                  <span className="font-medium">Respond quickly:</span> Buyers are 80% more likely to award contracts to suppliers who respond within 24 hours
                </p>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <p className="text-blue-800">
                  <span className="font-medium">Provide detailed pricing:</span> Break down costs to show transparency and value
                </p>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <p className="text-blue-800">
                  <span className="font-medium">Include alternatives:</span> Offer different pricing options based on quantity, delivery time, or materials
                </p>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <p className="text-blue-800">
                  <span className="font-medium">Highlight your strengths:</span> Emphasize quality certifications, quick delivery times, or customization options
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* RFQ Alerts */}
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
              <CardTitle className="text-amber-800">RFQ Alerts</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                <p className="text-amber-800">
                  <span className="font-medium">Urgent:</span> RFQ-472 from Mahindra Automotive requires your response by tomorrow
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                <p className="text-amber-800">
                  <span className="font-medium">New:</span> 2 new RFQs received in the last 24 hours need your attention
                </p>
              </li>
              <li className="flex items-start">
                <DollarSign className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                <p className="text-amber-800">
                  <span className="font-medium">High Value:</span> RFQ-465 has an estimated value of over ₹200,000
                </p>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="border-t border-amber-200 bg-amber-50/60">
            <Button variant="outline" className="w-full border-amber-300 text-amber-800 hover:bg-amber-100">
              View All Alerts
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent RFQ Activity */}
      <Card className="border-none shadow-md mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent RFQ Activity</CardTitle>
            <CardDescription>Latest updates to your RFQs and quotes</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="text-toreso-teal">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "Received New RFQ",
                details: "RFQ-472 received from Mahindra Automotive for Shipping Containers",
                time: "2 hours ago"
              },
              {
                action: "Quote Submitted",
                details: "Quote sent for RFQ-455 to Tata Motors for Sustainable Packaging Materials",
                time: "3 days ago"
              },
              {
                action: "Quote Under Negotiation",
                details: "Samsung India requested price revision for RFQ-450 (Anti-Static Bubble Wrap)",
                time: "5 days ago"
              },
              {
                action: "Quote Accepted",
                details: "Hyundai Motor India accepted quote for RFQ-438 (Packaging Tapes)",
                time: "10 days ago"
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <FileText size={20} className="text-toreso-teal" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rfq;
