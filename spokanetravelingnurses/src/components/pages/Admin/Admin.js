import React from "react";
import { Route, Switch } from "react-router-dom";
import SecureRoute from "../../api/SecureRoute";
import AdminHeader from "../../common/Header/AdminHeader";
import AdminRooms from '../Rooms/AdminRooms'
import rooms from '../Rooms/roomData'

export const Admin = () => {
  return (
    <div className="container">
        <AdminHeader />
        <Switch>
            <SecureRoute path='/admin/rooms/' render={() => <AdminRooms rooms={rooms} />} />
        </Switch>
    </div>
  );
};

export default Admin;
