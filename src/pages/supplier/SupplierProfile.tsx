
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
  Building,
  User,
  MapPin,
  Phone,
  Mail,
  Globe,
  FileText,
  Shield,
  Award,
  Edit,
  Upload,
  CheckCircle,
  BadgeCheck,
  Clock,
  Factory,
  Calendar,
  Droplet,
  Users,
  Zap,
  Briefcase,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const SupplierProfile = () => {
  const [editMode, setEditMode] = useState(false);
  
  const companyInfo = {
    name: "PackRight Industries",
    logo: "/placeholder.svg",
    tagline: "Specialized in sustainable packaging solutions for industrial applications",
    description: "Founded in 2010, PackRight Industries has been at the forefront of innovative and sustainable packaging solutions. We specialize in corrugated packaging, protective packaging, and custom solutions for various industries including automotive, electronics, and food & beverage.",
    website: "www.packright.co.in",
    email: "info@packright.co.in",
    phone: "+91 98765 43210",
    address: {
      street: "Plot No. 45, Industrial Area Phase II",
      city: "Gurugram",
      state: "Haryana",
      postal: "122001",
      country: "India"
    },
    socialProfiles: {
      linkedin: "linkedin.com/company/packright",
      twitter: "twitter.com/packright",
      facebook: "facebook.com/packright"
    },
    founded: "2010",
    employees: "50-200",
    certifications: [
      { name: "ISO 9001:2015", status: "Verified", expiry: "Dec 2024" },
      { name: "ISO 14001:2015", status: "Verified", expiry: "Dec 2024" },
      { name: "FSC Certification", status: "Verified", expiry: "Mar 2025" },
      { name: "SEDEX", status: "In Progress", expiry: "Pending" }
    ],
    sustainability: {
      rating: 85,
      initiatives: [
        "100% renewable energy in manufacturing",
        "Zero waste to landfill program",
        "Water recycling system",
        "Sustainable sourcing policy"
      ]
    },
    production: {
      capacity: "800,000 units monthly",
      facilities: [
        { location: "Gurugram, Haryana", size: "50,000 sq.ft." },
        { location: "Manesar, Haryana", size: "35,000 sq.ft." }
      ],
      technologies: [
        "Automated box making",
        "Digital printing",
        "Die cutting",
        "Lamination"
      ]
    },
    specialties: [
      "Corrugated packaging",
      "Protective foam inserts",
      "Custom industrial packaging",
      "Sustainable packaging solutions",
      "Digital print packaging"
    ]
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-screen bg-black pb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-8 pt-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Company Profile</h1>
            <p className="text-gray-300">
              Manage your company information and credentials
            </p>
          </div>
          <Button 
            onClick={() => setEditMode(!editMode)}
            className="bg-toreso-teal hover:bg-toreso-teal/80 text-black"
          >
            <Edit size={16} className="mr-2" />
            {editMode ? "Save Changes" : "Edit Profile"}
          </Button>
        </motion.div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto bg-black/50 border border-white/10 mb-8">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-toreso-teal data-[state=active]:text-black">Overview</TabsTrigger>
            <TabsTrigger value="documents" className="text-white data-[state=active]:bg-toreso-teal data-[state=active]:text-black">Documents & Certifications</TabsTrigger>
            <TabsTrigger value="facilities" className="text-white data-[state=active]:bg-toreso-teal data-[state=active]:text-black">Facilities</TabsTrigger>
            <TabsTrigger value="sustainability" className="text-white data-[state=active]:bg-toreso-teal data-[state=active]:text-black">Sustainability</TabsTrigger>
          </TabsList>

          {/* Company Overview Tab */}
          <TabsContent value="overview" className="mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Company Info Card */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg overflow-hidden h-full">
                  <CardHeader className="border-b border-white/10 pb-4 text-center">
                    <div className="mx-auto mb-4">
                      <Avatar className="h-32 w-32 mx-auto border-4 border-toreso-teal">
                        <AvatarImage src={companyInfo.logo} />
                        <AvatarFallback className="bg-toreso-darkBlue text-white text-4xl">PI</AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">{companyInfo.name}</CardTitle>
                    <Badge className="bg-toreso-teal text-black font-medium">Verified Supplier</Badge>
                    <CardDescription className="text-gray-300 mt-2">{companyInfo.tagline}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-6 px-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-white">{companyInfo.address.street}</p>
                          <p className="text-gray-400">{companyInfo.address.city}, {companyInfo.address.state}, {companyInfo.address.postal}</p>
                          <p className="text-gray-400">{companyInfo.address.country}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <p className="text-white">{companyInfo.phone}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <p className="text-white">{companyInfo.email}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <p className="text-white">{companyInfo.website}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-gray-400">Founded</p>
                          <p className="text-white">{companyInfo.founded}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-gray-400">Employees</p>
                          <p className="text-white">{companyInfo.employees}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="border-t border-white/10 pt-4 pb-6 px-6">
                    <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                      <BadgeCheck className="h-4 w-4 mr-2" />
                      View Public Profile
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              
              {/* Main Content */}
              <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                {/* About */}
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">About the Company</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-300 whitespace-pre-line">
                      {companyInfo.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Key Specialties */}
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Key Specialties</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {companyInfo.specialties.map((specialty, index) => (
                        <Badge key={index} className="bg-toreso-blue/20 text-blue-300 hover:bg-toreso-blue/30 py-1.5">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="rounded-full bg-toreso-teal/20 h-14 w-14 flex items-center justify-center mx-auto mb-3">
                          <Award className="h-7 w-7 text-toreso-teal" />
                        </div>
                        <p className="text-2xl font-bold text-white">10+</p>
                        <p className="text-sm text-gray-400">Years in Business</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="rounded-full bg-toreso-blue/20 h-14 w-14 flex items-center justify-center mx-auto mb-3">
                          <Briefcase className="h-7 w-7 text-toreso-blue" />
                        </div>
                        <p className="text-2xl font-bold text-white">850+</p>
                        <p className="text-sm text-gray-400">Projects Completed</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="rounded-full bg-toreso-purple/20 h-14 w-14 flex items-center justify-center mx-auto mb-3">
                          <Factory className="h-7 w-7 text-toreso-purple" />
                        </div>
                        <p className="text-2xl font-bold text-white">2</p>
                        <p className="text-sm text-gray-400">Production Facilities</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Documents & Certifications Tab */}
          <TabsContent value="documents" className="mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Certifications List */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl text-white">Certifications</CardTitle>
                      <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                        <Upload className="h-4 w-4 mr-2" />
                        Add Certificate
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {companyInfo.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                          <div className="flex items-center">
                            <Shield className="h-10 w-10 text-toreso-teal mr-4" />
                            <div>
                              <p className="font-medium text-white">{cert.name}</p>
                              <p className="text-sm text-gray-400">Expiry: {cert.expiry}</p>
                            </div>
                          </div>
                          <Badge className={cert.status === "Verified" 
                            ? "bg-green-900/30 text-green-400" 
                            : "bg-yellow-900/30 text-yellow-400"}>
                            {cert.status === "Verified" && <CheckCircle className="h-3 w-3 mr-1" />}
                            {cert.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Upload Documents Card */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg h-full">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Required Documents</CardTitle>
                    <CardDescription className="text-gray-400">
                      The following documents are required for verification and compliance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-white/5">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-400 mr-3" />
                          <p className="text-white">Business Registration</p>
                        </div>
                        <Badge className="bg-green-900/30 text-green-400">Uploaded</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-white/5">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-400 mr-3" />
                          <p className="text-white">Tax Identification</p>
                        </div>
                        <Badge className="bg-green-900/30 text-green-400">Uploaded</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-white/5">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-400 mr-3" />
                          <p className="text-white">Quality Manual</p>
                        </div>
                        <Badge className="bg-yellow-900/30 text-yellow-400">Pending</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-white/5">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-400 mr-3" />
                          <p className="text-white">Insurance Certificate</p>
                        </div>
                        <Badge className="bg-green-900/30 text-green-400">Uploaded</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-white/10 pt-4">
                    <Button className="w-full bg-toreso-teal hover:bg-toreso-teal/80 text-black">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Documents
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Facilities Tab */}
          <TabsContent value="facilities" className="mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Production Facilities */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Production Facilities</CardTitle>
                    <CardDescription className="text-gray-400">
                      Details of your manufacturing locations and capabilities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {companyInfo.production.facilities.map((facility, index) => (
                        <div key={index} className="p-5 border border-white/10 rounded-lg bg-white/5">
                          <div className="flex items-center mb-4">
                            <Factory className="h-8 w-8 text-toreso-teal mr-3" />
                            <div>
                              <h3 className="text-lg font-medium text-white">Facility {index + 1}: {facility.location}</h3>
                              <p className="text-sm text-gray-400">Size: {facility.size}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-300 mb-2">Key Equipment</h4>
                              <ul className="text-sm text-gray-400 space-y-1">
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-toreso-teal mr-2" /> Automated Corrugator Machine</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-toreso-teal mr-2" /> 6-Color Flexo Printer</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-toreso-teal mr-2" /> Digital Die Cutting System</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-toreso-teal mr-2" /> Packaging Test Laboratory</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-300 mb-2">Certifications</h4>
                              <ul className="text-sm text-gray-400 space-y-1">
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-toreso-blue mr-2" /> ISO 9001:2015</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-toreso-blue mr-2" /> ISO 14001:2015</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-toreso-blue mr-2" /> 5S Implementation</li>
                                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-toreso-blue mr-2" /> FSSC 22000</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-300 mb-2">Production Lines</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="flex flex-col p-3 bg-white/5 rounded-md">
                                <span className="text-gray-400 text-xs">Line Type</span>
                                <span className="text-white">Corrugated Boxes</span>
                              </div>
                              <div className="flex flex-col p-3 bg-white/5 rounded-md">
                                <span className="text-gray-400 text-xs">Capacity</span>
                                <span className="text-white">250,000 units/month</span>
                              </div>
                              <div className="flex flex-col p-3 bg-white/5 rounded-md">
                                <span className="text-gray-400 text-xs">Utilization</span>
                                <span className="text-white">75%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Production Capabilities */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Production Capabilities</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <p className="text-gray-300">Monthly Capacity</p>
                          <p className="text-white font-medium">{companyInfo.production.capacity}</p>
                        </div>
                        <Progress value={75} className="h-2 bg-white/10" indicatorColor="bg-toreso-teal" />
                      </div>
                      
                      <div>
                        <h3 className="text-white font-medium mb-3">Manufacturing Technologies</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {companyInfo.production.technologies.map((tech, index) => (
                            <div key={index} className="flex items-center p-3 bg-white/5 rounded-md">
                              <Zap className="h-5 w-5 text-toreso-blue mr-3" />
                              <span className="text-gray-300">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-medium mb-3">Quality Testing</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Compression Strength</span>
                            <Badge className="bg-green-900/30 text-green-400">Available</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Edge Crush Test</span>
                            <Badge className="bg-green-900/30 text-green-400">Available</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Bursting Strength</span>
                            <Badge className="bg-green-900/30 text-green-400">Available</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Vibration Testing</span>
                            <Badge className="bg-yellow-900/30 text-yellow-400">Limited</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Sustainability Tab */}
          <TabsContent value="sustainability" className="mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Sustainability Score */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg h-full">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Sustainability Score</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 flex flex-col items-center">
                    <div className="relative w-48 h-48 mb-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle 
                            cx="50" cy="50" r="45" 
                            fill="none" 
                            stroke="rgba(255,255,255,0.1)" 
                            strokeWidth="8" 
                          />
                          <circle 
                            cx="50" cy="50" r="45" 
                            fill="none" 
                            stroke="rgba(0, 201, 182, 0.8)" 
                            strokeWidth="8" 
                            strokeDasharray="283" 
                            strokeDashoffset={283 - (283 * companyInfo.sustainability.rating / 100)}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-4xl font-bold text-white">{companyInfo.sustainability.rating}</span>
                          <span className="text-gray-400">out of 100</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 w-full">
                      <h3 className="text-white font-medium mb-3">Rating Breakdown</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300 text-sm">Environmental Impact</span>
                            <span className="text-white text-sm">90/100</span>
                          </div>
                          <Progress value={90} className="h-2 bg-white/10" indicatorColor="bg-green-500" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300 text-sm">Resource Efficiency</span>
                            <span className="text-white text-sm">85/100</span>
                          </div>
                          <Progress value={85} className="h-2 bg-white/10" indicatorColor="bg-blue-500" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300 text-sm">Social Responsibility</span>
                            <span className="text-white text-sm">80/100</span>
                          </div>
                          <Progress value={80} className="h-2 bg-white/10" indicatorColor="bg-purple-500" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Sustainability Initiatives */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <Card className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-xl text-white">Sustainability Initiatives</CardTitle>
                    <CardDescription className="text-gray-400">
                      Programs and practices to reduce environmental impact
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="p-5 border border-white/10 rounded-lg bg-white/5">
                        <div className="flex items-center mb-4">
                          <Droplet className="h-8 w-8 text-blue-400 mr-3" />
                          <h3 className="text-lg font-medium text-white">Water Management</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                          Our comprehensive water management system has reduced water consumption by 37% since 2018.
                          Key initiatives include closed-loop water recycling, rainwater harvesting, and improved efficiency in
                          manufacturing processes.
                        </p>
                        <div className="flex justify-between items-center mt-2 p-3 bg-white/5 rounded-md">
                          <div>
                            <p className="text-sm text-gray-400">Annual water savings</p>
                            <p className="text-white font-medium">5.2 million liters</p>
                          </div>
                          <Badge className="bg-blue-900/30 text-blue-400">37% Reduction</Badge>
                        </div>
                      </div>
                      
                      <div className="p-5 border border-white/10 rounded-lg bg-white/5">
                        <div className="flex items-center mb-4">
                          <Zap className="h-8 w-8 text-yellow-400 mr-3" />
                          <h3 className="text-lg font-medium text-white">Energy Management</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                          We've invested in renewable energy solutions including rooftop solar panels that generate
                          approximately 45% of our energy requirements. Additional efficiency measures have
                          reduced overall energy consumption by 25%.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3 bg-white/5 rounded-md">
                            <p className="text-sm text-gray-400">Renewable energy usage</p>
                            <div className="flex items-center">
                              <Progress value={45} className="h-2 bg-white/10 flex-grow mr-3" indicatorColor="bg-yellow-500" />
                              <span className="text-white">45%</span>
                            </div>
                          </div>
                          <div className="p-3 bg-white/5 rounded-md">
                            <p className="text-sm text-gray-400">Energy efficiency improvement</p>
                            <div className="flex items-center">
                              <Progress value={25} className="h-2 bg-white/10 flex-grow mr-3" indicatorColor="bg-green-500" />
                              <span className="text-white">25%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5 border border-white/10 rounded-lg bg-white/5">
                        <div className="flex items-center mb-4">
                          <Briefcase className="h-8 w-8 text-purple-400 mr-3" />
                          <h3 className="text-lg font-medium text-white">Sustainable Materials</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                          We prioritize sustainable sourcing and have increased our use of recycled materials 
                          across our product lines. All paper products are sourced from FSC-certified suppliers.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-3 bg-white/5 rounded-md flex flex-col items-center justify-center">
                            <p className="text-3xl font-bold text-white">100%</p>
                            <p className="text-xs text-gray-400 text-center">FSC-certified paper sourcing</p>
                          </div>
                          <div className="p-3 bg-white/5 rounded-md flex flex-col items-center justify-center">
                            <p className="text-3xl font-bold text-white">80%</p>
                            <p className="text-xs text-gray-400 text-center">Recyclable packaging materials</p>
                          </div>
                          <div className="p-3 bg-white/5 rounded-md flex flex-col items-center justify-center">
                            <p className="text-3xl font-bold text-white">65%</p>
                            <p className="text-xs text-gray-400 text-center">Post-consumer recycled content</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SupplierProfile;
