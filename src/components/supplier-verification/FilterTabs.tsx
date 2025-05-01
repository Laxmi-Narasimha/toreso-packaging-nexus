
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from "lucide-react";

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
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <TabsList className="bg-black/30 backdrop-blur border border-white/10">
          <TabsTrigger 
            value="all"
            className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
          >
            All Verifications
          </TabsTrigger>
          <TabsTrigger 
            value="pending"
            className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
          >
            Pending
          </TabsTrigger>
          <TabsTrigger 
            value="in_review"
            className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
          >
            In Review
          </TabsTrigger>
          <TabsTrigger 
            value="approved"
            className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
          >
            Approved
          </TabsTrigger>
          <TabsTrigger 
            value="rejected"
            className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70"
          >
            Rejected
          </TabsTrigger>
        </TabsList>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <Input 
              placeholder="Search suppliers..." 
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 w-[280px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Filter size={16} className="mr-2" /> Filter
          </Button>
        </div>
      </div>

      <TabsContent value={activeTab} className="mt-0">
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default FilterTabs;
