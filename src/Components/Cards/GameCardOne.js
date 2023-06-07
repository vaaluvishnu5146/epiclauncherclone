import React from "react";

export default function GameCardOne({
  dispatcher = () => {},
  title = "",
  callback = (data) => {},
  data,
}) {
  return (
    <div className="game-card">
      <span
        onClick={() => dispatcher(callback(data))}
        class="material-symbols-outlined wishlist-button"
      >
        add_circle
      </span>
      <img src={data.picture} alt={title} />
      <div className="game-content">
        <h4 className="gameType">{data.gameType}</h4>
        <h2 className="gameName">{data.name}</h2>
        <div className="gameOffersContainer">
          {data.offer && <p className="offer">{data.offer}</p>}
          <div className="pricing">
            {data.actualPrice && (
              <p className="actualPrice">₹{data.actualPrice}</p>
            )}
            {data.sellingPrice && (
              <p className="sellingPrice">₹{data.sellingPrice}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
