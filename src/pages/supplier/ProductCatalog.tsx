import React, { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  ArrowUpDown,
  Trash2,
  Edit,
  Eye,
  MoreHorizontal,
  FileCheck,
  AlertCircle,
  Star,
  CheckCircle,
  Clock,
  ArrowDown,
  TrendingUp,
  TrendingDown,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductCatalog = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [category, setCategory] = useState("all");
  
  const productCategories = [
    "Corrugated Boxes", 
    "Bubble Wrap", 
    "Packaging Tapes", 
    "Pallets",
    "Protective Packaging",
    "Void Fill Solutions"
  ];

  const productData = [
    {
      id: "PRD-1001",
      name: "Heavy-Duty Corrugated Box (Large)",
      category: "Corrugated Boxes",
      description: "Industrial-grade corrugated box with triple wall construction for maximum protection of heavy items.",
      price: 150,
      moq: 500,
      stock: 2800,
      status: "Active",
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/1/SZ/AN/FP/40524380/product-jpeg-500x500.jpg",
      rating: 4.8,
      sales: {
        amount: 42000,
        trend: "up",
        percentage: 15
      }
    },
    {
      id: "PRD-1002",
      name: "Premium Bubble Wrap Roll (300ft)",
      category: "Bubble Wrap",
      description: "High-quality bubble wrap with large bubbles for maximum protection of fragile items.",
      price: 450,
      moq: 50,
      stock: 420,
      status: "Active",
      image: "https://5.imimg.com/data5/YN/PT/CP/ANDROID-27589775/product-jpeg-500x500.jpg",
      rating: 4.7,
      sales: {
        amount: 31500,
        trend: "up",
        percentage: 8
      }
    },
    {
      id: "PRD-1003",
      name: "Industrial Pallets (Standard)",
      category: "Pallets",
      description: "Heavy-duty plastic pallets designed for industrial use with 1200kg capacity.",
      price: 750,
      moq: 20,
      stock: 145,
      status: "Low Stock",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/9/ZO/CM/DU/42641397/plastic-pallet-500x500.jpg",
      rating: 4.5,
      sales: {
        amount: 29000,
        trend: "up",
        percentage: 12
      }
    },
    {
      id: "PRD-1004",
      name: "Custom Printed Boxes (Medium)",
      category: "Corrugated Boxes",
      description: "Medium-sized corrugated boxes with custom printing options for branding.",
      price: 85,
      moq: 1000,
      stock: 3500,
      status: "Active",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/7/SI/HK/OK/47776520/printed-corrugated-box-500x500.jpg",
      rating: 4.9,
      sales: {
        amount: 25000,
        trend: "up",
        percentage: 22
      }
    },
    {
      id: "PRD-1005",
      name: "Packaging Tape (Clear, 48mm)",
      category: "Packaging Tapes",
      description: "High-quality clear packaging tape, 48mm width, suitable for sealing boxes and packages.",
      price: 45,
      moq: 100,
      stock: 2100,
      status: "Active",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/3/YW/TD/SK/36477122/transparent-packaging-tape-500x500.jpg",
      rating: 4.6,
      sales: {
        amount: 21000,
        trend: "down",
        percentage: 2
      }
    },
    {
      id: "PRD-1006",
      name: "Air Pillows Cushioning",
      category: "Protective Packaging",
      description: "Air pillows for void fill and product protection during shipping.",
      price: 380,
      moq: 10,
      stock: 85,
      status: "Active",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/UO/BU/BZ/121686138/packair-air-pillows-make-machine-500x500.jpg",
      rating: 4.4,
      sales: {
        amount: 16500,
        trend: "up",
        percentage: 5
      }
    },
    {
      id: "PRD-1007",
      name: "Kraft Paper Sheets (100 GSM)",
      category: "Void Fill Solutions",
      description: "Eco-friendly kraft paper sheets for wrapping and void-filling in packages.",
      price: 8,
      moq: 5000,
      stock: 18000,
      status: "Active",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/FX/CO/BD/121686138/kraft-paper-500x500.jpg",
      rating: 4.8,
      sales: {
        amount: 14500,
        trend: "up",
        percentage: 3
      }
    },
    {
      id: "PRD-1008",
      name: "Shrink Wrap Film (Industrial)",
      category: "Protective Packaging",
      description: "Heavy-duty shrink wrap for industrial packaging and palletizing.",
      price: 550,
      moq: 25,
      stock: 78,
      status: "Low Stock",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/2/CZ/BV/CS/184569883/shrink-wrap-film-500x500.jpg",
      rating: 4.7,
      sales: {
        amount: 13800,
        trend: "down",
        percentage: 1
      }
    },
  ];

  const filteredProducts = productData.filter(product => {
    if (category === "all") return true;
    return product.category === category;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Product Catalog</h1>
          <p className="text-gray-500">
            Manage your product listings, pricing, and inventory
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <Button className="bg-toreso-teal hover:bg-toreso-teal/90">
            <Plus size={16} className="mr-2" /> Add New Product
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search 
              size={18} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            />
            <Input
              placeholder="Search products, SKUs, or descriptions..."
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setFilterOpen(!filterOpen)}
              className={filterOpen ? "bg-gray-100" : ""}
            >
              <Filter size={16} className="mr-2" />
              Filters
              {filterOpen ? (
                <ArrowDown size={16} className="ml-2" />
              ) : (
                <ArrowDown size={16} className="ml-2" />
              )}
            </Button>
            
            <Select defaultValue={viewMode} onValueChange={(value) => setViewMode(value as "grid" | "list")}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="View Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grid">Grid View</SelectItem>
                <SelectItem value="list">List View</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-md p-4 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <Select defaultValue="all" onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {productCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="low-stock">Low Stock</SelectItem>
                    <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                    <SelectItem value="discontinued">Discontinued</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="Min" className="w-full" />
                  <span>to</span>
                  <Input type="number" placeholder="Max" className="w-full" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort By
                </label>
                <Select defaultValue="newest">
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="bestselling">Best Selling</SelectItem>
                    <SelectItem value="rating">Highest Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Product Categories Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-4 overflow-x-auto flex-nowrap max-w-full">
          <TabsTrigger value="all">All Categories</TabsTrigger>
          {productCategories.map((cat) => (
            <TabsTrigger key={cat} value={cat.toLowerCase().replace(/\s+/g, "-")}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Product Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center" 
                  />
                  <div className="absolute top-2 right-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="bg-black/20 text-white hover:bg-black/30 h-8 w-8">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit size={16} className="mr-2" /> Edit Product
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Eye size={16} className="mr-2" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileCheck size={16} className="mr-2" /> Update Inventory
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">
                          <Trash2 size={16} className="mr-2" /> Delete Product
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Badge 
                    className={`absolute top-2 left-2 ${
                      product.status === "Low Stock" 
                        ? "bg-amber-100 text-amber-800" 
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {product.status}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
                  <Badge variant="outline" className="mb-2">
                    {product.category}
                  </Badge>
                  <p className="text-gray-500 text-sm line-clamp-2 h-10 mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{product.rating.toFixed(1)}</span>
                    </div>
                    <div className="flex items-center">
                      {product.sales.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span 
                        className={`text-xs font-medium ${
                          product.sales.trend === "up" ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {product.sales.trend === "up" ? "+" : "-"}{product.sales.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="font-bold text-lg">₹{product.price}</p>
                    <div className="text-xs text-gray-500">
                      MOQ: {product.moq} units
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full bg-toreso-teal hover:bg-toreso-teal/90">
                      Manage Product
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="rounded-md border mb-8">
          <div className="bg-gray-50 p-4 border-b grid grid-cols-12 gap-4 font-medium">
            <div className="col-span-5">Product</div>
            <div className="col-span-1 text-center">Price</div>
            <div className="col-span-1 text-center">MOQ</div>
            <div className="col-span-1 text-center">Stock</div>
            <div className="col-span-1 text-center">Status</div>
            <div className="col-span-2 text-center">Sales Trend</div>
            <div className="col-span-1 text-center">Actions</div>
          </div>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-b last:border-0 p-4 grid grid-cols-12 gap-4 items-center"
            >
              <div className="col-span-5 flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <Badge variant="outline" className="mr-2">
                      {product.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                      {product.rating.toFixed(1)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 text-center font-medium">
                ₹{product.price}
              </div>
              <div className="col-span-1 text-center text-gray-500">
                {product.moq}
              </div>
              <div className="col-span-1 text-center text-gray-500">
                {product.stock}
              </div>
              <div className="col-span-1 text-center">
                <Badge 
                  className={
                    product.status === "Low Stock" 
                      ? "bg-amber-100 text-amber-800" 
                      : "bg-green-100 text-green-800"
                  }
                >
                  {product.status}
                </Badge>
              </div>
              <div className="col-span-2 text-center">
                <div className="flex items-center justify-center">
                  {product.sales.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-2" />
                  )}
                  <span 
                    className={`text-sm font-medium ${
                      product.sales.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {product.sales.trend === "up" ? "+" : "-"}{product.sales.percentage}%
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  ₹{product.sales.amount.toLocaleString()} revenue
                </div>
              </div>
              <div className="col-span-1 text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit size={16} className="mr-2" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Eye size={16} className="mr-2" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileCheck size={16} className="mr-2" /> Update Stock
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500">
                      <Trash2 size={16} className="mr-2" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Product Stats Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Total Products</h3>
              <Package className="h-5 w-5 text-toreso-blue" />
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">{productData.length}</span>
              <span className="text-sm text-gray-500 ml-2">across {productCategories.length} categories</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Inventory Value</h3>
              <DollarSign className="h-5 w-5 text-toreso-green" />
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">₹3.2M</span>
              <div className="flex items-center ml-2 text-green-500">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+8% from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Low Stock Alert</h3>
              <AlertCircle className="h-5 w-5 text-amber-500" />
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-bold">2</span>
              <span className="text-sm text-gray-500 ml-2">products need attention</span>
            </div>
            <Button variant="outline" className="w-full mt-3 text-sm">
              View Low Stock Products
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Product Activities</CardTitle>
          <CardDescription>Latest updates to your product catalog</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "Price Updated",
                product: "Heavy-Duty Corrugated Box (Large)",
                details: "Price changed from ₹140 to ₹150",
                time: "30 minutes ago",
                icon: <Edit size={14} className="text-blue-500" />
              },
              {
                action: "Inventory Updated",
                product: "Industrial Pallets (Standard)",
                details: "Stock reduced from 165 to 145 units",
                time: "2 hours ago",
                icon: <FileCheck size={14} className="text-green-500" />
              },
              {
                action: "New Product Added",
                product: "Custom Printed Tape (Colored)",
                details: "Added to Packaging Tapes category",
                time: "Yesterday",
                icon: <Plus size={14} className="text-purple-500" />
              },
              {
                action: "Product Description Updated",
                product: "Air Pillows Cushioning",
                details: "Description and specifications updated",
                time: "3 days ago",
                icon: <Edit size={14} className="text-blue-500" />
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-0.5">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <p className="text-sm">{activity.product}</p>
                  <p className="text-xs text-gray-500">{activity.details}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCatalog;
