
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StatusBadge, getStatusColor, getStatusDisplayName, getStatusIcon } from "./StatusBadge";
import { cn } from "@/lib/utils";
import { Building, MapPin, Globe, Calendar, FileText, Mail, Phone, User, ClipboardCheck, CheckCircle, XCircle, Clock, Download } from "lucide-react";
import { Supplier } from "@/types/supplier";

interface SupplierDetailsProps {
  supplier: Supplier | null;
}

export const SupplierDetails = ({ supplier }: SupplierDetailsProps) => {
  if (!supplier) {
    return (
      <Card className="bg-black/30 backdrop-blur border-white/10 text-white h-full flex items-center justify-center">
        <CardContent className="p-12 text-center">
          <Building size={48} className="mx-auto mb-4 text-white/30" />
          <h3 className="text-lg font-medium mb-2">No Supplier Selected</h3>
          <p className="text-white/60">Select a supplier from the list to view details</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={supplier.logo} alt={supplier.companyName} />
                <AvatarFallback>{supplier.companyName.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{supplier.companyName}</CardTitle>
                <CardDescription className="text-white/60">{supplier.category}</CardDescription>
              </div>
            </div>
            <StatusBadge status={supplier.status} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-white/70 mb-3">Company Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-white/60" />
                <span>{supplier.location}</span>
              </div>
              <div className="flex items-center">
                <Globe size={16} className="mr-2 text-white/60" />
                <a href={`https://${supplier.contact.website}`} className="text-toreso-blue hover:underline">
                  {supplier.contact.website}
                </a>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-white/60" />
                <span>Submitted: {supplier.submissionDate}</span>
              </div>
              <div className="flex items-center">
                <FileText size={16} className="mr-2 text-white/60" />
                <span>{supplier.documentCount} Documents</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-white/70 mb-3">Contact Person</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <User size={16} className="mr-2 text-white/60" />
                <span>{supplier.contact.name}</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-white/60" />
                <a href={`mailto:${supplier.contact.email}`} className="text-toreso-blue hover:underline">
                  {supplier.contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-white/60" />
                <span>{supplier.contact.phone}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-white/70 mb-3">Verification Progress</h4>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span>Overall Progress</span>
                <span>{supplier.completionPercent}%</span>
              </div>
              <Progress 
                value={supplier.completionPercent} 
                className={cn(
                  "h-2 bg-white/20",
                  supplier.completionPercent > 90 ? "[&>div]:bg-green-500" :
                  supplier.completionPercent > 70 ? "[&>div]:bg-blue-500" : 
                  supplier.completionPercent > 40 ? "[&>div]:bg-yellow-500" : 
                  "[&>div]:bg-red-500"
                )}
              />
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="verification-steps" className="border-white/10">
                <AccordionTrigger className="text-sm">
                  <span className="flex items-center">
                    <ClipboardCheck size={16} className="mr-2" /> Verification Steps
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm">
                  <div className="space-y-3 pt-2">
                    {supplier.verificationSteps.map((step, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className={`p-1 rounded-full mr-2 ${
                            step.status === "completed" ? "bg-green-500/20" :
                            step.status === "in_progress" ? "bg-blue-500/20" : 
                            step.status === "rejected" ? "bg-red-500/20" :
                            "bg-gray-500/20"
                          }`}>
                            {getStatusIcon(step.status)}
                          </span>
                          <span>{step.name}</span>
                        </div>
                        <Badge className={getStatusColor(step.status)}>
                          {getStatusDisplayName(step.status)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-white/10 pt-4">
          {supplier.status === "pending" || supplier.status === "in_review" ? (
            <>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <FileText size={16} className="mr-2" /> View Documents
              </Button>
              <div className="space-x-2">
                <Button variant="destructive" size="sm" className="bg-red-500 hover:bg-red-600">
                  <XCircle size={16} className="mr-1" /> Reject
                </Button>
                <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
                  <CheckCircle size={16} className="mr-1" /> Approve
                </Button>
              </div>
            </>
          ) : supplier.status === "approved" ? (
            <>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <FileText size={16} className="mr-2" /> View Documents
              </Button>
              <Button variant="default" className="bg-toreso-teal hover:bg-toreso-teal/90">
                <Download size={16} className="mr-2" /> Download Certificate
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <FileText size={16} className="mr-2" /> View Documents
              </Button>
              <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                <Clock size={16} className="mr-2" /> Reopen Case
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
