import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { fetchSingleVideo } from "../utils/singleVideoData";
import { useParams, Link } from "react-router-dom";
import { Videos } from "../components";
import { fetchRelatedData } from "../utils/relatedVideos";
import { CheckCircle } from "@mui/icons-material";

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
  if (!videoDetails?.snippet)
    return (
      <h1 style={{ textAlign: "center", marginTop: "10px", color: "#a323a3" }}>
        Loading...
      </h1>
    );

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ sm: "column", md: "row" }} mt="20px" mx="20px">
        {/* playing video description */}
        <Box flex={1}>
          {/* video player */}
          <Box sx={{ width: "100%", marginBottom: "10px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </Box>
          {/* video player */}

          {/* video tititle */}
          <Typography
            variant={{ xs: "subtitle3", sm: "subtitle2", md: "subtitle1" }}
          >
            {title}
          </Typography>
          {/* video title */}

          {/* details about playing video */}
          <Stack
            marginTop="4px"
            marginBottom="20px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* channel name */}
            <Link to={`/channel/${channelId}`}>
              <Typography variant="subtitle3">
                {channelTitle}{" "}
                <CheckCircle sx={{ fontSize: "12px", ml: "5px" }} />
              </Typography>
            </Link>
            {/* channel name */}

            {/*  video statistics*/}
            <Stack direction="row" gap="10px" alignItems="center">
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
            {/* video statistics */}
          </Stack>
          {/* details about playing video */}
        </Box>
        {/* playing video description */}

        {/* related videos */}
        <Box sx={{ mx: "15px" }}>
          <Videos videos={videos} direction="column" />
        </Box>
        {/* related videos */}
      </Stack>
    </Box>
  );
};

export default SingleVideo;
