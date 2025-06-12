import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 0",
      }}
    >
      <FaSpinner
        style={{
          fontSize: "2rem",
          color: "#841B2D",
          animation: "spin 1s linear infinite",
        }}
      />
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
