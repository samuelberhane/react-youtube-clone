import React, { useEffect, useState } from "react";
import { SideBar, Videos } from "../components";
import { fetchData } from "../utils/videosData";

const Homepage = () => {
  const [currentCategory, setCurrentCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // setvideos to data fetch
  useEffect(() => {
    fetchData("part=snippet", `q=${currentCategory}`).then((data) => {
      setVideos(data?.items);
    });
  }, [currentCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* sidebar */}
      <Box
        sx={{
          borderRight: "2px solid rgba(0,0,0,0.4)",
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </Box>
      {/* sidebar */}

      {/* videos content */}
      <Box py={2} px={5} sx={{ overflowY: "auto", flex: 2, height: "92vh" }}>
        <Typography variant="h4" mb={2} fontWeight="bold">
          {currentCategory}{" "}
          <span style={{ color: "rgb(245, 70, 172)" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
      {/* videos content */}
    </Stack>
  );
};

export default Homepage;
