import React, { useState, useEffect } from "react";
import { fetchChannelData } from "../utils/channelData";
import { fetchChannelVideos } from "../utils/channelVideos";
import { useParams } from "react-router-dom";
import { ChannelCard, VideoCard } from "../components";

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
    <section>
      {/* background div */}
      <div className="-z-10 w-full h-[160px] bg-gradient-to-tl from-green-300 via-red-400 to-yellow-300 "></div>

      {/* channel card */}
      {channelDetails.map((channel, index) => {
        return <ChannelCard key={index} channel={channel} />;
      })}

      {/* channel videos */}
      <div className="w-full mt-[240px] flex items-center justify-center gap-[22px] flex-wrap px-[10px]">
        {channelVideos.map((video, index) => {
          return <VideoCard video={video} key={index} />;
        })}
      </div>
      {/* channel videos */}
    </section>
  );
};

export default SingleChannel;
