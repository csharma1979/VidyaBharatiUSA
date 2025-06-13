import React, { useState } from "react";
import { FaFilePdf, FaDownload, FaTimes, FaUser } from "react-icons/fa";
import PageBanner from "../../layout/PageBanner";
import { Box, Container, Grid, Typography, Button, Card } from "@mui/material";
import PdfViewer from "../../Achievements/PdfViewer";
import QuoteSection from "../../Achievements/QuoteSection";
const Achievements = () => {
  // State to control PDF viewer modal
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [currentPdf, setCurrentPdf] = useState("");

  // UPSC achievement data
  const upscAchievements = [
    {
      id: 1,
      name: "Aarav Sharma",
      year: "2024",
      pdfLink: "/assets/pdfs/upsc-selection-2024.pdf",
    },
    // You can add more UPSC achievements here as they come in
  ];

  // UPSC toppers data with rank and school information
  const upscToppers = [
    {
      id: 1,
      name: "Vibhor Saraswat",
      rank: "19",
      school: "SSVMIC, Shikarpur, Bulandshahr",
      region: "Meerut",
    },
    {
      id: 2,
      name: "Saket Singh",
      rank: "65",
      school: "Jwala Devi Saraswati Vidya Mandir, Civil Lines, Prayagraj",
      region: "Kashi",
    },
    {
      id: 3,
      name: "Ashutosh Mishra",
      rank: "198",
      school: "Saraswati Shishu Mandir, Chattarpur",
      region: "Mahakoshal",
    },
  ];

  // Function to handle PDF view
  const handleViewPdf = (pdfLink) => {
    setCurrentPdf(pdfLink);
    setShowPdfViewer(true);
  };

  // Function to handle PDF download
  const handleDownloadPdf = (pdfLink) => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = pdfLink;
    link.download = pdfLink.split("/").pop(); // Extract filename from path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <PageBanner
        title="UPSC Achievements"
        subtitle="Celebrating Civil Services Excellence"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <Container className="support-container">
        <Box className="intro-section">
          <h1 className="support-title">UPSC Achievements</h1>
          <p className="alumni-desc">
            At Vidya Bharati, we take immense pride in our students who have
            successfully cleared one of the most prestigious and challenging
            examinations in India - the Union Public Service Commission (UPSC)
            Civil Services Examination.
          </p>
          <p className="alumni-desc">
            Our comprehensive approach to education, dedicated mentoring, and
            rigorous preparation has enabled our students to achieve remarkable
            success in the Civil Services Examination. We celebrate their
            dedication, perseverance, and accomplishment.
          </p>
        </Box>

        {/* UPSC Achievements Section */}

        <Box
          sx={{
            marginBottom: "64px",
            backgroundColor: "#f0e9ea",
            padding: "40px 20px",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h5"
            style={{
              color: "#841B2D",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Our UPSC Selections
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            Our students have consistently performed exceptionally well in the
            UPSC examinations. Below is the list of students who have been
            selected in the Civil Services Examination.
          </Typography>

          {/* PDF List */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            {upscAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 24px",
                  borderBottom:
                    index < upscAchievements.length - 1
                      ? "1px solid #e0e0e0"
                      : "none",
                }}
              >
                <div>
                  <Typography variant="body1" style={{ fontWeight: "500" }}>
                    UPSC Selected Students {achievement.year}
                  </Typography>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => handleViewPdf(achievement.pdfLink)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      backgroundColor: "#841B2D",
                      color: "white",
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition: "background-color 0.3s ease",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#6a1624")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#841B2D")
                    }
                  >
                    <FaFilePdf style={{ marginRight: "8px" }} />
                    View
                  </button>
                  <button
                    onClick={() => handleDownloadPdf(achievement.pdfLink)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      backgroundColor: "#f0e9ea",
                      color: "#841B2D",
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition: "background-color 0.3s ease",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#e6d7d9")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f0e9ea")
                    }
                  >
                    <FaDownload style={{ marginRight: "8px" }} />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Box>

        {/* UPSC Preparation Section */}
        <Box sx={{ marginBottom: "64px" }}>
          <Typography
            variant="h5"
            style={{
              color: "#841B2D",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Our UPSC Preparation Approach
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ textAlign: "center", marginBottom: "24px" }}
          >
            At Vidya Bharati, we provide comprehensive support to aspirants
            preparing for Civil Services:
          </Typography>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              maxWidth: "1000px",
              margin: "0 auto 48px",
            }}
          >
            {/* Feature 1 */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "24px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h6"
                style={{ color: "#841B2D", marginBottom: "16px" }}
              >
                Expert Guidance
              </Typography>
              <Typography variant="body1">
                Mentoring by experienced faculty and successful civil servants
                who provide insights into the examination pattern and
                preparation strategies.
              </Typography>
            </div>

            {/* Feature 2 */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "24px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h6"
                style={{ color: "#841B2D", marginBottom: "16px" }}
              >
                Comprehensive Study Material
              </Typography>
              <Typography variant="body1">
                Access to well-researched and updated study materials covering
                all aspects of the UPSC curriculum.
              </Typography>
            </div>

            {/* Feature 3 */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "24px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h6"
                style={{ color: "#841B2D", marginBottom: "16px" }}
              >
                Regular Mock Tests
              </Typography>
              <Typography variant="body1">
                Simulated examination environment with comprehensive analysis
                and feedback to improve performance.
              </Typography>
            </div>
          </div>
        </Box>

        {/* UPSC Toppers Section */}
        <Box sx={{ marginBottom: "64px" }}>
          <Typography
            variant="h5"
            style={{
              color: "#841B2D",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Our UPSC Toppers
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            We take immense pride in our students who have achieved remarkable
            ranks in the UPSC examination.
          </Typography>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              maxWidth: "1000px",
              margin: "0 auto 48px",
            }}
          >
            {upscToppers.map((topper) => (
              <div
                key={topper.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(132, 27, 45, 0.1)",
                    borderRadius: "50%",
                    padding: "16px",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80px",
                    height: "80px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{ width: "40px", height: "40px", fill: "#841B2D" }}
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#841B2D",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {topper.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "500", marginBottom: "4px" }}
                  >
                    Rank: {topper.rank}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "#666", fontSize: "0.9rem" }}
                  >
                    {topper.school}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "#666", fontSize: "0.85rem" }}
                  >
                    {topper.region}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Box>
        <QuoteSection />
      </Container>
      {/* PDF Viewer Modal */}
      <PdfViewer />
    </>
  );
};

export default Achievements;
