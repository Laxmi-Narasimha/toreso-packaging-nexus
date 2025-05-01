import React, { useState } from "react";
import {
  Package,
  Clock,
  AlertCircle,
  User
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
import { Search, MoreHorizontal, Filter, Plus, Edit, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-display font-medium text-white mb-2">
            User Management
          </h1>
          <p className="text-white/70">
            Manage and monitor users across the platform
          </p>
        </div>
        <Button className="bg-toreso-blue hover:bg-toreso-blue/90 text-white border-0">
          <Plus size={16} className="mr-2" /> Add New User
        </Button>
      </div>

      <Card className="bg-black/30 backdrop-blur border-white/10 text-white overflow-hidden">
        <CardHeader className="pb-0">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <CardTitle className="text-xl font-medium">
              All Users ({filteredUsers.length})
            </CardTitle>
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
        <CardContent className="px-0 py-4">
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
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-white/5 border-white/10">
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;
