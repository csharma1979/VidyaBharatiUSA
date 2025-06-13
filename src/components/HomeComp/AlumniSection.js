import React from "react";
import { Container, Grid } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { alumniList } from "../Data/HomeData";

const AlumniSection = () => (
  <Container maxWidth="xl" className="alumni-section">
    <h1 className="page-title">
      Recent <span>Alumni</span>
    </h1>
    <Grid container spacing={2} justifyContent="center">
      {alumniList.map((alumni, idx) => (
        <Grid item xs={12} sm={6} md={2.4} key={idx}>
          <div className="alumni-box">
            <div className="icon-wrapper">
              <FaUserCircle />
            </div>
            <h4>{alumni.name}</h4>
            <p>{alumni.role}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default AlumniSection;
