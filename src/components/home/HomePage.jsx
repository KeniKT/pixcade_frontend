import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => {
        setGameList(data["data"]);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

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
        <h2>Recent Releases</h2>
        <div className="game-grid">
          {gameList.map((game) => {
            return (
              <div className="game-card">
                <img id="game-image" src="/images/logos/Rectangle 25.png" />
                <a id="game-title" href={`/gamedetails/${game.id}`}>
                  {game.title}
                </a>
                {/* <p id="game-rating-value">{game.price}</p> */}
                {/* <p>{game.release_date}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
