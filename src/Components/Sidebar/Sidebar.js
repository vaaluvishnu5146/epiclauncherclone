import React from "react";

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
            <li className="nav-list active">
              <span class="material-symbols-outlined">home</span>Store
            </li>
            <li className="nav-list">Library</li>
            <li className="nav-list">Unreal Enginer</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
