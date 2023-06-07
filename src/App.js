import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea";
import SpotLightListings from "./Components/SpotlightListings/SpotLightListings";
import { useDispatch, useSelector } from "react-redux";
import { saveGames } from "./Redux/Reducers/games.reducer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Store";
import Wishlist from "./Pages/Wishlist";

function App() {
  const dispatcher = useDispatch();
  useEffect(() => {
    fetch("./mocks/games.json")
      .then((response) => response.json())
      .then((result) => dispatcher(saveGames(result.data)));
    return () => {};
  }, []);
  return (
    <div className="App">
      <div className="app-layout">
        <Sidebar />
        <ContentArea>
          <Routes>
            <Route path="/store" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </ContentArea>
      </div>
    </div>
  );
}

export default App;
