import React from "react";
import PageBanner from "../../components/layout/PageBanner";
import { Box, Container, Typography } from "@mui/material";
const Donate = () => {
  return (
    <>
      <PageBanner
        title="Support Vidya Bharati USA"
        subtitle="Your donation is tax-deductible to the extent allowed by law.EIN: 47-4676188"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />
      <Container className="support-container">
        <Box sx={{ marginBottom: "64px" }}>
          <h1 className="support-title">
            Preserve Culture, Educate the Future – Donate Today
          </h1>
          <p className="alumni-desc">
            Vidya Bharati is a 501(c)(3) tax-exempt non-profit organization
            dedicated to preserving and promoting Indian culture, heritage, and
            values through education and community engagement. Your generous
            contribution helps us support cultural initiatives, student
            education programs, and community-building efforts across the United
            States and beyond.
          </p>
        </Box>

        <Box className=" impact-box">
          <h1 className=" support-title">
            Please make a check payable to:“Vidya Bharati Foundation of USA”
          </h1>
          <p className="section-subtext ">
            and mail it to the below Address: <br /> Vidya Bharati USA, 29 Olde
            Hamlet Dr. Jericho, NY 11237
            <br />
            <br />
            {/* (Please mention Tax File No. 47-4676188 on your check for
            reference.) */}
            Vidya Bharati is a 501(c)(3) tax-exempt organization. Your donation
            is tax-deductible to the extent allowed by law. Our EIN number is
            47-4676188.
            <br />
            <br />
            Thank you for supporting our mission
          </p>
        </Box>
      </Container>
    </>
  );
};

export default Donate;
