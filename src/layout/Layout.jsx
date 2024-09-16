
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from "react";
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
