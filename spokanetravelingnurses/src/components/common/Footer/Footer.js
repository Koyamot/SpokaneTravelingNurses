import React from "react";
import { Link } from "react-router-dom";

/* AntD */
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <Link className="navLink" to="/property">
        Tour
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="navLink" to="/rooms">
        Rooms
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="navLink" to="/amenities">
        Amenities
      </Link>
    </Menu.Item>
  </Menu>
);

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Dropdown overlay={menu}>
          <Link className="navLink" to="/">
            Property <DownOutlined />
          </Link>
        </Dropdown>
        <Link className="navLink" to="/tenants">
          Tenant Info
        </Link>
        <Link className="navLink" to="/contact">
          Contact Us
        </Link>
        <Link className="navLink explore" to="/explore">
          Explore Spokane!
        </Link>
      </nav>
      <div className="login-box">
        <Link className="navLink" to="/login">
          Log In
        </Link>
      </div>
    </footer>
  );
};

export default Footer;