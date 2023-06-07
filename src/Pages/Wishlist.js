import React from "react";
import { useSelector } from "react-redux";
import GameCardOne from "../Components/Cards/GameCardOne";

export default function Wishlist(props) {
  const { games = [] } = useSelector((state) => state.wishlistReducer);
  return (
    <div className="wishlist-page-container">
      {games.length > 0 &&
        games.map((d, i) => (
          <GameCardOne data={d} key={`wishlist-page-game`} />
        ))}
    </div>
  );
}
