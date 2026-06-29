import React from "react";

const Dashboard = () => {
  const cards = [
    { title: "Users", value: 1250 },
    { title: "Orders", value: 430 },
    { title: "Revenue", value: "$15,400" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,.1)",
            }}
          >
            <h3>{card.title}</h3>
            <h2>{card.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;