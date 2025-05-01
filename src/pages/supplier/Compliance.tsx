
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Info,
  Upload,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const certifications = [
  {
    id: 1,
    name: "ISO 9001:2015",
    description: "Quality Management System",
    status: "verified",
    progress: 100,
    expiryDate: "2025-06-30",
    verificationDate: "2023-06-25",
    documentUrl: "#",
  },
  {
    id: 2,
    name: "ISO 14001:2015",
    description: "Environmental Management System",
    status: "verified",
    progress: 100,
    expiryDate: "2025-04-22",
    verificationDate: "2023-04-15",
    documentUrl: "#",
  },
  {
    id: 3,
    name: "FSC Chain of Custody",
    description: "Forest Stewardship Council Certification",
    status: "pending",
    progress: 60,
    expiryDate: "N/A",
    verificationDate: "In Progress",
    documentUrl: "#",
  },
  {
    id: 4,
    name: "REACH Compliance",
    description: "EU Chemical Regulation",
    status: "expired",
    progress: 100,
    expiryDate: "2023-02-15",
    verificationDate: "2022-02-10",
    documentUrl: "#",
  },
  {
    id: 5,
    name: "BRC Packaging",
    description: "Global Standard for Packaging Materials",
    status: "in_progress",
    progress: 25,
    expiryDate: "N/A",
    verificationDate: "Not Started",
    documentUrl: "#",
  },
];

const audits = [
  {
    id: 1,
    name: "Annual Quality Audit",
    date: "2023-09-15",
    status: "completed",
    score: 92,
    auditor: "Quality Assurance International",
    report: "#",
  },
  {
    id: 2,
    name: "Environmental Compliance Audit",
    date: "2023-11-22",
    status: "completed",
    score: 88,
    auditor: "EcoVeritas Certification",
    report: "#",
  },
  {
    id: 3,
    name: "Supplier Production Facility Audit",
    date: "2024-03-10",
    status: "scheduled",
    score: null,
    auditor: "Supply Chain Verifiers Ltd.",
    report: null,
  },
  {
    id: 4,
    name: "Packaging Material Safety Audit",
    date: "2024-06-18",
    status: "scheduled",
    score: null,
    auditor: "SafePack Standards",
    report: null,
  },
];

const requirements = [
  {
    id: 1,
    name: "RoHS Compliance Declaration",
    description: "Restriction of Hazardous Substances",
    status: "completed",
    progress: 100,
    dueDate: "2023-08-15",
    submissionDate: "2023-08-10",
  },
  {
    id: 2,
    name: "Child Labor Policy",
    description: "Declaration of company policy against child labor",
    status: "completed",
    progress: 100,
    dueDate: "2023-08-01",
    submissionDate: "2023-07-28",
  },
  {
    id: 3,
    name: "Material Data Safety Sheets",
    description: "Safety documentation for all materials",
    status: "in_progress",
    progress: 65,
    dueDate: "2024-02-28",
    submissionDate: null,
  },
  {
    id: 4,
    name: "Carbon Footprint Report",
    description: "Annual carbon emissions assessment",
    status: "not_started",
    progress: 0,
    dueDate: "2024-04-30",
    submissionDate: null,
  },
  {
    id: 5,
    name: "Fair Labor Practices Audit",
    description: "Assessment of labor conditions",
    status: "not_started",
    progress: 0,
    dueDate: "2024-05-15",
    submissionDate: null,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "verified":
    case "completed":
      return "bg-green-500 hover:bg-green-600";
    case "pending":
    case "in_progress":
      return "bg-blue-500 hover:bg-blue-600";
    case "scheduled":
      return "bg-purple-500 hover:bg-purple-600";
    case "expired":
      return "bg-red-500 hover:bg-red-600";
    case "not_started":
      return "bg-gray-500 hover:bg-gray-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
};

const getProgressColor = (progress: number) => {
  if (progress >= 80) return "bg-green-500";
  if (progress >= 40) return "bg-blue-500";
  return "bg-red-500";
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "verified":
    case "completed":
      return <CheckCircle size={16} className="text-green-500" />;
    case "pending":
    case "in_progress":
      return <Clock size={16} className="text-blue-500" />;
    case "scheduled":
      return <Calendar size={16} className="text-purple-500" />;
    case "expired":
      return <AlertCircle size={16} className="text-red-500" />;
    case "not_started":
      return <Info size={16} className="text-gray-500" />;
    default:
      return null;
  }
};

const ComplianceDashboard = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Compliance & Certifications</h1>
          <p className="text-gray-500">Manage your certifications, audits, and compliance requirements</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="default">
            <Upload size={16} className="mr-2" />
            Upload Document
          </Button>
          <Button variant="outline">
            <Calendar size={16} className="mr-2" />
            Schedule Audit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Compliance Score</CardTitle>
            <CardDescription>Overall compliance rating</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center justify-center mb-2">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="42"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-green-500"
                    strokeWidth="8"
                    strokeDasharray={264}
                    strokeDashoffset={264 - (264 * 87) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="42"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">87%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500 text-center w-full">
              <span className="inline-flex items-center mr-2">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                Last updated: Jan 25, 2024
              </span>
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Certification Status</CardTitle>
            <CardDescription>Active and pending certifications</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Active</span>
                <span className="font-semibold">2</span>
              </div>
              <Progress 
                value={40} 
                className={cn("h-2 bg-gray-200", "[&>div]:bg-blue-500")}
              />
              <div className="flex justify-between items-center">
                <span>Pending</span>
                <span className="font-semibold">2</span>
              </div>
              <Progress 
                value={40} 
                className={cn("h-2 bg-gray-200", "[&>div]:bg-yellow-500")}
              />
              <div className="flex justify-between items-center">
                <span>Expired</span>
                <span className="font-semibold">1</span>
              </div>
              <Progress 
                value={20} 
                className={cn("h-2 bg-gray-200", "[&>div]:bg-red-500")}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Upcoming Requirements</CardTitle>
            <CardDescription>Action items needed soon</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <Calendar size={16} className="text-blue-500 mr-2" />
                  Audit (March 10)
                </span>
                <Badge className="bg-purple-500 hover:bg-purple-600">Scheduled</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <FileText size={16} className="text-orange-500 mr-2" />
                  Material Safety Sheets
                </span>
                <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <AlertCircle size={16} className="text-red-500 mr-2" />
                  ISO 14001 (Expires Apr 22)
                </span>
                <Badge className="bg-orange-500 hover:bg-orange-600">Soon</Badge>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">View All</Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 bg-gray-100 dark:bg-gray-800">
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="audits">Audits</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
        </TabsList>
        <TabsContent value="certifications">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{cert.name}</CardTitle>
                      <CardDescription>{cert.description}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(cert.status)}>
                      {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Completion Status</p>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={cert.progress} 
                          className={cn("h-2 bg-gray-200",
                            cert.progress > 90 ? "[&>div]:bg-green-500" :
                            cert.progress > 70 ? "[&>div]:bg-blue-500" :
                            cert.progress > 40 ? "[&>div]:bg-yellow-500" :
                            "[&>div]:bg-red-500"
                          )}
                        />
                        <span className="text-sm font-medium">{cert.progress}%</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Expiry Date</p>
                        <p className="text-sm font-medium flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {cert.expiryDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Verification Date</p>
                        <p className="text-sm font-medium flex items-center">
                          <CheckCircle size={14} className="mr-1" />
                          {cert.verificationDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={cert.documentUrl}>
                      <FileText size={14} className="mr-1" />
                      View Document
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download size={14} className="mr-1" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="audits">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {audits.map((audit) => (
              <Card key={audit.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{audit.name}</CardTitle>
                      <CardDescription>By {audit.auditor}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(audit.status)}>
                      {audit.status.charAt(0).toUpperCase() + audit.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span>{audit.date}</span>
                    </div>
                    {audit.score !== null && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Audit Score</p>
                        <div className="flex items-center gap-2">
                          <Progress 
                            value={audit.score} 
                            className={cn("h-2 bg-gray-200",
                              audit.score > 90 ? "[&>div]:bg-green-500" :
                              audit.score > 70 ? "[&>div]:bg-blue-500" :
                              audit.score > 40 ? "[&>div]:bg-yellow-500" :
                              "[&>div]:bg-red-500"
                            )}
                          />
                          <span className="text-sm font-medium">{audit.score}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end border-t pt-4">
                  {audit.report && (
                    <Button variant="ghost" size="sm">
                      <FileText size={14} className="mr-1" />
                      View Report
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="requirements">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {requirements.map((req) => (
              <Card key={req.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{req.name}</CardTitle>
                      <CardDescription>{req.description}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(req.status)}>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(req.status)}
                        <span>
                          {req.status
                            .split("_")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}
                        </span>
                      </div>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Completion Status</p>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={req.progress} 
                          className={cn("h-2 bg-gray-200",
                            req.progress > 90 ? "[&>div]:bg-green-500" :
                            req.progress > 70 ? "[&>div]:bg-blue-500" :
                            req.progress > 40 ? "[&>div]:bg-yellow-500" :
                            "[&>div]:bg-red-500"
                          )}
                        />
                        <span className="text-sm font-medium">{req.progress}%</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Due Date</p>
                        <p className="text-sm font-medium flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {req.dueDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Submission Date</p>
                        <p className="text-sm font-medium flex items-center">
                          {req.submissionDate ? (
                            <>
                              <CheckCircle size={14} className="mr-1 text-green-500" />
                              {req.submissionDate}
                            </>
                          ) : (
                            <>
                              <Clock size={14} className="mr-1 text-gray-500" />
                              Pending
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="ghost" size="sm" disabled={req.status === "not_started"}>
                    <FileText size={14} className="mr-1" />
                    View Details
                  </Button>
                  {req.status !== "completed" && (
                    <Button variant="outline" size="sm">
                      <Upload size={14} className="mr-1" />
                      Upload
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComplianceDashboard;
