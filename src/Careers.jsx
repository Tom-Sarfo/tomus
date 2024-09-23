import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import CXO from "./CXO";
import { Outlet, useLocation } from "react-router-dom";
import BrandGuardian from "./BrandGuardian";
import { useEffect } from "react";

function Careers() {
  const location = useLocation();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",

        backgroundColor: "grey",
      }}
    >
      <Navbar />
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}

export default Careers;
