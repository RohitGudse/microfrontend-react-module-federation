import React, { useState } from "react";

const NotificationCenter = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "New User Registered",
      description: "A new user joined your platform.",
    },
    {
      id: 2,
      title: "Server Updated",
      description: "Production server updated successfully.",
    },
    {
      id: 3,
      title: "Payment Received",
      description: "You received a new payment today.",
    },
    {
      id: 4,
      title: "Bug Report",
      description: "A client submitted a bug report.",
    },
  ]);

  return (
    <div className="notification-wrapper">
      <h2>Notification Center</h2>

      {notifications.map((item) => (
        <div className="notification-card" key={item.id}>
          <h3>{item.title}</h3>

          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationCenter;