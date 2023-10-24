import React from 'react';
import './style.css';

function GameDetails() {
    return (
        <>
            <header>
                <img class="site-logo" src="/images/logos/logo.png" alt=""/>
                <form action="">
                    <input type="text" />
                    <input type="submit" />
                </form>
                <div class="header-profile">
                    <img src="/images/logos/Rectangle 25.png" alt="" height={50}/>
                    <div>
                        <p>Welcome</p>
                        <p>Welcome</p>
                    </div>
                </div>
            </header>
            <div class="body-section">
                <div class="game-details">
                    <div class="details-main-section">
                        <img src="/images/logos/Rectangle 25.png" alt="" width={200}/>
                        <p>Game Title</p>
                        <p>platforms</p>
                        <p>Rating</p>
                        <p>Genre</p>
                        <p>Price</p>
                        <p>Discount</p>
                        <p>Description</p>
                        <form action="">
                            <textarea name="" id="" cols="50" rows="10"></textarea>
                            <input type="submit" name="" id="" />
                        </form>
                    </div>
                    <div class="detail-screenshots">
                        <p>Screenshots</p>
                        <img class="screenshot-image" src="/images/logos/Rectangle 25.png" alt=""/>
                        <img class="screenshot-image" src="/images/logos/Rectangle 25.png" alt=""/>
                        <img class="screenshot-image" src="/images/logos/Rectangle 25.png" alt=""/>
                        <img class="screenshot-image" src="/images/logos/Rectangle 25.png" alt=""/>
                        <img class="screenshot-image" src="/images/logos/Rectangle 25.png" alt=""/>
                        <img class="screenshot-image" src="/images/logos/Rectangle 25.png" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameDetails;