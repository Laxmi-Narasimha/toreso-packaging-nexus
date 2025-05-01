
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StatCards from "@/components/supplier-verification/StatCards";
import FilterTabs from "@/components/supplier-verification/FilterTabs";
import { SupplierList } from "@/components/supplier-verification/SupplierList";
import { SupplierDetails } from "@/components/supplier-verification/SupplierDetails";
import { supplierVerifications } from "@/types/supplier";

const SupplierVerification = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState<number | null>(null);

  const filteredSuppliers = supplierVerifications.filter(supplier => {
    // Filter by search query
    const matchesSearch = supplier.companyName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         supplier.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by tab
    const matchesTab = activeTab === "all" || 
                       supplier.status === activeTab;
                       
    return matchesSearch && matchesTab;
  });

  const selectedSupplierData = supplierVerifications.find(s => s.id === selectedSupplier) || null;

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex justify-between items-start flex-wrap gap-4"
      >
        <div>
          <h1 className="text-3xl font-display font-medium text-white mb-2">Supplier Verification</h1>
          <p className="text-white/70">Validate and approve supplier applications</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <StatCards />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FilterTabs 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="bg-black/30 backdrop-blur border-white/10 text-white overflow-hidden">
                <CardHeader className="pb-0">
                  <CardTitle className="text-xl font-medium">
                    {filteredSuppliers.length} Supplier {filteredSuppliers.length === 1 ? "Verification" : "Verifications"}
                  </CardTitle>
                  <CardDescription className="text-white/50">
                    {activeTab === "all" ? "All supplier applications" : `${activeTab.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} applications`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 py-4">
                  <SupplierList 
                    suppliers={filteredSuppliers} 
                    selectedSupplier={selectedSupplier}
                    onSelectSupplier={setSelectedSupplier}
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <SupplierDetails supplier={selectedSupplierData} />
            </div>
          </div>
        </FilterTabs>
      </motion.div>
    </div>
  );
};

export default SupplierVerification;
