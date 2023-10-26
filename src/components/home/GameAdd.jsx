import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
const GameAdd = () => {
  const navigate = useNavigate();
  const [gameTitle, setGameTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <header>
        <img className="logo" src="/images/logos/logo.png" alt="" />
        <div class="bar"></div>
        <form class="search-bar" method="POST">
          <div id="search-bar-section">
            <input id="search-bar-input" type="search" placeholder="Search" />
            <input
              name="go-button"
              class="button"
              id="search-button"
              type="submit"
              value="Go"
            />
          </div>
        </form>
        <div class="bar"></div>
        <div id="profile-header-section">
          <img
            id="profile-image"
            src="../../public/assets/images/logos/Rectangle 25.png"
          />
          <div id="profile-link">
            <a href="/profile">Welcome, {localStorage.getItem("user_name")}</a>
            <a id="logout-link" href="/">
              Logout
            </a>
          </div>
        </div>
      </header>

      <div className="main-body">
        <form>
          <input
            type="text"
            placeholder="Game Title"
            value={gameTitle}
            onChange={(e) => setGameTitle(e.target.value)}
          />
          <div className="container-for-game">
            <div className="flex-for-upload">
              <h3 className="label">Upload Banner</h3>
              <button className="add-btn">Add</button>
            </div>
          </div>
          <div className="container-for-game">
            <h3 className="label"> Screenshots</h3>
          </div>
          <div className="container-for-game">
            <div className="flex-for-upload">
              <h3 className="label"> Upload</h3>
              <button className="add-btn">Add</button>
              <h3 className="label"> Upload</h3>
              <button className="add-btn">Add</button>
              <h3 className="label"> Upload</h3>
              <button className="add-btn">Add</button>
            </div>
          </div>
          <textarea
            className="description"
            cols="40"
            rows="10"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <select id="account-type-select" placeholder="Genre">
            <option value="1">Adventure</option>
            <option value="2">Action</option>
            <option value="3">Horror</option>
            <option value="4">Fighting</option>
          </select>
          <h3 className="label">Platforms</h3>
          <div className="flex-for-platforms label">
            <div className="platform-space">
              <i class="fab fa-windows"></i>
              <label> Windows</label>
            </div>
            <div className="platform-space">
              <i class="fab fa-apple"></i>
              <label> OSX</label>
            </div>
            <div className="platform-space">
              <i class="fab fa-linux"></i>
              <label> Linux</label>
            </div>
          </div>

          <input className="button" type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
};
export default GameAdd;