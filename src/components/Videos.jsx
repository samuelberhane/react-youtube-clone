import React from "react";
import { VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length)
    return (
      <h1 style={{ textAlign: "center", marginTop: "10px", color: "#a323a3" }}>
        Loading...
      </h1>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:gap-2">
      {/* map all videos data */}
      {videos.map((item, index) => {
        return <VideoCard video={item} key={index} />;
      })}
    </div>
  );
};

export default Videos;
