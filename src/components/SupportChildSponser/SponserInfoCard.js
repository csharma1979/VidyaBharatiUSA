

import React from "react";
import { Typography } from "@mui/material";


const SponserInfoCard = ({ icon, title, description }) => {
  return (
    <div className="sponsor-info-card">
      <div className="card-icon">{icon}</div>
      <Typography variant="h5" className="card-title">{title}</Typography>
      <Typography variant="body1" className="card-desc">{description}</Typography>
    </div>
  );
};

export default SponserInfoCard;

