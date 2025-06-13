import React from "react";
import { Box, Container, Grid } from "@mui/material";
import InfoCard from "./InfoCard";

const WelcomeSection = () => {
  return (
    <Container maxWidth="xl" className="welcome-section">
      <Box className="welcome-text">
        <h1>
          Welcome to <span>VBFA</span>
        </h1>
        <h2 className="sub-title">Vidya Bharati Foundation of America</h2>
      </Box>

      <Grid container className="info-grid">
        <Grid item xs={12} md={3}>
          <InfoCard
            icon="building"
            title="VBFA Foundation"
            text="VBFA is a non-profit organization dedicated to supporting and nurturing Vidya Bharati initiatives in India."
          />
          <InfoCard
            icon="lightbulb"
            title="Our Mission"
            text="VBFA actively contributes to the cause of education in India. Join us in our mission to make education accessible to all."
          />
        </Grid>

        <Grid item xs={12} md={4} className="center-image">
          <img src="/assets/Home/saraswati.webp" alt="Saraswati" />
        </Grid>

        <Grid item xs={12} md={3}>
          <InfoCard
            icon="graduation"
            title="Vidya Bharati"
            text="Vidya Bharati is the world's largest non-governmental organization providing formal education in India."
          />
          <InfoCard
            icon="chart"
            title="Our Impact"
            text={
              <>
                Operating <strong className="">12,098</strong> schools and{" "}
                <strong>8,465</strong> Bal Sanskar Centers across the country.
              </>
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WelcomeSection;
