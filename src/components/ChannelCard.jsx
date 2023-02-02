import React from "react";
import { demoThumbnailUrl, demoChannelTitle } from "../utils/variables";

const ChannelCard = ({ channel }) => {
  const { snippet, statistics } = channel;
  return (
    <div className="absolute top-[150px] left-[50%] translate-x-[-50%] flex flex-col rounded-2xl items-center justify-center z-50 shadow-md bg-white">
      <div className="text-center w-[250px]  md:w-[280px] flex flex-col items-center justify-center rounded-2xl">
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt="videoImg"
          className="w-full h-[120px] rounded-2xl"
        />
        <div className="px-2 pb-3">
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
