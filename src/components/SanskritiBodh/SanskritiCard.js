import React from 'react';

const SanskritiCard = ({ title, description, image }) => {
  return (
    <div className="sanskriti-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SanskritiCard;
