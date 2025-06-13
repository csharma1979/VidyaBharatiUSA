import React from "react";
import SanskritiCard from "./SanskritiCard";
import SectionHeading from "../shared/SectionHeading";

const highlights = [
  {
    title: "Cultural Heritage",
    description: "Preserving and promoting Indian cultural values",
    image: "/assets/sanskritibodh/cultural.webp",
  },
  {
    title: "Moral Education",
    description: "Building character through value-based learning",
    image: "/assets/sanskritibodh/moral_education.webp",
  },
  {
    title: "Sanskrit Learning",
    description: "Teaching the ancient language of wisdom",
    image: "/assets/sanskritibodh/sanskrit.webp",
  },
  {
    title: "Vedic Studies",
    description: "Understanding ancient Indian knowledge systems",
    image: "/assets/sanskritibodh/vedic.webp",
  },
  {
    title: "1000+ Programs",
    description: "Cultural activities and workshops annually",
    image: "/assets/sanskritibodh/1000programs.webp",
  },
  {
    title: "50,000+ Students",
    description: "Learning cultural values and traditions",
    image: "/assets/sanskritibodh/students.webp",
  },
];

const HighlightsSection = () => {
  return (
    <section className="sanskriti-highlights">
      <SectionHeading variant="h5">Program Highlights</SectionHeading>

      <p className="subtitle">
        Sanskriti Bodh Pariyojana offers a comprehensive approach to cultural
        education and character development.
      </p>
      <div className="highlight-grid">
        {highlights.map((item, index) => (
          <SanskritiCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
