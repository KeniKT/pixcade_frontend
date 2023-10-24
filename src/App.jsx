import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HomePage from "./components/home/HomePage";
import ProfilePage from "./components/home/Profile";
import GameDetails from "./components/home/GameDetails";
import BundleDetails from "./components/home/BundleDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/gamedetails" element={<GameDetails />} />
        <Route path="/bundledetails" element={<BundleDetails />} />
        
      </Routes>
    </Router>
  );
}

export default App;