
import React, { useState, useEffect } from "react";
import {
  Package,
  Search,
  Filter,
  Heart,
  ShoppingCart,
  ChevronDown,
  Grid2x2,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Slider
} from "@/components/ui/slider";
import { motion } from "framer-motion";

const packageProducts = [
  {
    id: 1,
    name: "Premium Corrugated Boxes",
    description: "Heavy-duty corrugated boxes perfect for shipping and storage",
    image: "https://images.unsplash.com/photo-1610411083065-7c747892e9c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    price: 120,
    discountPrice: 96,
    unit: "per 100 units",
    ratings: 4.8,
    reviews: 124,
    supplier: "EcoBox Solutions",
    tags: ["Corrugated", "Shipping", "Storage"],
    featured: true,
    bestseller: true,
    material: "Corrugated",
    eco: true,
  },
  {
    id: 2,
    name: "Kraft Paper Rolls",
    description: "Recyclable kraft paper rolls for wrapping and void filling",
    image: "https://images.unsplash.com/photo-1595410881274-8cec5816ba96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    price: 85,
    discountPrice: 72,
    unit: "per roll",
    ratings: 4.6,
    reviews: 89,
    supplier: "PaperCraft Co.",
    tags: ["Paper", "Kraft", "Wrapping"],
    featured: false,
    bestseller: true,
    material: "Paper",
    eco: true,
  },
  {
    id: 3,
    name: "Bubble Wrap Sheets",
    description: "Protective bubble wrap for fragile items",
    image: "https://images.unsplash.com/photo-1626761191814-a9dc9eae1496?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    price: 45,
    discountPrice: 38,
    unit: "per 50 sheets",
    ratings: 4.5,
    reviews: 73,
    supplier: "SafeWrap Inc.",
    tags: ["Bubble", "Protection", "Fragile"],
    featured: false,
    bestseller: false,
    material: "Plastic",
    eco: false,
  },
  {
    id: 4,
    name: "Clear Packaging Tape",
    description: "Strong adhesive tape for sealing packages",
    image: "https://images.unsplash.com/photo-1622467827417-bbe6d425f2a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    price: 35,
    discountPrice: 28,
    unit: "per roll",
    ratings: 4.7,
    reviews: 102,
    supplier: "SecurePack Ltd.",
    tags: ["Tape", "Sealing", "Adhesive"],
    featured: false,
    bestseller: true,
    material: "Plastic",
    eco: false,
  },
  {
    id: 5,
    name: "Biodegradable Packing Peanuts",
    description: "Eco-friendly void fill solution",
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    price: 60,
    discountPrice: 48,
    unit: "per bag",
    ratings: 4.9,
    reviews: 57,
    supplier: "GreenPack",
    tags: ["Void Fill", "Eco-friendly", "Protection"],
    featured: true,
    bestseller: false,
    material: "Biodegradable",
    eco: true,
  },
  {
    id: 6,
    name: "Custom Printed Boxes",
    description: "Boxes with your company branding and logo",
    image: "https://images.unsplash.com/photo-1607435097405-db48f377bff7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    price: 220,
    discountPrice: 189,
    unit: "per 100 units",
    ratings: 4.9,
    reviews: 112,
    supplier: "BrandBox Solutions",
    tags: ["Corrugated", "Branded", "Custom"],
    featured: true,
    bestseller: true,
    material: "Corrugated",
    eco: true,
  },
];

const ProductCatalog = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(packageProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [priceRange, setPriceRange] = useState([0, 250]);
  const [selectedSort, setSelectedSort] = useState("popular");
  const [ecoFilter, setEcoFilter] = useState(false);

  useEffect(() => {
    // Apply filters
    let result = packageProducts;
    
    // Search term filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Material filter
    if (selectedMaterial !== "all") {
      result = result.filter(product => product.material === selectedMaterial);
    }
    
    // Price range filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Eco-friendly filter
    if (ecoFilter) {
      result = result.filter(product => product.eco);
    }
    
    // Sorting
    if (selectedSort === "popular") {
      result = [...result].sort((a, b) => b.reviews - a.reviews);
    } else if (selectedSort === "highToLow") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (selectedSort === "lowToHigh") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (selectedSort === "rating") {
      result = [...result].sort((a, b) => b.ratings - a.ratings);
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedMaterial, priceRange, selectedSort, ecoFilter]);

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
      <div className="w-full h-80 bg-gradient-to-r from-blue-600 to-toreso-blue rounded-2xl mb-10 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530202741-e752edbb47a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 flex flex-col justify-center p-10 max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Packaging Solutions for Every Need
          </motion.h1>
          <motion.p 
            className="text-xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find the perfect packaging materials for your business with volume-based discounts
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
                placeholder="Search products, materials, suppliers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and products */}
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
                <h4 className="font-medium mb-2">Material Type</h4>
                <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Materials</SelectItem>
                    <SelectItem value="Corrugated">Corrugated</SelectItem>
                    <SelectItem value="Paper">Paper</SelectItem>
                    <SelectItem value="Plastic">Plastic</SelectItem>
                    <SelectItem value="Biodegradable">Biodegradable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Price Range (₹)</h4>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 250]}
                    max={250}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="eco-friendly"
                  checked={ecoFilter}
                  onChange={() => setEcoFilter(!ecoFilter)}
                  className="h-4 w-4 rounded border-gray-300 text-toreso-blue focus:ring-toreso-blue"
                />
                <label htmlFor="eco-friendly" className="text-sm font-medium text-gray-700">
                  Eco-friendly only
                </label>
              </div>
              
              <Button className="w-full" variant="outline">
                Clear Filters
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Products grid */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div>
                <h2 className="font-bold text-2xl">Packaging Products</h2>
                <p className="text-gray-500">{filteredProducts.length} products found</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Select value={selectedSort} onValueChange={setSelectedSort}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="lowToHigh">Price: Low to High</SelectItem>
                    <SelectItem value="highToLow">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="icon"
                    className="rounded-none rounded-l-md h-9 w-9"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid2x2 size={16} />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="icon"
                    className="rounded-none rounded-r-md h-9 w-9"
                    onClick={() => setViewMode('list')}
                  >
                    <List size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={item}>
                  <Card className="overflow-hidden h-full hover:shadow-md transition-shadow cursor-pointer group">
                    <CardContent className="p-0">
                      {viewMode === 'grid' ? (
                        <div className="h-full flex flex-col">
                          <div className="relative pb-[70%] overflow-hidden bg-gray-100">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="absolute h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            {product.featured && (
                              <Badge className="absolute top-3 left-3 bg-toreso-blue">Featured</Badge>
                            )}
                            {product.bestseller && (
                              <Badge className="absolute top-3 right-3 bg-amber-500">Best Seller</Badge>
                            )}
                            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="flex space-x-2">
                                <Button size="icon" className="rounded-full bg-white text-toreso-blue hover:bg-gray-100 h-9 w-9">
                                  <Heart size={18} className="transition-colors hover:fill-rose-500 hover:text-rose-500" />
                                </Button>
                                <Button size="icon" className="rounded-full bg-toreso-blue hover:bg-toreso-blue/90 h-9 w-9">
                                  <ShoppingCart size={18} />
                                </Button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4 flex-1 flex flex-col">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-500">{product.supplier}</span>
                                <div className="flex items-center">
                                  <span className="text-amber-500">★</span>
                                  <span className="text-xs font-medium ml-1">{product.ratings}</span>
                                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                                </div>
                              </div>
                              
                              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                              
                              <div className="flex flex-wrap gap-1 mt-2">
                                {product.tags.map(tag => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="mt-4 pt-3 border-t flex items-end justify-between">
                              <div>
                                <div className="flex items-center">
                                  <span className="text-lg font-bold">₹{product.discountPrice}</span>
                                  <span className="ml-2 text-sm line-through text-gray-400">₹{product.price}</span>
                                </div>
                                <div className="text-xs text-gray-500">{product.unit}</div>
                              </div>
                              
                              <Button
                                size="sm"
                                className="rounded-full"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex p-4">
                          <div className="w-40 h-40 flex-shrink-0 relative overflow-hidden rounded-lg mr-4">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            {(product.featured || product.bestseller) && (
                              <div className="absolute top-2 left-2 flex flex-col gap-2">
                                {product.featured && <Badge className="bg-toreso-blue">Featured</Badge>}
                                {product.bestseller && <Badge className="bg-amber-500">Best Seller</Badge>}
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1 flex flex-col">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-500">{product.supplier}</span>
                                <div className="flex items-center">
                                  <span className="text-amber-500">★</span>
                                  <span className="text-xs font-medium ml-1">{product.ratings}</span>
                                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                                </div>
                              </div>
                              
                              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                              <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                              
                              <div className="flex flex-wrap gap-1">
                                {product.tags.map(tag => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="mt-4 flex items-center justify-between">
                              <div>
                                <div className="flex items-center">
                                  <span className="text-lg font-bold">₹{product.discountPrice}</span>
                                  <span className="ml-2 text-sm line-through text-gray-400">₹{product.price}</span>
                                </div>
                                <div className="text-xs text-gray-500">{product.unit}</div>
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Heart size={16} className="mr-2" /> Save
                                </Button>
                                <Button size="sm">
                                  <ShoppingCart size={16} className="mr-2" /> Add to Cart
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-10 text-center">
              <Package size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedMaterial("all");
                setPriceRange([0, 250]);
                setEcoFilter(false);
              }}>Clear all filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
