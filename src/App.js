import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage, SearchFeed, SingleChannel, SingleVideo } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/video/:id" element={<SingleVideo />}></Route>
        <Route path="/channel/:id" element={<SingleChannel />}></Route>
        <Route path="/search/:searchQuery" element={<SearchFeed />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
