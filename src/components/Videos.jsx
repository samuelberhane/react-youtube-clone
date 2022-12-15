import React from "react";
import { VideoCard } from "./";
import { Box } from "@mui/material";

const Videos = ({ videos, direction }) => {
  if (!videos?.length)
    return (
      <h1 style={{ textAlign: "center", marginTop: "10px", color: "#a323a3" }}>
        Loading...
      </h1>
    );
  return (
    <Box
      sx={{
        flexDirection: {
          md: `${direction || "row"}`,
          sx: "row",
        },
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        px: "10px",
      }}
    >
      {/* map all videos data */}
      {videos.map((item, index) => {
        return <VideoCard video={item} key={index} />;
      })}
    </Box>
  );
};

export default Videos;
