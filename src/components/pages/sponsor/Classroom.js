import React from "react";
import PageBanner from "../../layout/PageBanner";
import { Box, Container, Grid, Typography, Button, Card } from "@mui/material";
import CallToAction from "../../commonComp/CallToAction";
import FeaturedImage from "../../SupportChildSponser/FeaturedImage";
import SponserInfoCard from "../../SupportChildSponser/SponserInfoCard";

// Simple SVG icons to replace react-icons
const SchoolIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5,10.5V9h14v1.5H5z M5,16.5h14v-1.5H5V16.5z M12,4.5L5,8v1h14V8L12,4.5z M12,3L2,9.5V21h20V9.5L12,3z M20,19H4v-7.5 l8-4.8l8,4.8V19z" />
  </svg>
);

const GraduationCapIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,3L1,9l11,6l9-4.91V17h2V9L12,3z M12,16.5l-8-4.35v5.69l8,3.38l8-3.38v-5.69L12,16.5z" />
  </svg>
);

const ComputerIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20,18c1.1,0,1.99-0.9,1.99-2L22,6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z" />
  </svg>
);

const SponsorClassroom = () => {
  const impactInfo = [
    {
      title: "Quality Learning Environment",
      description:
        "Your donation helps create safe, well-designed classrooms that provide an optimal environment for learning and development.",
      icon: <SchoolIcon size={36} />,
    },
    {
      title: "Increased Access to Education",
      description:
        "New classrooms allow schools to accommodate more students, especially in areas where educational facilities are limited.",
      icon: <GraduationCapIcon size={36} />,
    },
    {
      title: "Modern Teaching Facilities",
      description:
        "Classrooms are equipped with essential teaching aids and technology to enhance the learning experience and improve educational outcomes.",
      icon: <ComputerIcon size={36} />,
    },
  ];

  return (
    <>
      <PageBanner
        title="Sponsor Classroom Construction"
        subtitle="Building Spaces for Learning and Growth in Rural India"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <Container className="support-container">
        <Box className="intro-section">
          <FeaturedImage
            imagePath="/assets/sponser/Classroom.webp"
            title="Sponsor Classroom Construction"
          />

          <h1 className="support-title">
            Creating Spaces for Education and Transformation
          </h1>

          <p className="alumni-desc">
            Many Vidya Bharati schools in rural and tribal areas face a critical
            shortage of classroom space, forcing students to learn in
            overcrowded or inadequate conditions. Your contribution to construct
            new classrooms will create conducive learning environments that
            foster education, creativity, and growth.
          </p>

          <p className="alumni-desc">
            Each classroom is built with durable materials, proper ventilation,
            lighting, and essential teaching aids. These spaces become
            transformative environments where students can focus on learning and
            teachers can effectively impart knowledge and values.
          </p>
        </Box>

        {/* Our Impact Section */}
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

          <p className="section-subtext">
            Your donation to the classroom construction project can make a
            significant difference in the lives of children across rural India.
            Here's how your contribution helps:
          </p>

          <div className="donation-tiers">
            <Typography>
              <strong>$2,500</strong> - Contributes to essential classroom
              furniture and teaching aids
            </Typography>
            <Typography>
              <strong>$5,000</strong> - Funds foundation and structural elements
              for a new classroom
            </Typography>
            <Typography>
              <strong>$10,000</strong> - Sponsors primary construction of a
              standard classroom
            </Typography>
            <Typography>
              <strong>$15,000</strong> - Provides a fully equipped classroom
              with furniture and basic technology
            </Typography>
            <Typography>
              <strong>$25,000</strong> - Builds a modern classroom block with
              multiple rooms and facilities
            </Typography>
          </div>
        </Box>

        <Box className="impact-section">
          <h1 className="support-title">Project Details</h1>

          <Box className="section-dex-box">
            <p className="">
              <strong>What we build:</strong> Each toilet block includes 6-8
              separate toilet units with proper ventilation, handwashing
              stations, and a sustainable water supply system. Construction uses
              durable materials suitable for local conditions.
            </p>

            <p className="">
              <strong>Maintenance plan:</strong> Each project includes a
              maintenance plan and training for school staff to ensure long-term
              sustainability and proper upkeep of facilities.
            </p>

            <p className="">
              <strong>Community involvement:</strong> Local communities
              participate in the planning and construction process, creating
              ownership and ensuring cultural appropriateness.
            </p>
          </Box>
        </Box>

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

export default SponsorClassroom;
