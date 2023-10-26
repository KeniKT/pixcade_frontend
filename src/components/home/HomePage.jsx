import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import '@fortawesome/fontawesome-free/css/all.css';


const logoutButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#fff',
  // fontWeight: 'bold',
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
      

        <input type="text" placeholder='search'  />
        <i className='fa fa-search search-btn ' ></i>

       
        
        <div className='flex'>

        <img src="src\assets\images\profiles\ima.jpg" className='profile-image'  />
        <div>
          <label className='welcome-user'> Welcome , user</label>
          <button className="logout-button" onClick={handleLogout} style={logoutButtonStyle}>
            Logout
          </button>
        </div>
        </div>
      </header>

      <main className='main-body'>
        
        <header> 
          <h2 >FEATURED </h2>
          <input type="date" />
        </header>
        
        <div className='container'>
          <div className='screenshot-container'>
              <img className= "screenshot-large" src= "src\assets\images\screenshots\image.png" />
              <div className='grid-container'>
              <img className= "grid-item" src= "src\assets\images\screenshots\image.png" />
              <img className= "grid-item" src= "src\assets\images\screenshots\image.png" />
              <img className= "grid-item" src= "src\assets\images\screenshots\image.png" />
              <img className= "grid-item" src= "src\assets\images\screenshots\image.png" />
              <img className= "grid-item" src= "src\assets\images\screenshots\image.png" />
              <img className= "grid-item" src= "src\assets\images\screenshots\image.png" />

              </div>
            
          </div>
          <div className='description'>
            <h2 className='h2'>
            <label>GAME TITLE</label>
            </h2>
            <div className='game-details-row '>
              <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
             <text>Genre</text>
            <i class="fab fa-windows"></i>
            <i class="fab fa-apple"></i>
           
            </div>
            <p className='p'>Mars has been colonized, and Earth's corporate titans fight to dominate this new market. Competition is fierce in this fast-paced economic RTS from Civilization IV Lead Designer, Soren Johnson.
            </p>

          </div>
          
        </div>
        <h2>
        <header>RELEASES</header>
        </h2>
        <div className='grid-container-release'>

        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div >
            <i class="fab fa-windows"></i>
             <i class="fab fa-apple"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
             <text>Genre</text>
            </div>
          <label>Rating</label>
          <label > 8</label>
        </div>

        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
             <text>Genre</text>
            </div>
          <label>Rating</label>
          <label > 8</label>
        </div>

        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
             <text>Genre</text>
            </div>
          <label>Rating</label>
          <label > 8</label>
        </div>

        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
             <text>Genre</text>
            </div>
          <label>Rating</label>
          <label > 8</label>
        </div>

        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
             <text>Genre</text>
            </div>
          <label>Rating</label>
          <label > 8</label>
        </div>
        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
             <text>Genre</text>
            </div>
          <label>Rating</label>
          <label > 8</label>
        </div>
        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
             <text>Genre</text>
            </div>
          <label>Rating</label>
          <label > 8</label>
        </div>
        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
             <text>Genre</text>
            </div>
          <label>Rating</label>
          <label > 8</label>
        </div>

        
        </div>



        
        <h2>
        <header>Bundle Title</header>
        </h2>


        <div className='grid-container-release'>

        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
            </div>
        </div>

        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
            </div>
        </div>

        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
            </div>
        </div>

        <div className='card'>
          <img className= "card-image" src= "src\assets\images\screenshots\image.png" />
          <div className='game-details-row '>
             <h2>Game Title</h2>
             <div>
            <i class="fab fa-windows"></i>
             <i class="fab fa-linux"></i>
             </div>
            </div>
          <div className='game-details-row '>
            <div>
             <text>Price</text>
             <text>Discount</text>
            </div>
            </div>
        </div>


        </div>
  
      </main>
    </div>
  );
}

export default HomePage;
