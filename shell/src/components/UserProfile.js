import React from "react";

const UserProfile = () => {
  const user = {
    name: "Rohit Gudse",
    email: "rohit@example.com",
    role: "Frontend Developer",
    city: "Mumbai",
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        boxShadow: "0 3px 8px rgba(0,0,0,.1)",
      }}
    >
      <h2>User Profile</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>

      <p>
        <strong>City:</strong> {user.city}
      </p>

      <button
        style={{
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfile;