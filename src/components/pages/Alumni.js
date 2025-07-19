import React from "react";
import PageBanner from "../layout/PageBanner";

import AlumniOverview from "../AlumniComp/AlumniOverview";
import StatsSection from "../AlumniComp/StatsSection";
import GlobalPresence from "../AlumniComp/GlobalPresence";
import ProfessionList from "../AlumniComp/ProfessionList";
import VBFAAlumni from "../AlumniComp/VBFAAlumni";
import RecentAlumni from "../AlumniComp/RecentAlumni";
import CallToAction from "../commonComp/CallToAction";

const Alumni = () => {
  return (
    <>
      <PageBanner
        title="Alumni Community"
        subtitle="Join our growing network of Vidya Bharati alumni making a difference worldwide"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />
      <StatsSection />
      <AlumniOverview />
      <ProfessionList />
      <GlobalPresence />
      <VBFAAlumni />
      <RecentAlumni />
      <CallToAction btn2="Register Now" />
    </>
  );
};

export default Alumni;
