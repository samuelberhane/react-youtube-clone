import React from "react";
import { Link } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";

// import default value if there is no value in response
import {
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/variables";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  const { videoId } = id;
  return (
    <div className="w-[90%] sm:w-[260px] md:w-[280px]">
      {/* video image */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="h-[170px] w-full"
        />
      </Link>

      {/* video description */}
      <div className="h-[90px] px-2">
        {/* video title link */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <p className="font-bold text-xl">
            {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}
          </p>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <p className="font-bold text-lg text-gray-500">
            Channel: {snippet?.channelTitle || demoChannelTitle}
            <BsFillPatchCheckFill className="text-sm pl-1" />
          </p>
        </Link>
        {/* video channel name */}
      </div>
    </div>
  );
};

export default VideoCard;
