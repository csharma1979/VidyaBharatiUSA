import React from "react";
import { FaBook, FaGraduationCap, FaHandHoldingHeart } from "react-icons/fa";
import PageBanner from "../../layout/PageBanner";
import { Box, Container, Typography } from "@mui/material";
import CallToAction from "../../commonComp/CallToAction";
import FeaturedImage from "../../SupportChildSponser/FeaturedImage";
import SponserInfoCard from "../../SupportChildSponser/SponserInfoCard";

const SupportVidyaBharati = () => {
  const impactInfo = [
    {
      title: "Education for All",
      description:
        "Your donation helps provide quality education to over 2 lakh underprivileged children in more than 1,200 schools across India.",
      icon: <FaGraduationCap size={36} />,
    },
    {
      title: "School Infrastructure",
      description:
        "We build and maintain school buildings, libraries, laboratories, and other educational facilities in rural and tribal areas.",
      icon: <FaBook size={36} />,
    },
    {
      title: "Teacher Training",
      description:
        "We recruit and train qualified teachers committed to providing quality education with an emphasis on character building and cultural values.",
      icon: <FaHandHoldingHeart size={36} />,
    },
  ];

  return (
    <>
      <PageBanner
        title="Support Vidya Bharati"
        subtitle="Transforming India through Value-Based Education"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <Container className="support-container">
        {/* Intro Section */}
        <Box className="intro-section">
          <FeaturedImage
            imagePath="/assets/sponser/vidya-bharati.webp"
            title="Support Vidya Bharati"
          />
          <h1 className="support-title">Empower the Future of India</h1>
          <p className="alumni-desc">
            Vidya Bharati is one of the largest non-governmental educational
            organizations in India, running over 12,000 schools with more than
            32 lakh students. Our mission is to provide quality education based
            on Indian cultural values to children from all backgrounds,
            particularly in rural and tribal areas.
          </p>
          <p className="alumni-desc">
            Your generous contribution helps us deliver education to
            underprivileged children who otherwise would not have access to
            quality schooling. We believe that education is the most powerful
            tool to transform lives and build a stronger nation.
          </p>
        </Box>

        {/* Impact Section */}
        <Box className="impact-section">
          <h1 className="support-title">The Impact of Your Support</h1>
          <Box className="impact-cards">
            {impactInfo.map((item, index) => (
              <SponserInfoCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </Box>
        </Box>

        {/* How You Can Help Section */}
        <Box className="help-section">
          <h1 className="support-title"> How You Can Help</h1>

          <p className="section-subtext alumni-desc">
            Your donation to Vidya Bharati can make a significant difference in
            the lives of children across India. Here's how your contribution
            helps:
          </p>

          <div className="donation-tiers">
            <Typography>
              <strong>$25</strong> - Provides school supplies for one student
              for a year
            </Typography>
            <Typography>
              <strong>$100</strong> - Supports one student's education for a
              month
            </Typography>
            <Typography>
              <strong>$500</strong> - Sponsors a teacher's training program
            </Typography>
            <Typography>
              <strong>$1,000</strong> - Helps establish a library in a rural
              school
            </Typography>
            <Typography>
              <strong>$5,000</strong> -Contributes to building a classroom in an
              underserved area
            </Typography>
          </div>
        </Box>

        {/* Tax Benefits */}
        <Box className="tax-section">
          <Typography variant="h5" className="section-heading">
            Tax Benefits
          </Typography>
          <p className="section-subtext ">
            Vidya Bharati is a 501(c)(3) tax-exempt organization. Your donation
            is tax-deductible to the extent allowed by law.
            <br />
            Our EIN number is 47-4676188.
          </p>
        </Box>
      </Container>

      <CallToAction />
    </>
  );
};

export default SupportVidyaBharati;
