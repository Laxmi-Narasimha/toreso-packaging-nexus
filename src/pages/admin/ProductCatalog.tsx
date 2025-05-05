
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const productCategories = [
  "All Categories",
  "Corrugated Boxes",
  "Mailer Boxes",
  "Rigid Boxes",
  "Folding Cartons",
  "Shipping Boxes",
  "Protective Packaging",
  "Tapes & Adhesives",
  "Labels & Tags",
  "VCI Products",
  "Packaging Films",
  "Desiccants",
  "Wooden Packaging",
  "Rust Preventives",
  "Packaging Bags",
  "Edge Protectors"
];

// Extended product data including your new products
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
    image: "https://3.imimg.com/data3/QJ/QL/MY-4004470/bubble-wraps-500x500.jpg"
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
  {
    id: 8,
    name: "VCI Polyethylene Film Roll",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Polyethylene",
    price: "$12.50 - $18.75",
    moq: "100",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/KG/XZ/KD/SELLER-4004470/vci-polyethylene-film-500x500.jpg"
  },
  {
    id: 9,
    name: "Rust Inhibiting VCI Packaging Paper",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Treated Paper",
    price: "$8.25 - $12.50",
    moq: "200",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/QW/ND/NF/SELLER-4004470/vci-packaging-paper-500x500.jpg"
  },
  {
    id: 10,
    name: "Poly Coated Paper Roll",
    category: "Packaging Films",
    supplier: "Propsec Packaging",
    material: "Poly Coated Paper",
    price: "$9.50 - $14.25",
    moq: "150",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/KZ/PX/NE/4004470/poly-coated-paper-roll-500x500.PNG"
  },
  {
    id: 11,
    name: "VCI Stretch Wrap Roll",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Polyethylene",
    price: "$16.75 - $22.50",
    moq: "50",
    status: "Low Stock",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/YQ/SJ/LG/4004470/vci-stretchwrap-500x500.jpg"
  },
  {
    id: 12,
    name: "Honeycomb Paper Roll",
    category: "Protective Packaging",
    supplier: "Propsec Packaging",
    material: "Recycled Paper",
    price: "$11.25 - $15.75",
    moq: "100",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/406866228/BQ/ZL/MW/4004470/honeycomb-paper-roll-500x500.jpeg"
  },
  {
    id: 13,
    name: "LDPE Packaging Roll",
    category: "Packaging Films",
    supplier: "Propsec Packaging",
    material: "LDPE Film",
    price: "$7.50 - $12.25",
    moq: "150",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/JO/HK/MS/4004470/ldpe-roll-500x500.jpg"
  },
  {
    id: 14,
    name: "Aluminum Vacuum Packaging Foil",
    category: "Packaging Films",
    supplier: "Propsec Packaging",
    material: "Aluminum Barrier Foil",
    price: "$18.50 - $24.75",
    moq: "100",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/GR/LY/UE/4004470/packaging-barrier-foil-500x500.jpg"
  },
  {
    id: 15,
    name: "Packaging Air Pad",
    category: "Protective Packaging",
    supplier: "Propsec Packaging",
    material: "Recyclable LDPE",
    price: "$9.75 - $14.50",
    moq: "200",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/12/370968843/IU/DZ/GR/4004470/packaging-air-pad-500x500.jpeg"
  },
  {
    id: 16,
    name: "VCI Bubble Film",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Bubble Film",
    price: "$13.75 - $19.50",
    moq: "100",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/9/348160555/QN/JL/GZ/4004470/vci-bubble-film-500x500.jpg"
  },
  {
    id: 17,
    name: "VCI Air Bubble Film Roll",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Air Bubble Film",
    price: "$15.25 - $21.75",
    moq: "75",
    status: "Low Stock",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/HW/GM/LD/4004470/vci-air-bubble-film-roll-500x500.PNG"
  },
  {
    id: 18,
    name: "VCI Film Cover Bag",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Film",
    price: "$7.25 - $12.50",
    moq: "250",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/XH/HP/NH/SELLER-4004470/vci-film-500x500.jpg"
  },
  {
    id: 19,
    name: "VCI Anti-Corrosion Diffuser",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Compound",
    price: "$6.75 - $9.50",
    moq: "300",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/350442158/ZK/MS/XH/4004470/vci-anti-corrosion-diffuser-500x500.jpg"
  },
  {
    id: 20,
    name: "VCI Protective Film",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Film",
    price: "$10.50 - $15.75",
    moq: "150",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/MW/SZ/RA/SELLER-4004470/vci-protective-film-500x500.jpg"
  },
  {
    id: 21,
    name: "Dry Container Desiccant",
    category: "Desiccants",
    supplier: "Propsec Packaging",
    material: "Silica Gel",
    price: "$5.25 - $8.50",
    moq: "500",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/9/348151262/WG/MJ/TC/4004470/dry-container-desiccant-500x500.jpg"
  },
  {
    id: 22,
    name: "Propsec Desiccant Bags",
    category: "Desiccants",
    supplier: "Propsec Packaging",
    material: "Silica Gel",
    price: "$4.75 - $7.25",
    moq: "600",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/350349518/OU/HM/EJ/4004470/propsec-desiccant-bags-500x500.jpg"
  },
  {
    id: 23,
    name: "Moisture Absorber Desiccant Bag",
    category: "Desiccants",
    supplier: "Propsec Packaging",
    material: "Clay Desiccant",
    price: "$3.95 - $6.50",
    moq: "800",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/YQ/DP/HO/4004470/moisture-absorber-desiccant-500x500.PNG"
  },
  {
    id: 24,
    name: "Double Sided Tape",
    category: "Tapes & Adhesives",
    supplier: "Propsec Packaging",
    material: "Adhesive Tape",
    price: "$3.25 - $5.75",
    moq: "100",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/IS/EY/XE/4004470/double-sided-tape-500x500.PNG"
  },
  {
    id: 25,
    name: "Polythene Bags",
    category: "Packaging Bags",
    supplier: "Propsec Packaging",
    material: "Polyethylene",
    price: "$2.50 - $4.75",
    moq: "1000",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SX/YI/MY-4004470/polyethene-500x500.jpg"
  },
  {
    id: 26,
    name: "BOPP Packaging Tape",
    category: "Tapes & Adhesives",
    supplier: "Propsec Packaging",
    material: "BOPP Film",
    price: "$1.95 - $3.50",
    moq: "200",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/BB/SH/TX/4004470/bopp-tape-500x500.png"
  },
  {
    id: 27,
    name: "Plywood Boxes",
    category: "Wooden Packaging",
    supplier: "Propsec Packaging",
    material: "Plywood",
    price: "$18.50 - $35.75",
    moq: "50",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/326522717/IZ/CZ/EZ/4004470/plywood-boxes-500x500.png"
  },
  {
    id: 28,
    name: "Wooden Packaging Box",
    category: "Wooden Packaging",
    supplier: "Propsec Packaging",
    material: "Hardwood",
    price: "$22.50 - $42.75",
    moq: "25",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/9/348209992/UN/OQ/ZU/4004470/wooden-packaging-box-500x500.jpg"
  },
  {
    id: 29,
    name: "Acidic Rust Remover",
    category: "Rust Preventives",
    supplier: "Propsec Packaging",
    material: "Chemical Solution",
    price: "$12.75 - $18.50",
    moq: "20",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/DM/FX/MC/4004470/acidic-rust-remover-500x500.jpg"
  },
  {
    id: 30,
    name: "Rust Preventive Oil",
    category: "Rust Preventives",
    supplier: "Propsec Packaging",
    material: "Oil Based",
    price: "$14.50 - $22.75",
    moq: "15",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/UX/IX/XR/SELLER-4004470/rust-preventive-oil-500x500.jpg"
  },
  {
    id: 31,
    name: "Neutral Rust Remover",
    category: "Rust Preventives",
    supplier: "Propsec Packaging",
    material: "pH Neutral Solution",
    price: "$15.25 - $24.50",
    moq: "20",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/WL/PX/EV/4004470/neutral-rust-remover-125x125.jpg"
  },
  {
    id: 32,
    name: "Printed Polybag",
    category: "Packaging Bags",
    supplier: "Propsec Packaging",
    material: "Custom Printed Poly",
    price: "$1.75 - $3.25",
    moq: "1000",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/12/370972737/FG/MN/KE/4004470/printed-polybag-500x500.jpg"
  },
  {
    id: 33,
    name: "VCI Ziplock Bag",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Polyethylene",
    price: "$6.50 - $9.75",
    moq: "500",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/LC/FF/QU/SELLER-4004470/zip-lock-bags-500x500.jpg"
  },
  {
    id: 34,
    name: "VCI Plastic Bag",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Plastic",
    price: "$5.75 - $8.50",
    moq: "600",
    status: "Active",
    ecoCertified: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/1/481513690/ME/SM/EA/4004470/vci-plastic-bag-500x500.jpg"
  },
  {
    id: 35,
    name: "VCI Paper",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Paper",
    price: "$7.25 - $12.50",
    moq: "200",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355468774/JP/KN/YY/4004470/vci-paper-500x500.jpg"
  },
  {
    id: 36,
    name: "VCI Protective Paper",
    category: "VCI Products",
    supplier: "Propsec Packaging",
    material: "VCI Treated Paper",
    price: "$8.50 - $13.75",
    moq: "150",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/VQ/YY/XQ/SELLER-4004470/vci-protective-paper-500x500.jpg"
  },
  {
    id: 37,
    name: "Corrugated Angle Board",
    category: "Edge Protectors",
    supplier: "Propsec Packaging",
    material: "Corrugated Paperboard",
    price: "$2.75 - $4.50",
    moq: "200",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/EK/NF/MY-4004470/angle-board-500x500.jpg"
  },
  {
    id: 38,
    name: "Angle Edge Board",
    category: "Edge Protectors",
    supplier: "Propsec Packaging",
    material: "Recycled Paperboard",
    price: "$2.95 - $4.75",
    moq: "200",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/349758796/JL/YJ/LV/4004470/angle-edge-board-500x500.jpg"
  },
  {
    id: 39,
    name: "Honeycomb Packaging Box",
    category: "Protective Packaging",
    supplier: "Propsec Packaging",
    material: "Honeycomb Paperboard",
    price: "$9.50 - $16.75",
    moq: "100",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/JG/RR/CZ/4004470/honeycomb-packaging-box-500x500.jpg"
  },
  {
    id: 40,
    name: "Corrugated Cardboard Box",
    category: "Corrugated Boxes",
    supplier: "Propsec Packaging",
    material: "Corrugated Cardboard",
    price: "$1.50 - $3.75",
    moq: "300",
    status: "Active",
    ecoCertified: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/349423289/TE/YA/TA/4004470/corrugated-cardboard-box-500x500.jpeg"
  }
];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.supplier.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsDetailDialogOpen(true);
  };

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
              <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2">
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
                <Badge className="mr-2 bg-green-500 hover:bg-green-500">{products.filter(p => p.ecoCertified).length}</Badge>
                Eco-Certified
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                <Badge className="mr-2 bg-yellow-500 hover:bg-yellow-500">{products.filter(p => p.status === "Pending Review").length}</Badge>
                Pending Review
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                <Badge className="mr-2 bg-red-500 hover:bg-red-500">{products.filter(p => p.status === "Low Stock").length}</Badge>
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
                              <DropdownMenuItem
                                className="hover:bg-white/10 cursor-pointer"
                                onClick={() => handleViewDetails(product)}
                              >
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

      {/* Product Details Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="bg-zinc-900 text-white border-white/10 max-w-3xl">
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
            <DialogDescription className="text-white/70">
              Detailed information about the selected product
            </DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden bg-white/5 h-64 w-full">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-1">Product Status</h3>
                  <Badge className={`
                    ${selectedProduct.status === 'Active' ? 'bg-green-500 hover:bg-green-600' : 
                      selectedProduct.status === 'Pending Review' ? 'bg-yellow-500 hover:bg-yellow-600' : 
                      'bg-red-500 hover:bg-red-600'}
                  `}>
                    {selectedProduct.status}
                  </Badge>
                  {selectedProduct.ecoCertified && (
                    <Badge className="ml-2 bg-green-500 hover:bg-green-600">Eco-Certified</Badge>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-1">Product Name</h3>
                  <p className="text-xl font-semibold">{selectedProduct.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-1">Category</h3>
                  <p>{selectedProduct.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-1">Supplier</h3>
                  <p>{selectedProduct.supplier}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-1">Material</h3>
                  <p>{selectedProduct.material}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-1">Price Range</h3>
                  <p className="text-lg font-medium">{selectedProduct.price}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/50 mb-1">Minimum Order Quantity</h3>
                  <p>{selectedProduct.moq} units</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductCatalog;
