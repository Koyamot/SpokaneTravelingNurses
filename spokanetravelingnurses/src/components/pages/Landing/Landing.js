import React from "react";
import { Typography, Image } from "antd";
import img from "../../../assets/Front.jpg";

const { Title, Paragraph } = Typography;

const Landing = () => {
  return (
    <div className="Landing">
      <div className="container">
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Title level={1}>Traveling Nurse Communal Living</Title>
          <Paragraph>
            Spokane Traveling Nurses is ran by a husband and wife with years of
            property management experience. They take pride in their properties,
            with more than 10 rental properties under their care. The couple has
            decided to flip their home of 25 years into a welcoming space for
            traveling nurses visiting Spokane, WA.
          </Paragraph>
          <Image src={img} preview={false} />
          <Title level={4}>708 S. Thor St. Spokane, WA 99202</Title>
          <Title level={3} style={{ fontStyle: "italic" }}>
            <i>YOUR HOME AWAY FROM HOME</i>
          </Title>
          <Paragraph>
            Enjoy your stay in this fully remodeled, cozy home centrally located
            in the City of Spokane. With fully furnished bedrooms, an at-home
            gym, a complete kitchen, and shared living and dining rooms, Spokane
            Traveling Nurses set the standard for communal living. Your stay
            also includes on-site laundry, a koi pond and patio, dog run, and
            plenty of off-street parking.
          </Paragraph>
          <Paragraph>
            In each room we provide a TV with DishTV, a refridgerator and
            freezer, a vanity, a mirror with shelving, a dresser, a queen-sized
            bed with fresh bedding, and a bluetooth headset.
          </Paragraph>
        </section>
      </div>
    </div>
  );
};

export default Landing;
