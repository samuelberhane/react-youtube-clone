import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/variables";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
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
    <div className=" fixed top-0 left-0 w-full h-[70px] shadow-md z-[100] bg-white">
      <div className="flex items-center px-1 py-2 sm:px-8 justify-between h-full">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Youtube logo"
            className="h-[60px] w-[100px] sm:w-[120px] rounded"
          />
        </Link>

        <form
          className="md:w-[300px] lg:w-[430px] relative"
          onSubmit={handleSubmit}
        >
          <input
            className="border-none outline-none w-full h-full rounded-xl py-2 px-4 pr-10 bg-gray-200"
            type="text"
            placeholder="Search Videos"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button
            type="submit"
            className="text-[#c22113] absolute top-2 right-2 text-xl"
          >
            <BiSearchAlt />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
