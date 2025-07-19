import React from "react";
import PageBanner from "../../layout/PageBanner";
import SanskritiIntro from "../../SanskritiBodh/SanskritiIntro";
import HighlightsSection from "../../SanskritiBodh/HighlightsSection";
import CallToAction from "../../commonComp/CallToAction";
import SectionContainer from "../../shared/SectionContainer";

const SanskritiBodh = () => {
  return (
    <>
      <PageBanner
        title="Sanskriti Bodh Pariyojana"
        subtitle="Preserving Culture, Building Character"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />
      <div className="sanskriti-container">
        <SanskritiIntro />
        <HighlightsSection />
      </div>
      <CallToAction />
    </>
  );
};

export default SanskritiBodh;
