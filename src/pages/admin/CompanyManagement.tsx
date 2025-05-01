
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
  Building, 
  Search, 
  MoreHorizontal, 
  Filter,
  Plus,
  Star,
  MapPin,
  Calendar,
  ArrowUpDown,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CompanyManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tabValue, setTabValue] = useState("all");
  
  // Sample data for companies
  const companies = [
    {
      id: 1,
      name: "EcoPackage Solutions",
      logo: "https://ui-avatars.com/api/?name=EP&background=0D8ABC&color=fff",
      type: "Supplier",
      category: "Corrugated Packaging",
      location: "Mumbai, India",
      joinDate: "Jan 15, 2023",
      verificationStatus: "Verified",
      complianceScore: 96,
      contactPerson: "Raj Mehta",
      contactEmail: "raj.mehta@ecopackage.com",
      contactPhone: "+91 98765 43210",
      featured: true
    },
    {
      id: 2,
      name: "BoxCraft Ltd.",
      logo: "https://ui-avatars.com/api/?name=BC&background=5B21B6&color=fff",
      type: "Supplier",
      category: "Boxes & Cartons",
      location: "Guangzhou, China",
      joinDate: "Mar 22, 2023",
      verificationStatus: "Pending",
      complianceScore: 78,
      contactPerson: "Lin Wei",
      contactEmail: "l.wei@boxcraft.cn",
      contactPhone: "+86 123 4567 8901",
      featured: false
    },
    {
      id: 3,
      name: "Global Foods Inc.",
      logo: "https://ui-avatars.com/api/?name=GF&background=047857&color=fff",
      type: "Buyer",
      category: "Food & Beverage",
      location: "Chicago, USA",
      joinDate: "Feb 08, 2023",
      verificationStatus: "Verified",
      complianceScore: 100,
      contactPerson: "Jessica Miller",
      contactEmail: "j.miller@globalfoods.com",
      contactPhone: "+1 312 555 7890",
      featured: true
    },
    {
      id: 4,
      name: "Premium Containers Ltd.",
      logo: "https://ui-avatars.com/api/?name=PC&background=B91C1C&color=fff",
      type: "Supplier",
      category: "Premium Packaging",
      location: "London, UK",
      joinDate: "Apr 05, 2023",
      verificationStatus: "Verified",
      complianceScore: 92,
      contactPerson: "Oliver Smith",
      contactEmail: "o.smith@premiumcontainers.co.uk",
      contactPhone: "+44 20 7946 0892",
      featured: true
    },
    {
      id: 5,
      name: "TechElectronics Corp",
      logo: "https://ui-avatars.com/api/?name=TE&background=374151&color=fff",
      type: "Buyer",
      category: "Electronics",
      location: "Seoul, South Korea",
      joinDate: "May 12, 2023",
      verificationStatus: "Verified",
      complianceScore: 88,
      contactPerson: "Ji-hoon Park",
      contactEmail: "jhpark@techelectronics.kr",
      contactPhone: "+82 2 1234 5678",
      featured: false
    },
    {
      id: 6,
      name: "SafeWrap Packaging Co.",
      logo: "https://ui-avatars.com/api/?name=SW&background=D97706&color=fff",
      type: "Supplier",
      category: "Protective Packaging",
      location: "Melbourne, Australia",
      joinDate: "Jun 30, 2023",
      verificationStatus: "Under Review",
      complianceScore: 65,
      contactPerson: "Emma Thompson",
      contactEmail: "emma@safewrap.com.au",
      contactPhone: "+61 3 9876 5432",
      featured: false
    },
    {
      id: 7,
      name: "Cosmetics World",
      logo: "https://ui-avatars.com/api/?name=CW&background=DB2777&color=fff",
      type: "Buyer",
      category: "Cosmetics",
      location: "Paris, France",
      joinDate: "Mar 18, 2023",
      verificationStatus: "Verified",
      complianceScore: 94,
      contactPerson: "Sophie Laurent",
      contactEmail: "s.laurent@cosmeticsworld.fr",
      contactPhone: "+33 1 23 45 67 89",
      featured: true
    },
  ];

  // Filter companies based on search and tab
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         company.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = tabValue === "all" || 
                       (tabValue === "suppliers" && company.type === "Supplier") ||
                       (tabValue === "buyers" && company.type === "Buyer") ||
                       (tabValue === "featured" && company.featured) ||
                       (tabValue === "pending" && company.verificationStatus === "Pending");
                       
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
          <h1 className="text-3xl font-display font-medium text-white mb-2">Company Management</h1>
          <p className="text-white/70">Manage and monitor suppliers and buyers on the platform</p>
        </div>
        <Button className="bg-toreso-blue hover:bg-toreso-blue/90 text-white border-0">
          <Plus size={16} className="mr-2" /> Add Company
        </Button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Tabs defaultValue="all" value={tabValue} onValueChange={setTabValue} className="w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <TabsList className="bg-black/30 backdrop-blur border border-white/10">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                All Companies
              </TabsTrigger>
              <TabsTrigger 
                value="suppliers"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Suppliers
              </TabsTrigger>
              <TabsTrigger 
                value="buyers"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Buyers
              </TabsTrigger>
              <TabsTrigger 
                value="featured"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger 
                value="pending"
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
              >
                Pending
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input 
                  placeholder="Search companies..." 
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

          <TabsContent value="all" className="mt-0">
            <Card className="bg-black/30 backdrop-blur border-white/10 text-white overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle className="text-xl font-medium">
                  {filteredCompanies.length} Companies
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 py-4">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-white/5">
                      <TableRow className="hover:bg-white/5 border-white/10">
                        <TableHead className="text-white">Company</TableHead>
                        <TableHead className="text-white">Type</TableHead>
                        <TableHead className="text-white">
                          <div className="flex items-center">
                            Location
                            <ArrowUpDown size={14} className="ml-1" />
                          </div>
                        </TableHead>
                        <TableHead className="text-white">
                          <div className="flex items-center">
                            Join Date
                            <ArrowUpDown size={14} className="ml-1" />
                          </div>
                        </TableHead>
                        <TableHead className="text-white">Status</TableHead>
                        <TableHead className="text-white">Compliance</TableHead>
                        <TableHead className="text-white text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCompanies.map((company) => (
                        <TableRow key={company.id} className="hover:bg-white/5 border-white/10">
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <Avatar>
                                <AvatarImage src={company.logo} alt={company.name} />
                                <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">
                                  {company.name}
                                  {company.featured && (
                                    <Star size={14} className="inline-block ml-2 text-yellow-400" />
                                  )}
                                </p>
                                <p className="text-xs text-white/60">{company.category}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`
                              ${company.type === 'Supplier' ? 'bg-toreso-blue hover:bg-toreso-blue' : 
                                'bg-toreso-purple hover:bg-toreso-purple'}
                            `}>
                              {company.type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1 text-white/60" />
                              <span>{company.location}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1 text-white/60" />
                              <span>{company.joinDate}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`
                              ${company.verificationStatus === 'Verified' ? 'bg-green-500 hover:bg-green-600' : 
                                company.verificationStatus === 'Pending' ? 'bg-yellow-500 hover:bg-yellow-600' : 
                                'bg-orange-500 hover:bg-orange-600'}
                            `}>
                              {company.verificationStatus === 'Verified' && <CheckCircle size={12} className="mr-1" />}
                              {company.verificationStatus === 'Pending' && <AlertCircle size={12} className="mr-1" />}
                              {company.verificationStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress 
                                value={company.complianceScore} 
                                className="h-2 w-16 bg-white/20" 
                                indicatorClassName={
                                  company.complianceScore > 90 ? "bg-green-500" :
                                  company.complianceScore > 75 ? "bg-yellow-500" : "bg-red-500"
                                }
                              />
                              <span>{company.complianceScore}%</span>
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
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                  Edit Company
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                  View Compliance
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                  Manage Products
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
          </TabsContent>
          
          <TabsContent value="suppliers" className="mt-0">
            {/* This content will be shown when Suppliers tab is active */}
            {/* We're using the same filtering logic in our code above */}
          </TabsContent>
          
          <TabsContent value="buyers" className="mt-0">
            {/* This content will be shown when Buyers tab is active */}
            {/* We're using the same filtering logic in our code above */}
          </TabsContent>
          
          <TabsContent value="featured" className="mt-0">
            {/* This content will be shown when Featured tab is active */}
            {/* We're using the same filtering logic in our code above */}
          </TabsContent>

          <TabsContent value="pending" className="mt-0">
            {/* This content will be shown when Pending tab is active */}
            {/* We're using the same filtering logic in our code above */}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default CompanyManagement;
