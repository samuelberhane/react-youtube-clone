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
    <div
      className={`flex w-full items-center justify-center gap-7 flex-wrap  px-2`}
    >
      {/* map all videos data */}
      {videos.map((item, index) => {
        return <VideoCard video={item} key={index} />;
      })}
    </div>
  );
};

export default Videos;
