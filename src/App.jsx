import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/home/Login";
import Register from "./components/home/Register";
import HomePage from "./components/home/HomePage";
import ProfilePage from "./components/home/Profile";
import GameDetails from "./components/home/GameDetails";
import GameAdd from "./components/home/GameAdd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/gamedetails/:id" element={<GameDetails />} />
        <Route path="/addgame" element={<GameAdd />} />

      </Routes>
    </Router>
  );
}

export default App;
