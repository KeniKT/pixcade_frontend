import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reviewText, setReviewtext] = useState("");
  const [game, setGame] = useState([]);

  useEffect(() => {
    // Fetch the game details based on the ID
    fetch(`http://localhost:3000/games/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data["data"]);
        setGame(data["data"]);
      })
      .catch((error) => {
        console.error("Error fetching game details:", error);
      });
  }, []);

  const handleWishlist = () => {
    fetch("http://localhost:3000/wishlist_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload: {
          user_id: localStorage.getItem("user_id"),
          game_id: game.id,
        },
      }),
    })
      .then(async (response) => {
        if (response.ok) {
        } else {
          const errorData = await response.json();
          console.error(errorData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReviews = () => {
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload: {
          review_text: reviewText,
          review_date: Date.now(),
          user_id: localStorage.getItem("user_id"),
          game_id: game.id,
        },
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          console.log(reviewText);
        } else {
          const errorData = await response.json();
          console.error(errorData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <div id="full-details-section">
          <div className="details-main-section">
            <div id="main-details-section">
              <img src="/images/logos/Rectangle 25.png" alt="" width={200} />
              <div id="title-platform">
                <p id="large-game-title">{game.title}</p>
                <input
                  type="submit"
                  id="wishlist-button"
                  className="button"
                  value="Wishlist"
                  onClick={handleWishlist}
                />
              </div>
              <div id="game-detail-rating-genre">
                <p id="game-detail-rating-text">{game.release_date}</p>
                <p id="game-rating-value">{game.price}</p>
                <p id="game-rating-value">{game.discount}</p>
                <div id="game-detail-genre-section">
                  <p id="game-detail-genre-text">{game.genre}</p>
                </div>
              </div>
              <p id="game-description">{game.description}</p>
              <textarea
                cols="50"
                rows="10"
                placeholder="Leave a review"
                onChange={(e) => setReviewtext(e.target.value)}
              ></textarea>
              <input
                id="post-review-button"
                className="button"
                type="submit"
                name=""
                onClick={handleReviews}
              />
            </div>
          </div>
          <div id="game-screenshots-section">
            <p>Screenshots</p>
            <img
              className="screenshot-image"
              src="/images/logos/Rectangle 25.png"
              alt=""
            />
            <img
              className="screenshot-image"
              src="/images/logos/Rectangle 25.png"
              alt=""
            />
            <img
              className="screenshot-image"
              src="/images/logos/Rectangle 25.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDetails;
