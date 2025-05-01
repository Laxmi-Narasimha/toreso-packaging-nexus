
export interface VerificationStep {
  name: string;
  status: "completed" | "in_progress" | "not_started" | "rejected";
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface Supplier {
  id: number;
  companyName: string;
  logo: string;
  location: string;
  submissionDate: string;
  status: string;
  completionPercent: number;
  documentCount: number;
  category: string;
  contact: ContactInfo;
  verificationSteps: VerificationStep[];
}

export const supplierVerifications: Supplier[] = [
  {
    id: 1,
    companyName: "EcoPackage Solutions",
    logo: "https://ui-avatars.com/api/?name=EP&background=0D8ABC&color=fff",
    location: "Mumbai, India",
    submissionDate: "2024-04-15",
    status: "pending",
    completionPercent: 85,
    documentCount: 8,
    category: "Corrugated Packaging",
    contact: {
      name: "Raj Mehta",
      email: "raj.mehta@ecopackage.com",
      phone: "+91 98765 43210",
      website: "ecopackage.com"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "in_progress" },
      { name: "Environmental Compliance", status: "completed" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "in_progress" },
      { name: "Reference Check", status: "not_started" },
      { name: "Financial Review", status: "completed" },
    ]
  },
  {
    id: 2,
    companyName: "BoxCraft Ltd.",
    logo: "https://ui-avatars.com/api/?name=BC&background=5B21B6&color=fff",
    location: "Guangzhou, China",
    submissionDate: "2024-04-10",
    status: "in_review",
    completionPercent: 92,
    documentCount: 12,
    category: "Boxes & Cartons",
    contact: {
      name: "Lin Wei",
      email: "l.wei@boxcraft.cn",
      phone: "+86 123 4567 8901",
      website: "boxcraft.cn"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "completed" },
      { name: "Environmental Compliance", status: "completed" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "completed" },
      { name: "Reference Check", status: "in_progress" },
      { name: "Financial Review", status: "completed" },
    ]
  },
  {
    id: 3,
    companyName: "Premium Containers Ltd.",
    logo: "https://ui-avatars.com/api/?name=PC&background=B91C1C&color=fff",
    location: "London, UK",
    submissionDate: "2024-04-05",
    status: "approved",
    completionPercent: 100,
    documentCount: 14,
    category: "Premium Packaging",
    contact: {
      name: "Oliver Smith",
      email: "o.smith@premiumcontainers.co.uk",
      phone: "+44 20 7946 0892",
      website: "premiumcontainers.co.uk"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "completed" },
      { name: "Environmental Compliance", status: "completed" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "completed" },
      { name: "Reference Check", status: "completed" },
      { name: "Financial Review", status: "completed" },
    ]
  },
  {
    id: 4,
    companyName: "SafeWrap Packaging Co.",
    logo: "https://ui-avatars.com/api/?name=SW&background=D97706&color=fff",
    location: "Melbourne, Australia",
    submissionDate: "2024-03-28",
    status: "rejected",
    completionPercent: 65,
    documentCount: 7,
    category: "Protective Packaging",
    contact: {
      name: "Emma Thompson",
      email: "emma@safewrap.com.au",
      phone: "+61 3 9876 5432",
      website: "safewrap.com.au"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "rejected" },
      { name: "Quality Certifications", status: "in_progress" },
      { name: "Environmental Compliance", status: "not_started" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "rejected" },
      { name: "Reference Check", status: "not_started" },
      { name: "Financial Review", status: "in_progress" },
    ]
  },
  {
    id: 5,
    companyName: "GreenBox Packaging",
    logo: "https://ui-avatars.com/api/?name=GB&background=047857&color=fff",
    location: "Berlin, Germany",
    submissionDate: "2024-04-18",
    status: "pending",
    completionPercent: 72,
    documentCount: 9,
    category: "Sustainable Packaging",
    contact: {
      name: "Lukas Müller",
      email: "l.muller@greenbox.de",
      phone: "+49 30 1234567",
      website: "greenbox.de"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "completed" },
      { name: "Environmental Compliance", status: "in_progress" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "in_progress" },
      { name: "Reference Check", status: "not_started" },
      { name: "Financial Review", status: "in_progress" },
    ]
  },
  {
    id: 6,
    companyName: "Flex Packaging Solutions",
    logo: "https://ui-avatars.com/api/?name=FP&background=7C3AED&color=fff",
    location: "Toronto, Canada",
    submissionDate: "2024-03-30",
    status: "in_review",
    completionPercent: 95,
    documentCount: 11,
    category: "Flexible Packaging",
    contact: {
      name: "Sarah Johnson",
      email: "s.johnson@flexpackaging.ca",
      phone: "+1 416-555-7890",
      website: "flexpackaging.ca"
    },
    verificationSteps: [
      { name: "Business Registration", status: "completed" },
      { name: "Tax Documentation", status: "completed" },
      { name: "Quality Certifications", status: "completed" },
      { name: "Environmental Compliance", status: "completed" },
      { name: "Production Capacity", status: "completed" },
      { name: "Sample Evaluation", status: "completed" },
      { name: "Reference Check", status: "in_progress" },
      { name: "Financial Review", status: "completed" },
    ]
  },
];
