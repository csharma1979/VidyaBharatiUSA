import React from "react";
import { Box } from "@mui/material";


const SectionContainer = ({ children, bgColor = "#ffffff" }) => {
  return (
    <Box className="section-container" sx={{ backgroundColor: bgColor }}>
      {children}
    </Box>
  );
};

export default SectionContainer;
