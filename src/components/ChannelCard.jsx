import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { demoThumbnailUrl, demoChannelTitle } from "../utils/variables";

const ChannelCard = ({ channel }) => {
  const { snippet, statistics } = channel;
  return (
    <div className="channel-card">
      <Card
        sx={{
          textAlign: "center",
          width: { xs: "200px", sm: "240px", md: "280px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoChannelTitle}
          sx={{ height: 120, width: "100%" }}
        />
        <CardContent sx={{ height: 90, px: "10px" }}>
          <Typography variant="subtitle1" fontWeight="Bold">
            {snippet?.title.slice(0, 25) || demoChannelTitle.slice(0, 25)}
          </Typography>
          <Typography
            variant="subtitle3"
            color="grey"
            display="block"
            fontWeight="Bold"
          >
            Videos: {statistics?.videoCount || 200}
          </Typography>
          <Typography
            variant="subtitle3"
            color="grey"
            display="block"
            fontWeight="Bold"
          >
            Views: {statistics?.viewCount || 10000}
          </Typography>
          <Typography
            variant="subtitle3"
            color="grey"
            display="block"
            fontWeight="Bold"
          >
            Subscribers: {statistics?.subscriberCount || 150000}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChannelCard;
