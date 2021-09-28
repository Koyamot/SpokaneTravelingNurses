import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Typography } from 'antd';
const { Title } = Typography

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
  const { loading, error, data } = useQuery(GET_SHARED_SPACES, {});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>DOH! :(</p>;
  console.log("This is data :", data.sharedSpace);

  const shared = data.sharedSpace

  const livingRoom = shared.diningroom.map((pics) => {
    const link = `${pics.formats.medium.url}`;
    return link;
  });

  const kitchen = shared.kitchen.map((pics) => {
    const link = `${pics.formats.medium.url}`;
    return link;
  });
  
  const imageLivingRoom = `${shared.livingroom[0].formats.medium.url}`;

  const imageKitchen = `${shared.kitchen[0].formats.medium.url}`;

  const onKitchen = (e) => {
    setFeaturedKitchen(e.target.currentSrc);
  };
  const onLivingRoom = (e) => {
    setFeaturedLivingRoom(e.target.currentSrc);
  };
  return (
    <div className="container">
      <Title level={1}>Take A Look At Our Beautiful Property</Title>
      <section>
      <Title level={4} style={{  textAlign:"center" }}>Living Room</Title>
      <div className="flex-row">
        <div className="flex-column justify-center pic-options">
          {livingRoom.map((link, key) => (
            <div key={key} className="tiny-pic" onClick={(e) => onLivingRoom(e)}>
              <img src={link} alt="room thumbnail"/>
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
      <section>
      <Title level={4} style={{  textAlign:"center" }}>Kitchen</Title>
      <div className="flex-row">
        <div className="flex-column justify-center pic-options">
          {kitchen.map((link, key) => (
            <div key={key} className="tiny-pic" onClick={(e) => onKitchen(e)}>
              <img src={link} alt="room thumbnail"/>
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
    </div>
  );
};

export default Tour;
