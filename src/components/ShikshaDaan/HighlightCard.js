import React from "react";


const HighlightCard = ({ title, description, image }) => (
  <div className="highlight-card" style={{ backgroundImage: `url(${image})` }}>
    <div className="overlay">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default HighlightCard;
