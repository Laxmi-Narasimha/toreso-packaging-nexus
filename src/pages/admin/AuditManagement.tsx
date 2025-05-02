
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  ClipboardCheck, 
  Clock, 
  FileText, 
  Shield, 
  ShieldCheck, 
  Users 
} from "lucide-react";

const AuditManagement = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          Audit Management
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Streamline supplier compliance with comprehensive audit workflows, real-time tracking, and automated reporting.
        </p>
      </motion.div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid grid-cols-4 gap-4 bg-black/40 p-1 mb-8">
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Upcoming Audits
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Completed Audits
          </TabsTrigger>
          <TabsTrigger value="issues" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Open Issues
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-toreso-blue data-[state=active]:text-white">
            Audit Reports
          </TabsTrigger>
        </TabsList>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <motion.div variants={item}>
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">Total Audits</CardTitle>
                <CardDescription className="text-white/60">Year to date</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">128</span>
                  <span className="text-green-400 text-sm">+24% YOY</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">Upcoming Audits</CardTitle>
                <CardDescription className="text-white/60">Next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">17</span>
                  <span className="text-amber-400 text-sm">5 high priority</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">Compliance Rate</CardTitle>
                <CardDescription className="text-white/60">Supplier network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">94%</span>
                  <span className="text-green-400 text-sm">+3% QoQ</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">Critical Issues</CardTitle>
                <CardDescription className="text-white/60">Requiring action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">7</span>
                  <span className="text-red-400 text-sm">-2 last week</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <TabsContent value="upcoming" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Scheduled Audits</CardTitle>
                <CardDescription className="text-white/60">
                  Upcoming audits for the next 30 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Supplier</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Auditor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { supplier: "EcoPackage Solutions", type: "Quality Assessment", date: "May 15, 2025", auditor: "Sarah Johnson", status: "Scheduled", priority: "High" },
                      { supplier: "PaperCraft Industries", type: "Environmental Compliance", date: "May 18, 2025", auditor: "Michael Chen", status: "Confirmed", priority: "Medium" },
                      { supplier: "Global Pack Solutions", type: "Social Compliance", date: "May 22, 2025", auditor: "Emily Rodriguez", status: "Pending", priority: "Medium" },
                      { supplier: "BioWrap Packaging", type: "Quality Assessment", date: "May 29, 2025", auditor: "James Wilson", status: "Scheduled", priority: "High" },
                      { supplier: "Sustainable Materials Inc.", type: "Environmental Compliance", date: "June 3, 2025", auditor: "Alicia Chang", status: "Scheduled", priority: "Low" },
                    ].map((audit, i) => (
                      <TableRow key={i} className="border-white/10">
                        <TableCell className="font-medium">{audit.supplier}</TableCell>
                        <TableCell>{audit.type}</TableCell>
                        <TableCell>{audit.date}</TableCell>
                        <TableCell>{audit.auditor}</TableCell>
                        <TableCell>
                          <Badge className={`${
                            audit.status === "Confirmed" ? "bg-green-500" :
                            audit.status === "Scheduled" ? "bg-blue-500" :
                            "bg-yellow-500"
                          } text-white`}>
                            {audit.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="ghost" className="hover:bg-white/10">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="completed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Completed Audits</CardTitle>
                <CardDescription className="text-white/60">
                  Recently completed supplier audits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Supplier</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Completion Date</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { supplier: "QualiPack Corp", type: "Quality Assessment", date: "Apr 28, 2025", score: "93%", status: "Passed" },
                      { supplier: "Green Solutions Ltd", type: "Environmental Compliance", date: "Apr 22, 2025", score: "87%", status: "Passed" },
                      { supplier: "BoxCraft Manufacturers", type: "Social Compliance", date: "Apr 15, 2025", score: "76%", status: "Remediation" },
                      { supplier: "Eco Friendly Packaging", type: "Quality Assessment", date: "Apr 10, 2025", score: "91%", status: "Passed" },
                      { supplier: "Innovative Materials Co", type: "Environmental Compliance", date: "Apr 5, 2025", score: "68%", status: "Failed" },
                    ].map((audit, i) => (
                      <TableRow key={i} className="border-white/10">
                        <TableCell className="font-medium">{audit.supplier}</TableCell>
                        <TableCell>{audit.type}</TableCell>
                        <TableCell>{audit.date}</TableCell>
                        <TableCell>{audit.score}</TableCell>
                        <TableCell>
                          <Badge className={`${
                            audit.status === "Passed" ? "bg-green-500" :
                            audit.status === "Remediation" ? "bg-amber-500" :
                            "bg-red-500"
                          } text-white`}>
                            {audit.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="ghost" className="hover:bg-white/10">
                            View Report
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="issues" className="mt-0">
          {/* Issues content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Open Issues</CardTitle>
                <CardDescription className="text-white/60">
                  Issues requiring resolution from recent audits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Supplier</TableHead>
                      <TableHead>Issue</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Reported</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { supplier: "BoxCraft Manufacturers", issue: "Insufficient worker safety protocols", severity: "High", reported: "Apr 15, 2025", dueDate: "May 15, 2025" },
                      { supplier: "Innovative Materials Co", issue: "Non-compliant waste disposal", severity: "Critical", reported: "Apr 5, 2025", dueDate: "May 5, 2025" },
                      { supplier: "PackRight Industries", issue: "Documentation inconsistencies", severity: "Medium", reported: "Apr 10, 2025", dueDate: "May 10, 2025" },
                      { supplier: "Innovative Materials Co", issue: "Excessive energy consumption", severity: "Medium", reported: "Apr 5, 2025", dueDate: "May 20, 2025" },
                      { supplier: "EcoTech Packaging", issue: "Material quality inconsistency", severity: "High", reported: "Apr 22, 2025", dueDate: "May 22, 2025" },
                    ].map((issue, i) => (
                      <TableRow key={i} className="border-white/10">
                        <TableCell className="font-medium">{issue.supplier}</TableCell>
                        <TableCell>{issue.issue}</TableCell>
                        <TableCell>
                          <Badge className={`${
                            issue.severity === "Critical" ? "bg-red-600" :
                            issue.severity === "High" ? "bg-red-400" :
                            "bg-amber-500"
                          } text-white`}>
                            {issue.severity}
                          </Badge>
                        </TableCell>
                        <TableCell>{issue.reported}</TableCell>
                        <TableCell>{issue.dueDate}</TableCell>
                        <TableCell className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10">
                            Escalate
                          </Button>
                          <Button size="sm" variant="ghost" className="hover:bg-white/10">
                            Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="reports" className="mt-0">
          {/* Reports content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Audit Reports</CardTitle>
                <CardDescription className="text-white/60">
                  Generated reports and analytics from supplier audits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[
                    { title: "Quarterly Compliance Summary", date: "Q1 2025", type: "PDF", icon: <FileText className="text-toreso-blue" /> },
                    { title: "Environmental Impact Analysis", date: "March 2025", type: "XLSX", icon: <ShieldCheck className="text-green-400" /> },
                    { title: "Supplier Risk Assessment", date: "February 2025", type: "PDF", icon: <Shield className="text-amber-400" /> },
                    { title: "Social Compliance Overview", date: "January 2025", type: "PDF", icon: <Users className="text-purple-400" /> },
                    { title: "Quality Management Metrics", date: "Q4 2024", type: "XLSX", icon: <ClipboardCheck className="text-blue-400" /> },
                    { title: "Annual Audit Performance", date: "2024", type: "PDF", icon: <Calendar className="text-red-400" /> },
                  ].map((report, i) => (
                    <Card key={i} className="bg-black/20 border-white/5 hover:border-white/20 transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="p-3 bg-white/5 rounded-lg">
                            {report.icon}
                          </div>
                          <Badge variant="outline">{report.type}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-medium mb-1">{report.title}</h3>
                        <p className="text-sm text-white/60">{report.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12"
      >
        <Card className="bg-toreso-blue/20 border-toreso-blue/30 text-white">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-medium flex items-center">
                  <Clock className="mr-2" size={20} />
                  Schedule your next audit
                </h3>
                <p className="text-white/70">
                  Stay ahead of compliance requirements with our automated scheduling system
                </p>
              </div>
              <Button className="bg-toreso-blue hover:bg-toreso-darkBlue">
                Schedule Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuditManagement;
