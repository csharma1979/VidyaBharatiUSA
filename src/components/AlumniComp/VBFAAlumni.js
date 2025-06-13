import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import SectionContainer from "../shared/SectionContainer";
import SectionHeading from "../shared/SectionHeading";

const VBFAAlumni = () => {
  return (
    <SectionContainer bgColor="#f0e9ea">
      <Container maxWidth="lg">
        <SectionHeading variant="h5">VBFA Alumni</SectionHeading>

        <Box className="alumni-desc-box">
          <Typography variant="body1" paragraph>
            VBFA aims to bring alumni with bold ideas together so that we can
            all contribute to the success of all alumni with ability to leverage
            upon the strength of of our network and thus have global impact.
          </Typography>
          <Typography variant="body1" paragraph>
            Membership is one of the best ways for alumni and families to
            demonstrate their VNITian pride. VBFA is now one of our nations
            pride with world class leading education and leads the way in
            transdisciplinary education and research.
          </Typography>
          <Typography variant="body1" paragraph>
            Please provide your basic info and details of your presence in the
            US and register in our Alumni website here.
          </Typography>

          <Box className="button-container">
            <Button variant="contained" size="large" className="btn-maroon">
              Apply Now
            </Button>
          </Box>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default VBFAAlumni;
