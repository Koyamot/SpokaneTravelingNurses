import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const PUBLIC_ROOMS = gql`
  query getPublicRooms {
    publicRooms {
      id
      room_name
      roomNumber {
        Occupied
      }
      id
      Pictures {
        formats
      }
    }
  }
`;

const RoomList = ({ rooms }) => {
  const { loading, error, data } = useQuery(PUBLIC_ROOMS, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>DOH! :(</p>;
  const room = data.publicRooms.map((item) => item);
  const roomSort = room.sort(function (a, b) {
    return a.id - b.id || a.name.localeCompare(b.name);
  });

  return (
    <div className="container room-list">
      {room.map((room) => {
        console.log("This is rooms: ", room)
        return !room.roomNumber.Occupied ? (
          <Link to={`/room/${room.id}`} key={room.id}>
            <Rooms room={room} />
          </Link>
        ) : (
          <div className="disable" key={room.id}>
            <Rooms room={room} />
          </div>
        );
      })}
    </div>
  );
};

const Rooms = ({ room }) => {
  return (
    <div key={room.id} className="room-card">
      <img
        src={room.Pictures[0].formats.small.url}
        className="room-pic"
        alt="rooms"
      />
      <div className="room-info">
        <p>{room.room_name}</p>
      </div>
    </div>
  );
};

export default RoomList;
