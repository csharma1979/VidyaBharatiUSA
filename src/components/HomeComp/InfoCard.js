import React from "react";
import { Paper } from "@mui/material";
import {
  FaBuilding,
  FaLightbulb,
  FaGraduationCap,
  FaChartBar,
} from "react-icons/fa";

const icons = {
  building: <FaBuilding size={30} color="#fff" />,
  lightbulb: <FaLightbulb size={30} color="#fff" />,
  graduation: <FaGraduationCap size={30} color="#fff" />,
  chart: <FaChartBar size={30} color="#fff" />,
};

const InfoCard = ({ icon, title, text }) => (
  <Paper className="info-card">
    <div className="icon-circle">{icons[icon]}</div>
    <div className="icon-desc">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </Paper>
);

export default InfoCard;
