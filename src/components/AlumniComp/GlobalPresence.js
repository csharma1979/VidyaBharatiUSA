import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import SectionContainer from "../shared/SectionContainer";
import SectionHeading from "../shared/SectionHeading";

const GlobalPresence = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionHeading variant="h5">Global Presence</SectionHeading>

        <p className="alumni-desc">
          Vidya Bharati alumni are not only located in India but also around the
          globe. Currently, <b>312 NRI alumni</b> have registered on the portal,
          with representation from:
        </p>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          className="alumni-grid"
        >
          {[
            { count: 161, country: "United States" },
            { count: 25, country: "Canada" },
            { count: 19, country: "United Kingdom" },
            { count: 18, country: "Australia" },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box className="stat-box">
                <Typography variant="h3">{item.count}</Typography>
                <Typography variant="h6">{item.country}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className="alumni-desc-box">
          <Typography variant="body1" paragraph>
            Alumni from various other countries, including Dubai, Germany,
            Italy, Malaysia, New Zealand, South Korea, South Africa, Singapore,
            UAE, and Denmark.
          </Typography>

          <Typography variant="body1" paragraph>
            A dedicated <b>10-member team</b> in Kolkata oversees the portal's
            end-to-end operations.including its development, digital marketing,
            alumni communications, and interactions with schools and various
            stakeholders in Pranta and Kshetra.
          </Typography>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default GlobalPresence;
