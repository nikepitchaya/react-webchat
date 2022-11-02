import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Rocketchat from "../icon/rocketchat";
import UserSecret from "../icon/user-secret";
import Logout from "../icon/logout";
import Suse from "../icon/suse";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, getToken, getUser } from "../redux/user/slice";

export default function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const user = useSelector(getUser);

  const [toggle, setToggle] = React.useState(false);
  const [hoverProfile, setHoverProfile] = React.useState(false);
  const [hoverLogout, setHoverLogout] = React.useState(false);

  const userLogout = () => {
    dispatch(clearUser());
  };
  return (
    <div className="w-full flex items-center py-1 bg-blue-4 ">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="w-1/2 flex items-center px-4 space-x-2 cursor-pointer"
      >
        <Rocketchat className="h-14 w-14" fill="#42C2FF" />
        <p className="text-blue-1 text-2xl font-bold">Rocketchat</p>
      </div>
      <div className="w-1/2 flex itesms-center justify-around">
        <div className="w-full flex items-center space-x-4">
          <Link to="/">
            <p className="text-blue-1 font-bold text-lg">Home</p>
          </Link>
          <Link to="/lobby">
            <p className="text-blue-1 font-bold text-lg">Lobby</p>
          </Link>
          <Link to="/about">
            <p className="text-blue-1 font-bold text-lg">About</p>
          </Link>
          <Link to="/about">
            <p className="text-blue-1 font-bold text-lg">About</p>
          </Link>
          <Link to="/about">
            <p className="text-blue-1 font-bold text-lg">Test</p>
          </Link>
        </div>
        {!token && (
          <div className="flex items-center">
            <p
              onClick={() => {
                navigate("/login");
              }}
              className="text-lg text-blue-1 font-bold cursor-pointer"
            >
              Login
            </p>
            <p className="text-lg text-blue-1 font-bold mx-2">|</p>
            <p
              onClick={() => {
                navigate("/register");
              }}
              className="text-lg text-blue-1 font-bold cursor-pointer"
            >
              Resgister
            </p>
          </div>
        )}
        {token && (
          <div className="flex flex-col relative inline-block">
            <div
              className="flex items-center px-4 space-x-2 cursor-pointer"
              onClick={async () => {
                await setToggle(!toggle);
              }}
            >
              <p className="text-lg text-blue-1 font-bold">{user.playername}</p>
              <UserSecret className="h-8 w-8" fill="#42C2FF" />
            </div>
            {toggle && (
              <div className="w-full flex flex-col pt-2 space-y-2 bg-blue-4 absolute right-0 z-10 mt-10 origin-top-right rounded-b-sm">
                <div
                  onMouseOut={() => setHoverProfile(false)}
                  onMouseOver={() => setHoverProfile(true)}
                  className={
                    hoverProfile
                      ? "flex space-x-2 py-1 px-2 cursor-pointer bg-blue-1"
                      : "flex space-x-2 py-1 px-2 cursor-pointer"
                  }
                >
                  <Suse
                    className="h-8 w-8"
                    fill={hoverProfile ? "#FFFFFF" : "#42C2FF"}
                  />
                  <p
                    className={
                      hoverProfile
                        ? "font-bold text-white"
                        : "font-bold text-blue-1"
                    }
                  >
                    My Profile
                  </p>
                </div>
                <div
                  onClick={userLogout}
                  onMouseOut={() => setHoverLogout(false)}
                  onMouseOver={() => setHoverLogout(true)}
                  className={
                    hoverLogout
                      ? "flex space-x-2 py-1 px-2 cursor-pointer bg-blue-1 rounded-b-sm"
                      : "flex space-x-2 py-1 px-2 cursor-pointer"
                  }
                >
                  <Logout
                    className="h-8 w-8"
                    fill={hoverLogout ? "#FFFFFF" : "#42C2FF"}
                  />
                  <p
                    className={
                      hoverLogout
                        ? "font-bold text-white"
                        : "font-bold text-blue-1"
                    }
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
