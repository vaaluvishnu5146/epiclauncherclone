import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="brand-container">
        <img
          src="https://logodownload.org/wp-content/uploads/2020/10/epic-games-logo.png"
          alt="logo"
        />
      </div>
      <div className="link-container">
        <nav className="nav">
          <ul className="nav-lists">
            <Link to="store">
              <li className="nav-list active">
                <span class="material-symbols-outlined">home</span>Store
              </li>
            </Link>
            <Link to="wishlist">
              <li className="nav-list">
                <span class="material-symbols-outlined">favorite</span>
                Wishlisted
              </li>
            </Link>
            <Link>
              <li className="nav-list">Library</li>
            </Link>
            <Link>
              <li className="nav-list">Unreal Enginer</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
