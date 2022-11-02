import React from "react";
import Rocketchat from "../icon/rocketchat";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../redux/user/slice";
import api from "../plugins/api";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const validateForm = () => {
    let error = "";
    if (!username) error = "กรุณาใส่ชื่อผู้ใช้งานค่ะ";
    else if (!password) error = "กรุณาใส่รหัสผ่านให้ถูกต้องค่ะ";
    return error;
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }
    let form = {
      username: username,
      password: password,
    };
    let token = await api.userLogin(form);
    if (token) {
      dispatch(setToken(token));
      let params = await {
        token: token,
      };
      let me = await api.userGetMe(params);
      await dispatch(setUser(me));
      await toast.success("Login Successfully");
      setInterval(() => {
        navigate("/lobby");
      }, 1000);
    } else {
      toast.error("Login Error");
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      <Toaster />
      <div className="w-1/4 h-96 flex flex-col justify-center bg-blue-1 p-4 space-y-4 rounded-sm">
        <div className="w-full flex flex-col items-center space-y-2">
          <Rocketchat className="h-24 w-24" fill="#FFFFFF" />
          <p className="text-2xl font-bold text-blue-4">Rocketchat</p>
        </div>
        <form onSubmit={onSubmit} className="w-full flex flex-col space-y-4">
          <div className="w-full flex flex-col items-center space-y-2">
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Enter username or email"
              className="w-4/5 px-2 h-[38px] outline-none text-blue-1 rounded-sm focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="w-full flex flex-col items-center space-y-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-4/5 px-2 h-[38px] outline-none text-blue-1 rounded-sm focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="w-full flex justify-between">
            <Link to="/register" className="underline">
              Register
            </Link>
            <button
              type="submit"
              className="w-1/3 py-1 bg-blue-4 text-blue-1 rounded-sm"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <Link to="/" className="text-white underline font-bold undeline">
        Back to home
      </Link>
    </div>
  );
}
