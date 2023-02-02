import React from "react";
import { VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  return (
    <div
      className={
        !direction
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:gap-2 grid"
          : "grid grid-cols-1"
      }
    >
      {/* map all videos data */}
      {videos?.map((item, index) => {
        return <VideoCard video={item} key={index} direction={direction} />;
      })}
    </div>
  );
};

export default Videos;
