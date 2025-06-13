import React, { useState } from "react";

const PdfViewer = ({ pdf, onClose }) => {
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  if (!showPdfViewer) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1001,
            backgroundColor: "#841B2D",
            color: "white",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setShowPdfViewer(false)}
        >
          <FaTimes />
        </div>
        <iframe
          src={currentPdf}
          style={{ width: "100%", height: "100%", border: "none" }}
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default PdfViewer;
