
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

// Layouts
import MainLayout from "@/components/layout/MainLayout";
import AdminLayout from "@/components/layout/AdminLayout";
import BuyerLayout from "@/components/layout/BuyerLayout";
import SupplierLayout from "@/components/layout/SupplierLayout";

// Main Pages
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import RegistrationSuccess from "@/pages/RegistrationSuccess";
import NotFound from "@/pages/NotFound";

// Admin Pages
import AdminHome from "@/pages/admin/AdminHome";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import UserManagement from "@/pages/admin/UserManagement";
import AddUser from "@/pages/admin/AddUser";
import CompanyManagement from "@/pages/admin/CompanyManagement";
import AddCompany from "@/pages/admin/AddCompany";
import OrderManagement from "@/pages/admin/OrderManagement";
import ProductCatalog from "@/pages/admin/ProductCatalog";
import SupplierVerification from "@/pages/admin/SupplierVerification";
import AuditManagement from "@/pages/admin/AuditManagement";
import AuditAssignment from "@/pages/admin/AuditAssignment";
import FinancialManagement from "@/pages/admin/FinancialManagement";
import Analytics from "@/pages/admin/Analytics";

// Buyer Pages
import BuyerHome from "@/pages/buyer/BuyerHome";
import BuyerDashboard from "@/pages/buyer/BuyerDashboard";
import BuyerProductCatalog from "@/pages/buyer/ProductCatalog";
import Suppliers from "@/pages/buyer/Suppliers";
import Cart from "@/pages/buyer/Cart";

// Supplier Pages
import SupplierHome from "@/pages/supplier/SupplierHome";
import SupplierDashboard from "@/pages/supplier/SupplierDashboard";
import SupplierProductCatalog from "@/pages/supplier/ProductCatalog";
import Orders from "@/pages/supplier/Orders";
import Rfq from "@/pages/supplier/Rfq";
import SupplierAnalytics from "@/pages/supplier/SupplierAnalytics";
import Compliance from "@/pages/supplier/Compliance";

// Document title utility
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    
    // Clean up when component unmounts
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

// Title component to replace Helmet
const DocumentTitle: React.FC<{title: string, description?: string}> = ({ title, description }) => {
  useDocumentTitle(title);
  
  useEffect(() => {
    // Set meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }
  }, [description]);
  
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <DocumentTitle 
        title="TORESO - Digital Packaging Platform" 
        description="Revolutionizing how packaging is sourced, verified, and managed across the supply chain" 
      />
      <Toaster />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
        </Route>
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="company-management" element={<CompanyManagement />} />
          <Route path="add-company" element={<AddCompany />} />
          <Route path="order-management" element={<OrderManagement />} />
          <Route path="products" element={<ProductCatalog />} />
          <Route path="supplier-verification" element={<SupplierVerification />} />
          <Route path="audit-management" element={<AuditManagement />} />
          <Route path="audit-assignment" element={<AuditAssignment />} />
          <Route path="financial-management" element={<FinancialManagement />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        
        <Route path="/buyer" element={<BuyerLayout />}>
          <Route index element={<BuyerHome />} />
          <Route path="dashboard" element={<BuyerDashboard />} />
          <Route path="products" element={<BuyerProductCatalog />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        
        <Route path="/supplier" element={<SupplierLayout />}>
          <Route index element={<SupplierHome />} />
          <Route path="dashboard" element={<SupplierDashboard />} />
          <Route path="products" element={<SupplierProductCatalog />} />
          <Route path="orders" element={<Orders />} />
          <Route path="rfq" element={<Rfq />} />
          <Route path="analytics" element={<SupplierAnalytics />} />
          <Route path="compliance" element={<Compliance />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
