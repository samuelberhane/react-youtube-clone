import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

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
    <form className="sm:mr-4 shadow-md rounded-lg px-2" onSubmit={handleSubmit}>
      <input
        className="border-none outline-none w-[350px]"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button type="submit" className="text-[#c22113]">
        <BiSearchAlt />
      </button>
    </form>
  );
};

export default SearchBar;
