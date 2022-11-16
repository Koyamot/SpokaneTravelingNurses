import Paragraph from "antd/lib/typography/Paragraph";
import React, { useState, useRef} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Title from "antd/lib/typography/Title";


function SingleRoom({ amenities, room }) {
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef(null);
  const { id } = useParams();
  const location = useLocation();
  const roomInfo = room[id]

  const [featured, setFeatured] = useState("");

  let authButton;
  if (location.pathname.includes("admin")) {
    authButton = (
      <Link className="book-button" to="/admin/booking">
        Inquire!
      </Link>
    );
  } else {
    authButton = (
      <Link className="book-button" to="/booking">
        Book Now!
      </Link>
    );
  }
  const image = roomInfo.pictures[0]
  const pics = roomInfo.pictures.map((pics) => {
    const link = `${pics}`;
    return link;
  });

  const onClick = (e) => {
    setFeatured(e.target.currentSrc);
  };

  function copy(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopied(true);
  }
  return (
    <div className="container single-room">
      <Title>{roomInfo.name}</Title>
      <div className="flex-row">
        <div className="flex-column justify-center pic-options">
          {pics.map((link, i) => (
            <div key={i} className="tiny-pic" onClick={(e) => onClick(e)}>
              <img src={link} alt="room thumbnail"/>
            </div>
          ))}
        </div>
        {!featured ? (
          <div className="pic-container">
            <img src={image} alt="room" />
          </div>
        ) : (
          <div className="pic-container">
            <img src={featured} alt="room" />
          </div>
        )}
      </div>
      {/* <Paragraph>{room.description}</Paragraph> */}
      <div className="margin-top">
      <Title level={4}>Each room includes:</Title>
      <div className="flex-column amenities-list">
        {amenities.map((item, i) => (
          <Paragraph key={i}>{item}</Paragraph>
        ))}
      </div>
      </div>
      <div className="flex-column align-center copy-link-box">
        <Title level={4}>Share this room:</Title>
        <div className="flex-row align-baseline">
          <input value={`${roomInfo.link}${id}`} ref={textAreaRef} readOnly />
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
