import React from "react";
import HighlightCard from "./HighlightCard";
import { Container } from "@mui/material";


const highlights = [
  {
    title: "12,098 Schools",
    description: "Operating schools across the country",
    image: "/assets/sikshadaan/schools.webp"
  },
  {
    title: "8,465 Centers",
    description: "Bal Sanskar Centers nationwide",
    image: "/assets/sikshadaan/centers.webp"
  },
  {
    title: "Affordable Education",
    description: "Value-Based Education at Affordable Costs",
    image: "/assets/sikshadaan/affordable_education.webp"
  },
  {
    title: "Academic Excellence",
    description: "Excellent Academic Results",
    image: "/assets/sikshadaan/acedemic_excellence.webp"
  },
  {
    title: "35,000+ Teachers",
    description: "Dedicated educators shaping future generations",
    image: "/assets/sikshadaan/teachers.webp"
  },
  {
    title: "3.2M+ Students",
    description: "Students receiving quality education annually",
    image: "/assets/sikshadaan/students.webp"
  }
];

const ShikshaDaanHighlights = () => (
  <Container  maxWidth="lg"> 
  <div className="highlight-grid">
    {highlights.map((item, i) => (
      <HighlightCard key={i} {...item} />
    ))}
  </div>
  </Container>
);

export default ShikshaDaanHighlights;
