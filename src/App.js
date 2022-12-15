import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Homepage,
  SingleVideo,
  SingleChannel,
  SearchFeed,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/video/:id" element={<SingleVideo />}></Route>
          <Route path="/channel/:id" element={<SingleChannel />}></Route>
          <Route path="/search/:searchQuery" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
