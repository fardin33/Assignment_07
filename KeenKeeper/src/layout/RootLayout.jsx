import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
