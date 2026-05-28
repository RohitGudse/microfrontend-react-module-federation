import React from "react";

const NotificationPanel = () => {
  const notifications = [
    "New order received",
    "Payment successful",
    "New user registered"
  ];

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;