
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  Users,
  Building,
  FileCheck,
  Shield,
  FileX,
  Filter,
  Search,
  AlertCircle,
  CheckCircle,
  ArrowUpDown,
  Eye,
  UserCheck
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { StatusBadge } from "@/components/supplier-verification/StatusBadge";

// Mock data for pending audits
const pendingAudits = [
  {
    id: "AUD-2025-001",
    company: "EcoPack Industries",
    auditType: "Factory Assessment",
    status: "pending",
    dueDate: "2025-05-15",
    priority: "high",
    location: "Mumbai, India",
    scope: "Packaging process compliance and quality assurance",
    companyId: "COMP-001",
  },
  {
    id: "AUD-2025-002",
    company: "BoxCraft Ltd.",
    auditType: "Quality Control",
    status: "pending",
    dueDate: "2025-05-22",
    priority: "medium",
    location: "Delhi, India",
    scope: "Quality management system and product testing procedures",
    companyId: "COMP-002",
  },
  {
    id: "AUD-2025-003",
    company: "Premium Containers Ltd.",
    auditType: "Environmental Compliance",
    status: "pending",
    dueDate: "2025-05-18",
    priority: "high",
    location: "Chennai, India",
    scope: "Environmental management and sustainability practices",
    companyId: "COMP-003",
  },
  {
    id: "AUD-2025-004",
    company: "GreenWrap Co.",
    auditType: "Safety Inspection",
    status: "pending",
    dueDate: "2025-05-30",
    priority: "low",
    location: "Pune, India",
    scope: "Workplace safety compliance and employee training",
    companyId: "COMP-004",
  },
  {
    id: "AUD-2025-005",
    company: "SecurePack Ltd.",
    auditType: "Factory Assessment",
    status: "in_progress",
    dueDate: "2025-05-10",
    priority: "high",
    location: "Hyderabad, India",
    scope: "Full facility assessment and production capabilities",
    companyId: "COMP-005",
  },
  {
    id: "AUD-2025-006",
    company: "Benz Packaging Solutions",
    auditType: "Quality Control",
    status: "in_progress",
    dueDate: "2025-05-12",
    priority: "medium",
    location: "Bangalore, India",
    scope: "Product quality standards and testing methodologies",
    companyId: "COMP-006",
  },
  {
    id: "AUD-2025-007",
    company: "TotalPack Solutions",
    auditType: "Environmental Compliance",
    status: "completed",
    dueDate: "2025-04-30",
    priority: "medium",
    location: "Kolkata, India",
    scope: "Waste management and recycling processes",
    companyId: "COMP-007",
  },
  {
    id: "AUD-2025-008",
    company: "SafeWrap Packaging Co.",
    auditType: "Safety Inspection",
    status: "completed",
    dueDate: "2025-04-25",
    priority: "high",
    location: "Ahmedabad, India",
    scope: "Health and safety procedures and emergency protocols",
    companyId: "COMP-008",
  },
];

// Mock data for auditors
const auditors = [
  {
    id: "AUD-001",
    name: "Rajesh Kumar",
    specialization: "Factory Assessment",
    rating: 4.8,
    assignments: 3,
    availability: "Available",
    location: "Mumbai, India",
  },
  {
    id: "AUD-002",
    name: "Priya Sharma",
    specialization: "Quality Control",
    rating: 4.9,
    assignments: 2,
    availability: "Available",
    location: "Delhi, India",
  },
  {
    id: "AUD-003",
    name: "Amit Patel",
    specialization: "Environmental Compliance",
    rating: 4.7,
    assignments: 4,
    availability: "Available",
    location: "Bangalore, India",
  },
  {
    id: "AUD-004",
    name: "Deepa Reddy",
    specialization: "Safety Inspection",
    rating: 4.5,
    assignments: 1,
    availability: "Available",
    location: "Chennai, India",
  },
  {
    id: "AUD-005",
    name: "Sandeep Verma",
    specialization: "Factory Assessment",
    rating: 4.6,
    assignments: 0,
    availability: "Available",
    location: "Hyderabad, India",
  },
  {
    id: "AUD-006",
    name: "Anjali Desai",
    specialization: "Quality Control",
    rating: 4.9,
    assignments: 2,
    availability: "Unavailable",
    location: "Pune, India",
  },
  {
    id: "AUD-007",
    name: "Vivek Singh",
    specialization: "Environmental Compliance",
    rating: 4.8,
    assignments: 1,
    availability: "Available",
    location: "Kolkata, India",
  },
];

// Third-party audit agencies
const thirdPartyAgencies = [
  {
    id: "TP-001",
    name: "Quality Assurance Partners",
    specialization: "Multi-disciplinary",
    rating: 4.8,
    clients: 45,
    location: "National",
  },
  {
    id: "TP-002",
    name: "PackCert Inspectors",
    specialization: "Packaging Compliance",
    rating: 4.9,
    clients: 32,
    location: "South India",
  },
  {
    id: "TP-003",
    name: "EcoVerify Solutions",
    specialization: "Environmental Audits",
    rating: 4.7,
    clients: 28,
    location: "National",
  },
  {
    id: "TP-004",
    name: "SafetyFirst Auditors",
    specialization: "Safety Inspections",
    rating: 4.6,
    clients: 19,
    location: "North India",
  },
];

const AuditAssignment = () => {
  const { toast } = useToast();
  const [selectedAudit, setSelectedAudit] = useState<any>(null);
  const [isAssigning, setIsAssigning] = useState(false);
  const [selectedTab, setSelectedTab] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [assignmentType, setAssignmentType] = useState<"internal" | "third-party">("internal");
  const [selectedAssignee, setSelectedAssignee] = useState("");

  const filteredAudits = pendingAudits.filter(audit => {
    const matchesSearch = audit.company.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          audit.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = audit.status === selectedTab || selectedTab === "all";
    return matchesSearch && matchesStatus;
  });

  const handleAssign = () => {
    setIsAssigning(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Audit assigned successfully",
        description: `Audit ${selectedAudit?.id} has been assigned to ${selectedAssignee}.`,
      });
      setIsAssigning(false);
      setSelectedAudit(null);
      setSelectedAssignee("");
    }, 1500);
  };

  const renderPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500 hover:bg-red-600">High</Badge>;
      case "medium":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Medium</Badge>;
      case "low":
        return <Badge className="bg-green-500 hover:bg-green-600">Low</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-1">Audit Assignment</h1>
          <p className="text-gray-500">Manage and assign pending audits to internal or third-party auditors</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-9">
          <Card>
            <CardHeader className="pb-0">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                <CardTitle>Audits Management</CardTitle>
                <div className="flex items-center mt-2 lg:mt-0 gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search audits..." 
                      className="pl-10 w-full lg:w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter size={16} />
                    Filter
                  </Button>
                </div>
              </div>
              <Tabs defaultValue="pending" onValueChange={setSelectedTab}>
                <TabsList className="w-full grid grid-cols-4">
                  <TabsTrigger value="all" className="flex items-center gap-2">
                    <Shield size={16} />
                    All
                  </TabsTrigger>
                  <TabsTrigger value="pending" className="flex items-center gap-2">
                    <Clock size={16} />
                    Pending
                  </TabsTrigger>
                  <TabsTrigger value="in_progress" className="flex items-center gap-2">
                    <FileCheck size={16} />
                    In Progress
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    Completed
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader className="bg-gray-50">
                    <TableRow>
                      <TableHead className="w-[180px]">Audit ID</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAudits.length > 0 ? (
                      filteredAudits.map((audit) => (
                        <TableRow key={audit.id}>
                          <TableCell className="font-medium">{audit.id}</TableCell>
                          <TableCell>{audit.company}</TableCell>
                          <TableCell>{audit.auditType}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {new Date(audit.dueDate).toLocaleDateString()}
                            </div>
                          </TableCell>
                          <TableCell>{renderPriorityBadge(audit.priority)}</TableCell>
                          <TableCell>
                            <StatusBadge status={audit.status} />
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => setSelectedAudit(audit)}
                                className="flex items-center gap-1"
                              >
                                <Eye size={14} />
                                View
                              </Button>
                              {audit.status === "pending" && (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button 
                                      size="sm"
                                      className="bg-toreso-blue hover:bg-toreso-blue/90 flex items-center gap-1"
                                    >
                                      <UserCheck size={14} />
                                      Assign
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[500px]">
                                    <DialogHeader>
                                      <DialogTitle>Assign Audit</DialogTitle>
                                      <DialogDescription>
                                        Assign this audit to an internal auditor or third-party agency.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="py-4 space-y-4">
                                      <div className="flex flex-col space-y-1.5">
                                        <h3 className="font-medium">Audit Details</h3>
                                        <p className="text-sm">ID: {audit.id}</p>
                                        <p className="text-sm">Company: {audit.company}</p>
                                        <p className="text-sm">Type: {audit.auditType}</p>
                                        <p className="text-sm">Due Date: {new Date(audit.dueDate).toLocaleDateString()}</p>
                                      </div>
                                      
                                      <div className="flex flex-col space-y-1.5">
                                        <h3 className="font-medium">Assignment Type</h3>
                                        <div className="flex space-x-3">
                                          <Button
                                            type="button"
                                            variant={assignmentType === "internal" ? "default" : "outline"}
                                            onClick={() => setAssignmentType("internal")}
                                            className={assignmentType === "internal" ? "bg-toreso-blue hover:bg-toreso-blue/90" : ""}
                                          >
                                            Internal Auditor
                                          </Button>
                                          <Button
                                            type="button"
                                            variant={assignmentType === "third-party" ? "default" : "outline"}
                                            onClick={() => setAssignmentType("third-party")}
                                            className={assignmentType === "third-party" ? "bg-toreso-blue hover:bg-toreso-blue/90" : ""}
                                          >
                                            Third-Party Agency
                                          </Button>
                                        </div>
                                      </div>
                                      
                                      <div className="flex flex-col space-y-1.5">
                                        <h3 className="font-medium">
                                          {assignmentType === "internal" ? "Select Auditor" : "Select Agency"}
                                        </h3>
                                        <Select onValueChange={setSelectedAssignee}>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select assignee" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectGroup>
                                              <SelectLabel>
                                                {assignmentType === "internal" ? "Internal Auditors" : "Third-Party Agencies"}
                                              </SelectLabel>
                                              {assignmentType === "internal" ? (
                                                auditors.filter(a => a.availability === "Available").map((auditor) => (
                                                  <SelectItem key={auditor.id} value={auditor.name}>
                                                    {auditor.name} ({auditor.specialization})
                                                  </SelectItem>
                                                ))
                                              ) : (
                                                thirdPartyAgencies.map((agency) => (
                                                  <SelectItem key={agency.id} value={agency.name}>
                                                    {agency.name} ({agency.specialization})
                                                  </SelectItem>
                                                ))
                                              )}
                                            </SelectGroup>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                    <DialogFooter>
                                      <Button variant="outline">Cancel</Button>
                                      <Button 
                                        onClick={handleAssign} 
                                        disabled={!selectedAssignee || isAssigning}
                                        className="bg-toreso-blue hover:bg-toreso-blue/90"
                                      >
                                        {isAssigning ? "Assigning..." : "Confirm Assignment"}
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={7} className="h-24 text-center">
                          No audits found matching your criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {selectedAudit && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mt-6">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Audit Detail: {selectedAudit.id}</CardTitle>
                      <CardDescription>Detailed information about the selected audit</CardDescription>
                    </div>
                    <Button variant="outline" size="icon" onClick={() => setSelectedAudit(null)}>
                      <FileX size={18} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Company</h3>
                        <p className="text-lg font-medium">{selectedAudit.company}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Audit Type</h3>
                        <p className="text-lg">{selectedAudit.auditType}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Status</h3>
                        <StatusBadge status={selectedAudit.status} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Location</h3>
                        <p className="text-lg">{selectedAudit.location}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
                        <p className="text-lg">{new Date(selectedAudit.dueDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Priority</h3>
                        <div className="pt-1">{renderPriorityBadge(selectedAudit.priority)}</div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Audit Scope</h3>
                        <p className="text-lg">{selectedAudit.scope}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6 flex justify-between">
                  <Button variant="outline">View Company Profile</Button>
                  {selectedAudit.status === "pending" && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-toreso-blue hover:bg-toreso-blue/90">Assign Audit</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Assign Audit</DialogTitle>
                          <DialogDescription>
                            Assign this audit to an internal auditor or third-party agency.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 space-y-4">
                          <div className="flex flex-col space-y-1.5">
                            <h3 className="font-medium">Audit Details</h3>
                            <p className="text-sm">ID: {selectedAudit.id}</p>
                            <p className="text-sm">Company: {selectedAudit.company}</p>
                            <p className="text-sm">Type: {selectedAudit.auditType}</p>
                            <p className="text-sm">Due Date: {new Date(selectedAudit.dueDate).toLocaleDateString()}</p>
                          </div>
                          
                          <div className="flex flex-col space-y-1.5">
                            <h3 className="font-medium">Assignment Type</h3>
                            <div className="flex space-x-3">
                              <Button
                                type="button"
                                variant={assignmentType === "internal" ? "default" : "outline"}
                                onClick={() => setAssignmentType("internal")}
                                className={assignmentType === "internal" ? "bg-toreso-blue hover:bg-toreso-blue/90" : ""}
                              >
                                Internal Auditor
                              </Button>
                              <Button
                                type="button"
                                variant={assignmentType === "third-party" ? "default" : "outline"}
                                onClick={() => setAssignmentType("third-party")}
                                className={assignmentType === "third-party" ? "bg-toreso-blue hover:bg-toreso-blue/90" : ""}
                              >
                                Third-Party Agency
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex flex-col space-y-1.5">
                            <h3 className="font-medium">
                              {assignmentType === "internal" ? "Select Auditor" : "Select Agency"}
                            </h3>
                            <Select onValueChange={setSelectedAssignee}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select assignee" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>
                                    {assignmentType === "internal" ? "Internal Auditors" : "Third-Party Agencies"}
                                  </SelectLabel>
                                  {assignmentType === "internal" ? (
                                    auditors.filter(a => a.availability === "Available").map((auditor) => (
                                      <SelectItem key={auditor.id} value={auditor.name}>
                                        {auditor.name} ({auditor.specialization})
                                      </SelectItem>
                                    ))
                                  ) : (
                                    thirdPartyAgencies.map((agency) => (
                                      <SelectItem key={agency.id} value={agency.name}>
                                        {agency.name} ({agency.specialization})
                                      </SelectItem>
                                    ))
                                  )}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button 
                            onClick={handleAssign} 
                            disabled={!selectedAssignee || isAssigning}
                            className="bg-toreso-blue hover:bg-toreso-blue/90"
                          >
                            {isAssigning ? "Assigning..." : "Confirm Assignment"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </div>

        <div className="lg:col-span-3">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Audit Statistics</CardTitle>
                <CardDescription>Current audit status overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                    <span>Pending</span>
                  </div>
                  <span className="font-medium">{pendingAudits.filter(a => a.status === "pending").length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                    <span>In Progress</span>
                  </div>
                  <span className="font-medium">{pendingAudits.filter(a => a.status === "in_progress").length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    <span>Completed</span>
                  </div>
                  <span className="font-medium">{pendingAudits.filter(a => a.status === "completed").length}</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mt-2">
                  <div className="flex h-full">
                    <div 
                      className="bg-yellow-500 h-full" 
                      style={{ width: `${(pendingAudits.filter(a => a.status === "pending").length / pendingAudits.length) * 100}%` }}
                    ></div>
                    <div 
                      className="bg-blue-500 h-full" 
                      style={{ width: `${(pendingAudits.filter(a => a.status === "in_progress").length / pendingAudits.length) * 100}%` }}
                    ></div>
                    <div 
                      className="bg-green-500 h-full" 
                      style={{ width: `${(pendingAudits.filter(a => a.status === "completed").length / pendingAudits.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Due Dates</CardTitle>
                <CardDescription>Audits due soon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingAudits
                  .filter(audit => audit.status === "pending")
                  .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                  .slice(0, 3)
                  .map(audit => (
                    <div key={audit.id} className="flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-red-100">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium">{audit.company}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {new Date(audit.dueDate).toLocaleDateString()}
                        </div>
                        <Badge className="mt-1">{audit.auditType}</Badge>
                      </div>
                    </div>
                  ))}
                <Button 
                  variant="outline" 
                  className="w-full mt-2"
                  onClick={() => setSelectedTab("pending")}
                >
                  View All Pending Audits
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Auditors</CardTitle>
                <CardDescription>Internal auditors ready for assignment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {auditors
                  .filter(auditor => auditor.availability === "Available")
                  .sort((a, b) => a.assignments - b.assignments)
                  .slice(0, 3)
                  .map(auditor => (
                    <div key={auditor.id} className="flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-green-100">
                        <UserCheck className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium">{auditor.name}</p>
                        <p className="text-sm text-gray-500">{auditor.specialization}</p>
                        <div className="flex items-center text-sm mt-1">
                          <div className="flex items-center text-yellow-500 mr-2">
                            <Star className="h-3.5 w-3.5 fill-current" />
                            <span className="ml-1">{auditor.rating}</span>
                          </div>
                          <span className="text-gray-500">
                            {auditor.assignments} active {auditor.assignments === 1 ? 'assignment' : 'assignments'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                <Button variant="outline" className="w-full mt-2">
                  View All Auditors
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditAssignment;
