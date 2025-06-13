import React, { useState } from "react";
import { Button, Container, Grid, Paper } from "@mui/material";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { sponsorshipInitiatives } from "../Data/HomeData";

const SponsorshipInitiatives = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(sponsorshipInitiatives.length / 3);

  return (
    <Container maxWidth="xl" className="sponsorship-section">
      <h1  className="page-title">
        Sponsorship <span>Initiatives</span>
      </h1>
      <Grid container spacing={3} justifyContent="center">
        {sponsorshipInitiatives
          .slice(currentPage * 3, currentPage * 3 + 3)
          .map((initiative, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper className="sponsorship-card">
                <div
                  className="sponsorship-img"
                  style={{
                    backgroundImage: `url(${initiative.image})`,
                  }}
                />
                <div className="sponsorship-content">
                  <h3>{initiative.title}</h3>
                  <p>{initiative.content}</p>
                  <Button variant="contained" className="donate-btn">
                    Donate Now
                  </Button>
                </div>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <div className="pagination-buttons">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
        >
          <FaArrowLeft />
        </Button>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
          }
          disabled={currentPage === totalPages - 1}
        >
          <FaArrowRight />
        </Button>
      </div>
    </Container>
  );
};

export default SponsorshipInitiatives;
