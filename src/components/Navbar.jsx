import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/variables";
import { SearchBar } from ".";

const Navbar = () => {
  return (
    <div className="flex items-center px-3 py-2 justify-between fixed top-0 left-0 w-full bg-red-500 shadow-md">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Youtube logo" height={55} />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
