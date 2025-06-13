import React from "react";
import PageBanner from "../../layout/PageBanner";
import { Box, Container, Grid, Typography, Button, Card } from "@mui/material";
import CallToAction from "../../commonComp/CallToAction";
import FeaturedImage from "../../SupportChildSponser/FeaturedImage";
import SponserInfoCard from "../../SupportChildSponser/SponserInfoCard";

const ToiletIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M6,22v-5h4v2h4v-2h4v5H6z M17,4v6H7V4h3V2h4v2H17z M20,10c0,0.6-0.4,1-1,1h-2v5h-2v-5H9v5H7v-5H5c-0.6,0-1-0.4-1-1V4
    c0-1.1,0.9-2,2-2h2v2h8V2h2c1.1,0,2,0.9,2,2V10z"
    />
  </svg>
);

const GraduationCapIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,3L1,9l11,6l9-4.91V17h2V9L12,3z M12,16.5l-8-4.35v5.69l8,3.38l8-3.38v-5.69L12,16.5z" />
  </svg>
);

const WaterIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2c-5.33,4-8,8-8,12c0,4.42,3.58,8,8,8s8-3.58,8-8C20,10,17.33,6,12,2z M12,20c-3.31,0-6-2.69-6-6 c0-2.97,2-6.17,6-9.29c4,3.12,6,6.32,6,9.29C18,17.31,15.31,20,12,20z" />
    <path d="M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,15,12,15z" />
  </svg>
);

const SponsorToiletBlock = () => {
  const impactInfo = [
    {
      title: "Improved Sanitation",
      description:
        "Your donation helps provide clean and safe toilet facilities for children in rural schools, reducing health risks and promoting dignity.",
      icon: <ToiletIcon size={36} />,
    },
    {
      title: "Increased Attendance",
      description:
        "Proper sanitation facilities are especially important for girls, leading to increased attendance and retention rates in schools.",
      icon: <GraduationCapIcon size={36} />,
    },
    {
      title: "Health Education",
      description:
        "Along with toilet facilities, we provide education on hygiene practices, creating lasting impact on student health and community well-being.",
      icon: <WaterIcon size={36} />,
    },
  ];

  return (
    <>
      <PageBanner
        title="Sponsor Toilet Block Construction"
        subtitle="Providing Dignity and Safety for Rural Students"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <Container className="support-container">
        <Box className="intro-section">
          <FeaturedImage
            imagePath="/assets/sponser/Toilet.webp"
            title="Sponsor Toilet Block Construction"
          />

          <h1 className="support-title">
            Improving Health & Dignity Through Sanitation
          </h1>

          <p className="alumni-desc">
            Many Vidya Bharati schools in rural and tribal areas lack proper
            toilet facilities, creating health risks and barriers to
            education—especially for girl students. Your contribution to
            construct toilet blocks will create safe, hygienic environments that
            promote dignity, health, and education.
          </p>

          <p className="alumni-desc">
            Each toilet block provides separate facilities for boys and girls,
            with proper drainage systems and handwashing stations. These
            facilities are essential for maintaining hygiene and preventing
            disease spread in school communities.
          </p>
        </Box>

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

        <Box className="help-section">
          <h1 className="support-title">How You Can Help</h1>

          <p className="section-subtext">
            Your donation to the toilet block construction project can make a
            significant difference in the lives of children across rural India.
            Here's how your contribution helps:
          </p>

          <div className="donation-tiers">
            <Typography>
              <strong>$500</strong> - Contributes to one toilet unit
              construction
            </Typography>
            <Typography>
              <strong>$1,500</strong> - Funds a handwashing station and water
              access point
            </Typography>
            <Typography>
              <strong>$5,000</strong> - Sponsors a full toilet block with
              separate facilities for boys and girls
            </Typography>
            <Typography>
              <strong>$10,000</strong> - Provides a complete sanitation system
              with drainage and water storage
            </Typography>
            <Typography>
              <strong>$25,000</strong> - Funds toilet blocks for an entire
              school cluster, benefiting multiple communities
            </Typography>
          </div>
        </Box>

        {/* Project Details */}
        <Box className="impact-section">
          <h1 className="support-title">Project Details</h1>
          <Box className="section-dex-box">
            <p>
              <strong>What we build:</strong> Each toilet block includes 6-8
              separate toilet units with proper ventilation, handwashing
              stations, and a sustainable water supply system. Construction uses
              durable materials suitable for local conditions.
            </p>

            <p>
              <strong>Maintenance plan:</strong> Each project includes a
              maintenance plan and training for school staff to ensure long-term
              sustainability and proper upkeep of facilities.
            </p>

            <p>
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
            is tax-deductible to the extent allowed by law. Our EIN number is
            05-0540432.
          </p>
        </Box>
      </Container>
      <CallToAction
        heading="Join Us in Creating Healthier Schools"
        para="Your support today will provide essential sanitation facilities that improve health, dignity, and education outcomes for thousands of children across rural India."
        btn1="Sponsor  a Toilet Block"
      />
    </>
  );
};

export default SponsorToiletBlock;
