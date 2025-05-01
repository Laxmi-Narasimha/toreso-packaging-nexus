
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Users,
  Building,
  User,
  Search,
  Filter,
  Plus,
  Check,
  X,
  Badge,
  Edit,
  Trash2,
  ChevronDown,
  Package,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge as UIBadge } from "@/components/ui/badge";

// Sample user data
const USERS = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Buyer Admin",
    company: "Maruti Corp",
    status: "Active",
    lastActive: "Today",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    role: "Supplier Admin",
    company: "PackRight Industries",
    status: "Active",
    lastActive: "Yesterday",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "Platform Admin",
    company: "Toreso",
    status: "Active",
    lastActive: "Today",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Raj Patel",
    email: "raj.patel@example.com",
    role: "Buyer User",
    company: "Volvo India",
    status: "Inactive",
    lastActive: "2 weeks ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Supplier User",
    company: "EcoPackage Co",
    status: "Pending",
    lastActive: "Never",
    avatar: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Michael Lee",
    email: "michael.lee@example.com",
    role: "Buyer User",
    company: "TATA Motors",
    status: "Active",
    lastActive: "3 days ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Ananya Gupta",
    email: "ananya.gupta@example.com",
    role: "Supplier Admin",
    company: "SafeWrap Packaging",
    status: "Active",
    lastActive: "Today",
    avatar: "/placeholder.svg",
  },
  {
    id: 8,
    name: "James Brown",
    email: "james.brown@example.com",
    role: "Platform Admin",
    company: "Toreso",
    status: "Active",
    lastActive: "2 days ago",
    avatar: "/placeholder.svg",
  },
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredUsers = USERS.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      selectedRole === "All" || user.role.includes(selectedRole);

    const matchesStatus =
      selectedStatus === "All" || user.status === selectedStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">User Management</h1>
        <p className="text-gray-500">
          Manage all users, roles, and permissions across the platform
        </p>
      </div>

      <Tabs defaultValue="all-users" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="all-users" className="flex items-center">
            <Users size={18} className="mr-2" /> All Users
          </TabsTrigger>
          <TabsTrigger value="buyers" className="flex items-center">
            <Building size={18} className="mr-2" /> Buyer Accounts
          </TabsTrigger>
          <TabsTrigger value="suppliers" className="flex items-center">
            <Package size={18} className="mr-2" /> Supplier Accounts
          </TabsTrigger>
          <TabsTrigger value="admins" className="flex items-center">
            <Badge size={18} className="mr-2" /> Admin Accounts
          </TabsTrigger>
          <TabsTrigger value="pending" className="flex items-center">
            <Clock size={18} className="mr-2" /> Pending Approvals
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all-users">
          <Card>
            <CardHeader className="pb-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="relative w-full md:w-96">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <Input
                    placeholder="Search users, emails, companies..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center gap-2 ml-auto">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center">
                        <Filter size={16} className="mr-2" />
                        Role: {selectedRole}
                        <ChevronDown size={16} className="ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {["All", "Buyer", "Supplier", "Admin"].map((role) => (
                        <DropdownMenuItem
                          key={role}
                          onClick={() => setSelectedRole(role)}
                        >
                          {role}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center">
                        <Filter size={16} className="mr-2" />
                        Status: {selectedStatus}
                        <ChevronDown size={16} className="ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {["All", "Active", "Inactive", "Pending"].map((status) => (
                        <DropdownMenuItem
                          key={status}
                          onClick={() => setSelectedStatus(status)}
                        >
                          {status}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <Button className="flex items-center">
                    <Plus size={16} className="mr-2" />
                    Add User
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-gray-500">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <UIBadge 
                            variant={user.role.includes("Admin") ? "default" : "outline"}
                            className={
                              user.role.includes("Buyer")
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : user.role.includes("Supplier")
                                ? "bg-teal-100 text-teal-800 hover:bg-teal-100"
                                : "bg-purple-100 text-purple-800 hover:bg-purple-100"
                            }
                          >
                            {user.role}
                          </UIBadge>
                        </TableCell>
                        <TableCell>{user.company}</TableCell>
                        <TableCell>
                          <UIBadge
                            variant="outline"
                            className={
                              user.status === "Active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : user.status === "Inactive"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            }
                          >
                            {user.status}
                          </UIBadge>
                        </TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="icon">
                              {user.status === "Active" ? (
                                <X size={16} className="text-red-500" />
                              ) : (
                                <Check size={16} className="text-green-500" />
                              )}
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 size={16} className="text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {filteredUsers.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-gray-500">No users found matching your filters</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="buyers">
          <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg">
            <p className="text-gray-500">Buyer Accounts Management View</p>
          </div>
        </TabsContent>
        
        <TabsContent value="suppliers">
          <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg">
            <p className="text-gray-500">Supplier Accounts Management View</p>
          </div>
        </TabsContent>
        
        <TabsContent value="admins">
          <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg">
            <p className="text-gray-500">Admin Accounts Management View</p>
          </div>
        </TabsContent>
        
        <TabsContent value="pending">
          <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg">
            <p className="text-gray-500">Pending Approvals View</p>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users size={20} className="mr-2 text-blue-600" />
              User Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Total Users:</span>
                <span className="font-bold">368</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Buyers:</span>
                <span className="font-bold">215</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Suppliers:</span>
                <span className="font-bold">143</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Admins:</span>
                <span className="font-bold">10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Pending Approval:</span>
                <span className="font-bold text-yellow-600">24</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Badge size={20} className="mr-2 text-purple-600" />
              Role Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start mb-2">
                <Edit size={16} className="mr-2" />
                Manage Roles & Permissions
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Plus size={16} className="mr-2" />
                Create Custom Role
              </Button>
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <h4 className="text-sm font-medium mb-3">Available Roles:</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Platform Admin</span>
                  <UIBadge>10 users</UIBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Buyer Admin</span>
                  <UIBadge>43 users</UIBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Buyer User</span>
                  <UIBadge>172 users</UIBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Supplier Admin</span>
                  <UIBadge>52 users</UIBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Supplier User</span>
                  <UIBadge>91 users</UIBadge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle size={20} className="mr-2 text-red-600" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="text-sm font-medium">New user registered</p>
                <p className="text-xs text-gray-500">Ananya Gupta - SafeWrap Packaging</p>
                <p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
              </div>
              
              <div className="border-l-2 border-green-400 pl-3">
                <p className="text-sm font-medium">User activated</p>
                <p className="text-xs text-gray-500">Michael Lee - TATA Motors</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
              
              <div className="border-l-2 border-red-400 pl-3">
                <p className="text-sm font-medium">User deactivated</p>
                <p className="text-xs text-gray-500">Raj Patel - Volvo India</p>
                <p className="text-xs text-gray-400 mt-1">2 weeks ago</p>
              </div>
              
              <div className="border-l-2 border-purple-400 pl-3">
                <p className="text-sm font-medium">Role changed</p>
                <p className="text-xs text-gray-500">James Brown - From User to Admin</p>
                <p className="text-xs text-gray-400 mt-1">3 days ago</p>
              </div>
              
              <div className="text-center mt-2">
                <Button variant="link" size="sm">View all activity</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
