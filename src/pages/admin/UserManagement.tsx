
import React, { useState } from "react";
import {
  Package,
  Clock,
  AlertCircle,
  User,
  Shield,
  Search,
  MoreHorizontal,
  Filter,
  Plus,
  Edit,
  Trash,
  Users,
} from "lucide-react";
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
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    role: "Administrator",
    status: "Active",
    lastLogin: "2024-01-25 10:30",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Manager",
    status: "Active",
    lastLogin: "2024-01-24 15:45",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    status: "Inactive",
    lastLogin: "2024-01-20 08:20",
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Viewer",
    status: "Active",
    lastLogin: "2024-01-23 18:10",
  },
];

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase());
      
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "active") return matchesSearch && user.status === "Active";
    if (activeTab === "inactive") return matchesSearch && user.status === "Inactive";
    return matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="min-h-[20vh] relative mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-toreso-blue/20 to-toreso-blue/5 backdrop-blur-sm z-0"></div>
        
        {/* Abstract user management illustration */}
        <svg className="absolute right-0 top-0 h-full w-1/3 opacity-50 pointer-events-none" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2C5EF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#9b87f5" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          <motion.circle 
            cx="100" cy="60" r="30" 
            fill="url(#userGradient)" 
            stroke="#2C5EF6" 
            strokeWidth="0.5"
            animate={{ r: [30, 33, 30] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M100,90 C60,90 30,130 30,180 L170,180 C170,130 140,90 100,90"
            fill="url(#userGradient)"
            stroke="#2C5EF6"
            strokeWidth="0.5"
            animate={{ 
              d: [
                "M100,90 C60,90 30,130 30,180 L170,180 C170,130 140,90 100,90",
                "M100,90 C60,95 30,135 30,180 L170,180 C170,135 140,95 100,90",
                "M100,90 C60,90 30,130 30,180 L170,180 C170,130 140,90 100,90"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.circle
            cx="50" cy="120" r="15"
            fill="url(#userGradient)"
            stroke="#9b87f5"
            strokeWidth="0.5"
            animate={{ r: [15, 18, 15] }}
            transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.circle
            cx="150" cy="120" r="15"
            fill="url(#userGradient)"
            stroke="#9b87f5"
            strokeWidth="0.5"
            animate={{ r: [15, 18, 15] }}
            transition={{ duration: 2.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M50,135 C50,160 70,180 100,180 C130,180 150,160 150,135"
            fill="none"
            stroke="#2C5EF6"
            strokeWidth="0.5"
            strokeDasharray="3,3"
            animate={{ 
              d: [
                "M50,135 C50,160 70,180 100,180 C130,180 150,160 150,135",
                "M50,140 C50,165 70,185 100,185 C130,185 150,165 150,140",
                "M50,135 C50,160 70,180 100,180 C130,180 150,160 150,135"
              ] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <div className="relative z-10 h-full p-8 flex items-center">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-display font-medium text-white mb-2 flex items-center">
                <Users className="mr-2 text-white/70" size={28} />
                User Management
              </h1>
              <p className="text-white/70 mb-6">
                Manage user accounts, permissions and access controls across the Toreso platform
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <motion.div 
                  className="flex items-center p-3 bg-black/20 backdrop-blur-sm rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="h-8 w-8 rounded-full bg-toreso-blue/20 flex items-center justify-center mr-3">
                    <User size={16} className="text-toreso-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Total Users</p>
                    <p className="text-lg font-medium text-white">{users.length}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center p-3 bg-black/20 backdrop-blur-sm rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <Shield size={16} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Active Users</p>
                    <p className="text-lg font-medium text-white">{users.filter(u => u.status === "Active").length}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center p-3 bg-black/20 backdrop-blur-sm rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                    <AlertCircle size={16} className="text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Inactive Users</p>
                    <p className="text-lg font-medium text-white">{users.filter(u => u.status === "Inactive").length}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center p-3 bg-black/20 backdrop-blur-sm rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                    <Clock size={16} className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Recent Logins</p>
                    <p className="text-lg font-medium text-white">3</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8 flex justify-between items-start flex-wrap gap-4"
      >
        <div>
          <h2 className="text-2xl font-display font-medium text-white">
            User Directory
          </h2>
          <p className="text-white/70">
            View and manage all users in the system
          </p>
        </div>
        <Button className="bg-toreso-blue hover:bg-toreso-blue/90 text-white border-0">
          <Plus size={16} className="mr-2" /> Add New User
        </Button>
      </motion.div>

      <Card className="bg-black/30 backdrop-blur border-white/10 text-white overflow-hidden">
        <CardHeader className="pb-0">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl font-medium">
                All Users ({filteredUsers.length})
              </CardTitle>
              <CardDescription className="text-white/60">
                Manage user accounts and permissions
              </CardDescription>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input
                  placeholder="Search users..."
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
        
        <CardContent className="p-6">
          <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
            <TabsList className="bg-white/10 text-white">
              <TabsTrigger value="all" className="data-[state=active]:bg-white/20 data-[state=active]:text-white">
                All Users
              </TabsTrigger>
              <TabsTrigger value="active" className="data-[state=active]:bg-white/20 data-[state=active]:text-white">
                Active
              </TabsTrigger>
              <TabsTrigger value="inactive" className="data-[state=active]:bg-white/20 data-[state=active]:text-white">
                Inactive
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="hover:bg-white/5 border-white/10">
                  <TableHead className="text-white">Name</TableHead>
                  <TableHead className="text-white">Email</TableHead>
                  <TableHead className="text-white">Role</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Last Login</TableHead>
                  <TableHead className="text-white text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-white/60">
                      No users found matching your search criteria
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      className="hover:bg-white/5 border-white/10"
                    >
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge
                          className={`
                            ${user.status === "Active"
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-red-500 hover:bg-red-600"
                            }
                          `}
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0 text-white/70 hover:text-white hover:bg-white/10"
                            >
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-black/90 backdrop-blur text-white border-white/10"
                          >
                            <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                              <User className="mr-2 h-4 w-4" /> View Details
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
                    </motion.tr>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;
