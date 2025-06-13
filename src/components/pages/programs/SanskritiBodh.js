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
        <CallToAction
          heading="Support Cultural Education"
          para="Help us preserve and promote India's rich cultural heritage through education. Your support makes a difference."
          btn1="Contribute Now"
        />
    </>
  );
};

export default SanskritiBodh;
