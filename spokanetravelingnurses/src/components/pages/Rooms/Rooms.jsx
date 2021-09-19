import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const PUBLIC_ROOMS = gql`
  query getPublicRooms {
    publicRooms {
      id
      room_name
      room {
        id
        Occupied
        endDate
      }
      Pictures {
        id
        formats
      }
    }
  }
`;

const RoomList = ({ rooms }) => {
  const { loading, error, data } = useQuery(PUBLIC_ROOMS, {});
  console.log("these are the rooms: ", data)

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
