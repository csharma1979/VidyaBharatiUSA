import React from "react";
import { FaBook, FaGraduationCap, FaBookReader } from "react-icons/fa";
import PageBanner from "../../layout/PageBanner";
import { Box, Container, Grid, Typography, Button, Card } from "@mui/material";
import CallToAction from "../../commonComp/CallToAction";
import FeaturedImage from "../../SupportChildSponser/FeaturedImage";

const SupportChild = () => {
  return (
    <>
      <PageBanner
        title="Support a Child's Education"
        subtitle="Transform Lives Through the Power of Education"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <Container className="support-container">
        <Box sx={{ marginBottom: "64px" }}>
          <FeaturedImage
            imagePath="assets/sponser/students2.webp"
            title="Support a Child's Education"
          />

          <h1 className="support-title">How Your Support Makes a Difference</h1>
          <p className="alumni-desc">
            Education is the key to unlocking a brighter future. With your
            support, we can ensure that every child has access to quality
            education and the opportunity to succeed. Join us in transforming
            lives and building a better world through the power of education.
          </p>
        </Box>

        <Box className="impact-box">
          <h1 className="support-title">Why It Matters</h1>
          <p className="alumni-desc">
            Every child deserves the opportunity to learn, grow, and reach their
            full potential. By supporting a child's education, you're not just
            helping them in the present—you're investing in their future and
            contributing to the growth and well-being of entire communities.
          </p>
        </Box>
      </Container>
      <CallToAction
        heading="Make a Difference Today"
        para="Your contribution can change a child's life. Join us in our mission to provide quality education to every child."
        btn1="Support Now"
      />
    </>
  );
};

export default SupportChild;
