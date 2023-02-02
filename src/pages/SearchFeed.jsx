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
    <div className="py-2 px-4 overflow-y-auto flex-grow h-[92vh] text-center">
      <p className="font-bold mb-2">
        Search result for {searchQuery}
        <span className="text-[#a342a3]"> videos</span>
      </p>

      {/* video content */}
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
