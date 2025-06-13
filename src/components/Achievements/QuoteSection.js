import React from "react";
import { Box, Container, Grid, Typography, Button, Card } from "@mui/material";
const QuoteSection = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#f0e9ea",
        padding: "64px 0",
        margin: "64px 0 0",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <Container>
        <Typography
          variant="h5"
          style={{ fontStyle: "italic", marginBottom: "16px" }}
        >
          "Success in UPSC is not just about knowledge, but about perspective,
          patience, and perseverance."
        </Typography>
        <Typography variant="body1" style={{ fontWeight: "500" }}>
          At Vidya Bharati, we nurture these qualities for Civil Services
          success.
        </Typography>
      </Container>
    </div>
  );
};

export default QuoteSection;
