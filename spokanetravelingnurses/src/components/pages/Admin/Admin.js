import React from "react";
import { Route, Switch } from "react-router-dom";
import { SingleRoom } from "../../common";
import AdminHeader from "../../common/Header/AdminHeader";
import { AdminRooms } from "../Rooms";
import { useQuery, gql } from "@apollo/client";
import { AdminBooking } from "../Booking";
import { AdminContact } from "../Contact";

const ROOMS = gql`
  query GetRooms {
    rooms {
      id
      roomNumber
      Occupied
      endDate
      public_link
    }
  }
`;

const PUBLIC_ROOMS = gql`
  query getPublicRooms {
    publicRooms {
      id
      room {
        Occupied
      }
      Pictures {
        id
        formats
      }
    }
  }
`;

export const Admin = () => {
  const token = localStorage.getItem("token");
  const {
    loading: rooms,
    error: roomsError,
    data: roomsData,
  } = useQuery(ROOMS, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

    // const {
    //   loading: publicRooms,
    //   error: publicRoomsError,
    //   data: publicRoomsData,
    // } = useQuery(PUBLIC_ROOMS, {
    //   context: {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   },
    // });

  if (rooms) return <p>Loading...</p>;
  if (roomsError) return <p>DOH! :(</p>;
  return (
    <div className="container">
      <AdminHeader />
      <Switch>
        <Route
          path="/admin/rooms/"
          render={() => <AdminRooms rooms={roomsData.rooms} />}
        />
        <Route path="/admin/room/:id">
          <SingleRoom />
        </Route>
        <Route path="/admin/booking" component={AdminBooking} />
        <Route path="/admin/contact" component={AdminContact} />
      </Switch>
    </div>
  );
};

export default Admin;
