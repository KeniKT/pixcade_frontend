import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HomePage from "./components/home/HomePage";
import ProfileEdit from "./components/edit/ProfileEdit";
import GameEditOrAdd from "./components/edit/GameEditOrAdd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/editProfile" element={<ProfileEdit />} />
       < Route path="/editGame" element={<GameEditOrAdd />}/>

      </Routes>
    </Router>
  );
}

export default App;