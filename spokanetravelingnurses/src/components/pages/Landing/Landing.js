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

          <Image src={img} preview={false} />
          <Title level={4}>708 S. Thor St. Spokane, WA 99202</Title>
          <Title level={3} style={{ fontStyle: "italic" }}>
            <i>YOUR HOME AWAY FROM HOME</i>
          </Title>
          <Paragraph>
            Spokane Traveling Nurses is run by a team with more
            than 40 years combined in property management. The home of 25 years into a welcoming space for
            traveling nurses visiting Spokane, WA.
          </Paragraph>
          <Paragraph>
            Enjoy your stay in this fully remodeled, cozy home centrally located
            in the City of Spokane. With fully furnished bedrooms, an at-home
            gym, a complete kitchen, and shared living and dining rooms, Spokane
            Traveling Nurses sets the standard for communal living. Your stay
            also includes on-site laundry, a koi pond and patio, dog run, and
            plenty of off-street parking. Each room has a TV with DishTV,
            refrigerator and freezer, vanity mirror, dresser, queen-sized bed,
            and bluetooth headsets.
          </Paragraph>
        </section>
      </div>
    </div>
  );
};

export default Landing;
