import React, { useState, useEffect } from "react";
import { fetchChannelData } from "../utils/channelData";
import { fetchChannelVideos } from "../utils/channelVideos";
import { useParams } from "react-router-dom";
import { ChannelCard, VideoCard } from "../components";
import { Stack, Box } from "@mui/material";

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
    <Stack>
      {/* background div */}
      <Box
        sx={{
          zIndex: "-10",
          height: "160px",
          background:
            "linear-gradient(45deg,rgb(124,34,112) 25%,rgb(123,45,221) 50%,rgb(23,195,121) 25%)",
        }}
      ></Box>
      {/* background div */}

      {/* channel card */}
      {channelDetails.map((channel, index) => {
        return <ChannelCard key={index} channel={channel} />;
      })}
      {/* channel card */}

      {/* channel videos */}
      <div
        style={{
          width: "100%",
          marginTop: "240px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "22px",
          flexWrap: "wrap",
          px: "10px",
        }}
      >
        {channelVideos.map((video, index) => {
          return <VideoCard video={video} key={index} />;
        })}
      </div>
      {/* channel videos */}
    </Stack>
  );
};

export default SingleChannel;
