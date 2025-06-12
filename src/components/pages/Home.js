import React from "react";
import { Box, Container, Typography, Grid, Paper, styled } from "@mui/material";
import Header from "../layout/Header";
import Banner from "../layout/Banner";
import { Button } from "@mui/material";
import {
  sponsorshipInitiatives,
  ongoingProjects,
  alumniList,
} from "../Data/HomeData";

//import SocialImpact from '../components/SocialImpact';

import {
  FaBuilding,
  FaLightbulb,
  FaGraduationCap,
  FaChartBar,
  FaUserCircle,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: "#fff",
  borderRadius: "15px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  height: "100%",
  maxWidth: "280px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "visible",
  "&:hover": {
    transform: "translateY(-5px)",
    transition: "transform 0.3s ease",
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#FF5733",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "-30px",
  left: "30px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
}));

const SaraswatiImage = styled("img")({
  maxWidth: "400px",
  width: "100%",
  height: "auto",
  display: "block",
  margin: "0 auto",
});

const InfoBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
});

const AlumniBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#fff",
  borderRadius: "15px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  textAlign: "center",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const Home = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const totalPages = Math.ceil(sponsorshipInitiatives.length / 3);
  return (
    <Box>
      <Header />
      <Banner />

      <Container maxWidth="xl" sx={{ py: 12, position: "relative" }}>
        {/* Welcome section content */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              color: "#333",
              mb: 2,
            }}
          >
            Welcome to <span style={{ color: "#841B2D" }}>VBFA</span>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              color: "#666",
            }}
          >
            Vidya Bharati Foundation of America
          </Typography>
        </Box>

        <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
          {/* Left Column */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              justifyContent: "center",
            }}
          >
            <StyledPaper>
              <IconCircle sx={{ bgcolor: "#841B2D" }}>
                <FaBuilding size={30} color="#fff" />
              </IconCircle>
              <Typography
                variant="h5"
                sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
              >
                VBFA Foundation
              </Typography>
              <Typography variant="body1">
                VBFA is a non-profit organization dedicated to supporting and
                nurturing Vidya Bharati initiatives in India.
              </Typography>
            </StyledPaper>

            <StyledPaper>
              <IconCircle sx={{ bgcolor: "#841B2D" }}>
                <FaLightbulb size={30} color="#fff" />
              </IconCircle>
              <Typography
                variant="h5"
                sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1">
                VBFA actively contributes to the cause of education in India.
                Join us in our mission to make education accessible to all.
              </Typography>
            </StyledPaper>
          </Grid>

          {/* Center Image */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "400px",
                width: "100%",
                padding: { xs: 2, md: 4 },
                margin: { md: "-40px 0" },
              }}
            >
              <SaraswatiImage
                src="/assets/Home/saraswati.webp"
                alt="Saraswati"
              />
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              justifyContent: "center",
            }}
          >
            <StyledPaper>
              <IconCircle sx={{ bgcolor: "#841B2D" }}>
                <FaGraduationCap size={30} color="#fff" />
              </IconCircle>
              <Typography
                variant="h5"
                sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
              >
                Vidya Bharati
              </Typography>
              <Typography variant="body1">
                Vidya Bharati is the world's largest non-governmental
                organization providing formal education in India.
              </Typography>
            </StyledPaper>

            <StyledPaper>
              <IconCircle sx={{ bgcolor: "#841B2D" }}>
                <FaChartBar size={30} color="#fff" />
              </IconCircle>
              <Typography
                variant="h5"
                sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
              >
                Our Impact
              </Typography>
              <Typography variant="body1">
                Operating{" "}
                <Typography component="span" variant="h6" color="#3f87a6">
                  12,098
                </Typography>{" "}
                schools and{" "}
                <Typography component="span" variant="h6" color="#3f87a6">
                  8,465
                </Typography>{" "}
                Bal Sanskar Centers across the country.
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ py: 8, bgcolor: "#f0e9ea" }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", color: "#333", mb: 6, textAlign: "center" }}
        >
          Recent <span style={{ color: "#841B2D" }}>Alumni</span>
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: "95%", mx: "auto" }}
        >
          {alumniList.map((alumni, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <AlumniBox sx={{ p: 3 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(132, 27, 45, 0.1)",
                    borderRadius: "50%",
                    p: 1.5,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaUserCircle style={{ fontSize: 50, color: "#841B2D" }} />
                </Box>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ color: "#841B2D", fontWeight: 600, fontSize: "1rem" }}
                >
                  {alumni.name}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                >
                  {alumni.role}
                </Typography>
              </AlumniBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sponsorship Initiatives Section */}
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#333",
            mb: 6,
            textAlign: "center",
          }}
        >
          Sponsorship <span style={{ color: "#841B2D" }}>Initiatives</span>
        </Typography>

        <Box
          sx={{
            position: "relative",
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={3} sx={{ mb: 4, justifyContent: "center" }}>
            {sponsorshipInitiatives
              .slice(currentPage * 3, currentPage * 3 + 3)
              .map((initiative, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <SponsorshipCard sx={{ width: "100%", maxWidth: "350px" }}>
                    <Box
                      sx={{
                        height: 180,
                        backgroundColor: "#f5f5f5",
                        backgroundImage: `url(${initiative.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{ mb: 2, fontWeight: "bold" }}
                      >
                        {initiative.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3 }}>
                        {initiative.content}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#FF5733",
                          "&:hover": { bgcolor: "#e64a2e" },
                        }}
                      >
                        Donate Now
                      </Button>
                    </Box>
                  </SponsorshipCard>
                </Grid>
              ))}
          </Grid>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <NavigationButton
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
            >
              <FaArrowLeft />
            </NavigationButton>
            <NavigationButton
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
              }
              disabled={currentPage === totalPages - 1}
            >
              <FaArrowRight />
            </NavigationButton>
          </Box>
        </Box>
      </Container>

      {/* Message from President Section */}
      <Container maxWidth="xl" sx={{ py: 12, bgcolor: "#fff" }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#333",
            mb: 6,
            textAlign: "center",
          }}
        >
          Message from <span style={{ color: "#841B2D" }}>President</span>
        </Typography>

        <Box
          sx={{
            maxWidth: "1000px",
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: "#333",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Mr. Surendra Garg
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              color: "#555",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            <Typography>
              Vidya Bharati was established in 1952 in Gorakhpur, in the state
              of Uttar Pradesh, India. Today it has grown into one of the
              largest educational NGO in the world. It imparts education to 3
              million students, through its 11,956 formal schools and 6,084
              informal schools.
            </Typography>

            <Typography>
              VB schools faculty consists of dedicated teachers and ancillary
              staff committed to providing quality education across the nation.
            </Typography>

            <Typography>
              Vidya Bharati also provides higher education centers all over
              India, with its presence in 645 out of a total of 719 districts in
              the country. Vidya Bharati is unique in providing education
              operate in remote, border, coastal, tribal areas where few like to
              venture.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#333",
                fontWeight: 600,
                mt: 2,
              }}
            >
              Education
            </Typography>

            <Typography>
              Vidya Bharati provides the platform for all different subjects up
              to High Schools. The curriculum and the syllabus are approved by
              the Central Board of Secondary Education (CBSE) and state boards,
              as per affiliations of different schools.
            </Typography>

            <Typography>
              In addition provides education to develop a good citizen with
              national character and good sanskars.
            </Typography>

            <Typography>
              The curriculum focus is on Academics, Health, Sports, Arts and
              Music and Ethics and Character Building.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Blog Section */}
    </Box>
  );
};

export default Home;

const SponsorshipCard = styled(Paper)(({ theme }) => ({
  height: "100%",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const NavigationButton = styled(Button)(({ theme }) => ({
  minWidth: "48px",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
}));
