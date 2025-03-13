import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="App-layout">
      <Navbar />
      <Box sx={{ width: "100%", background: "red" }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
}

export default Layout;
