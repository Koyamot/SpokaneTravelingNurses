import React from "react";
import { Link } from "react-router-dom";

/* AntD */

const AdminHeader = () => {

    const onClick = (e) => {
        localStorage.removeItem('token');
    }
  return (
    <>
      <header>
        <nav>
          <Link className="navLink" to="/" onClick={onClick}>
            STN
          </Link>
          <Link className="navLink" to="/admin">
            Home
          </Link>
          <Link className="navLink" to="/admin/rooms">
            Rooms
          </Link>
          <Link className="navLink" to="/admin/contact">
            About Us
          </Link>
        </nav>
      </header>
    </>
  );
};

export default AdminHeader;
