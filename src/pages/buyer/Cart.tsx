
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
  ShoppingCart,
  Trash2,
  ChevronRight,
  Plus,
  Minus,
  Building,
  MapPin,
  Truck,
  Calendar,
  AlertCircle,
  Check,
  CheckCircle2,
  CreditCard,
  Clock,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  // State management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bubble Wrap Roll (Large)",
      description: "Premium quality bubble wrap with air-filled bubbles for cushioning and protection.",
      image: "https://5.imimg.com/data5/YN/PT/CP/ANDROID-27589775/product-jpeg-500x500.jpg",
      basePrice: 350,
      currentPrice: 320,
      quantity: 20,
      unit: "rolls",
      supplier: "Benz Packaging Solutions",
      locations: ["Mumbai", "Delhi", "Bangalore"],
      deliveryDate: "Jul 28, 2023",
      inStock: true,
      nextTier: {
        quantity: 50,
        price: 290,
      },
      selectedLocation: "Mumbai"
    },
    {
      id: 2,
      name: "Corrugated Boxes (5-ply)",
      description: "Strong and durable corrugated shipping boxes. Available in multiple sizes.",
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/1/SZ/AN/FP/40524380/product-jpeg-500x500.jpg",
      basePrice: 25,
      currentPrice: 20,
      quantity: 100,
      unit: "boxes",
      supplier: "EcoPack Industries",
      locations: ["Gurugram", "Chennai", "Pune"],
      deliveryDate: "Jul 30, 2023",
      inStock: true,
      nextTier: {
        quantity: 500,
        price: 18,
      },
      selectedLocation: "Chennai"
    },
    {
      id: 3,
      name: "Kraft Paper Sheets (Large)",
      description: "Eco-friendly kraft paper for wrapping, void fill, and product protection.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/FX/CO/BD/121686138/kraft-paper-500x500.jpg",
      basePrice: 8,
      currentPrice: 7,
      quantity: 200,
      unit: "sheets",
      supplier: "GreenWrap Co.",
      locations: ["Hyderabad", "Kolkata", "Ahmedabad"],
      deliveryDate: "Aug 2, 2023",
      inStock: true,
      nextTier: {
        quantity: 500,
        price: 6,
      },
      selectedLocation: "Hyderabad"
    },
  ]);
  
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [addingMore, setAddingMore] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.currentPrice * item.quantity), 0);
  const shipping = subtotal > 10000 ? 0 : 500;
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.18;
  const total = subtotal + shipping + tax - discount;
  
  // Calculate potential savings
  const regularTotal = cartItems.reduce((acc, item) => acc + (item.basePrice * item.quantity), 0);
  const currentSavings = regularTotal - subtotal;
  const nextTierSavings = cartItems.reduce((acc, item) => {
    if (item.nextTier) {
      const potentialSavings = (item.currentPrice - item.nextTier.price) * item.quantity;
      return acc + potentialSavings;
    }
    return acc;
  }, 0);

  // Handle quantity change
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle remove item
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setPromoApplied(true);
    }
  };

  // Update delivery location
  const updateLocation = (id: number, location: string) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, selectedLocation: location } : item
      )
    );
  };

  const handleAddMore = () => {
    setAddingMore(true);
    setTimeout(() => setAddingMore(false), 2000);
  };

  // Define animation variants correctly for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
        <p className="text-gray-600">Review your items and proceed to checkout.</p>
      </div>

      {cartItems.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart items */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex-1"
          >
            <div className="space-y-6">
              {cartItems.map(item => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        {/* Product image */}
                        <div className="sm:w-1/4 h-32 sm:h-auto bg-gray-100">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        
                        {/* Product details */}
                        <div className="flex-1 p-4">
                          <div className="flex flex-col sm:flex-row justify-between">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                              <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                              
                              <div className="flex items-center text-sm mb-3">
                                <Building size={14} className="text-gray-500 mr-1" />
                                <span>{item.supplier}</span>
                                <span className="mx-1.5 text-gray-300">|</span>
                                <MapPin size={14} className="text-gray-500 mr-1" />
                                <Select 
                                  defaultValue={item.selectedLocation}
                                  onValueChange={(value) => updateLocation(item.id, value)}
                                >
                                  <SelectTrigger className="h-6 w-auto min-w-0 px-2 border-none focus:ring-0">
                                    <SelectValue placeholder="Select location" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {item.locations.map(location => (
                                      <SelectItem key={location} value={location}>{location}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              
                              <div className="flex items-center text-sm">
                                <Truck size={14} className="text-gray-500 mr-1" />
                                <span>Delivery by </span>
                                <span className="font-medium ml-1">{item.deliveryDate}</span>
                                <span className="mx-1.5 text-gray-300">|</span>
                                {item.inStock ? (
                                  <span className="text-green-600 flex items-center">
                                    <CheckCircle2 size={14} className="mr-1" />
                                    In Stock
                                  </span>
                                ) : (
                                  <span className="text-red-500 flex items-center">
                                    <AlertCircle size={14} className="mr-1" />
                                    Out of Stock
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-end mt-4 sm:mt-0">
                              <div className="flex items-center mb-2">
                                <Button 
                                  variant="outline" 
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus size={14} />
                                </Button>
                                <Input 
                                  type="number" 
                                  min={1}
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  className="h-7 w-16 mx-1 px-2 text-center"
                                />
                                <Button 
                                  variant="outline" 
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus size={14} />
                                </Button>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-lg">₹{(item.currentPrice * item.quantity).toLocaleString()}</div>
                                <div className="text-sm text-gray-500">
                                  <span className="line-through">₹{item.basePrice}/unit</span>
                                  <span className="mx-1">→</span>
                                  <span className="text-toreso-blue font-medium">₹{item.currentPrice}/unit</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 pt-4 border-t">
                            <div>
                              {item.nextTier && (
                                <div className="flex items-center text-sm">
                                  <Box size={14} className="text-amber-500 mr-1" />
                                  <span className="text-amber-600">
                                    Add {item.nextTier.quantity - item.quantity} more to get <span className="font-semibold">₹{item.nextTier.price}/unit</span>
                                  </span>
                                </div>
                              )}
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 mt-2 sm:mt-0"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 size={14} className="mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <Button
                variant="outline"
                className="w-full flex items-center justify-center py-6"
                onClick={handleAddMore}
                disabled={addingMore}
              >
                {addingMore ? (
                  <span className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    Redirecting to Products...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Plus className="h-5 w-5 mr-2" />
                    Add More Items
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Order summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full md:w-1/3"
          >
            <div className="space-y-6 sticky top-24">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>{shipping > 0 ? `₹${shipping.toLocaleString()}` : 'Free'}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (SAVE10)</span>
                        <span>- ₹{discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">GST (18%)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                    
                    <div className="bg-blue-50 text-blue-700 p-3 rounded-md flex items-start mt-2">
                      <Check className="h-4 w-4 mr-2 mt-0.5" />
                      <span className="text-sm">
                        You're saving <span className="font-semibold">₹{currentSavings.toLocaleString()}</span> on this order compared to standard pricing.
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-2">Promo Code</p>
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                      />
                      <Button 
                        onClick={applyPromoCode}
                        disabled={promoApplied || promoCode.length === 0}
                        variant={promoApplied ? "ghost" : "default"}
                        className={promoApplied ? "text-green-600" : ""}
                      >
                        {promoApplied ? 'Applied' : 'Apply'}
                      </Button>
                    </div>
                    {promoApplied && (
                      <p className="text-sm text-green-600 mt-1 flex items-center">
                        <Check size={12} className="mr-1" />
                        10% discount applied successfully!
                      </p>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="text-sm font-medium mb-1">Estimated Delivery</p>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                      <span>Jul 28 - Aug 2, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4">
                  <Button className="w-full bg-toreso-blue py-6 text-lg">
                    Proceed to Checkout
                  </Button>
                  
                  <div className="flex items-center justify-center text-sm text-gray-500 w-full">
                    <CreditCard size={14} className="mr-2" />
                    <span>Secure payment processing</span>
                  </div>
                </CardFooter>
              </Card>
              
              {nextTierSavings > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Card className="border-none shadow-md bg-gradient-to-r from-amber-50 to-orange-50 border-amber-100">
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3">
                          <TrendingUp className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-800">Unlock More Savings!</h4>
                          <p className="text-sm text-amber-700 mt-1">
                            Add more quantity to save an additional ₹{nextTierSavings.toLocaleString()} on your current items.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="inline-block p-6 bg-gray-100 rounded-full mb-6">
            <ShoppingCart className="h-16 w-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Start shopping to add packaging materials to your cart.</p>
          <Button className="bg-toreso-blue">
            Browse Products
          </Button>
        </motion.div>
      )}
      
      {/* Recently Viewed Items */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-6">Recently Viewed Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
              <div className="h-40 bg-gray-100">
                <img 
                  src={`https://5.imimg.com/data5/SELLER/Default/2021/1/FX/CO/BD/121686138/kraft-paper-500x500.jpg`}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">Sustainable Options</Badge>
                <h3 className="font-semibold">Kraft Paper Roll</h3>
                <div className="flex justify-between items-center mt-2">
                  <div className="font-bold">₹180/roll</div>
                  <Button size="sm" className="bg-toreso-blue">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Volume Pricing Information */}
      <div className="mt-16">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Volume-Based Pricing</CardTitle>
            <CardDescription>Get better prices when you order larger quantities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Standard Price</TableHead>
                  <TableHead>10+ Units</TableHead>
                  <TableHead>50+ Units</TableHead>
                  <TableHead>100+ Units</TableHead>
                  <TableHead>500+ Units</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Bubble Wrap Rolls</TableCell>
                  <TableCell>₹350/roll</TableCell>
                  <TableCell>₹320/roll</TableCell>
                  <TableCell>₹290/roll</TableCell>
                  <TableCell>₹270/roll</TableCell>
                  <TableCell>₹250/roll</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Corrugated Boxes (5-ply)</TableCell>
                  <TableCell>₹25/box</TableCell>
                  <TableCell>₹22/box</TableCell>
                  <TableCell>₹20/box</TableCell>
                  <TableCell>₹18/box</TableCell>
                  <TableCell>₹15/box</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Kraft Paper Sheets</TableCell>
                  <TableCell>₹8/sheet</TableCell>
                  <TableCell>₹7.5/sheet</TableCell>
                  <TableCell>₹7/sheet</TableCell>
                  <TableCell>₹6/sheet</TableCell>
                  <TableCell>₹5/sheet</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
