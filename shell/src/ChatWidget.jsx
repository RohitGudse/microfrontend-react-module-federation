import React, { useState } from "react";

const ChatWidget = () => {
  const [messages] = useState([
    "Hello User",
    "Welcome to MicroFrontend App",
    "How can I help you?"
  ]);

  return (
    <div style={{
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px"
    }}>
      <h2>Chat Widget</h2>

      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default ChatWidget;