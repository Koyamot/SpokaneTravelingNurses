import React from "react";
import { Link } from "react-router-dom";


const RoomList = ({ rooms }) => {
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
  return (
    <div key={room.id} className="room-card">
      <img src={room.picture} className="room-pic" alt="rooms" />
      <div className="room-info">
        <p>Room Name: {room.name}</p>
      </div>
    </div>
  );
};

export default RoomList;
