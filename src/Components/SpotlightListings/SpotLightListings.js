import React from "react";
import { useDispatch } from "react-redux";
import { saveGameToWishlist } from "../../Redux/Reducers/wishlist.reducer";
import GameCardOne from "../Cards/GameCardOne";

export default function SpotLightListings({ title = "", data = [] }) {
  const dispatcher = useDispatch();
  return (
    <div className="spotlight-listings-container">
      <p>{title}</p>
      <div className="game-card-listings">
        {data.map((d, i) => (
          <GameCardOne
            data={d}
            key={`${title}-Game-Card-${i}`}
            dispatcher={dispatcher}
            callback={saveGameToWishlist}
          />
        ))}
      </div>
    </div>
  );
}
