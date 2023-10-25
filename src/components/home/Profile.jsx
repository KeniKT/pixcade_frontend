import React from 'react';
import './style.css';

function ProfilePage() {
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
                <div class="profile-section">
                    <img src="/images/logos/Rectangle 25.png" alt="" height={50}/>
                    <div>
                        <p>Username</p>
                        <p>firstname, lastname</p>
                        <p>Date of birth</p>
                        <p>account type</p>
                    </div>
                </div>
                <h2>My Releases</h2>
                <div class="game-grid">
                    <div class="game-card">
                        <img src="/images/logos/Rectangle 25.png" />
                        <p>Game Title</p>
                        <p>platforms</p>
                        <p>price</p>
                        <p>discount</p>
                        <p>genre</p>
                        <p>Rating </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;