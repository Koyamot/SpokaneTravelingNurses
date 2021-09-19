import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <Title>About Us!</Title>
      <Paragraph>
        Spokane Traveling Nurses is ran by a husband and wife with years of
        property management experience. They take pride in their properties,
        with more than 10 rental properties under their care. The couple has
        decided to flip their home of 25 years into a welcoming space for
        traveling nurses visiting Spokane, WA.
      </Paragraph>
      <Paragraph>host@spokanetravelingnurses.com</Paragraph>
    </div>
  );
};

export default Contact;
