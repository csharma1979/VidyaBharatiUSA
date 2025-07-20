import React from "react";
import { Container, Box, Button } from "@mui/material";
import SectionContainer from "../shared/SectionContainer";
import Link from "next/link";

const CallToAction = ({ btn1 = "Donate", btn2 }) => {
  return (
    <SectionContainer bgColor="#f0e9ea">
      <Container maxWidth="lg">
        <Box className="cta-box">
          <h4 className="cta-heading">Support Our Mission</h4>
          <p className="cta-text">
            Join us in our mission to provide quality education across India.
            Your contribution can make a difference.
          </p>
         
          {(btn1 || btn2) && (
            <Box className="cta-buttons">
              {btn1 && (
                <Link
                  href="/donate"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    className="btn-maroon"
                  >
                    {btn1}
                  </Button>
                </Link>
              )}
              {btn2 && (
                <Link
                  href="https://www.vidyabharatialumni.org/alumni/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    className="btn-outline-maroon"
                  >
                    {btn2}
                  </Button>
                </Link>
              )}
            </Box>
          )}
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default CallToAction;
