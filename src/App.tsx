
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "./components/layout/MainLayout";
import AdminLayout from "./components/layout/AdminLayout";
import BuyerLayout from "./components/layout/BuyerLayout";
import SupplierLayout from "./components/layout/SupplierLayout";

// Public Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegistrationSuccess from "./pages/RegistrationSuccess";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import ProductCatalog from "./pages/admin/ProductCatalog";
import CompanyManagement from "./pages/admin/CompanyManagement";
import SupplierVerification from "./pages/admin/SupplierVerification";

// Buyer Pages
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import { default as BuyerProductCatalog } from "./pages/buyer/ProductCatalog";
import Suppliers from "./pages/buyer/Suppliers";
import Cart from "./pages/buyer/Cart";

// Supplier Pages
import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import { default as SupplierProductCatalog } from "./pages/supplier/ProductCatalog";
import SupplierAnalytics from "./pages/supplier/SupplierAnalytics";
import Orders from "./pages/supplier/Orders";
import Rfq from "./pages/supplier/Rfq";
import Compliance from "./pages/supplier/Compliance";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registration-success" element={<RegistrationSuccess />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="companies" element={<CompanyManagement />} />
            <Route path="supplier-verification" element={<SupplierVerification />} />
            <Route path="audit-management" element={<div>Audit Management</div>} />
            <Route path="products" element={<ProductCatalog />} />
            <Route path="orders" element={<div>Order Management</div>} />
            <Route path="financials" element={<div>Financial Management</div>} />
            <Route path="analytics" element={<div>Reports & Analytics</div>} />
            <Route path="settings" element={<div>Settings</div>} />
            <Route path="support" element={<div>Support</div>} />
          </Route>

          {/* Buyer Routes */}
          <Route path="/buyer" element={<BuyerLayout />}>
            <Route index element={<BuyerDashboard />} />
            <Route path="products" element={<BuyerProductCatalog />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<div>Orders</div>} />
            <Route path="rfq" element={<div>RFQ Management</div>} />
            <Route path="favorites" element={<div>Favorites</div>} />
            <Route path="order-history" element={<div>Order History</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="messages" element={<div>Messages</div>} />
            <Route path="settings" element={<div>Settings</div>} />
            <Route path="support" element={<div>Help & Support</div>} />
          </Route>

          {/* Supplier Routes */}
          <Route path="/supplier" element={<SupplierLayout />}>
            <Route index element={<SupplierDashboard />} />
            <Route path="products" element={<SupplierProductCatalog />} />
            <Route path="orders" element={<Orders />} />
            <Route path="rfq" element={<Rfq />} />
            <Route path="profile" element={<div>Company Profile</div>} />
            <Route path="compliance" element={<Compliance />} />
            <Route path="financials" element={<div>Financial Management</div>} />
            <Route path="analytics" element={<SupplierAnalytics />} />
            <Route path="messages" element={<div>Messages</div>} />
            <Route path="settings" element={<div>Settings</div>} />
            <Route path="support" element={<div>Help & Support</div>} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
