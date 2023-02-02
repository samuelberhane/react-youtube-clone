import React from "react";
import { categories } from "../utils/variables";

const SideBar = ({ currentCategory, setCurrentCategory }) => {
  return (
    <div className="fixed top-[70px] left-0 w-full bg-[#f5f5f8] z-[100] md:w-[200px] flex overflow-scroll border-b-2  scrollbar-hide h-auto md:h-[calc(100vh-70px)] md:pr-4 md:pl-5 md:pt-4 md:flex-col md:gap-2 md:border-r-2 border-gray-500">
      {categories.map((category, index) => {
        const { name, icon } = category;
        return (
          <button
            onClick={() => setCurrentCategory(name)}
            key={index}
            className={`categoryBtn ${
              name === currentCategory && "bg-[#e13e51]"
            }`}
          >
            <span className={`${name === currentCategory && "text-white"}`}>
              {icon}
            </span>
            <span className={`${name === currentCategory && "text-white"}`}>
              {name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
