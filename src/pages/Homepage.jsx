import React, { useEffect, useState } from "react";
import { SideBar, Videos } from "../components";
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
    <main className="flex flex-col md:flex-row">
      {/* sidebar */}
      <div className="border-r-2 border-[rgba(0,0,0,0.4)] h-auto md:h-[92vh] md:px-2">
        <SideBar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </div>

      {/* videos content */}
      <div className="py-2 px-5 overflow-y-auto flex-2 h-[92vh]">
        <p className="font-bold mb-2 ">
          {currentCategory} <span className="text-[#a342a3]">Videos</span>
        </p>
        <Videos videos={videos} />
      </div>
    </main>
  );
};

export default Homepage;
