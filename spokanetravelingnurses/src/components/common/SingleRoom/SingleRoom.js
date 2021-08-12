import Paragraph from "antd/lib/typography/Paragraph";
import React, { useState, useRef, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, useLocation, useParams } from "react-router-dom";
import { Carousel } from "antd";
import Title from "antd/lib/typography/Title";

const GET_SINGLE_PUBLIC_ROOM = gql`
  query getSingleRoom($id: ID!) {
    publicRoom(id: $id) {
      id
      room_name
      room {
        id
        Occupied
        endDate
        public_link
      }
      Pictures {
        id
        formats
      }
    }
  }
`;

const GET_SINGLE_ROOM = gql`
  query getSinglePublicRoom($id: ID!) {
    publicRoom(id: $id) {
      id
      room_name
      link {
        link
      }
      Pictures {
        id
        formats
      }
    }
  }
`;

function SingleRoom() {
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef(null);
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const location = useLocation();
  const { loading, error, data } = useQuery(GET_SINGLE_ROOM, {
    variables: {
      id: id,
    },
  });

  let authButton;
  if(location.pathname.includes('admin')) {
      authButton = (
        <Link className="book-button" to="/admin/booking">
        Inquire!
      </Link>
      )
  } else {
      authButton = (
        <Link className="book-button" to="/booking">
        Book Now!
      </Link>
      )
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>DOH! :(</p>;
  const room = data.publicRoom;
  console.log(room);
  const pics = room.Pictures.map((pics) => {
    const link = "http://localhost:1337" + pics.formats.medium.url;
    return link;
  });

  function copy(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopied(true);
  }
  return (
    <div className="container">
      <Title>{room.room_name}</Title>
      <Carousel style={{ background: "black" }}>
        {pics.map((link, key) => (
          <img src={link} key={key} />
        ))}
      </Carousel>
      <Paragraph>These are the room details.</Paragraph>
      <div className="flex-column align-center copy-link-box">
        <Title level={4}>Share this room:</Title>
        <div className="flex-row align-baseline">
          <input value={room.link.link} ref={textAreaRef} readOnly />
          <button className="copy-button" onClick={copy}>
            Copy Link
          </button>
        </div>
        {!copied ? "" : "Link has been copied!"}
      </div>
      {authButton}
    </div>
  );
}

export default SingleRoom;
