
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Box, ClipboardCheck, CheckCircle, XCircle } from "lucide-react";

interface FilterTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  children: React.ReactNode;
}

const FilterTabs = ({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery, 
  children 
}: FilterTabsProps) => {
  // Tab configurations with icons
  const tabs = [
    { id: "all", label: "All Verifications", icon: <Box size={16} className="mr-2" /> },
    { id: "pending", label: "Pending", icon: <ClipboardCheck size={16} className="mr-2" /> },
    { id: "in_review", label: "In Review", icon: <Search size={16} className="mr-2" /> },
    { id: "approved", label: "Approved", icon: <CheckCircle size={16} className="mr-2" /> },
    { id: "rejected", label: "Rejected", icon: <XCircle size={16} className="mr-2" /> }
  ];

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <TabsList className="bg-black/30 backdrop-blur border border-white/10 p-1 relative overflow-hidden">
          {/* Background pulse animation */}
          <motion.div 
            className="absolute inset-0 bg-toreso-blue/10" 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.1, 0.05], 
              scale: [1, 1.02, 1] 
            }} 
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {tabs.map(tab => (
            <TabsTrigger 
              key={tab.id}
              value={tab.id}
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70 transition-all duration-300 z-10"
            >
              <motion.span 
                className="flex items-center"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tab.icon}
                {tab.label}
              </motion.span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        <div className="flex items-center space-x-2">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <Input 
              placeholder="Search suppliers..." 
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 w-[280px] transition-all duration-300 focus:bg-white/10 focus:border-toreso-blue/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <Filter size={16} className="mr-2" /> Filter
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <TabsContent value={activeTab} className="mt-0">
          {children}
        </TabsContent>
      </motion.div>
    </Tabs>
  );
};

export default FilterTabs;
