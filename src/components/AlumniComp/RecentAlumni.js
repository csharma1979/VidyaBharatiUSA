import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SectionContainer from "../shared/SectionContainer";
import SectionHeading from "../shared/SectionHeading";


const recentAlumni = [
  { name: "Minupala Venkateshwara", role: "Alumni Members" },
  { name: "Prem vaishnav", role: "Alumni Members" },
  { name: "Falak Verma", role: "Alumni Members" },
  { name: "Abhishek Srivastava", role: "Alumni Members" }
];

const RecentAlumni = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionHeading variant="h5">Recent Alumni</SectionHeading>
        <Grid container spacing={4} justifyContent="center" className="alumni-grid">
          {recentAlumni.map((alumni, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box className="alumni-item">
                <div className="icon-box">
                  <PersonIcon className="icon" />
                </div>
                <h6 className="alumni-name">{alumni.name}</h6>
                <p className="sub-para">{alumni.role}</p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default RecentAlumni;
