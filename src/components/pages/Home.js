import React from "react";
import { Box } from "@mui/material";
import Header from "../layout/Header";
import Banner from "../layout/Banner";
import WelcomeSection from "../HomeComp/WelcomeSection";
import AlumniSection from '../HomeComp/AlumniSection';
import SponsorshipInitiatives from "../HomeComp/SponsorshipInitiatives";
import PresidentMessage from "../HomeComp/PresidentMessage";


const Home = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <WelcomeSection />
      {/* <AlumniSection />
      <SponsorshipInitiatives /> */}
      <PresidentMessage />
    </Box>
  );
};

export default Home;
