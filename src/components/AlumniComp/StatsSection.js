import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "../shared/SectionHeading";
import SectionContainer from "../shared/SectionContainer";

const StatsSection = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionHeading variant="h5">
          Alumni Family
        </SectionHeading>
        <Grid container spacing={6} justifyContent="center" className="stats-container">
          {[
            { label: "Registered Schools", value: "6,670+" },
            { label: "Registered Alumni", value: "75,000+" },
            { label: "Student Members", value: "80,000+" },
          ].map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box className="stat-box">
                <Typography variant="h3">{item.value}</Typography>
                <Typography variant="h6">{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default StatsSection;
