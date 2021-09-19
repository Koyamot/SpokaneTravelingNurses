import Title from "antd/lib/typography/Title";
import React from "react";
import list from "./list";

const Amenities = () => {
  return (
    <div className="container">
      <div className="flex-row justify-space">
        <div className="flex-column">
          <Title level={3}>Property Highlights:</Title>
          {list.property.map((item) => (
            <p key={item.id}>{item}</p>
          ))}
        </div>
        <div className="flex-column">
          <Title level={3}>General Housing Highlights:</Title>
          {list.general.map((item) => (
            <p key={item.id}>{item}</p>
          ))}
        </div>
      </div>
      <Title level={3}>Housing Highlights:</Title>
      {list.amenities.map((item) => (
        <p key={item.id}>{item}</p>
      ))}
    </div>
  );
};

export default Amenities;
