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

  const roomSort = room.sort(function(a, b) { 
    return a.id - b.id  ||  a.name.localeCompare(b.name);
  });

  return (
    <div className="container room-list">
      {roomSort.map((room) => (
        <Link to={`/room/${room.id}`} key={room.id}>
          <Rooms room={room} />
        </Link>
      ))}
    </div>
  );
};

const Rooms = ({ room }) => {

  return (
    <div key={room.id} className="room-card">
      <img src={room.Pictures[0].formats.small.url} className="room-pic" alt="rooms" />
      <div className="room-info">
        <p>{room.room_name}</p>
      </div>
    </div>
  );
};

export default RoomList;
