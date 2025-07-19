import React from "react";
import {
  FaBook,
  FaGraduationCap,
  FaUserGraduate,
  FaBookReader,
  FaShareAlt,
} from "react-icons/fa";
import { Box, Container, Grid, Typography, Button, Card } from "@mui/material";
import CallToAction from "../../commonComp/CallToAction";
import FeaturedImage from "../../SupportChildSponser/FeaturedImage";
import SponserInfoCard from "../../SupportChildSponser/SponserInfoCard";
import PageBanner from "../../layout/PageBanner";

// Simple SVG icons to replace react-icons
const BookIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z" />
    <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z" />
    <path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z" />
    <path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z" />
  </svg>
);

const ReadingIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z" />
    <circle cx="6.5" cy="11.5" r="1.5" />
    <path d="M3,9.5h7v1H3V9.5z" />
    <path d="M3,13.5h7v1H3V13.5z" />
  </svg>
);

const GraduationCapIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,3L1,9l11,6l9-4.91V17h2V9L12,3z M12,16.5l-8-4.35v5.69l8,3.38l8-3.38v-5.69L12,16.5z" />
  </svg>
);

const SponsorLibrary = () => {
  const impactInfo = [
    {
      icon: <BookIcon size={36} />,
      title: "Literacy Improvement",
      description:
        "Access to diverse reading materials significantly improves reading comprehension, vocabulary, and overall literacy levels among students.",
    },
    {
      icon: <ReadingIcon size={36} />,
      title: "Love for Reading",
      description:
        "Well-equipped libraries foster a lifelong love for reading, encouraging students to explore knowledge beyond textbooks.",
    },
    {
      icon: <GraduationCapIcon size={36} />,
      title: "Academic Excellence",
      description:
        "Students with access to library resources consistently show better academic performance across all subjects.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Sponsor Library Establishment"
        subtitle="Unlocking Knowledge and Imagination for Rural Students"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <Container className="support-container">
        <Box className="intro-section">
          <FeaturedImage
            imagePath="/assets/sponser/school-library.webp"
            title="Sponsor Library Establishment"
          />

          <h1 className="support-title">
            Opening Doors to Knowledge and Imagination
          </h1>

          <p className="alumni-desc">
            Many Vidya Bharati schools in rural and tribal areas lack proper
            library facilities, limiting students' access to books and learning
            resources. Your contribution to establish a library will create a
            nurturing environment for intellectual growth, imagination, and
            cultural enrichment.
          </p>

          <p className="alumni-desc">
            Each library is equipped with a diverse collection of books, reading
            spaces, and educational materials that cater to different age groups
            and interests. These libraries become the heart of learning in
            schools, providing resources that extend beyond classroom teaching.
          </p>
        </Box>

        {/* Our Impact Section */}
        <Box className="impact-section">
          <h1 className="support-title">The Impact of Your Support</h1>

          <div className="impact-cards">
            {impactInfo.map((item, index) => (
              <SponserInfoCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Box>

        {/* How You Can Help Section */}
        <Box className="help-section">
          <h1 className="support-title"> How You Can Help</h1>

          <p className="section-subtext">
            Your donation to the library establishment project can make a
            significant difference in the lives of children across rural India.
            Here's how your contribution helps:
          </p>

          <div className="donation-tiers">
            <Typography>
              <strong>$500</strong> - Provides a collection of essential
              textbooks and reference materials
            </Typography>
            <Typography>
              <strong>$1,000</strong> - Funds library furniture including
              bookshelves, reading tables, and chairs
            </Typography>
            <Typography>
              <strong>$2,500</strong> - Sponsors a comprehensive book collection
              with fiction, non-fiction, and educational materials
            </Typography>
            <Typography>
              <strong>$5,000</strong> - Establishes a complete library with
              books, furniture, and digital resources
            </Typography>
            <Typography>
              <strong>$10,000</strong> - Creates a model library that includes
              books in multiple languages, educational games, and multimedia
              resources
            </Typography>
          </div>
        </Box>

        {/* Project Details */}
        <Box className="impact-section">
          <h1 className="support-title">Project Details</h1>
          <Box className="section-dex-box">
            <p>
              <strong>What we establish:</strong> Each library includes a
              diverse collection of books in multiple languages, comfortable
              reading spaces, educational materials, and basic digital resources
              where possible. The design is tailored to local needs and space
              availability.
            </p>

            <p>
              <strong>Sustainability plan:</strong> Each project includes
              training for teachers and staff on library management, book
              preservation, and organizing reading activities to maximize
              student engagement and learning.
            </p>

            <p>
              <strong>Community involvement:</strong> Local communities
              contribute to book selection and library activities, ensuring
              cultural relevance and creating a sense of ownership.
            </p>
          </Box>
        </Box>

        {/* Tax Benefit Information */}
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

export default SponsorLibrary;
