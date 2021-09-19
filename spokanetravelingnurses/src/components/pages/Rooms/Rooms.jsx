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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>DOH! :(</p>;
  const room = data.publicRooms.map((item) => item)
  console.log("These are rooms: ", room[0].id)
  return (
    <div className="container room-list">
      {data.publicRooms.map((room) => (
        <Link to={`/room/${room.id}`}>
          <Rooms key={room.id} room={room} />
        </Link>
      ))}
    </div>
  );
};

const Rooms = ({ room }) => {
  console.log("Room info :", room)
  return (
    <div key={room.id} className="room-card">
      <img src={room.Pictures[0].formats.small.url} className="room-pic" alt="rooms" />
      <div className="room-info">
        <p>Room Name: {room.room_name}</p>
      </div>
    </div>
  );
};

export default RoomList;
