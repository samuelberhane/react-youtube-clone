import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/variables";

const SideBar = ({ currentCategory, setCurrentCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, index) => {
        const { name, icon } = category;
        return (
          <button
            onClick={() => setCurrentCategory(name)}
            key={index}
            className="category-btn"
            style={{
              backgroundColor: name === currentCategory && "rgb(245, 70, 172)",
            }}
          >
            <span
              style={{
                color: name === currentCategory ? "#000" : "rgb(45, 70, 92)",
                marginRight: "10px",
              }}
            >
              {icon}
            </span>
            <span>{name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
