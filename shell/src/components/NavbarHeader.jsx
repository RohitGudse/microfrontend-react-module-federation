import React from "react";

const NavbarHeader = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#222",
      color: "#fff"
    }}>
      <h2>MicroFrontend App</h2>
      <span>Welcome Rohit</span>
    </nav>
  );
};

export default NavbarHeader;