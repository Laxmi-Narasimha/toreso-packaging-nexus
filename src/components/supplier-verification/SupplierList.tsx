
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { StatusBadge, getStatusColor } from "./StatusBadge";
import { 
  MapPin, 
  Calendar, 
  MoreHorizontal, 
  Eye, 
  CheckCircle, 
  XCircle, 
  FileText,
  ArrowUpDown,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Supplier } from "@/types/supplier";

interface SupplierListProps {
  suppliers: Supplier[];
  selectedSupplier: number | null;
  onSelectSupplier: (id: number) => void;
}

export const SupplierList = ({ suppliers, selectedSupplier, onSelectSupplier }: SupplierListProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow className="hover:bg-white/5 border-white/10">
            <TableHead className="text-white">Company</TableHead>
            <TableHead className="text-white">
              <div className="flex items-center">
                Location
                <ArrowUpDown size={14} className="ml-1" />
              </div>
            </TableHead>
            <TableHead className="text-white">
              <div className="flex items-center">
                Submission Date
                <ArrowUpDown size={14} className="ml-1" />
              </div>
            </TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Progress</TableHead>
            <TableHead className="text-white text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow 
              key={supplier.id} 
              className={cn(
                "hover:bg-white/5 border-white/10 cursor-pointer",
                selectedSupplier === supplier.id ? "bg-white/5" : ""
              )}
              onClick={() => onSelectSupplier(supplier.id)}
            >
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={supplier.logo} alt={supplier.companyName} />
                    <AvatarFallback>{supplier.companyName.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{supplier.companyName}</p>
                    <p className="text-xs text-white/60">{supplier.category}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1 text-white/60" />
                  <span>{supplier.location}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1 text-white/60" />
                  <span>{supplier.submissionDate}</span>
                </div>
              </TableCell>
              <TableCell>
                <StatusBadge status={supplier.status} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress 
                    value={supplier.completionPercent} 
                    className={cn(
                      "h-2 w-16 bg-white/20",
                      supplier.completionPercent > 90 ? "[&>div]:bg-green-500" :
                      supplier.completionPercent > 70 ? "[&>div]:bg-blue-500" : 
                      supplier.completionPercent > 40 ? "[&>div]:bg-yellow-500" : 
                      "[&>div]:bg-red-500"
                    )}
                  />
                  <span>{supplier.completionPercent}%</span>
                </div>
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
                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                      <Eye size={14} className="mr-2" /> View Details
                    </DropdownMenuItem>
                    {supplier.status !== "approved" && supplier.status !== "rejected" && (
                      <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                        <CheckCircle size={14} className="mr-2" /> Approve
                      </DropdownMenuItem>
                    )}
                    {supplier.status !== "rejected" && (
                      <DropdownMenuItem className="hover:bg-white/10 cursor-pointer text-red-400">
                        <XCircle size={14} className="mr-2" /> Reject
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                      <FileText size={14} className="mr-2" /> View Documents
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
