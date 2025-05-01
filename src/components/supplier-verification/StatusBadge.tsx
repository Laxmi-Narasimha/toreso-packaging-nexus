
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface StatusBadgeProps {
  status: string;
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "bg-green-500 hover:bg-green-600";
    case "pending":
      return "bg-blue-500 hover:bg-blue-600";
    case "in_review":
      return "bg-purple-500 hover:bg-purple-600";
    case "rejected":
      return "bg-red-500 hover:bg-red-600";
    case "completed":
      return "bg-green-500 hover:bg-green-600";
    case "in_progress":
      return "bg-blue-500 hover:bg-blue-600";
    case "not_started":
      return "bg-gray-500 hover:bg-gray-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "approved":
      return <CheckCircle size={16} />;
    case "pending":
      return <Clock size={16} />;
    case "in_review":
      return <Eye size={16} />;
    case "rejected":
      return <XCircle size={16} />;
    case "completed":
      return <CheckCircle size={16} />;
    case "in_progress":
      return <Clock size={16} />;
    case "not_started":
      return <AlertCircle size={16} />;
    default:
      return null;
  }
};

export const getStatusDisplayName = (status: string) => {
  return status
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <Badge className={getStatusColor(status)}>
      <div className="flex items-center space-x-1">
        {getStatusIcon(status)}
        <span>{getStatusDisplayName(status)}</span>
      </div>
    </Badge>
  );
};
