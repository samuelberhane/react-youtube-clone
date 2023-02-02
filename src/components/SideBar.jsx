import React from "react";
import { categories } from "../utils/variables";

const SideBar = ({ currentCategory, setCurrentCategory }) => {
  return (
    <div className="flex overflow-auto h-auto md:h-[95%] md:flex-col">
      {categories.map((category, index) => {
        const { name, icon } = category;
        return (
          <button
            onClick={() => setCurrentCategory(name)}
            key={index}
            className={`category-btn ${
              name === backgroundColor && "bg-[rgb(245, 70, 172)]"
            }`}
          >
            <span
              className={`mt-2 ${
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
