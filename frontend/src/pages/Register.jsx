import React from "react";
import Rocketchat from "../icon/rocketchat";
import { Link, useNavigate } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const movingStyle = [
    "w-2/12 translate-x-full duration-300 py-1 px-4 bg-blue-4 text-blue-1 rounded-sm",
    "w-2/12 py-1 px-4 bg-blue-4 text-blue-1 rounded-sm",
    "w-2/12 -translate-x-full duration-300 py-1 px-4 bg-blue-4 text-blue-1 rounded-sm",
  ];
  const [position, setPosition] = React.useState(1);
  const [username, setUsername] = React.useState("");
  const [playername, setPlayername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkpassword, setCheckPassword] = React.useState("");
  const [category, setCategory] = React.useState([]);
  const options = [
    { label: "Work", value: 1 },
    { label: "Book", value: 2 },
    { label: "Sport", value: 3 },
    { label: "Movie", value: 4 },
    { label: "Anime", value: 5 },
    { label: "Game", value: 6 },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = await validateForm();
    if (error) {
      toast.error(error, { duration: 3000 });
      return;
    }
    let form = await {
      username: username,
      playername: playername,
      email: email,
      category: category.map((e) => e.value),
      password: password,
    };
    await axios
      .post("http://localhost:8080/register", form)
      .then(async () => {
        await toast.success("Register Successfully", { duration: 3000 });
        // await navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const validateForm = () => {
    let error = "";
    if (!username) error = "Please enter username";
    else if (!playername) error = "Please enter playername";
    else if (!email) error = "Please enter email";
    else if (!password) error = "Please enter password";
    else if (password != checkpassword) error = "Password must be conform";
    return error;
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      <Toaster />
      <div className="w-2/4 flex flex-col justify-center bg-blue-1 p-4 space-y-4 rounded-sm">
        <div className="w-full flex flex-col items-center space-y-2">
          <Rocketchat className="h-24 w-24" fill="#FFFFFF" />
          <p className="text-2xl font-bold text-blue-4">Rocketchat</p>
        </div>
        <form className="grid grid-cols-2 gap-4">
          <div className="w-full flex flex-col items-center space-y-2">
            <label>Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="w-full h-[38px] px-2  outline-none text-blue-1 rounded-sm focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="w-full flex flex-col items-center space-y-2">
            <label>Playername</label>
            <input
              onChange={(e) => setPlayername(e.target.value)}
              type="text"
              className="w-full h-[38px] px-2 outline-none text-blue-1 rounded-sm focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="w-full flex flex-col items-center space-y-2">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="w-full h-[38px] px-2  outline-none text-blue-1 rounded-sm focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="w-full flex flex-col items-center space-y-2">
            <label>Category</label>
            <MultiSelect
              className="w-full text-blue-1"
              options={options}
              value={category}
              onChange={setCategory}
              labelledBy="Select"
            />
          </div>
          <div className="w-full flex flex-col items-center space-y-2">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full h-[38px] px-2  outline-none text-blue-1 rounded-sm focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="w-full flex flex-col items-center space-y-2">
            <label>Confirm Password</label>
            <input
              onChange={(e) => setCheckPassword(e.target.value)}
              type="password"
              className="w-full h-[38px] px-2 outline-none text-blue-1 rounded-sm focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </form>
      </div>
      <button
        onMouseOver={() => {
          let error = validateForm();
          if (error) position == 0 ? setPosition(2) : setPosition(0);
        }}
        onClick={handleSubmit}
        className={movingStyle[position]}
      >
        Sign up
      </button>
      <Link to="/" className="text-white underline font-bold undeline">
        Back to home
      </Link>
    </div>
  );
}
