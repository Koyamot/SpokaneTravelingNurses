import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Typography } from "antd";
const { Title } = Typography;

const GET_SHARED_SPACES = gql`
  query sharedSpaces {
    sharedSpace {
      upstairs {
        id
        formats
      }
      upstairs_bathroom {
        id
        formats
      }
      livingroom {
        id
        formats
      }
      diningroom {
        id
        formats
      }
      downstairs_bathroom {
        id
        formats
      }
      kitchen {
        id
        formats
      }
      outside {
        id
        formats
      }
    }
  }
`;
const Tour = () => {
  const [featuredLivingRoom, setFeaturedLivingRoom] = useState("");
  const [featuredKitchen, setFeaturedKitchen] = useState("");
  const [featuredUpstairs, setFeaturedUpstairs] = useState("");
  const [featuredUpstairsBathroom, setFeaturedUpstairsBathroom] = useState("");
  const [featuredDiningRoom, setFeaturedDiningRoom] = useState("");
  const [featuredDownstairsBathroom, setFeaturedDownstairsBathroom] = useState("");
  const { loading, error, data } = useQuery(GET_SHARED_SPACES, {});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>DOH! :(</p>;

  const shared = data.sharedSpace;

  const livingRoom = shared.livingroom.map((pics) => {
    const link = `${pics.formats.medium.url}`;
    return link;
  });

  const kitchen = shared.kitchen.map((pics) => {
    const link = `${pics.formats.medium.url}`;
    return link;
  });

  const upstairs = shared.upstairs.map((pics) => {
    const link = `${pics.formats.medium.url}`;
    return link;
  });

  const upstairsBathroom = shared.upstairs_bathroom.map((pics) => {
    const link = `${pics.formats.medium.url}`;
    return link;
  });

  const diningRoom = shared.diningroom.map((pics) => {
    const link = `${pics.formats.medium.url}`;
    return link;
  });

  const downstairsBathroom = shared.upstairs_bathroom.map((pics) => {
    const link = `${pics.formats.medium.url}`;
    return link;
  });

  const imageLivingRoom = `${shared.livingroom[0].formats.medium.url}`;

  const imageKitchen = `${shared.kitchen[0].formats.medium.url}`;

  const imageUpstairs = `${shared.upstairs[0].formats.medium.url}`;

  const imageUpstairsBathroom = `${shared.upstairs_bathroom[0].formats.medium.url}`;

  const imageDownstairsBathroom = `${shared.upstairs_bathroom[0].formats.medium.url}`;

const imageDiningRoom = `${shared.diningroom[0].formats.medium.url}`;

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
  const onDiningRoom= (e) => {
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
      <Title level={4} style={{  textAlign:"center" }}>Upstairs Bathroom</Title>
      <div className="flex-row">
        <div className="flex-column justify-center pic-options">
          {upstairsBathroom.map((link, key) => (
            <div key={key} className="tiny-pic" onClick={(e) => onUpstairsBathroom(e)}>
              <img src={link} alt="room thumbnail"/>
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
      <Title level={4} style={{  textAlign:"center" }}>Downstairs Bathroom</Title>
      <div className="flex-row">
        <div className="flex-column justify-center pic-options">
          {downstairsBathroom.map((link, key) => (
            <div key={key} className="tiny-pic" onClick={(e) => onDownstairsBathroom(e)}>
              <img src={link} alt="room thumbnail"/>
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
