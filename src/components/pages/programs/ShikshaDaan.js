import React from "react";
import PageBanner from "../../layout/PageBanner";
import SectionContainer from "../../shared/SectionContainer";
import SectionHeading from "../../shared/SectionHeading";
import ShikshaDaanHighlights from "../../ShikshaDaan/ShikshaDaanHighlights";

import CallToAction from "../../commonComp/CallToAction";

const ShikshaDaan = () => (
  <>
    <PageBanner
      title="Shiksha Daan"
      subtitle="Support Education, Transform Lives"
      titleStyle={{ color: "white" }}
      subtitleStyle={{ color: "white" }}
    />

    <SectionContainer>
      <SectionHeading variant="h5">Introduction</SectionHeading>

      <p className="alumni-desc">
        Education is the mirror of society. A strong nation can be built only
        through an educated society. It is our collective responsibility to
        ensure that everyone has access to education, regardless of their
        socio-economic background.
      </p>
      <p className="alumni-desc">
        Shiksha Daan is a noble initiative by Vidya Bharati that aims to bridge
        the educational gap in our society. Through this program, we provide
        quality education to children from underprivileged backgrounds, ensuring
        they have access to the same opportunities as others. Our approach
        combines academic excellence with value-based education, helping shape
        not just educated individuals, but responsible citizens.
      </p>
      <p className="alumni-desc">
        The program supports students with essential educational materials,
        qualified teachers, and modern infrastructure. We believe that every
        child has the potential to excel, and it's our duty to provide them with
        the right environment and resources to nurture their talents.
      </p>
      <p className="alumni-desc">
        We all need to make a resolution - to ensure no child is left behind in
        their educational journey. Your support can help us reach more children
        and transform more lives through education.
      </p>
    </SectionContainer>

    <SectionContainer>
      <SectionHeading variant="h5">About Vidya Bharati</SectionHeading>

      <p className="alumni-desc" style={{ textAlign: "center", marginBottom: "48px" }}>
        Vidya Bharati Akhil Bharatiya Shiksha Sansthan is the country's largest
        non-government educational institution.
      </p>
      <ShikshaDaanHighlights />
    </SectionContainer>

    <CallToAction
      heading="Support Our Mission"
      para="Join us in our mission to provide quality education across India. Your contribution can make a difference."
      btn1="Contribute Now"
   />
  </>
);

export default ShikshaDaan;
