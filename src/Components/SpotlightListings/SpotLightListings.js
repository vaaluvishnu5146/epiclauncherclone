import React from "react";

export default function SpotLightListings({ data = [] }) {
  return (
    <div className="spotlight-listings-container">
      <p>Mega Sale Spotlight</p>
      <div className="game-card-listings">
        {data.map((d, i) => (
          <div className="game-card">
            <img src={d.picture} />
            <div className="game-content">
              <h4 className="gameType">{d.gameType}</h4>
              <h2 className="gameName">{d.name}</h2>
              <div className="gameOffersContainer">
                <p className="offer">{d.offer}</p>
                <div className="pricing">
                  <p className="actualPrice">₹{d.actualPrice}</p>
                  <p className="sellingPrice">₹{d.sellingPrice}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
