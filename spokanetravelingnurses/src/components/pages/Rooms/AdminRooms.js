import React from "react";
import Title from "antd/lib/typography/Title";
import Link from 'react-router-dom'

const AdminRooms = ({ rooms }) => {
    return (
        <div className="container room-list">
          {rooms.map((room) => (
            <Link to={`/admin/room/${room.id}`}>
              <Rooms key={room.id} room={room} />
            </Link>
          ))}
        </div>
      );
};

const roomsList = ({ room }) => {
    return (
        <div key={room.id} className="room-card">
          <Title level={4}>This is a card</Title>
          <img src={room.picture} className="room-pic" alt="rooms" />
          <div className="room-info">
            <p>Room Name: {room.name}</p>
          </div>
        </div>
      );
}


export default AdminRooms;
