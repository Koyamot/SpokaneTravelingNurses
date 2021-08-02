import React from "react";
import { Link } from "react-router-dom";

// import { rooms } from "./roomData";

const RoomList = ({ rooms }) => {
  console.log("RoomList rooms: ", rooms);
  return (
    <div className="container room-list">
      {rooms.map((room) => (
        <Link to={`/room/${room.id}`}>
          <Rooms key={room.id} room={room} />
        </Link>
      ))}
    </div>
  );
};

const Rooms = ({ room }) => {
  console.log("Rooms info: ", room);
  return (
    <div key={room.id} className="room-card">
      <img src={room.picture} className="room-pic" alt="picture of rooms" />
      <div className="room-info">
        <p>Room Name: {room.name}</p>
      </div>
    </div>
  );
};

export default RoomList;
