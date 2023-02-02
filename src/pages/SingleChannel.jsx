import React, { useState, useEffect } from "react";
import { fetchChannelData } from "../utils/channelData";
import { fetchChannelVideos } from "../utils/channelVideos";
import { useParams } from "react-router-dom";
import { ChannelCard, Navbar, VideoCard } from "../components";

const SingleChannel = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);

  // fetch data
  useEffect(() => {
    fetchChannelData(id).then((data) => {
      setChannelDetails(data.items);
    });
  }, [id]);

  useEffect(() => {
    fetchChannelVideos("part=snippet", `channelId=${id}`).then((data) => {
      setChannelVideos(data.items);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <section className="mt-[70px]">
        {/* background div */}
        <div className="-z-10 w-full h-[200px] bg-gradient-to-tl from-green-300 via-red-400 to-yellow-300 "></div>

        {/* channel card */}
        {channelDetails?.map((channel, index) => {
          return <ChannelCard key={index} channel={channel} />;
        })}

        {/* channel videos */}
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:gap-2 grid mt-[150px]">
          {channelVideos?.map((video, index) => {
            return <VideoCard video={video} key={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default SingleChannel;
