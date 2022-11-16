import React, { useState } from "react";
import { Typography } from "antd";
const { Title } = Typography;

const Tour = ({sharedSpace}) => {
  const [featuredLivingRoom, setFeaturedLivingRoom] = useState("");
  const [featuredKitchen, setFeaturedKitchen] = useState("");
  const [featuredUpstairs, setFeaturedUpstairs] = useState("");
  const [featuredUpstairsBathroom, setFeaturedUpstairsBathroom] = useState("");
  const [featuredDiningRoom, setFeaturedDiningRoom] = useState("");
  const [featuredDownstairsBathroom, setFeaturedDownstairsBathroom] =
    useState("");
  const shared = sharedSpace[0];
  const livingRoom = shared.livingRoom.map((pics) => {
    const link = `${pics}`;
    return link;
  });
  console.log(livingRoom)
  const kitchen = shared.kitchen.map((pics) => {
    const link = `${pics}`;
    return link;
  });

  const upstairs = shared.upstairs.map((pics) => {
    const link = `${pics}`;
    return link;
  });

  const upstairsBathroom = shared.upstairsBathroom.map((pics) => {
    const link = `${pics}`;
    return link;
  });

  const diningRoom = shared.diningRoom.map((pics) => {
    const link = `${pics}`;
    return link;
  });

  const downstairsBathroom = shared.downstairsBathroom.map((pics) => {
    const link = `${pics}`;
    return link;
  });

  const imageLivingRoom = `${shared.livingRoom[0]}`;

  const imageKitchen = `${shared.kitchen[0]}`;

  const imageUpstairs = `${shared.upstairs[0]}`;

  const imageUpstairsBathroom = `${shared.upstairsBathroom[0]}`;

  const imageDownstairsBathroom = `${shared.downstairsBathroom[0]}`;

  const imageDiningRoom = `${shared.diningRoom[0]}`;

  const onKitchen = (e) => {
    setFeaturedKitchen(e.target.currentSrc);
  };
  const onLivingRoom = (e) => {
    setFeaturedLivingRoom(e.target.currentSrc);
  };
  const onUpstairs = (e) => {
    setFeaturedUpstairs(e.target.currentSrc);
  };
  const onUpstairsBathroom = (e) => {
    setFeaturedUpstairsBathroom(e.target.currentSrc);
  };
  const onDiningRoom = (e) => {
    setFeaturedDiningRoom(e.target.currentSrc);
  };
  const onDownstairsBathroom = (e) => {
    setFeaturedDownstairsBathroom(e.target.currentSrc);
  };
  return (
    <div className="container">
      <Title level={1}>Take A Look At Our Beautiful Property</Title>
      <section className="tour-photo">
        <Title level={4} style={{ textAlign: "center" }}>
          Living Room
        </Title>
        <div className="flex-row">
          <div className="flex-column justify-center pic-options">
            {livingRoom.map((link, key) => (
              <div
                key={key}
                className="tiny-pic"
                onClick={(e) => onLivingRoom(e)}
              >
                <img src={link} alt="room thumbnail" />
              </div>
            ))}
          </div>
          {!featuredLivingRoom ? (
            <div className="pic-container">
              <img src={imageLivingRoom} alt="room" />
            </div>
          ) : (
            <div className="pic-container">
              <img src={featuredLivingRoom} alt="room" />
            </div>
          )}
        </div>
      </section>
      <section className="tour-photo">
        <Title level={4} style={{ textAlign: "center" }}>
          Dining Room
        </Title>
        <div className="flex-row">
          <div className="flex-column justify-center pic-options">
            {diningRoom.map((link, key) => (
              <div
                key={key}
                className="tiny-pic"
                onClick={(e) => onDiningRoom(e)}
              >
                <img src={link} alt="room thumbnail" />
              </div>
            ))}
          </div>
          {!featuredDiningRoom ? (
            <div className="pic-container">
              <img src={imageDiningRoom} alt="room" />
            </div>
          ) : (
            <div className="pic-container">
              <img src={featuredDiningRoom} alt="room" />
            </div>
          )}
        </div>
      </section>
      <section className="tour-photo">
        <Title level={4} style={{ textAlign: "center" }}>
          Kitchen
        </Title>
        <div className="flex-row">
          <div className="flex-column justify-center pic-options">
            {kitchen.map((link, key) => (
              <div key={key} className="tiny-pic" onClick={(e) => onKitchen(e)}>
                <img src={link} alt="room thumbnail" />
              </div>
            ))}
          </div>
          {!featuredKitchen ? (
            <div className="pic-container">
              <img src={imageKitchen} alt="room" />
            </div>
          ) : (
            <div className="pic-container">
              <img src={featuredKitchen} alt="room" />
            </div>
          )}
        </div>
      </section>
      <section className="tour-photo">
        <Title level={4} style={{ textAlign: "center" }}>
          Upstairs Common Area
        </Title>
        <div className="flex-row">
          <div className="flex-column justify-center pic-options">
            {upstairs.map((link, key) => (
              <div
                key={key}
                className="tiny-pic"
                onClick={(e) => onUpstairs(e)}
              >
                <img src={link} alt="room thumbnail" />
              </div>
            ))}
          </div>
          {!featuredUpstairs ? (
            <div className="pic-container">
              <img src={imageUpstairs} alt="room" />
            </div>
          ) : (
            <div className="pic-container">
              <img src={featuredUpstairs} alt="room" />
            </div>
          )}
        </div>
      </section>
      <section className="tour-photo">
        <Title level={4} style={{ textAlign: "center" }}>
          Upstairs Bathroom
        </Title>
        <div className="flex-row">
          <div className="flex-column justify-center pic-options">
            {upstairsBathroom.map((link, key) => (
              <div
                key={key}
                className="tiny-pic"
                onClick={(e) => onUpstairsBathroom(e)}
              >
                <img src={link} alt="room thumbnail" />
              </div>
            ))}
          </div>
          {!featuredUpstairsBathroom ? (
            <div className="pic-container">
              <img src={imageUpstairsBathroom} alt="room" />
            </div>
          ) : (
            <div className="pic-container">
              <img src={featuredUpstairsBathroom} alt="room" />
            </div>
          )}
        </div>
      </section>
      <section className="tour-photo">
        <Title level={4} style={{ textAlign: "center" }}>
          Downstairs Bathroom
        </Title>
        <div className="flex-row">
          <div className="flex-column justify-center pic-options">
            {downstairsBathroom.map((link, key) => (
              <div
                key={key}
                className="tiny-pic"
                onClick={(e) => onDownstairsBathroom(e)}
              >
                <img src={link} alt="room thumbnail" />
              </div>
            ))}
          </div>
          {!featuredDownstairsBathroom ? (
            <div className="pic-container">
              <img src={imageDownstairsBathroom} alt="room" />
            </div>
          ) : (
            <div className="pic-container">
              <img src={featuredDownstairsBathroom} alt="room" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tour;
