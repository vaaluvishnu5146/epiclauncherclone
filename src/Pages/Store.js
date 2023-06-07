import React from "react";
import SpotLightListings from "../Components/SpotlightListings/SpotLightListings";
import { useDispatch, useSelector } from "react-redux";
import { saveGames } from "../Redux/Reducers/games.reducer";
import { Route, Routes } from "react-router-dom";

export default function Store(props) {
  const dispatcher = useDispatch();
  const { Action, Ficton } = useSelector((state) => state.gamesReducer);
  return (
    <>
      <SpotLightListings title="Action Games Of This Week" data={Action} />
      <SpotLightListings title="Ficton Games" data={Ficton} />
    </>
  );
}
