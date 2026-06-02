import React from "react";

const analyticsData = [
  {
    title: "Users",
    value: "12,540",
    growth: "+18%",
  },
  {
    title: "Revenue",
    value: "$45,120",
    growth: "+10%",
  },
  {
    title: "Orders",
    value: "2,310",
    growth: "+22%",
  },
  {
    title: "Conversion",
    value: "6.8%",
    growth: "+5%",
  },
];

const AnalyticsDashboard = () => {
  return (
    <div className="analytics-wrapper">
      <h2 className="dashboard-title">
        Analytics Dashboard
      </h2>

      <div className="analytics-grid">
        {analyticsData.map((item, index) => (
          <div className="analytics-card" key={index}>
            <h3>{item.title}</h3>

            <p className="analytics-value">
              {item.value}
            </p>

            <span className="growth">
              {item.growth} this month
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsDashboard;