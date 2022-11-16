import React from "react";
import { Link } from "react-router-dom";

const RoomList = ({ rooms }) => {
  return (
    <div className="container room-list">
      {rooms.map((room) => {
        return (
          <Link to={`/room/${room.id}`} key={room.id}>
            <Rooms room={room} />
          </Link>
        );
      })}
    </div>
  );
};

const Rooms = ({ room }) => {
  return (
    <div key={room.id} className="room-card">
      <img
        src={room.pictures[0]}
        className="room-pic"
        alt="rooms"
      />
      <div className="room-info">
        <p>{room.name}</p>
      </div>
    </div>
  );
};

export default RoomList;
