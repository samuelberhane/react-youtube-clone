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
    <div className="flex justify-center mb-4">
      <div className="w-[90%] sm:w-[260px] md:w-[280px] shadow-sm overflow-hidden hover:bg-[#fefafd] hover:shadow-md">
        {/* video image */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <img
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            className="h-[170px] w-full hover:scale-105"
          />
        </Link>

        {/* video description */}
        <div className="h-[110px] px-2 mt-1">
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <p className="font-semibold text-lg">
              {snippet?.title
                ? snippet?.title?.length > 24
                  ? snippet?.title?.slice(0, 20) + "..."
                  : snippet?.title
                : demoVideoTitle.slice(0, 20) + "..."}
            </p>
          </Link>

          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <p className="font-bold text-sm text-gray-500 flex items-center">
              {" "}
              {snippet?.channelTitle || demoChannelTitle}{" "}
              <BsFillPatchCheckFill className="text-sm pl-1" />
            </p>
          </Link>
          {/* video channel name */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
