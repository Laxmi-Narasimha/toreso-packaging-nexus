
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star,
  Heart,
  Image,
  Box,
  PackageCheck,
  Layers,
  Package,
  Check,
  ChevronDown,
  ArrowUpDown,
  Grid2X2,
  LayoutList
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const ProductCatalog = () => {
  // State management
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortOption, setSortOption] = useState("popular");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Product data from India Mart website
  const products = [
    {
      id: 1,
      name: "Bubble Wrap Roll",
      description: "Premium quality bubble wrap for cushioning and protection. Multiple sizes available.",
      image: "https://5.imimg.com/data5/YN/PT/CP/ANDROID-27589775/product-jpeg-500x500.jpg",
      price: 350,
      discountPrice: 320,
      rating: 4.8,
      reviews: 126,
      supplier: "Benz Packaging Solutions",
      category: "protective-packaging",
      tags: ["bubble wrap", "protective", "shipping"],
      inStock: true,
      features: ["Air-filled bubbles", "Lightweight", "Excellent cushioning", "Moisture resistant"],
      minOrder: 10,
      bulkPricing: [
        { quantity: 20, price: 310 },
        { quantity: 50, price: 290 },
        { quantity: 100, price: 270 }
      ]
    },
    {
      id: 2,
      name: "Corrugated Boxes (5-ply)",
      description: "Strong and durable corrugated shipping boxes. Available in multiple sizes.",
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/1/SZ/AN/FP/40524380/product-jpeg-500x500.jpg",
      price: 25,
      discountPrice: 22,
      rating: 4.7,
      reviews: 89,
      supplier: "EcoPack Industries",
      category: "corrugated-boxes",
      tags: ["box", "shipping", "corrugated"],
      inStock: true,
      features: ["5-ply strength", "Stackable", "Customizable sizes", "Eco-friendly material"],
      minOrder: 50,
      bulkPricing: [
        { quantity: 100, price: 20 },
        { quantity: 500, price: 18 },
        { quantity: 1000, price: 15 }
      ]
    },
    {
      id: 3,
      name: "Air Pillow Cushioning Roll",
      description: "On-demand air pillows perfect for void fill and product protection during shipping.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/UO/BU/BZ/121686138/packair-air-pillows-make-machine-500x500.jpg",
      price: 500,
      discountPrice: 480,
      rating: 4.6,
      reviews: 54,
      supplier: "SecurePack Ltd.",
      category: "protective-packaging",
      tags: ["air pillow", "void fill", "protection"],
      inStock: true,
      features: ["Space-saving storage", "Fast inflation", "Lightweight", "Effective void fill"],
      minOrder: 5,
      bulkPricing: [
        { quantity: 10, price: 450 },
        { quantity: 20, price: 420 },
        { quantity: 50, price: 400 }
      ]
    },
    {
      id: 4,
      name: "Kraft Paper Roll",
      description: "Eco-friendly kraft paper for wrapping, void fill, and product protection.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/FX/CO/BD/121686138/kraft-paper-500x500.jpg",
      price: 180,
      discountPrice: 160,
      rating: 4.9,
      reviews: 112,
      supplier: "GreenWrap Co.",
      category: "sustainable-options",
      tags: ["kraft", "paper", "eco-friendly", "wrapping"],
      inStock: true,
      features: ["100% recyclable", "Biodegradable", "Tear resistant", "Customizable width"],
      minOrder: 5,
      bulkPricing: [
        { quantity: 10, price: 150 },
        { quantity: 20, price: 140 },
        { quantity: 50, price: 130 }
      ]
    },
    {
      id: 5,
      name: "Inflatable Air Cushion Machine",
      description: "Compact machine for producing air cushions on-demand for packaging needs.",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/3/RQ/LG/EU/2583904/air-cushion-machine-500x500.jpg",
      price: 18500,
      discountPrice: 17000,
      rating: 4.7,
      reviews: 23,
      supplier: "TechPack Solutions",
      category: "packaging-machines",
      tags: ["machine", "air cushion", "equipment"],
      inStock: false,
      features: ["Compact design", "High output", "Low maintenance", "Energy efficient"],
      minOrder: 1,
      bulkPricing: [
        { quantity: 2, price: 16500 },
        { quantity: 5, price: 16000 }
      ]
    },
    {
      id: 6,
      name: "Biodegradable Packing Peanuts",
      description: "Eco-friendly starch-based packing peanuts that dissolve in water.",
      image: "https://5.imimg.com/data5/GJ/WW/MY-1610193/thermocol-packaging-peanut-500x500.jpg",
      price: 300,
      discountPrice: 280,
      rating: 4.5,
      reviews: 67,
      supplier: "EcoFill Systems",
      category: "void-fill-solutions",
      tags: ["biodegradable", "peanuts", "void fill", "eco-friendly"],
      inStock: true,
      features: ["Water soluble", "Static-free", "Lightweight", "Biodegradable"],
      minOrder: 5,
      bulkPricing: [
        { quantity: 10, price: 260 },
        { quantity: 20, price: 240 },
        { quantity: 50, price: 220 }
      ]
    },
    {
      id: 7,
      name: "Edge Protectors (Package of 100)",
      description: "Cardboard edge protectors for securing corners and edges during shipping.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/4/301497248/TV/GW/HF/5487580/cardboard-edge-protector-500x500.jpg",
      price: 450,
      discountPrice: 420,
      rating: 4.6,
      reviews: 41,
      supplier: "SafeCorner Industries",
      category: "protective-packaging",
      tags: ["edge protector", "corner", "protection"],
      inStock: true,
      features: ["High compression resistance", "Recyclable", "Customizable length", "Easy to apply"],
      minOrder: 2,
      bulkPricing: [
        { quantity: 5, price: 400 },
        { quantity: 10, price: 380 },
        { quantity: 20, price: 350 }
      ]
    },
    {
      id: 8,
      name: "Stretch Film Dispenser",
      description: "Handheld dispenser for easy application of stretch film around packages.",
      image: "https://5.imimg.com/data5/YO/QR/TO/SELLER-4943311/hand-stretch-film-dispenser-500x500.jpg",
      price: 750,
      discountPrice: 700,
      rating: 4.4,
      reviews: 35,
      supplier: "WrapMaster Tools",
      category: "packaging-machines",
      tags: ["dispenser", "stretch film", "tool"],
      inStock: true,
      features: ["Ergonomic handle", "Adjustable tension", "Durable construction", "Portable"],
      minOrder: 1,
      bulkPricing: [
        { quantity: 3, price: 670 },
        { quantity: 5, price: 650 },
        { quantity: 10, price: 620 }
      ]
    }
  ];

  // Categories from India Mart
  const categories = [
    { name: "All Products", value: "all", icon: <Package size={20} /> },
    { name: "Protective Packaging", value: "protective-packaging", icon: <PackageCheck size={20} /> },
    { name: "Corrugated Boxes", value: "corrugated-boxes", icon: <Box size={20} /> },
    { name: "Void Fill Solutions", value: "void-fill-solutions", icon: <Layers size={20} /> },
    { name: "Packaging Machines", value: "packaging-machines", icon: <Package size={20} /> },
    { name: "Sustainable Options", value: "sustainable-options", icon: <Package size={20} /> }
  ];

  // Filter products based on category
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold mb-3">Packaging Materials Catalog</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover high-quality packaging solutions for your business needs. We offer a wide range of protective packaging, shipping supplies, and eco-friendly alternatives.
        </p>
      </motion.div>

      {/* Search and filter section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text"
              placeholder="Search for packaging materials..."
              className="pl-10"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  Filters
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="px-2">
                      <Slider 
                        defaultValue={[0, 10000]}
                        min={0}
                        max={20000}
                        step={100}
                        onValueChange={(value) => setPriceRange(value as number[])}
                      />
                      <div className="flex justify-between mt-2 text-sm">
                        <span>₹{priceRange[0]}</span>
                        <span>₹{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Availability</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="in-stock" />
                        <label htmlFor="in-stock" className="text-sm">In Stock</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="out-of-stock" />
                        <label htmlFor="out-of-stock" className="text-sm">Out of Stock</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Supplier Rating</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rating-4.5" />
                        <label htmlFor="rating-4.5" className="flex items-center text-sm">
                          <span className="mr-1">4.5+</span>
                          <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rating-4.0" />
                        <label htmlFor="rating-4.0" className="flex items-center text-sm">
                          <span className="mr-1">4.0+</span>
                          <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rating-3.5" />
                        <label htmlFor="rating-3.5" className="flex items-center text-sm">
                          <span className="mr-1">3.5+</span>
                          <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-2">
                    <Button variant="outline" size="sm">Reset</Button>
                    <Button size="sm">Apply Filters</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Select defaultValue={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[160px]">
                <div className="flex items-center">
                  <ArrowUpDown size={14} className="mr-2" />
                  <SelectValue placeholder="Sort By" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="flex border rounded-md">
              <Button 
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                className="rounded-none rounded-l-md"
                onClick={() => setViewMode("grid")}
              >
                <Grid2X2 size={18} />
              </Button>
              <Button 
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                className="rounded-none rounded-r-md"
                onClick={() => setViewMode("list")}
              >
                <LayoutList size={18} />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="w-full overflow-auto">
          <TabsList className="mb-8 flex w-full overflow-x-auto py-2">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                className="flex items-center px-4 py-2"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Product listings */}
      <div className={`
        ${viewMode === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
          : "space-y-6"}
      `}>
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="h-full"
          >
            {viewMode === "grid" ? (
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg border-none shadow-md">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-medium">Out of Stock</span>
                    </div>
                  )}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-700 rounded-full"
                  >
                    <Heart size={18} />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant="outline" className="text-xs font-normal">
                      {categories.find(c => c.value === product.category)?.name}
                    </Badge>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-medium ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-base mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-baseline mb-3">
                    <span className="font-bold text-lg">₹{product.discountPrice}</span>
                    {product.discountPrice < product.price && (
                      <span className="text-sm text-gray-500 line-through ml-2">₹{product.price}</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mb-3">Min order: {product.minOrder} {product.minOrder > 1 ? 'units' : 'unit'}</div>
                  <Button className="w-full bg-toreso-blue" disabled={!product.inStock}>
                    {product.inStock ? (
                      <><ShoppingCart size={16} className="mr-2" /> Add to Cart</>
                    ) : (
                      "Notify When Available"
                    )}
                  </Button>
                </CardContent>
                <CardFooter className="p-4 pt-0 text-sm text-gray-500">
                  <span>Supplier: {product.supplier}</span>
                </CardFooter>
              </Card>
            ) : (
              <Card className="overflow-hidden transition-all hover:shadow-lg border-none shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/4 h-48 md:h-auto">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-medium">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <div className="flex items-center mb-2 md:mb-0">
                        <Badge variant="outline" className="text-xs font-normal mr-2">
                          {categories.find(c => c.value === product.category)?.name}
                        </Badge>
                        <div className="flex items-center">
                          <Star size={14} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-xs font-medium ml-1">{product.rating} ({product.reviews} reviews)</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center text-gray-600"
                      >
                        <Heart size={16} className="mr-1" /> Save
                      </Button>
                    </div>
                    
                    <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <Check size={14} className="text-green-500 mr-1" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
                      <div className="mb-4 sm:mb-0">
                        <div className="flex items-baseline">
                          <span className="font-bold text-2xl">₹{product.discountPrice}</span>
                          {product.discountPrice < product.price && (
                            <span className="text-sm text-gray-500 line-through ml-2">₹{product.price}</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">Min order: {product.minOrder} {product.minOrder > 1 ? 'units' : 'unit'}</div>
                        
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="bulk-pricing" className="border-b-0">
                            <AccordionTrigger className="py-2 px-0 text-sm">
                              <span className="text-toreso-blue">View Bulk Pricing</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-1">
                                {product.bulkPricing.map((tier, i) => (
                                  <div key={i} className="flex justify-between text-sm">
                                    <span>{tier.quantity}+ units</span>
                                    <span className="font-medium">₹{tier.price}/unit</span>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Input 
                          type="number" 
                          min={product.minOrder} 
                          defaultValue={product.minOrder} 
                          className="w-20"
                        />
                        <Button className="bg-toreso-blue" disabled={!product.inStock}>
                          {product.inStock ? (
                            <><ShoppingCart size={16} className="mr-2" /> Add to Cart</>
                          ) : (
                            "Notify When Available"
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm">
                      <span className="text-gray-500">Supplier: <span className="font-medium text-gray-700">{product.supplier}</span></span>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </motion.div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <Image className="h-16 w-16 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium">No products found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
