
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";

const MainLayout = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </motion.div>
  );
};

export default MainLayout;
