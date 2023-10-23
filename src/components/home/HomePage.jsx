import React from 'react';
import { useNavigate } from 'react-router-dom';

const logoutButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#fff',
  fontWeight: 'bold',
};

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  }

  return (
    <div>
      <header>
        <img className="logo" src="/images/logos/logo.png" alt="Logo" />
        <button className="logout-button" onClick={handleLogout} style={logoutButtonStyle}>
          Logout
        </button>
      </header>
      <main>
        <p>Welcome to PIXCADE</p>
      </main>
    </div>
  );
}

export default HomePage;
