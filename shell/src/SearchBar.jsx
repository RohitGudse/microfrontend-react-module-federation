import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "5px"
        }}
      />

      <p>Searching: {search}</p>
    </div>
  );
};

export default SearchBar;