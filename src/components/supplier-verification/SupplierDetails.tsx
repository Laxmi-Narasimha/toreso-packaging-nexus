
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building,
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  AlertCircle,
  FileCheck,
  Users,
  Briefcase,
  Package,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  User,
  DownloadCloud
} from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const SupplierDetails = ({ supplier }: any) => {
  if (!supplier) {
    return (
      <Card className="bg-black/30 backdrop-blur border-white/10 text-white h-full">
        <CardContent className="flex flex-col items-center justify-center h-full py-20">
          <Building className="text-white/30 w-20 h-20 mb-4" />
          <h3 className="text-xl font-medium text-white/80 mb-2">No Supplier Selected</h3>
          <p className="text-white/50 text-center max-w-xs">
            Select a supplier from the list to view their verification details
          </p>
        </CardContent>
      </Card>
    );
  }

  // Determine verification status indicator
  const getStatusIcon = () => {
    switch (supplier.status) {
      case "approved":
        return <CheckCircle size={20} className="text-green-500" />;
      case "pending":
        return <Clock size={20} className="text-blue-500" />;
      case "in_review":
        return <AlertCircle size={20} className="text-purple-500" />;
      case "rejected":
        return <XCircle size={20} className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{supplier.companyName}</CardTitle>
            <CardDescription className="text-white/50">
              Supplier ID: {supplier.id}
            </CardDescription>
          </div>
          <StatusBadge status={supplier.status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start space-x-3">
            <Building className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <p className="text-sm text-white/50">Company Type</p>
              <p className="font-medium">{supplier.companyType}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <p className="text-sm text-white/50">Location</p>
              <p className="font-medium">{supplier.location}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <p className="text-sm text-white/50">Email</p>
              <p className="font-medium">{supplier.email}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <p className="text-sm text-white/50">Phone</p>
              <p className="font-medium">{supplier.phone}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Calendar className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <p className="text-sm text-white/50">Application Date</p>
              <p className="font-medium">{supplier.applicationDate}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="verification" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline py-2">
                <div className="flex items-center">
                  <FileCheck className="mr-2 h-5 w-5" />
                  <span>Verification Details</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pt-2">
                <div className="space-y-3">
                  {supplier.verificationDetails.map((detail: any, index: number) => (
                    <div key={index} className="flex items-start">
                      {detail.status === "completed" ? (
                        <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                      ) : detail.status === "in_progress" ? (
                        <Clock size={16} className="text-blue-500 mt-1 mr-2" />
                      ) : (
                        <AlertCircle size={16} className="text-gray-400 mt-1 mr-2" />
                      )}
                      <div>
                        <p className="font-medium text-white">{detail.name}</p>
                        <p className="text-sm">{detail.description}</p>
                        <div className="flex items-center mt-1">
                          <StatusBadge status={detail.status} />
                          {detail.status === "completed" && (
                            <Button variant="ghost" size="sm" className="text-xs h-6 ml-2 text-white/70 hover:text-white">
                              <DownloadCloud size={12} className="mr-1" />
                              Document
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="product-categories" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline py-2">
                <div className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  <span>Product Categories</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pt-2">
                <div className="flex flex-wrap gap-2">
                  {supplier.productCategories?.map((category: string, index: number) => (
                    <div key={index} className="bg-white/10 px-2 py-1 rounded-full text-sm">
                      {category}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="users" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline py-2">
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <span>Associated Users</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pt-2">
                <div className="space-y-3">
                  {supplier.users?.map((user: any, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-white/10 h-8 w-8 rounded-full flex items-center justify-center">
                        <User size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="text-sm">{user.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3 pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-toreso-blue hover:bg-toreso-blue/90">
              <FileCheck size={16} className="mr-2" />
              Complete Verification
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-zinc-900 text-white border-white/10">
            <DialogHeader>
              <DialogTitle>Complete Supplier Verification</DialogTitle>
              <DialogDescription className="text-white/70">
                Approve or reject this supplier's verification application.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex items-center space-x-3">
                <Building size={24} className="text-white/70" />
                <div>
                  <p className="font-medium text-lg">{supplier.companyName}</p>
                  <p className="text-sm text-white/70">{supplier.location}</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-md">
                <p className="text-sm">
                  Please confirm that you have reviewed all verification documents and 
                  are ready to make a decision on this supplier's application.
                </p>
              </div>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="sm:flex-1 border-red-500/20 text-red-500 hover:text-red-400 hover:bg-red-950/20"
              >
                <XCircle size={16} className="mr-2" />
                Reject Application
              </Button>
              <Button 
                className="sm:flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                <CheckCircle size={16} className="mr-2" />
                Approve Supplier
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
          <Briefcase size={16} className="mr-2" />
          View Product Catalog
        </Button>
      </CardFooter>
    </Card>
  );
};
