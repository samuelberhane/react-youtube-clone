import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, SearchFeed, SingleChannel, SingleVideo } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/video/:id" element={<SingleVideo />} />
        <Route path="/channel/:id" element={<SingleChannel />} />
        <Route path="/search/:searchQuery" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
