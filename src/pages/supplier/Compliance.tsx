import React from "react";
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
  BadgeCheck,
  CheckCircle,
  Calendar,
  AlertTriangle,
  Download,
  Upload,
  FileText,
  ChevronRight,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Compliance = () => {
  // Mock data for certifications
  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      status: "Active",
      issueDate: "May 12, 2022",
      expiryDate: "May 11, 2025",
      issuedBy: "TÜV SÜD",
      documents: ["ISO_9001_Certificate.pdf", "Quality_Manual.pdf"],
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      status: "Active",
      issueDate: "June 23, 2022",
      expiryDate: "June 22, 2025",
      issuedBy: "Bureau Veritas",
      documents: ["ISO_14001_Certificate.pdf", "Environmental_Policy.pdf"],
    },
    {
      id: 3,
      name: "OHSAS 18001",
      status: "Expiring Soon",
      issueDate: "August 05, 2021",
      expiryDate: "August 04, 2023",
      issuedBy: "SGS",
      documents: ["OHSAS_18001_Certificate.pdf", "Safety_Manual.pdf"],
    },
    {
      id: 4,
      name: "FSSC 22000",
      status: "Renewal in Progress",
      issueDate: "March 15, 2020",
      expiryDate: "March 14, 2023",
      issuedBy: "DNV GL",
      documents: ["FSSC_22000_Certificate.pdf", "Food_Safety_Manual.pdf"],
    },
  ];

  // Mock data for audits
  const audits = [
    {
      id: 1,
      type: "Quality Audit",
      status: "Scheduled",
      date: "July 25, 2023",
      auditor: "TÜV SÜD",
      score: null,
    },
    {
      id: 2,
      type: "Environmental Compliance",
      status: "Completed",
      date: "May 10, 2023",
      auditor: "Bureau Veritas",
      score: 92,
    },
    {
      id: 3,
      type: "Social Compliance",
      status: "Completed",
      date: "April 05, 2023",
      auditor: "SGS",
      score: 88,
    },
    {
      id: 4,
      type: "Quality Management System",
      status: "Failed",
      date: "February 18, 2023",
      auditor: "TÜV SÜD",
      score: 65,
    },
    {
      id: 5,
      type: "Quality Audit",
      status: "Completed",
      date: "November 22, 2022",
      auditor: "DNV GL",
      score: 95,
    },
  ];

  // Mock data for compliance tasks
  const complianceTasks = [
    {
      id: 1,
      title: "Prepare for upcoming Quality Audit",
      dueDate: "July 20, 2023",
      priority: "High",
      status: "In Progress",
      progress: 65,
    },
    {
      id: 2,
      title: "Renew OHSAS 18001 Certificate",
      dueDate: "July 15, 2023",
      priority: "High",
      status: "Not Started",
      progress: 0,
    },
    {
      id: 3,
      title: "Update Safety Manual",
      dueDate: "July 30, 2023",
      priority: "Medium",
      status: "In Progress",
      progress: 40,
    },
    {
      id: 4,
      title: "Complete Environmental Compliance Report",
      dueDate: "August 10, 2023",
      priority: "Medium",
      status: "Not Started",
      progress: 0,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Audit & Compliance Management</h1>
        <p className="text-gray-500">
          Manage your certifications, audits, and compliance requirements
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Certifications</p>
                <p className="text-3xl font-bold mt-2">4</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <BadgeCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Upcoming Audits</p>
                <p className="text-3xl font-bold mt-2">1</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Expiring Certifications</p>
                <p className="text-3xl font-bold mt-2">1</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Overall Compliance Score</p>
                <p className="text-3xl font-bold mt-2">92%</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="certifications" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="certifications" className="flex items-center">
            <BadgeCheck size={18} className="mr-2" /> Certifications
          </TabsTrigger>
          <TabsTrigger value="audits" className="flex items-center">
            <FileText size={18} className="mr-2" /> Audits
          </TabsTrigger>
          <TabsTrigger value="compliance-tasks" className="flex items-center">
            <CheckCircle size={18} className="mr-2" /> Compliance Tasks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="certifications">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Certifications & Standards</CardTitle>
                <CardDescription>Manage all your quality and compliance certifications</CardDescription>
              </div>
              <Button>
                <Upload size={16} className="mr-2" /> Upload Certificate
              </Button>
            </CardHeader>
            <CardContent>
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="mb-6 pb-6 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold">{cert.name}</h3>
                        <Badge
                          className={`ml-3 ${
                            cert.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : cert.status === "Expiring Soon"
                              ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          }`}
                        >
                          {cert.status}
                        </Badge>
                      </div>
                      <div className="flex mt-2 text-sm text-gray-500">
                        <div className="mr-6">
                          <span className="font-medium">Issued:</span> {cert.issueDate}
                        </div>
                        <div className="mr-6">
                          <span className="font-medium">Expires:</span>{" "}
                          <span
                            className={
                              cert.status === "Expiring Soon" ? "text-yellow-600" : ""
                            }
                          >
                            {cert.expiryDate}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">Issued by:</span> {cert.issuedBy}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0">
                      <Button variant="outline" size="sm" className="mr-2">
                        <Download size={16} className="mr-1" /> Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Upload size={16} className="mr-1" /> Update
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {cert.documents.map((doc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600 hover:text-toreso-teal cursor-pointer"
                      >
                        <FileText size={14} className="mr-1" /> {doc}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audits">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Audit History</CardTitle>
                <CardDescription>Records of all quality and compliance audits</CardDescription>
              </div>
              <Button>
                <Calendar size={16} className="mr-2" /> Schedule Audit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <tr className="bg-gray-50 text-gray-600">
                      <th className="px-4 py-3 font-medium">Audit Type</th>
                      <th className="px-4 py-3 font-medium">Date</th>
                      <th className="px-4 py-3 font-medium">Auditor</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Score</th>
                      <th className="px-4 py-3 font-medium">Actions</th>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {audits.map((audit) => (
                      <tr key={audit.id} className="border-b">
                        <td className="px-4 py-3 font-medium">{audit.type}</td>
                        <td className="px-4 py-3">{audit.date}</td>
                        <td className="px-4 py-3">{audit.auditor}</td>
                        <td className="px-4 py-3">
                          <Badge
                            className={
                              audit.status === "Scheduled"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : audit.status === "Completed" && audit.score >= 70
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                          >
                            {audit.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          {audit.score ? (
                            <div className="flex items-center">
                              {audit.score}
                              <Progress
                                value={audit.score}
                                className={cn(
                                  "w-16 h-2 ml-2",
                                  audit.score >= 90
                                    ? "bg-secondary [&>div]:bg-green-500"
                                    : audit.score >= 70
                                    ? "bg-secondary [&>div]:bg-yellow-500"
                                    : "bg-secondary [&>div]:bg-red-500"
                                )}
                              />
                            </div>
                          ) : (
                            "Pending"
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="link" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance-tasks">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Compliance Tasks</CardTitle>
                <CardDescription>Tasks to maintain your compliance status</CardDescription>
              </div>
              <Button>
                <CheckCircle size={16} className="mr-2" /> Add Task
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceTasks.map((task) => (
                  <div
                    key={task.id}
                    className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{task.title}</h3>
                      <Badge
                        className={
                          task.priority === "High"
                            ? "bg-red-100 text-red-800 hover:bg-red-100"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }
                      >
                        {task.priority} Priority
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" /> Due: {task.dueDate}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" /> Status: {task.status}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full mr-4">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{task.progress}%</span>
                        </div>
                        <Progress
                          value={task.progress}
                          className={cn(
                            "h-2",
                            task.progress >= 75
                              ? "bg-secondary [&>div]:bg-green-500"
                              : task.progress >= 25
                              ? "bg-secondary [&>div]:bg-yellow-500"
                              : "bg-secondary [&>div]:bg-red-500"
                          )}
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users size={20} className="mr-2 text-toreso-teal" /> 
              Audit Contacts
            </CardTitle>
            <CardDescription>Key contacts for audit and compliance matters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500">Quality Manager</p>
                  <p className="text-xs text-gray-500">john.doe@example.com | +91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Priya Sharma</p>
                  <p className="text-sm text-gray-500">Compliance Director</p>
                  <p className="text-xs text-gray-500">priya.sharma@example.com | +91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Amit Rao</p>
                  <p className="text-sm text-gray-500">Environmental Officer</p>
                  <p className="text-xs text-gray-500">amit.rao@example.com | +91 76543 21098</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Resources</CardTitle>
            <CardDescription>Helpful guides and documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <a href="#" className="flex items-center p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <FileText size={20} className="text-blue-600 mr-3" />
                <div>
                  <p className="font-medium">ISO 9001:2015 Requirements Guide</p>
                  <p className="text-sm text-gray-500">Complete breakdown of requirements</p>
                </div>
                <ChevronRight size={18} className="ml-auto text-gray-400" />
              </a>
              
              <a href="#" className="flex items-center p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <FileText size={20} className="text-green-600 mr-3" />
                <div>
                  <p className="font-medium">Environmental Compliance Checklist</p>
                  <p className="text-sm text-gray-500">Ensure you meet all requirements</p>
                </div>
                <ChevronRight size={18} className="ml-auto text-gray-400" />
              </a>
              
              <a href="#" className="flex items-center p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <FileText size={20} className="text-purple-600 mr-3" />
                <div>
                  <p className="font-medium">Audit Preparation Guide</p>
                  <p className="text-sm text-gray-500">Step-by-step preparation process</p>
                </div>
                <ChevronRight size={18} className="ml-auto text-gray-400" />
              </a>
              
              <a href="#" className="flex items-center p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <FileText size={20} className="text-orange-600 mr-3" />
                <div>
                  <p className="font-medium">Health & Safety Documentation</p>
                  <p className="text-sm text-gray-500">OHSAS 18001 requirements</p>
                </div>
                <ChevronRight size={18} className="ml-auto text-gray-400" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Compliance;
