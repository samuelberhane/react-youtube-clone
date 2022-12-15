import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
    }
    setSearchQuery("");
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mr: { sm: 5 },
        boxShadow: "1px 1px 2px",
        borderRadius: "10px",
        px: 2,
      }}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ color: "#c22113" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
