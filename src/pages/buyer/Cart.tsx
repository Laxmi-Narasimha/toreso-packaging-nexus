
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Building,
  Truck,
  Calendar,
  ArrowRight,
  AlertCircle,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Premium Corrugated Boxes",
    description: "Heavy-duty corrugated boxes perfect for shipping and storage",
    image: "https://images.unsplash.com/photo-1610411083065-7c747892e9c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    basePrice: 120,
    currentPrice: 96,
    quantity: 500,
    unit: "boxes",
    supplier: "EcoBox Solutions",
    locations: ["Mumbai Plant", "Pune Plant"],
    deliveryDate: "3-5 business days",
    inStock: true,
    nextTier: {
      quantity: 1000,
      price: 90,
    },
    selectedLocation: "Mumbai Plant",
  },
  {
    id: 2,
    name: "Kraft Paper Rolls",
    description: "Recyclable kraft paper rolls for wrapping and void filling",
    image: "https://images.unsplash.com/photo-1595410881274-8cec5816ba96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    basePrice: 85,
    currentPrice: 72,
    quantity: 50,
    unit: "rolls",
    supplier: "PaperCraft Co.",
    locations: ["Mumbai Plant", "Chennai Plant", "Delhi Plant"],
    deliveryDate: "2-4 business days",
    inStock: true,
    nextTier: {
      quantity: 100,
      price: 68,
    },
    selectedLocation: "Mumbai Plant",
  },
  {
    id: 3,
    name: "Packaging Tapes (Clear)",
    description: "Strong adhesive tape for sealing packages securely",
    image: "https://images.unsplash.com/photo-1622467827417-bbe6d425f2a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    basePrice: 35,
    currentPrice: 28,
    quantity: 100,
    unit: "rolls",
    supplier: "SecurePack Ltd.",
    locations: ["Chennai Plant", "Pune Plant"],
    deliveryDate: "2-3 business days",
    inStock: true,
    nextTier: {
      quantity: 200,
      price: 25,
    },
    selectedLocation: "Chennai Plant",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [subtotal, setSubtotal] = useState(0);
  const [savings, setSavings] = useState(0);
  const [addingMore, setAddingMore] = useState(false);
  const [consolidationSavings, setConsolidationSavings] = useState(0);
  
  // Calculate totals when cart items change
  useEffect(() => {
    let newSubtotal = 0;
    let newSavings = 0;
    let newConsolidationSavings = 0;
    
    cartItems.forEach(item => {
      const itemTotal = item.currentPrice * item.quantity;
      const baseTotal = item.basePrice * item.quantity;
      
      newSubtotal += itemTotal;
      newSavings += (baseTotal - itemTotal);
      
      // Calculate potential consolidation savings
      if (item.nextTier) {
        const potentialSavings = (item.currentPrice - item.nextTier.price) * item.quantity;
        newConsolidationSavings += potentialSavings;
      }
    });
    
    setSubtotal(newSubtotal);
    setSavings(newSavings);
    setConsolidationSavings(newConsolidationSavings);
  }, [cartItems]);
  
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };
  
  const updateLocation = (id, location) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id 
          ? { ...item, selectedLocation: location } 
          : item
      )
    );
  };
  
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const consolidateOrders = () => {
    // In a real implementation, this would contact the supplier for consolidated pricing
    // For now, we'll simulate by updating prices to the next tier
    setCartItems(prevItems =>
      prevItems.map(item => ({
        ...item,
        currentPrice: item.nextTier ? item.nextTier.price : item.currentPrice
      }))
    );
    
    setAddingMore(true);
    setTimeout(() => setAddingMore(false), 2000);
  };

  // Define animation variants correctly for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-3xl font-bold mb-8 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ShoppingCart className="mr-3" /> Your Cart <span className="ml-2 text-gray-500">({cartItems.length} items)</span>
      </motion.h1>
      
      {cartItems.length === 0 ? (
        <motion.div
          className="bg-white rounded-xl shadow-sm p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild>
            <Link to="/buyer/products">Browse Products</Link>
          </Button>
        </motion.div>
      ) : (
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
                        <div className="w-full sm:w-36 h-36 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        
                        <div className="flex-1 p-4">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium text-lg">{item.name}</h3>
                              <div className="flex items-center text-sm text-gray-500 mb-2">
                                <Building size={14} className="mr-1" />
                                {item.supplier}
                              </div>
                              <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                            </div>
                            
                            <div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-500 hover:text-red-500"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 size={18} />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-4 space-y-3 sm:space-y-0">
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-l-md"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus size={14} />
                              </Button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                                className="h-8 w-16 text-center border-y outline-none"
                              />
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-r-md"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus size={14} />
                              </Button>
                              <span className="ml-2 text-gray-500 text-sm">{item.unit}</span>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-lg font-bold">₹{(item.currentPrice * item.quantity).toLocaleString()}</div>
                              <div className="flex items-center justify-end text-sm">
                                <span className="text-gray-400 line-through mr-2">₹{item.basePrice}</span>
                                <span className="text-toreso-blue">₹{item.currentPrice}</span>
                                <span className="text-gray-500 ml-1">per {item.unit === 'boxes' ? 'box' : 'roll'}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 pt-4 border-t border-gray-100">
                            <div>
                              <div className="text-sm font-medium mb-1">Deliver to:</div>
                              <Select
                                value={item.selectedLocation}
                                onValueChange={(value) => updateLocation(item.id, value)}
                              >
                                <SelectTrigger className="h-8 w-[200px]">
                                  <SelectValue placeholder="Select plant" />
                                </SelectTrigger>
                                <SelectContent>
                                  {item.locations.map(location => (
                                    <SelectItem key={location} value={location}>{location}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="flex items-center mt-2 sm:mt-0">
                              <div className="flex items-center text-sm text-gray-500">
                                <Truck size={14} className="mr-1" />
                                <span>Delivery: {item.deliveryDate}</span>
                              </div>
                              {item.inStock ? (
                                <Badge className="ml-3 bg-green-500">In Stock</Badge>
                              ) : (
                                <Badge className="ml-3 bg-amber-500">On Backorder</Badge>
                              )}
                            </div>
                          </div>
                          
                          {/* Volume discount hint */}
                          {item.nextTier && (
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <div className="flex items-start">
                                <div className="mr-2 mt-0.5">
                                  <AlertCircle size={14} className="text-toreso-blue" />
                                </div>
                                <div className="text-sm text-gray-600">
                                  <p>
                                    <span className="font-medium">Volume discount available!</span> Increase your order to {item.nextTier.quantity} {item.unit} to pay only <span className="text-toreso-blue font-medium">₹{item.nextTier.price}</span> per {item.unit === 'boxes' ? 'box' : 'roll'}.
                                  </p>
                                  <div className="mt-2">
                                    <Progress value={(item.quantity / item.nextTier.quantity) * 100} className="h-2" />
                                    <div className="flex justify-between text-xs mt-1">
                                      <span>{item.quantity} {item.unit}</span>
                                      <span className="text-toreso-blue">{item.nextTier.quantity} {item.unit}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <Alert variant="default" className="border-toreso-blue bg-blue-50">
                <AlertCircle className="h-4 w-4 text-toreso-blue" />
                <AlertTitle className="text-toreso-blue">Volume Discount Opportunity</AlertTitle>
                <AlertDescription className="text-gray-600">
                  Consolidate your orders across plants to unlock an additional savings of <span className="font-bold">₹{consolidationSavings.toLocaleString()}</span>. Maximize your procurement power!
                </AlertDescription>
              </Alert>
              
              {addingMore && (
                <Alert variant="default" className="border-green-500 bg-green-50 mt-3">
                  <Check className="h-4 w-4 text-green-500" />
                  <AlertTitle className="text-green-700">Volume discount applied!</AlertTitle>
                  <AlertDescription className="text-gray-600">
                    You've successfully unlocked volume-based pricing across all your plants.
                  </AlertDescription>
                </Alert>
              )}
            </motion.div>
          </motion.div>
          
          {/* Order summary */}
          <motion.div 
            className="w-full md:w-80 flex-shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Order Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-green-600">
                    <span>Volume Discount Savings</span>
                    <span>- ₹{savings.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Fee</span>
                    <span>₹0</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (18% GST)</span>
                    <span>₹{Math.round(subtotal * 0.18).toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹{Math.round(subtotal * 1.18).toLocaleString()}</span>
                    </div>
                    <div className="text-green-600 text-sm mt-1">
                      You saved ₹{savings.toLocaleString()} on this order!
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col px-6 pt-0 pb-6">
                <Button 
                  variant="outline" 
                  className="w-full mb-3" 
                  onClick={consolidateOrders}
                >
                  <Building className="mr-2 h-4 w-4" /> Consolidate Multi-Plant Order
                </Button>
                <Button className="w-full">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="mt-4">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Estimated Delivery</h3>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">May 5 - May 10, 2025</p>
                    <p className="text-sm text-gray-500">Delivery times may vary by location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-4">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Need Help?</h3>
                <div className="space-y-4 text-sm">
                  <Button variant="link" className="h-auto p-0">Request Bulk Quote</Button>
                  <Button variant="link" className="h-auto p-0">Shipping Policies</Button>
                  <Button variant="link" className="h-auto p-0">Contact Support</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
