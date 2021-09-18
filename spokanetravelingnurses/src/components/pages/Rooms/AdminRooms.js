import React from "react";
import Title from "antd/lib/typography/Title";
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

const token = localStorage.getItem("token");

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const AdminRooms = () => {
  const { loading, error, data } = useQuery(PUBLIC_ROOMS, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>DOH! :(</p>;

  return (
    <div className="container room-list">
      {data.publicRooms.map((room) => {
        return !room.room.Occupied ? (
          <Link to={`/admin/room/${room.id}`} key={room.id}>
            <RoomsList room={room} />
          </Link>
        ) : (
          <div className="hide" key={room.id}>
            <RoomsList room={room} />
          </div>
        );
      })}
    </div>
  );
};

const RoomsList = ({ room }) => {
  const picture =
    `${backendUrl}${room.Pictures[0].formats.small.url}`;
  const status = room.room.Occupied;

  let title, availability;
  if (!status) {
    title = (
      <Title level={4} type="success">
        Available
      </Title>
    );
    availability = <p>Click for details.</p>;
  } else {
    title = (
      <Title level={4} disabled>
        Unavailable
      </Title>
    );
    availability = <p>Available on {room.room.endDate}</p>;
  }
  return (
    <div className="room-card" key={room.id}>
      {title}
      <img src={picture} className="room-pic" alt="rooms" />
      <div className="room-info">
        <p>Room Name: {room.room_name}</p>
        {availability}
      </div>
    </div>
  );
};

export default AdminRooms;
