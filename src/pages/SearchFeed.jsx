import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { fetchData } from "../utils/videosData";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchQuery } = useParams();

  // fetch data for the search query
  useEffect(() => {
    fetchData("part=snippet", `q=${searchQuery}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchQuery]);

  return (
    <Box
      py={2}
      px={5}
      sx={{ overflowY: "auto", flex: 2, height: "92vh" }}
      textAlign="center"
    >
      <Typography variant="h5" mb={2} fontWeight="bold">
        Search result for {searchQuery}
        <span style={{ color: "rgb(245, 70, 172)" }}> videos</span>
      </Typography>

      {/* video content */}
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
