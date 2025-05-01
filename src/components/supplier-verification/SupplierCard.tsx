
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";

type SupplierCardProps = {
  title: string;
  count: number;
  status: "pending" | "in_review" | "approved" | "rejected";
};

export const SupplierCard = ({ title, count, status }: SupplierCardProps) => {
  const getIcon = () => {
    switch (status) {
      case "pending":
        return <Clock size={24} className="text-blue-500" />;
      case "in_review":
        return <Eye size={24} className="text-purple-500" />;
      case "approved":
        return <CheckCircle size={24} className="text-green-500" />;
      case "rejected":
        return <XCircle size={24} className="text-red-500" />;
    }
  };

  const getIconBackground = () => {
    switch (status) {
      case "pending":
        return "bg-blue-500/20";
      case "in_review":
        return "bg-purple-500/20";
      case "approved":
        return "bg-green-500/20";
      case "rejected":
        return "bg-red-500/20";
    }
  };

  return (
    <Card className="bg-black/30 backdrop-blur border-white/10 text-white">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className={`${getIconBackground()} p-3 rounded-full mb-4`}>
          {getIcon()}
        </div>
        <h3 className="text-2xl font-bold mb-1">{count}</h3>
        <p className="text-white/70 text-center">{title}</p>
      </CardContent>
    </Card>
  );
};
