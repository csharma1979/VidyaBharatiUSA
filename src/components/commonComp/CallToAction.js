import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import SectionContainer from "../shared/SectionContainer";

const CallToAction = ({heading , para , btn1 , btn2}) => {
  return (
    <SectionContainer bgColor="#f0e9ea">
      <Container maxWidth="lg">
        <Box className="cta-box">
          <h4 className="cta-heading">{heading}</h4>
          <p className="cta-text">
           {para}
          </p>
         {(btn1 || btn2) && (
            <Box className="cta-buttons">
              {btn1 && (
                <Button variant="contained" size="large" className="btn-maroon">
                  {btn1}
                </Button>
              )}
              {btn2 && (
                <Button
                  variant="outlined"
                  size="large"
                  className="btn-outline-maroon"
                >
                  {btn2}
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default CallToAction;
