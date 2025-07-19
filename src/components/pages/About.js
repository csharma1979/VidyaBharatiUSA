import React from "react";
import SectionContainer from "../shared/SectionContainer";
import SectionHeading from "../shared/SectionHeading";
import { Box, Container, Grid } from "@mui/material";
import { boardMembers } from "../Data/HomeData";
import { FaUserCircle } from "react-icons/fa";
import PageBanner from "../layout/PageBanner";
import CallToAction from "../commonComp/CallToAction";
const About = () => {
  return (
    <>
      <PageBanner
        title="About "
        subtitle="Join our growing network of Vidya Bharati alumni making a difference worldwide"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <SectionContainer>
        <SectionHeading variant="h5"> Our Story</SectionHeading>

        <p className="alumni-desc">
          Vidya Bharati USA is dedicated to promoting educational excellence and
          cultural awareness in the United States. Our organization works to
          preserve and promote Indian values while fostering global citizenship.
        </p>
        <p className="alumni-desc">
          We believe in the power of education to transform lives and build
          stronger communities. Through our various programs and initiatives, we
          strive to create meaningful impact in the lives of students and
          families.
        </p>
      </SectionContainer>

      <Container className="">
        {/* core values */}
        {/* <Box className=" impact-box" sx={{ marginBottom: "64px" }}>
          <h1 className="support-title"> Core Values</h1>
          <div className="about-vb-corevalues">
            <div className="core-values">
              {" "}
              <p>● Educational Excellence </p>
              <p> ● Cultural Heritage</p>
            </div>

            <div className="core-values">
              <p> ● Community Service</p>
              <p> ● Global Citizenship</p>
            </div>
            <div className="core-valueds">
              <p> ● Character Development</p>
              <p></p>
            </div>
          </div>
        </Box> */}

        <Box
          maxWidth="xl"
          className="alumni-section"
          sx={{ marginBottom: "64px" }}
        >
          <h1 className="page-title">
            Board <span>Members</span>
          </h1>
          <Grid container spacing={2} justifyContent="center">
            {boardMembers.map((alumni, idx) => (
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
        </Box>
      </Container>
      <CallToAction />
    </>
  );
};

export default About;
