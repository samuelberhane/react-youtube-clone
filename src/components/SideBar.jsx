import React from "react";
import { categories } from "../utils/variables";

const SideBar = ({ currentCategory, setCurrentCategory }) => {
  return (
    <div className="absolute top-[70px] left-0 flex overflow-auto h-auto md:h-[calc(100vh-70px)] md:pr-4 md:pl-5 pt-4 md:flex-col md:gap-2 border-r-2 border-gray-500 overflow-y-scroll">
      {categories.map((category, index) => {
        const { name, icon } = category;
        return (
          <button
            onClick={() => setCurrentCategory(name)}
            key={index}
            className="categoryBtn"
          >
            <span
              className={` ${
                name === currentCategory
                  ? "text-black"
                  : "text-[rgb(45, 70, 92)]"
              }`}
            >
              {icon}
            </span>
            <span>{name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
