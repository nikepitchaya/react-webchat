import React from "react";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Room from "./pages/Room";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./layout/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
function App() {
  const route_unauth = ["/login", "/login/", "/register", "/register/"];
  const location = useLocation().pathname;

  return (
    <div>
      {!route_unauth.includes(location) && <Navbar />}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/room" element={<Room />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
