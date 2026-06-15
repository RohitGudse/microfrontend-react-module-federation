import React from "react";

const UserProfile = ({ name, email }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserProfile;