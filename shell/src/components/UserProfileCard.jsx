import React from "react";

const userData = {
  name: "Rohit Gudse",
  role: "Full Stack Developer",
  email: "rohit@example.com",
  location: "Mumbai, India",
  skills: [
    "React",
    "JavaScript",
    "WordPress",
    "PHP",
    "Node.js",
  ],
};

const UserProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="profile-image"
        />

        <h2>{userData.name}</h2>

        <p>{userData.role}</p>
      </div>

      <div className="profile-body">
        <p>
          <strong>Email:</strong> {userData.email}
        </p>

        <p>
          <strong>Location:</strong> {userData.location}
        </p>

        <h3>Skills</h3>

        <div className="skills-wrapper">
          {userData.skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;