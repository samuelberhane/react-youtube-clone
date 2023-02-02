import React, { useEffect, useState } from "react";
import { SideBar, Videos, Navbar } from "../components";
import { fetchData } from "../utils/videosData";

const Homepage = () => {
  const [currentCategory, setCurrentCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // setvideos to data fetch
  useEffect(() => {
    fetchData("part=snippet", `q=${currentCategory}`).then((data) => {
      setVideos(data?.items);
    });
  }, [currentCategory]);

  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* sidebar */}
      <SideBar
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />

      {/* videos content */}
      <div className="py-3 px-2 mt-[125px] md:mt-[70px] md:ml-[200px]">
        <p className="font-bold mb-4 text-2xl">
          {currentCategory} <span className="text-[#e13e51]">Videos</span>
        </p>
        <Videos videos={videos} direction={false} />
      </div>
    </main>
  );
};

export default Homepage;
