// SecondaryRectangleComponent.js
import React from "react";

const SecondaryRectangleComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        width: "300px",
        border: "1px solid #ccc",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      {/* Secondary Business Details */}
      <div style={{ flex: 1 }}>
        <h2>Secondary Business</h2>
        <p>Secondary Business Name</p>
        <p>Secondary Business Address</p>
        <p>Secondary Business Phone</p>
      </div>
    </div>
  );
};

export default SecondaryRectangleComponent;
