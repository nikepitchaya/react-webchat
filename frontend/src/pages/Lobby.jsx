import React from "react";
import { useNavigate } from "react-router-dom";
import House from "../icon/house";
export default function Lobby() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      {/* Head */}
      <div className="w-full flex flex-col items-center mb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <p className="text-blue-1 text-4xl font-bold">Lobby</p>
          <House className="h-10 w-10" fill="#42C2FF" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button
          className="py-2 px-6 text-lg font-medium bg-blue-1 rounded-sm"
          onClick={() => navigate("/create")}
        >
          Let's fk go to create !
        </button>
      </div>
      {/* List room */}
      <p>List Room</p>
      <div className="w-full flex flex-col p-2 bg-white rounded-md text-black">
        <p>Name</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          doloribus eaque, dignissimos placeat et velit quasi, facilis quo ut
          temporibus porro eos repudiandae? Maxime repellat recusandae quia
          velit nesciunt aperiam.
        </p>
        <p>Host</p>
        <p>Create_at</p>
      </div>
    </div>
  );
}
