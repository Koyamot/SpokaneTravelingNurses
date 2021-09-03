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
          <Link className="navLink" to="/admin">
            Home
          </Link>
          <Link className="navLink" to="/admin/rooms">
            Rooms
          </Link>
          <Link className="navLink" to="/admin/inquire">
            Inquire
          </Link>
          <Link className="navLink" to="/" onClick={onClick}>
            Back to STN
          </Link>
        </nav>
      </header>
    </>
  );
};

export default AdminHeader;
