
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
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Plus, 
  Filter, 
  Search, 
  MoreHorizontal, 
  Edit, 
  Trash,
  Eye
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const productCategories = [
  "All Categories",
  "Corrugated Boxes",
  "Mailer Boxes",
  "Rigid Boxes",
  "Folding Cartons",
  "Shipping Boxes",
  "Protective Packaging",
  "Tapes & Adhesives",
  "Labels & Tags"
];

const products = [
  {
    id: 1,
    name: "Premium Corrugated Box",
    category: "Corrugated Boxes",
    supplier: "EcoPackage Solutions",
    material: "Recycled Corrugated",
    price: "$1.25 - $2.50",
    moq: "500",
    status: "Active",
    ecoCertified: true,
    image: "https://images.unsplash.com/photo-1607473128383-0cf6c96f0689?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Custom Printed Mailer",
    category: "Mailer Boxes",
    supplier: "BoxCraft Ltd.",
    material: "Kraft Paper",
    price: "$0.85 - $1.40",
    moq: "1000",
    status: "Active",
    ecoCertified: true,
    image: "https://images.unsplash.com/photo-1641978909561-271fcc479c60?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Luxury Rigid Gift Box",
    category: "Rigid Boxes",
    supplier: "Premium Containers Ltd.",
    material: "Rigid Paperboard",
    price: "$3.25 - $5.80",
    moq: "250",
    status: "Active",
    ecoCertified: false,
    image: "https://images.unsplash.com/photo-1605040742571-e9b.5f7a20cb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Eco Food Container",
    category: "Folding Cartons",
    supplier: "GreenBox Packaging",
    material: "Biodegradable Paperboard",
    price: "$0.65 - $1.10",
    moq: "2000",
    status: "Pending Review",
    ecoCertified: true,
    image: "https://images.unsplash.com/photo-1589365278144-09b150a90222?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Industrial Shipping Box",
    category: "Shipping Boxes",
    supplier: "TotalPack Solutions",
    material: "Heavy Duty Cardboard",
    price: "$2.40 - $4.20",
    moq: "100",
    status: "Active",
    ecoCertified: false,
    image: "https://images.unsplash.com/photo-1595079676601-f1adf5be5dee?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Bubble Wrap Roll",
    category: "Protective Packaging",
    supplier: "SafeWrap Packaging Co.",
    material: "Recyclable Plastic",
    price: "$18.50 - $24.99",
    moq: "50",
    status: "Active",
    ecoCertified: true,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Water Activated Kraft Tape",
    category: "Tapes & Adhesives",
    supplier: "Stick-It Solutions",
    material: "Natural Kraft",
    price: "$5.75 - $8.50",
    moq: "72",
    status: "Low Stock",
    ecoCertified: true,
    image: "https://images.unsplash.com/photo-1625505826533-5c80aca7d8d1?q=80&w=200&auto=format&fit=crop"
  },
];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.supplier.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
          <h1 className="text-3xl font-display font-medium text-white mb-2">Product Catalog</h1>
          <p className="text-white/70">Manage and monitor all packaging products across the platform</p>
        </div>
        <Button className="bg-toreso-blue hover:bg-toreso-blue/90 text-white border-0">
          <Plus size={16} className="mr-2" /> Add New Product
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3 space-y-6"
        >
          <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Categories</CardTitle>
              <CardDescription className="text-white/50">Filter by product type</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1.5 pt-0">
              <div className="space-y-1">
                {productCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Quick Filters</CardTitle>
              <CardDescription className="text-white/50">Apply common filters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                <Badge className="mr-2 bg-green-500 hover:bg-green-500">42</Badge>
                Eco-Certified
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                <Badge className="mr-2 bg-yellow-500 hover:bg-yellow-500">8</Badge>
                Pending Review
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                <Badge className="mr-2 bg-red-500 hover:bg-red-500">5</Badge>
                Low Stock
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                <Badge className="mr-2 bg-blue-500 hover:bg-blue-500">12</Badge>
                New Arrivals
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-9"
        >
          <Card className="bg-black/30 backdrop-blur border-white/10 text-white overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <CardTitle className="text-xl font-medium">
                  {selectedCategory} ({filteredProducts.length})
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                    <Input 
                      placeholder="Search products..." 
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 w-[200px] md:w-[300px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Filter size={16} className="mr-2" /> Filters
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0 py-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-white/5">
                    <TableRow className="hover:bg-white/5 border-white/10">
                      <TableHead className="w-[80px]"></TableHead>
                      <TableHead className="text-white">Product</TableHead>
                      <TableHead className="text-white">Category</TableHead>
                      <TableHead className="text-white">Supplier</TableHead>
                      <TableHead className="text-white">Price Range</TableHead>
                      <TableHead className="text-white">MOQ</TableHead>
                      <TableHead className="text-white">Status</TableHead>
                      <TableHead className="text-white text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((product) => (
                      <TableRow key={product.id} className="hover:bg-white/5 border-white/10">
                        <TableCell>
                          <div className="h-12 w-12 rounded overflow-hidden bg-white/10">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {product.name}
                          {product.ecoCertified && (
                            <Badge className="ml-2 bg-green-500 hover:bg-green-600">Eco</Badge>
                          )}
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.supplier}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.moq}</TableCell>
                        <TableCell>
                          <Badge className={`
                            ${product.status === 'Active' ? 'bg-green-500 hover:bg-green-600' : 
                              product.status === 'Pending Review' ? 'bg-yellow-500 hover:bg-yellow-600' : 
                              'bg-red-500 hover:bg-red-600'}
                          `}>
                            {product.status}
                          </Badge>
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
                                <Eye className="mr-2 h-4 w-4" /> View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                <Edit className="mr-2 h-4 w-4" /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-500 hover:bg-white/10 hover:text-red-400 cursor-pointer">
                                <Trash className="mr-2 h-4 w-4" /> Delete
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
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCatalog;
