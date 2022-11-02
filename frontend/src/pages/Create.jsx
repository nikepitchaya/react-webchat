import React from "react";

export default function Create() {
  return (
    <div className="w-full">
      <p className="text-2xl font-bold">Create Room</p>
      <div></div>
      <form action="" className="w-full flex flex-col space-y-2">
        <div className="w-full flex flex-col space-y-1">
          <label>Room name</label>
          <input type="text" />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <label>Detaill room</label>
          <input type="textarea" />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <label>Password</label>
          <input type="password" />
        </div>
      </form>
    </div>
  );
}
