
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Building,
  Star,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  Users,
  Package,
  TrendingUp,
  ChevronDown,
  Filter,
  Box,
  PackageCheck,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

const Suppliers = () => {
  const [filterValue, setFilterValue] = useState("all");

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Supplier data based on India Mart
  const suppliers = [
    {
      id: 1,
      name: "Benz Packaging Solutions",
      logo: "https://3.imimg.com/data3/GW/KU/MY-3792183/benz-packaging-pvt-ltd-logo-120x120.jpg",
      specialty: "Protective Packaging Materials",
      rating: 4.8,
      reviews: 124,
      location: "Mumbai, Maharashtra",
      verified: true,
      since: "2008",
      description: "Manufacturer and supplier of high-quality protective packaging materials including bubble wrap, air cushions, and edge protectors.",
      responseTime: "< 24 hours",
      categories: ["protective-packaging", "void-fill-solutions"],
      certifications: ["ISO 9001", "FSC Certified"],
      topProducts: [
        { name: "Bubble Wrap Rolls", price: "₹350/roll" },
        { name: "Air Pillow Cushioning", price: "₹500/roll" },
        { name: "Edge Protectors", price: "₹450/pack" }
      ]
    },
    {
      id: 2,
      name: "EcoPack Industries",
      logo: "https://3.imimg.com/data3/WB/ER/MY-3792183/ecopack-120x120.jpg",
      specialty: "Corrugated Boxes & Sustainable Packaging",
      rating: 4.7,
      reviews: 89,
      location: "Gurugram, Haryana",
      verified: true,
      since: "2012",
      description: "Leading manufacturer of corrugated boxes, cartons, and eco-friendly packaging solutions for e-commerce and industrial use.",
      responseTime: "Same day",
      categories: ["corrugated-boxes", "sustainable-options"],
      certifications: ["ISO 14001", "FSC Certified"],
      topProducts: [
        { name: "Corrugated Boxes (5-ply)", price: "₹22/box" },
        { name: "E-commerce Mailers", price: "₹15/unit" },
        { name: "Kraft Paper Sheets", price: "₹160/roll" }
      ]
    },
    {
      id: 3,
      name: "SecurePack Ltd.",
      logo: "https://3.imimg.com/data3/YK/QL/MY-3792183/securepack-120x120.jpg",
      specialty: "Void Fill & Cushioning Solutions",
      rating: 4.6,
      reviews: 54,
      location: "Pune, Maharashtra",
      verified: true,
      since: "2015",
      description: "Specialists in void fill packaging materials and solutions for fragile product protection during shipping and handling.",
      responseTime: "< 48 hours",
      categories: ["void-fill-solutions", "protective-packaging"],
      certifications: ["ISO 9001"],
      topProducts: [
        { name: "Air Pillow Cushioning", price: "₹480/roll" },
        { name: "Biodegradable Packing Peanuts", price: "₹280/bag" },
        { name: "Foam Inserts (Custom)", price: "Quote based" }
      ]
    },
    {
      id: 4,
      name: "TechPack Solutions",
      logo: "https://3.imimg.com/data3/VB/TK/MY-3792183/techpack-120x120.jpg",
      specialty: "Packaging Machinery & Equipment",
      rating: 4.7,
      reviews: 23,
      location: "Bengaluru, Karnataka",
      verified: true,
      since: "2011",
      description: "Innovative packaging machinery provider offering solutions for businesses of all sizes, from startups to large enterprises.",
      responseTime: "1-2 days",
      categories: ["packaging-machines"],
      certifications: ["ISO 9001", "CE Certified"],
      topProducts: [
        { name: "Air Cushion Machine", price: "₹17,000/unit" },
        { name: "Stretch Film Dispenser", price: "₹700/unit" },
        { name: "Tape Dispenser (Industrial)", price: "₹1,200/unit" }
      ]
    },
    {
      id: 5,
      name: "GreenWrap Co.",
      logo: "https://3.imimg.com/data3/DQ/RP/MY-3792183/greenwrap-120x120.jpg",
      specialty: "Eco-Friendly Packaging",
      rating: 4.9,
      reviews: 112,
      location: "Chennai, Tamil Nadu",
      verified: true,
      since: "2014",
      description: "Dedicated to providing 100% sustainable and eco-friendly packaging alternatives for environmentally conscious businesses.",
      responseTime: "< 24 hours",
      categories: ["sustainable-options"],
      certifications: ["ISO 14001", "FSC Certified", "Plastic Neutral"],
      topProducts: [
        { name: "Kraft Paper Roll", price: "₹160/roll" },
        { name: "Biodegradable Mailers", price: "₹18/unit" },
        { name: "Paper Tape", price: "₹120/roll" }
      ]
    },
    {
      id: 6,
      name: "SafeCorner Industries",
      logo: "https://3.imimg.com/data3/LM/NP/MY-3792183/safecorner-120x120.jpg",
      specialty: "Protective Packaging & Edge Protection",
      rating: 4.6,
      reviews: 41,
      location: "Ahmedabad, Gujarat",
      verified: false,
      since: "2017",
      description: "Specialized in edge protectors and corner protection solutions for shipping and storage of fragile and heavy items.",
      responseTime: "1-2 days",
      categories: ["protective-packaging"],
      certifications: ["ISO 9001"],
      topProducts: [
        { name: "Edge Protectors", price: "₹420/pack" },
        { name: "Corner Protectors", price: "₹250/pack" },
        { name: "Pallet Edge Guards", price: "₹850/set" }
      ]
    },
    {
      id: 7,
      name: "WrapMaster Tools",
      logo: "https://3.imimg.com/data3/RT/JK/MY-3792183/wrapmaster-120x120.jpg",
      specialty: "Packaging Tools & Equipment",
      rating: 4.4,
      reviews: 35,
      location: "Delhi NCR",
      verified: true,
      since: "2016",
      description: "Provider of hand-tools and equipment to streamline packaging processes and improve efficiency in packaging operations.",
      responseTime: "Same day",
      categories: ["packaging-machines"],
      certifications: ["ISO 9001"],
      topProducts: [
        { name: "Stretch Film Dispenser", price: "₹700/unit" },
        { name: "Strapping Tool", price: "₹1,800/unit" },
        { name: "Box Sealing Applicator", price: "₹950/unit" }
      ]
    },
    {
      id: 8,
      name: "EcoFill Systems",
      logo: "https://3.imimg.com/data3/QT/KL/MY-3792183/ecofill-120x120.jpg",
      specialty: "Biodegradable Void Fill Solutions",
      rating: 4.5,
      reviews: 67,
      location: "Hyderabad, Telangana",
      verified: true,
      since: "2013",
      description: "Providing environmentally friendly void fill and cushioning materials for businesses committed to sustainable packaging practices.",
      responseTime: "< 48 hours",
      categories: ["void-fill-solutions", "sustainable-options"],
      certifications: ["ISO 14001", "Compostable Certified"],
      topProducts: [
        { name: "Biodegradable Packing Peanuts", price: "₹280/bag" },
        { name: "Corn Starch Loose Fill", price: "₹320/bag" },
        { name: "Paper Void Fill", price: "₹200/pack" }
      ]
    }
  ];

  // Filter categories
  const categories = [
    { label: "All Suppliers", value: "all" },
    { label: "Protective Packaging", value: "protective-packaging", icon: <PackageCheck size={16} /> },
    { label: "Corrugated Boxes", value: "corrugated-boxes", icon: <Box size={16} /> },
    { label: "Void Fill Solutions", value: "void-fill-solutions", icon: <Layers size={16} /> },
    { label: "Packaging Machines", value: "packaging-machines", icon: <Package size={16} /> },
    { label: "Sustainable Options", value: "sustainable-options", icon: <Shield size={16} /> }
  ];

  // Filter suppliers by category
  const filteredSuppliers = filterValue === "all" 
    ? suppliers 
    : suppliers.filter(supplier => supplier.categories.includes(filterValue));

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold mb-4">Packaging Material Suppliers</h1>
        <p className="text-gray-600 max-w-3xl">
          Connect with verified suppliers specializing in packaging materials, equipment, and solutions. 
          Build your supplier network to secure the best quality and pricing for your packaging needs.
        </p>
      </motion.div>

      {/* Search and filter section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search suppliers, locations, or specialties..." 
              className="pl-10"
            />
          </div>
          <Button className="md:w-auto flex items-center gap-2">
            <Filter size={16} />
            Advanced Filter
          </Button>
        </div>

        <Tabs defaultValue={filterValue} onValueChange={setFilterValue} className="w-full">
          <TabsList className="flex w-full overflow-x-auto py-1">
            {categories.map(category => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                className="flex-1 flex items-center justify-center"
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Featured supplier */}
      {filterValue === "all" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="relative h-48 bg-gradient-to-r from-toreso-blue to-blue-600">
              <div className="absolute inset-0 flex items-center justify-between p-6 md:p-10">
                <div className="text-white">
                  <Badge className="bg-white/20 text-white mb-3">Featured Supplier</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Benz Packaging Solutions</h2>
                  <p className="opacity-80 mb-4 max-w-lg">Premium protective packaging materials with nationwide delivery and volume-based pricing.</p>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                    <span className="ml-1 font-medium">4.8</span>
                    <span className="mx-2 text-white/60">|</span>
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    <span>Verified Supplier</span>
                    <span className="mx-2 text-white/60">|</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>&lt; 24hr response</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Button size="lg" className="bg-white text-toreso-blue hover:bg-blue-50">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-medium mb-2">Top Products</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="border border-gray-200">
                      <CardContent className="p-4">
                        <h4 className="font-medium">Bubble Wrap Rolls</h4>
                        <p className="text-sm text-gray-500">Premium quality, various sizes</p>
                        <p className="font-bold mt-2">₹350/roll</p>
                      </CardContent>
                    </Card>
                    <Card className="border border-gray-200">
                      <CardContent className="p-4">
                        <h4 className="font-medium">Air Pillow Cushioning</h4>
                        <p className="text-sm text-gray-500">Perfect void fill solution</p>
                        <p className="font-bold mt-2">₹500/roll</p>
                      </CardContent>
                    </Card>
                    <Card className="border border-gray-200">
                      <CardContent className="p-4">
                        <h4 className="font-medium">Edge Protectors</h4>
                        <p className="text-sm text-gray-500">Pack of 100 units</p>
                        <p className="font-bold mt-2">₹450/pack</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="md:w-1/3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium mb-2">Why Choose Benz Packaging</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>15+ years of industry experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Volume-based pricing with up to 25% discount</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Nationwide delivery within 2-3 business days</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>ISO 9001 certified manufacturing processes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 md:mt-0 flex justify-center md:justify-start">
                    <Button className="bg-toreso-blue mt-4 md:hidden">View Profile</Button>
                    <Button variant="outline" className="flex items-center mt-4 ml-0 md:ml-4">
                      <Package size={16} className="mr-2" />
                      Request Catalog
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Supplier listing */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredSuppliers.map(supplier => (
          <motion.div key={supplier.id} variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12 rounded-md">
                      <AvatarImage src={supplier.logo} alt={supplier.name} />
                      <AvatarFallback>{supplier.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg mb-1">{supplier.name}</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium ml-1">{supplier.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({supplier.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  {supplier.verified && (
                    <Badge variant="secondary" className="bg-green-50 text-green-700 flex items-center">
                      <CheckCircle2 size={12} className="mr-1" /> Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Specialty</p>
                    <p>{supplier.specialty}</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500">Location</p>
                      <div className="flex items-center">
                        <MapPin size={14} className="text-gray-500 mr-1" />
                        <span>{supplier.location}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Since</p>
                      <p>{supplier.since}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-500">Response Time</p>
                    <div className="flex items-center">
                      <Clock size={14} className="text-gray-500 mr-1" />
                      <span>{supplier.responseTime}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-500">Top Products</p>
                    <div className="space-y-1 mt-1">
                      {supplier.topProducts.map((product, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{product.name}</span>
                          <span className="font-medium">{product.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-500">Certifications</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {supplier.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <Button variant="outline">Request Quote</Button>
                <Button className="bg-toreso-blue">
                  View Profile <ArrowRight size={14} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredSuppliers.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <Building className="h-16 w-16 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium">No suppliers found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your filters or search terms</p>
        </div>
      )}
      
      {/* Why choose our suppliers section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Verified Suppliers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md">
            <CardHeader>
              <Shield className="h-10 w-10 text-toreso-blue p-2 bg-blue-50 rounded-lg" />
              <CardTitle className="mt-4">Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                All verified suppliers undergo rigorous quality checks and must maintain high standards for their products and services.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-green-600 p-2 bg-green-50 rounded-lg" />
              <CardTitle className="mt-4">Competitive Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access volume-based pricing and special discounts through our platform's consolidated purchasing power.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <Users className="h-10 w-10 text-purple-600 p-2 bg-purple-50 rounded-lg" />
              <CardTitle className="mt-4">Reliable Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our suppliers provide dedicated account management and responsive customer support for all your packaging needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Suppliers;
