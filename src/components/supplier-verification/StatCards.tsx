
import React from "react";
import { SupplierCard } from "./SupplierCard";

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <SupplierCard 
        title="Pending Verifications" 
        count={12} 
        status="pending" 
      />
      
      <SupplierCard 
        title="In Review" 
        count={5} 
        status="in_review" 
      />
      
      <SupplierCard 
        title="Approved Suppliers" 
        count={145} 
        status="approved" 
      />
      
      <SupplierCard 
        title="Rejected Applications" 
        count={24} 
        status="rejected" 
      />
    </div>
  );
};

export default StatCards;
