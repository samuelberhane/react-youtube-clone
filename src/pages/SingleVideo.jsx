import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchSingleVideo } from "../utils/singleVideoData";
import { useParams, Link } from "react-router-dom";
import { Navbar, Videos } from "../components";
import { fetchRelatedData } from "../utils/relatedVideos";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { demoChannelTitle, demoChannelUrl } from "../utils/variables";

const SingleVideo = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState({});
  const [videos, setVideos] = useState([]);

  // fetch single video data
  useEffect(() => {
    fetchSingleVideo(id).then((response) => {
      setVideoDetails(response.items[0]);
    });
  }, [id]);

  // fetch  related videos data
  useEffect(() => {
    fetchRelatedData(id).then((response) => {
      setVideos(response.items);
    });
  }, [id]);

  // return loading while fetch data
  if (!videoDetails?.snippet) return;

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <>
      <Navbar />
      <section className="mt-[90px]">
        <div className="flex flex-col sm:flex-row mt-5 mx-5">
          {/* playing video description */}
          <div className="flex-grow">
            <div className="w-full mb-3">
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>

            {/* video title */}
            <h1 className="font-semibold text-sm sm:text-[16px] md:text-lg">
              {title}
            </h1>

            {/* details about playing video */}
            <div className="mt-1 mb-5 flex items-center justify-between">
              {/* channel name */}

              <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                <p className="font-semibold text-sm text-gray-500 flex items-center">
                  {" "}
                  {channelTitle || demoChannelTitle}{" "}
                  <BsFillPatchCheckFill className="text-sm pl-1" />
                </p>
              </Link>

              {/*  video statistics*/}
              <div className="flex gap-2 items-center">
                <p className="text-gray-500 text-sm">
                  {parseInt(viewCount).toLocaleString()} views
                </p>
                <p className="text-gray-500 text-sm">
                  {parseInt(likeCount).toLocaleString()} likes
                </p>
              </div>
            </div>
          </div>

          {/* related videos */}
          <div className="mx-3">
            <Videos videos={videos} direction={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVideo;
