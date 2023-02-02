import React, { useEffect, useState } from "react";
import { Videos } from "../components";
import { fetchData } from "../utils/videosData";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchQuery } = useParams();

  // fetch data for the search query
  useEffect(() => {
    fetchData("part=snippet", `q=${searchQuery}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchQuery]);

  return (
    <div className="py-2 px-4 overflow-y-auto flex-grow mt-[70px] text-center">
      <p className="font-bold mb-4 mt-2 text-lg md:text-2xl">
        Search result for
        <span className="text-[#e13e51]"> {searchQuery} videos</span>
      </p>

      {/* video content */}
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
