import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
};

export default DashboardCard;