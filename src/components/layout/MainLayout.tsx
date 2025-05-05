
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
