
import React, { useState } from "react";
import { 
  Building, 
  Search, 
  MapPin, 
  Filter, 
  Star, 
  FileText, 
  Package, 
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// Sample data for suppliers
const suppliersList = [
  {
    id: 1,
    name: "EcoBox Solutions",
    logo: "https://images.unsplash.com/photo-1621905252471-92f545e8cd89?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    location: "Mumbai, Maharashtra",
    description: "Leading manufacturer of eco-friendly corrugated packaging solutions",
    rating: 4.8,
    reviews: 245,
    categories: ["Corrugated Boxes", "Protective Packaging", "Custom Solutions"],
    certifications: ["ISO 9001", "FSC Certified", "ISO 14001"],
    establishedYear: 2005,
    featured: true,
    preferred: true,
    distance: "15 km from your Navi Mumbai plant",
    minOrderValue: 10000,
  },
  {
    id: 2,
    name: "PaperCraft Co.",
    logo: "https://images.unsplash.com/photo-1607354175781-c9496388dc8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    location: "Pune, Maharashtra",
    description: "Specialized in paper-based packaging materials and solutions",
    rating: 4.6,
    reviews: 182,
    categories: ["Paper Bags", "Kraft Paper", "Tissue Paper"],
    certifications: ["ISO 9001", "FSC Certified"],
    establishedYear: 2008,
    featured: false,
    preferred: true,
    distance: "8 km from your Pune plant",
    minOrderValue: 5000,
  },
  {
    id: 3,
    name: "SafeWrap Inc.",
    logo: "https://images.unsplash.com/photo-1606607291535-b0adfbf7424f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    location: "Delhi, NCR",
    description: "Premium protective packaging solutions for fragile items",
    rating: 4.5,
    reviews: 136,
    categories: ["Bubble Wrap", "Air Pillows", "Foam Solutions"],
    certifications: ["ISO 9001"],
    establishedYear: 2012,
    featured: false,
    preferred: false,
    distance: "22 km from your Gurgaon plant",
    minOrderValue: 8000,
  },
  {
    id: 4,
    name: "SecurePack Ltd.",
    logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    location: "Chennai, Tamil Nadu",
    description: "Specializing in secure packaging solutions for various industries",
    rating: 4.7,
    reviews: 201,
    categories: ["Security Packaging", "Tamper-evident Solutions", "Packaging Tapes"],
    certifications: ["ISO 9001", "ISO 27001"],
    establishedYear: 2010,
    featured: true,
    preferred: false,
    distance: "5 km from your Chennai plant",
    minOrderValue: 7500,
  },
  {
    id: 5,
    name: "GreenPack",
    logo: "https://images.unsplash.com/photo-1610575828349-43f195e95452?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    location: "Bengaluru, Karnataka",
    description: "Sustainable and biodegradable packaging solutions",
    rating: 4.9,
    reviews: 172,
    categories: ["Biodegradable Packaging", "Plant-based Solutions", "Compostable Products"],
    certifications: ["ISO 14001", "FSC Certified", "Compostable Certified"],
    establishedYear: 2015,
    featured: true,
    preferred: true,
    distance: "12 km from your Bengaluru plant",
    minOrderValue: 5000,
  },
  {
    id: 6,
    name: "BrandBox Solutions",
    logo: "https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    location: "Ahmedabad, Gujarat",
    description: "Custom branded packaging solutions for businesses of all sizes",
    rating: 4.8,
    reviews: 156,
    categories: ["Custom Printed Boxes", "Retail Packaging", "Brand Solutions"],
    certifications: ["ISO 9001", "Sedex"],
    establishedYear: 2011,
    featured: false,
    preferred: false,
    distance: "18 km from your Vadodara plant",
    minOrderValue: 15000,
  },
];

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [certificationFilter, setCertificationFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [filterPreferred, setFilterPreferred] = useState(false);

  // Filter suppliers based on search and filters
  const filteredSuppliers = suppliersList.filter(supplier => {
    // Search filter
    if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !supplier.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !supplier.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (categoryFilter !== "all" && !supplier.categories.includes(categoryFilter)) {
      return false;
    }
    
    // Certification filter
    if (certificationFilter !== "all" && !supplier.certifications.includes(certificationFilter)) {
      return false;
    }
    
    // Location filter
    if (locationFilter !== "all" && !supplier.location.includes(locationFilter)) {
      return false;
    }
    
    // Preferred supplier filter
    if (filterPreferred && !supplier.preferred) {
      return false;
    }
    
    return true;
  });

  // Get unique categories
  const allCategories = Array.from(new Set(suppliersList.flatMap(s => s.categories)));
  
  // Get unique certifications
  const allCertifications = Array.from(new Set(suppliersList.flatMap(s => s.certifications)));
  
  // Get unique locations
  const allLocations = Array.from(new Set(suppliersList.map(s => s.location.split(',')[0].trim())));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <div className="w-full h-80 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-10 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 flex flex-col justify-center p-10 max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Find Trusted Packaging Partners
          </motion.h1>
          <motion.p 
            className="text-xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect with verified suppliers that meet your quality standards and volume requirements
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                className="w-full bg-white border-0 rounded-full py-3 pl-12 pr-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-toreso-blue"
                placeholder="Search suppliers by name, location, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <motion.div 
          className="w-full md:w-64 flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-lg flex items-center mb-4">
              <Filter size={18} className="mr-2" /> Filters
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Category</h4>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {allCategories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Certifications</h4>
                <Select value={certificationFilter} onValueChange={setCertificationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by certification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Certifications</SelectItem>
                    {allCertifications.map(cert => (
                      <SelectItem key={cert} value={cert}>{cert}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Location</h4>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {allLocations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="preferred-suppliers"
                  checked={filterPreferred}
                  onChange={() => setFilterPreferred(!filterPreferred)}
                  className="h-4 w-4 rounded border-gray-300 text-toreso-blue focus:ring-toreso-blue"
                />
                <label htmlFor="preferred-suppliers" className="text-sm font-medium text-gray-700">
                  Preferred suppliers only
                </label>
              </div>
              
              <Button className="w-full" variant="outline">
                Clear Filters
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="font-bold text-lg flex items-center mb-4">
              <FileText size={18} className="mr-2" /> Need Help?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Our supplier management team can help you find the right partners for your specific needs.
            </p>
            <Button className="w-full">Contact Support</Button>
          </div>
        </motion.div>
        
        {/* Suppliers list */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold text-2xl">Verified Suppliers</h2>
                <p className="text-gray-500">{filteredSuppliers.length} suppliers found</p>
              </div>
              
              <Select defaultValue="rating">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                  <SelectItem value="reviews">Sort by Review Count</SelectItem>
                  <SelectItem value="az">Sort A-Z</SelectItem>
                  <SelectItem value="za">Sort Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredSuppliers.length > 0 ? (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              {filteredSuppliers.map(supplier => (
                <motion.div key={supplier.id} variants={item}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-64 flex-shrink-0 p-6 flex flex-col items-center text-center border-b md:border-b-0 md:border-r">
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                            <img 
                              src={supplier.logo} 
                              alt={supplier.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-lg mb-1">{supplier.name}</h3>
                          <div className="flex items-center justify-center mb-2">
                            <div className="flex items-center text-amber-500 mr-1">
                              <Star size={16} fill="currentColor" />
                            </div>
                            <span className="font-medium">{supplier.rating}</span>
                            <span className="text-gray-500 text-sm ml-1">({supplier.reviews} reviews)</span>
                          </div>
                          
                          <div className="flex items-center text-gray-500 text-xs">
                            <MapPin size={12} className="mr-1" />
                            {supplier.location}
                          </div>
                          
                          <div className="flex space-x-1 mt-3">
                            {supplier.featured && (
                              <Badge className="bg-toreso-blue">Featured</Badge>
                            )}
                            {supplier.preferred && (
                              <Badge className="bg-green-600">Preferred</Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex-1 p-6">
                          <div className="mb-4">
                            <p className="text-gray-600 mb-3">{supplier.description}</p>
                            <div className="text-sm flex items-center mb-2">
                              <Building size={14} className="mr-1 text-gray-400" />
                              <span className="text-gray-500">Established {supplier.establishedYear}</span>
                              <span className="mx-2">•</span>
                              <span className="text-gray-500">Min. order: ₹{supplier.minOrderValue}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1 text-gray-400" />
                              <span className="text-sm text-toreso-blue">{supplier.distance}</span>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-medium mb-2">Categories</h4>
                            <div className="flex flex-wrap gap-2">
                              {supplier.categories.map(category => (
                                <Badge key={category} variant="secondary">
                                  {category}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium mb-2">Certifications</h4>
                            <div className="flex flex-wrap gap-2">
                              {supplier.certifications.map(cert => (
                                <Badge key={cert} variant="outline" className="flex items-center">
                                  <CheckCircle size={12} className="mr-1 text-green-500" />
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex mt-6 space-x-3">
                            <Button>View Profile</Button>
                            <Button variant="outline">Request Quote</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-10 text-center">
              <Building size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">No suppliers found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setCertificationFilter("all");
                setLocationFilter("all");
                setFilterPreferred(false);
              }}>Clear all filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
