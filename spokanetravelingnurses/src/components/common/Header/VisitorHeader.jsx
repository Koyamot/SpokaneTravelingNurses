import React from "react";
import { Link } from "react-router-dom";

/* AntD */
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Typography } from "antd";

import Spokane from "../../../assets/clock-tower-and-pavilion.jpg";

const { Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="tour">
      <Link className="navLink" to="/tour">
        Tour
      </Link>
    </Menu.Item>
    <Menu.Item key="rooms">
      <Link className="navLink" to="/rooms">
        Rooms
      </Link>
    </Menu.Item>
    <Menu.Item key="amenities">
      <Link className="navLink" to="/amenities">
        Amenities
      </Link>
    </Menu.Item>
  </Menu>
);

const VisitorHeader = () => {
  return (
    <>
      <div
        className="bg-container"
        style={{
          backgroundImage: `url("${Spokane}")`,
          backgroundPosition: "2% 40%",
          height: "20rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title>Welcome, Traveling Nurses and Professionals!</Title>
      </div>
      <header>
        <nav>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Dropdown overlay={menu}>
            <Link
              className="navLink"
              to="/property"
              onClick={(e) => e.preventDefault()}
            >
              Property <DownOutlined />
            </Link>
          </Dropdown>
          <Link className="navLink" to="/tenantinfo">
            Lease & Tenant Info
          </Link>
          <Link className="navLink explore" to="/explore">
            Explore Spokane!
          </Link>
          <Link className="navLink book" to="/booking">
            Book Now
          </Link>
        </nav>
      </header>
    </>
  );
};

export default VisitorHeader;
