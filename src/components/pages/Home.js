import React from "react";
import { Box } from "@mui/material";
import Header from "../layout/Header";
import Banner from "../layout/Banner";
import WelcomeSection from "../HomeComp/WelcomeSection";
import AlumniSection from "../HomeComp/AlumniSection";
import SponsorshipInitiatives from "../HomeComp/SponsorshipInitiatives";
import PresidentMessage from "../HomeComp/PresidentMessage";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        {" "}
        {/* Meta Title */}
        <title>
          Support Education in India | Vidya Bharati Foundation of America
          (VBFA)
        </title>
        {/* Meta Description */}
        <meta
          name="description"
          content="Empower underprivileged children in India through education, infrastructure, and cultural programs. Support VBFA’s mission to build a stronger, educated nation."
        />
        {/* SEO Keywords */}
        <meta
          name="keywords"
          content="Support education in India, Sponsor child education India, Donate to rural education India, Non-profit education organization USA, Vidya Bharati Foundation of America, Indian cultural education, Value-based education India, Build classrooms in India, Sponsor library rural India, Construct toilets for schools India, Shiksha Daan donation, Sanskriti Bodh Pariyojana, Empower rural students India, Education NGO for tribal children India, CBSE affiliated NGO schools India, 501(c)(3) education donation USA"
        />
      </Head>

      <Box>
        <Header />
        <Banner />
        <WelcomeSection />
        {/* <AlumniSection />
      <SponsorshipInitiatives /> */}
        <PresidentMessage />
      </Box>
    </>
  );
};

export default Home;
