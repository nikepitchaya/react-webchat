import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Rocketchat from "../icon/rocketchat";
import "../css/Home.css";
export default function Home() {
  const navigate = useNavigate();
  const [rocket, setRocket] = React.useState(true);

  React.useEffect(() => {
    setInterval(() => {
      setRocket(!rocket);
    }, 5500);
  }, [rocket]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center space-x-2">
        <a target="_blank">
          <img
            src="/react.svg"
            className="logo react w-60 h-60"
            alt="React logo"
          />
        </a>
        <p className="text-4xl font-medium">+</p>
        <a target="_blank">
          <img
            src="/nodejs.png"
            className="logo react w-60 h-60"
            alt="React logo"
          />
        </a>
        <p className="text-4xl font-medium">=</p>
        <Link to="/lobby">
          <Rocketchat
            fill="#42C2FF"
            className="logo hover:animate-bounce react w-56 h-56"
          />
        </Link>
      </div>
      <p className="my-6 text-4xl font-bold">Rocketchat</p>
      <p className="text-xl font-bold">
        This project is made for practice. It is not intended for profit in any
        way.
      </p>
      <button
        className="my-4 py-2 px-6 text-lg font-medium bg-blue-1 rounded-sm"
        onClick={() => navigate("/lobby")}
      >
        Let's fk go !
      </button>
      <div className="w-full flex pt-10 space-x-4 overflow-x-hidden">
        <img
          className={rocket ? "rocket w-36 h-36" : "animate-bounce w-36 h-36"}
          src="/rocket.png"
          alt="Rocket"
        />
        <img
          className={rocket ? "rocket w-36 h-36" : "animate-bounce w-36 h-36"}
          src="/newrocket.png"
          alt="New Rocket"
        />
        <img
          className={rocket ? "rocket w-36 h-36" : "animate-bounce w-36 h-36"}
          src="/spaceship.png"
          alt="Spaceship"
        />
      </div>
    </div>
  );
}
