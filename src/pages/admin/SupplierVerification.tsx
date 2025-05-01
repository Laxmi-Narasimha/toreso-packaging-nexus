import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Building,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  FileText,
  Download,
  Eye,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  ClipboardCheck,
  User,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const supplierVerifications = [
  {
    id: 1,
    companyName: "EcoPackage Solutions",
    logo: "https://ui-avatars.com/api/?name=EP&background=0D8ABC&color=fff",
    location: "Mumbai, India",
    submissionDate: "2024-04-15",
    status: "pending",
    completionPercent: 85,
    documentCount: 8,
    category: "Corrugated Packaging",
    contact: {
      name: "Raj Mehta",
      email: "raj.mehta@ecopackage.com",
      phone: "+91 98765 43210",
      website: "ecopackage.com"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "in_progress" },
      { name: "Environmental Compliance", status: "completed" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "in_progress" },
      { name: "Reference Check", status: "not_started" },
      { name: "Financial Review", status: "completed" },
    ]
  },
  {
    id: 2,
    companyName: "BoxCraft Ltd.",
    logo: "https://ui-avatars.com/api/?name=BC&background=5B21B6&color=fff",
    location: "Guangzhou, China",
    submissionDate: "2024-04-10",
    status: "in_review",
    completionPercent: 92,
    documentCount: 12,
    category: "Boxes & Cartons",
    contact: {
      name: "Lin Wei",
      email: "l.wei@boxcraft.cn",
      phone: "+86 123 4567 8901",
      website: "boxcraft.cn"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "completed" },
      { name: "Environmental Compliance", status: "completed" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "completed" },
      { name: "Reference Check", status: "in_progress" },
      { name: "Financial Review", status: "completed" },
    ]
  },
  {
    id: 3,
    companyName: "Premium Containers Ltd.",
    logo: "https://ui-avatars.com/api/?name=PC&background=B91C1C&color=fff",
    location: "London, UK",
    submissionDate: "2024-04-05",
    status: "approved",
    completionPercent: 100,
    documentCount: 14,
    category: "Premium Packaging",
    contact: {
      name: "Oliver Smith",
      email: "o.smith@premiumcontainers.co.uk",
      phone: "+44 20 7946 0892",
      website: "premiumcontainers.co.uk"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "completed" },
      { name: "Environmental Compliance", status: "completed" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "completed" },
      { name: "Reference Check", status: "completed" },
      { name: "Financial Review", status: "completed" },
    ]
  },
  {
    id: 4,
    companyName: "SafeWrap Packaging Co.",
    logo: "https://ui-avatars.com/api/?name=SW&background=D97706&color=fff",
    location: "Melbourne, Australia",
    submissionDate: "2024-03-28",
    status: "rejected",
    completionPercent: 65,
    documentCount: 7,
    category: "Protective Packaging",
    contact: {
      name: "Emma Thompson",
      email: "emma@safewrap.com.au",
      phone: "+61 3 9876 5432",
      website: "safewrap.com.au"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "rejected" },
      { name: "Quality Certifications", status: "in_progress" },
      { name: "Environmental Compliance", status: "not_started" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "rejected" },
      { name: "Reference Check", status: "not_started" },
      { name: "Financial Review", status: "in_progress" },
    ]
  },
  {
    id: 5,
    companyName: "GreenBox Packaging",
    logo: "https://ui-avatars.com/api/?name=GB&background=047857&color=fff",
    location: "Berlin, Germany",
    submissionDate: "2024-04-18",
    status: "pending",
    completionPercent: 72,
    documentCount: 9,
    category: "Sustainable Packaging",
    contact: {
      name: "Lukas Müller",
      email: "l.muller@greenbox.de",
      phone: "+49 30 1234567",
      website: "greenbox.de"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "completed" },
      { name: "Environmental Compliance", status: "in_progress" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "in_progress" },
      { name: "Reference Check", status: "not_started" },
      { name: "Financial Review", status: "in_progress" },
    ]
  },
  {
    id: 6,
    companyName: "Flex Packaging Solutions",
    logo: "https://ui-avatars.com/api/?name=FP&background=7C3AED&color=fff",
    location: "Toronto, Canada",
    submissionDate: "2024-03-30",
    status: "in_review",
    completionPercent: 95,
    documentCount: 11,
    category: "Flexible Packaging",
    contact: {
      name: "Sarah Johnson",
      email: "s.johnson@flexpackaging.ca",
      phone: "+1 416-555-7890",
      website: "flexpackaging.ca"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "completed" },
      { name: "Environmental Compliance", status: "completed" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "completed" },
      { name: "Reference Check", status: "in_progress" },
      { name: "Financial Review", status: "completed" },
    ]
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "bg-green-500 hover:bg-green-600";
    case "pending":
      return "bg-blue-500 hover:bg-blue-600";
    case "in_review":
      return "bg-purple-500 hover:bg-purple-600";
    case "rejected":
      return "bg-red-500 hover:bg-red-600";
    case "completed":
      return "bg-green-500 hover:bg-green-600";
    case "in_progress":
      return "bg-blue-500 hover:bg-blue-600";
    case "not_started":
      return "bg-gray-500 hover:bg-gray-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "approved":
      return <CheckCircle size={16} />;
    case "pending":
      return <Clock size={16} />;
    case "in_review":
      return <Eye size={16} />;
    case "rejected":
      return <XCircle size={16} />;
    case "completed":
      return <CheckCircle size={16} />;
    case "in_progress":
      return <Clock size={16} />;
    case "not_started":
      return <AlertCircle size={16} />;
    default:
      return null;
  }
};

const getStatusDisplayName = (status: string) => {
  return status
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const SupplierVerification = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState<number | null>(null);

  const filteredSuppliers = supplierVerifications.filter(supplier => {
    // Filter by search query
    const matchesSearch = supplier.companyName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         supplier.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by tab
    const matchesTab = activeTab === "all" || 
                       supplier.status === activeTab;
                       
    return matchesSearch && matchesTab;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex justify-between items-start flex-wrap gap-4"
      >
        <div>
          <h1 className="text-3xl font-display font-medium text-white mb-2">Supplier Verification</h1>
          <p className="text-white/70">Validate and approve supplier applications</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-blue-500/20 p-3 rounded-full mb-4">
                <Clock size={24} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-1">12</h3>
              <p className="text-white/70 text-center">Pending Verifications</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-purple-500/20 p-3 rounded-full mb-4">
                <Eye size={24} className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-1">5</h3>
              <p className="text-white/70 text-center">In Review</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-green-500/20 p-3 rounded-full mb-4">
                <CheckCircle size={24} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-1">145</h3>
              <p className="text-white/70 text-center">Approved Suppliers</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-red-500/20 p-3 rounded-full mb-4">
                <XCircle size={24} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-1">24</h3>
              <p className="text-white/70 text-center">Rejected Applications</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <TabsList className="bg-black/30 backdrop-blur border border-white/10">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                All Verifications
              </TabsTrigger>
              <TabsTrigger 
                value="pending"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Pending
              </TabsTrigger>
              <TabsTrigger 
                value="in_review"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                In Review
              </TabsTrigger>
              <TabsTrigger 
                value="approved"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Approved
              </TabsTrigger>
              <TabsTrigger 
                value="rejected"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Rejected
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input 
                  placeholder="Search suppliers..." 
                  className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 w-[280px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Filter size={16} className="mr-2" /> Filter
              </Button>
            </div>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-black/30 backdrop-blur border-white/10 text-white overflow-hidden">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-xl font-medium">
                      {filteredSuppliers.length} Supplier {filteredSuppliers.length === 1 ? "Verification" : "Verifications"}
                    </CardTitle>
                    <CardDescription className="text-white/50">
                      {activeTab === "all" ? "All supplier applications" : `${getStatusDisplayName(activeTab)} applications`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 py-4">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader className="bg-white/5">
                          <TableRow className="hover:bg-white/5 border-white/10">
                            <TableHead className="text-white">Company</TableHead>
                            <TableHead className="text-white">
                              <div className="flex items-center">
                                Location
                                <ArrowUpDown size={14} className="ml-1" />
                              </div>
                            </TableHead>
                            <TableHead className="text-white">
                              <div className="flex items-center">
                                Submission Date
                                <ArrowUpDown size={14} className="ml-1" />
                              </div>
                            </TableHead>
                            <TableHead className="text-white">Status</TableHead>
                            <TableHead className="text-white">Progress</TableHead>
                            <TableHead className="text-white text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredSuppliers.map((supplier) => (
                            <TableRow 
                              key={supplier.id} 
                              className={`hover:bg-white/5 border-white/10 cursor-pointer ${
                                selectedSupplier === supplier.id ? "bg-white/5" : ""
                              }`}
                              onClick={() => setSelectedSupplier(supplier.id)}
                            >
                              <TableCell>
                                <div className="flex items-center space-x-3">
                                  <Avatar>
                                    <AvatarImage src={supplier.logo} alt={supplier.companyName} />
                                    <AvatarFallback>{supplier.companyName.substring(0, 2)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{supplier.companyName}</p>
                                    <p className="text-xs text-white/60">{supplier.category}</p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <MapPin size={14} className="mr-1 text-white/60" />
                                  <span>{supplier.location}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <Calendar size={14} className="mr-1 text-white/60" />
                                  <span>{supplier.submissionDate}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(supplier.status)}>
                                  <div className="flex items-center space-x-1">
                                    {getStatusIcon(supplier.status)}
                                    <span>{getStatusDisplayName(supplier.status)}</span>
                                  </div>
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Progress 
                                    value={supplier.completionPercent} 
                                    className="h-2 w-16 bg-white/20"
                                    // Fix: Use className to style indicator
                                    className={cn(
                                      "h-2 w-16 bg-white/20",
                                      supplier.completionPercent > 90 ? "[&>div]:bg-green-500" :
                                      supplier.completionPercent > 70 ? "[&>div]:bg-blue-500" : 
                                      supplier.completionPercent > 40 ? "[&>div]:bg-yellow-500" : 
                                      "[&>div]:bg-red-500"
                                    )}
                                  />
                                  <span>{supplier.completionPercent}%</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0 text-white/70 hover:text-white hover:bg-white/10">
                                      <span className="sr-only">Open menu</span>
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="bg-black/90 backdrop-blur text-white border-white/10">
                                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                      <Eye size={14} className="mr-2" /> View Details
                                    </DropdownMenuItem>
                                    {supplier.status !== "approved" && supplier.status !== "rejected" && (
                                      <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                        <CheckCircle size={14} className="mr-2" /> Approve
                                      </DropdownMenuItem>
                                    )}
                                    {supplier.status !== "rejected" && (
                                      <DropdownMenuItem className="hover:bg-white/10 cursor-pointer text-red-400">
                                        <XCircle size={14} className="mr-2" /> Reject
                                      </DropdownMenuItem>
                                    )}
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                      <FileText size={14} className="mr-2" /> View Documents
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-1">
                {selectedSupplier ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {(() => {
                      const supplier = supplierVerifications.find(s => s.id === selectedSupplier);
                      if (!supplier) return null;
                      
                      return (
                        <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div className="flex items-center space-x-3">
                                <Avatar className="h-12 w-12">
                                  <AvatarImage src={supplier.logo} alt={supplier.companyName} />
                                  <AvatarFallback>{supplier.companyName.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <CardTitle>{supplier.companyName}</CardTitle>
                                  <CardDescription className="text-white/60">{supplier.category}</CardDescription>
                                </div>
                              </div>
                              <Badge className={getStatusColor(supplier.status)}>
                                {getStatusDisplayName(supplier.status)}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div>
                              <h4 className="text-sm font-medium text-white/70 mb-3">Company Information</h4>
                              <div className="space-y-3">
                                <div className="flex items-center">
                                  <MapPin size={16} className="mr-2 text-white/60" />
                                  <span>{supplier.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <Globe size={16} className="mr-2 text-white/60" />
                                  <a href={`https://${supplier.contact.website}`} className="text-toreso-blue hover:underline">
                                    {supplier.contact.website}
                                  </a>
                                </div>
                                <div className="flex items-center">
                                  <Calendar size={16} className="mr-2 text-white/60" />
                                  <span>Submitted: {supplier.submissionDate}</span>
                                </div>
                                <div className="flex items-center">
                                  <FileText size={16} className="mr-2 text-white/60" />
                                  <span>{supplier.documentCount} Documents</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-white/70 mb-3">Contact Person</h4>
                              <div className="space-y-3">
                                <div className="flex items-center">
                                  <User size={16} className="mr-2 text-white/60" />
                                  <span>{supplier.contact.name}</span>
                                </div>
                                <div className="flex items-center">
                                  <Mail size={16} className="mr-2 text-white/60" />
                                  <a href={`mailto:${supplier.contact.email}`} className="text-toreso-blue hover:underline">
                                    {supplier.contact.email}
                                  </a>
                                </div>
                                <div className="flex items-center">
                                  <Phone size={16} className="mr-2 text-white/60" />
                                  <span>{supplier.contact.phone}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-white/70 mb-3">Verification Progress</h4>
                              <div className="mb-4">
                                <div className="flex justify-between items-center mb-1">
                                  <span>Overall Progress</span>
                                  <span>{supplier.completionPercent}%</span>
                                </div>
                                <Progress 
                                  value={supplier.completionPercent} 
                                  className={cn(
                                    "h-2 bg-white/20",
                                    supplier.completionPercent > 90 ? "[&>div]:bg-green-500" :
                                    supplier.completionPercent > 70 ? "[&>div]:bg-blue-500" : 
                                    supplier.completionPercent > 40 ? "[&>div]:bg-yellow-500" : 
                                    "[&>div]:bg-red-500"
                                  )}
                                />
                              </div>
                              
                              <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="verification-steps" className="border-white/10">
                                  <AccordionTrigger className="text-sm">
                                    <span className="flex items-center">
                                      <ClipboardCheck size={16} className="mr-2" /> Verification Steps
                                    </span>
                                  </AccordionTrigger>
                                  <AccordionContent className="text-sm">
                                    <div className="space-y-3 pt-2">
                                      {supplier.verificationSteps.map((step, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                          <div className="flex items-center">
                                            <span className={`p-1 rounded-full mr-2 ${
                                              step.status === "completed" ? "bg-green-500/20" :
                                              step.status === "in_progress" ? "bg-blue-500/20" : 
                                              step.status === "rejected" ? "bg-red-500/20" :
                                              "bg-gray-500/20"
                                            }`}>
                                              {getStatusIcon(step.status)}
                                            </span>
                                            <span>{step.name}</span>
                                          </div>
                                          <Badge className={getStatusColor(step.status)}>
                                            {getStatusDisplayName(step.status)}
                                          </Badge>
                                        </div>
                                      ))}
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t border-white/10 pt-4">
                            {supplier.status === "pending" || supplier.status === "in_review" ? (
                              <>
                                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                  <FileText size={16} className="mr-2" /> View Documents
                                </Button>
                                <div className="space-x-2">
                                  <Button variant="destructive" size="sm" className="bg-red-500 hover:bg-red-600">
                                    <XCircle size={16} className="mr-1" /> Reject
                                  </Button>
                                  <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
                                    <CheckCircle size={16} className="mr-1" /> Approve
                                  </Button>
                                </div>
                              </>
                            ) : supplier.status === "approved" ? (
                              <>
                                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                  <FileText size={16} className="mr-2" /> View Documents
                                </Button>
                                <Button variant="default" className="bg-toreso-teal hover:bg-toreso-teal/90">
                                  <Download size={16} className="mr-2" /> Download Certificate
                                </Button>
                              </>
                            ) : (
                              <>
                                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                  <FileText size={16} className="mr-2" /> View Documents
                                </Button>
                                <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                                  <Clock size={16} className="mr-2" /> Reopen Case
                                </Button>
                              </>
                            )}
                          </CardFooter>
                        </Card>
                      );
                    })()}
                  </motion.div>
                ) : (
                  <Card className="bg-black/30 backdrop-blur border-white/10 text-white h-full flex items-center justify-center">
                    <CardContent className="p-12 text-center">
                      <Building size={48} className="mx-auto mb-4 text-white/30" />
                      <h3 className="text-lg font-medium mb-2">No Supplier Selected</h3>
                      <p className="text-white/60">Select a supplier from the list to view details</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default SupplierVerification;
