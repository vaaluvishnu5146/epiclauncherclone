import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea";
import SpotLightListings from "./Components/SpotlightListings/SpotLightListings";
import { useDispatch, useSelector } from "react-redux";
import { saveGames } from "./Redux/Reducers/games.reducer";

function App() {
  const dispatcher = useDispatch();
  const { games } = useSelector((state) => state.gamesReducer);
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
          <SpotLightListings data={games} />
        </ContentArea>
      </div>
    </div>
  );
}

export default App;
