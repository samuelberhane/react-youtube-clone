import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

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
    <Card sx={{ width: { xs: "90%", sm: "260px", md: "280" } }}>
      {/* video image */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: 170, width: "100%" }}
        />
      </Link>
      {/* video image */}

      {/* video description */}
      <CardContent sx={{ height: 90, px: "10px" }}>
        {/* video title link */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="Bold">
            {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}
          </Typography>
        </Link>
        {/* video title link */}
        {/* video channel name */}
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle3" fontWeight="Bold" color="grey">
            Channel: {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", ml: "5px" }} />
          </Typography>
        </Link>
        {/* video channel name */}
      </CardContent>
      {/* video description */}
    </Card>
  );
};

export default VideoCard;
