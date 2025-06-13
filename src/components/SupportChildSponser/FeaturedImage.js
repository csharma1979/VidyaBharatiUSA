import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const FeaturedImage = ({ imagePath, title }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="featured-image">
      {!imageError ? (
        <img
          src={imagePath}
          alt={title}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="fallback-content">
          <FaGraduationCap size={120} color="white" />
          <div className="fallback-text">Support a Child's Education</div>
        </div>
      )}
    </div>
  );
};

export default FeaturedImage;
