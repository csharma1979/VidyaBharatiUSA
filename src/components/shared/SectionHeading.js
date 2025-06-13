import React from "react";
import { Typography } from "@mui/material";

const SectionHeading = ({ children, ...props }) => {
  return (
    <h5 className="section-heading" {...props}>
      {children}
    </h5>
  );
};

export default SectionHeading;
