
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
<<<<<<< homepage
import { Outlet } from 'react-router-dom'
=======
import React from "react";
import { Outlet } from "react-router-dom"
>>>>>>> main

const Layout = () => {
  return (
    <div>
      <Navbar />
<<<<<<< homepage
      
      <main className='min-h-screen'>
      <Outlet/>
=======
      <main className="min-h-screen">
        <Outlet />
>>>>>>> main
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
