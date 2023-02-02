import React from "react";
import { demoThumbnailUrl, demoChannelTitle } from "../utils/variables";

const ChannelCard = ({ channel }) => {
  const { snippet, statistics } = channel;
  return (
    <div className="absolute top-[120px] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center -z-10">
      <div className="text-center w-[200px] sm:w-[240px] md:w-[280px] flex flex-col items-center justify-center">
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt="videoImg"
          className="w-full h-[120px]"
        />
        <div className="h-[90px] px-2">
          <h1 className="text-xl font-bold">
            {snippet?.title.slice(0, 25) || demoChannelTitle.slice(0, 25)}
          </h1>
          <h3 className="cardDesc">Videos: {statistics?.videoCount || 200}</h3>
          <h3 className="cardDesc">Views: {statistics?.viewCount || 10000}</h3>
          <h3 className="cardDesc">
            Subscribers: {statistics?.subscriberCount || 150000}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
