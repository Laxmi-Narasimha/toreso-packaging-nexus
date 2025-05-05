
import React from "react";
import { SupplierCard } from "./SupplierCard";

type StatCardsProps = {
  onViewAll?: (status: string) => void;
};

const StatCards = ({ onViewAll }: StatCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <SupplierCard 
        title="Pending Verifications" 
        count={12} 
        status="pending" 
        onViewAll={() => onViewAll && onViewAll("pending")}
      />
      
      <SupplierCard 
        title="In Review" 
        count={5} 
        status="in_review" 
        onViewAll={() => onViewAll && onViewAll("in_review")}
      />
      
      <SupplierCard 
        title="Approved Suppliers" 
        count={145} 
        status="approved" 
        onViewAll={() => onViewAll && onViewAll("approved")}
      />
      
      <SupplierCard 
        title="Rejected Applications" 
        count={24} 
        status="rejected" 
        onViewAll={() => onViewAll && onViewAll("rejected")}
      />
    </div>
  );
};

export default StatCards;
