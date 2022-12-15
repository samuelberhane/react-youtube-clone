import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { logo } from "../utils/variables";

import { SearchBar } from "../components";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        px: 3,
        py: 2,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        boxShadow: "1px 2px 4px",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Youtube logo" height={55} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
