import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

  const [allGameList, setAllGameList] = useState([]);
  const [gameList, setGameList] = useState([]);
  const [headerText, setHeaderText] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => {
        setAllGameList(data["data"]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user_type") == "gamer") {
      setHeaderText("Wishlist");
      fetch("http://localhost:3000/wishlist_items")
        .then((response) => response.json())
        .then((data) => {
          const filteredList = data["data"].filter(
            (item) => item.user_id == localStorage.getItem("user_id")
          );
          const gameIds = filteredList.map((item) => item.game_id);
          const filteredGameList = allGameList.filter((game) =>
            gameIds.includes(game.id)
          );
          console.log(filteredGameList);
          setGameList(filteredGameList);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    } else if (localStorage.getItem("user_type") == "developer") {
      setHeaderText("My Releases");
      fetch("http://localhost:3000/games")
        .then((response) => response.json())
        .then((data) => {
          const filteredList = data["data"].filter(
            (item) => item.user_id == localStorage.getItem("user_id")
          );
          setGameList(filteredList);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [allGameList]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
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
        <div className="profile-section">
          <div id="profile-picture-text-section">
            <div id="profile-image-bg">
              <img
                id="profile-image-large"
                src="/images/logos/Rectangle 25.png"
                alt=""
              />
            </div>
            <div id="profile-info">
              <p id="profile-name">{localStorage.getItem("user_name")}</p>
              <p>
                {localStorage.getItem("first_name")}{" "}
                {localStorage.getItem("last_name")}
              </p>
              <p>{localStorage.getItem("date_of_birth")}</p>
              <p>{localStorage.getItem("user_type")}</p>
            </div>
          </div>
        </div>
        <h2>{headerText}</h2>
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
    </>
  );
}

export default ProfilePage;
