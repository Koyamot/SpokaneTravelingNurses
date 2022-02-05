import Title from "antd/lib/typography/Title";
import React from "react";
import { resources } from "./guideResources";

const Explore = () => {
  const explore = resources[0].explore;
  const hospital = resources[1].hospitals;
  const stores = resources[2].stores;

  console.log(stores)

  return (
    <div className="container">
      <Title level={2}>Let us help you navigate your way around Spokane:</Title>
      <section className="resource_holder">
        <Title level={2}>Hospitals Near By:</Title>
        <div className="flex-row justify-even wrap">
        {hospital.map((hos, i) => (
          <div key={i} className="resource_card flex-row justify-space">
              <div>
            <Title level={4}>{hos.name}</Title>
            <div className="flex-col justify-even align-center">
              <p>Address: {hos.address}</p>
              <p>Distance from house: {hos.miles}</p>
              <a href={hos.link} className="underline" rel="noreferrer" target="_blank">Go to Website</a>
            </div>
            </div>
            <img src={hos.img} alt={hos.alt} />
          </div>
        ))}
        </div>
      </section>
      <section className="resource_holder">
        <Title level={2}>Discover Spokane:</Title>
        <div className="flex-row wrap">
        {explore.map((exp, i) => (
          <div key={i} className="resource_card wider">
            <Title level={4}>{exp.title}</Title>
            <div className="flex-row justify-space align-center">
              <p>
                Website address:{" "}
                <a className="underline" href={exp.link} rel="noreferrer" target="_blank">
                  {exp.link}
                </a>
              </p>
              <a className="underline pdf_link" href={exp.pdf} rel="noreferrer" target="_blank">
                PDF Version
              </a>
            </div>
          </div>
        ))}
        </div>
      </section>
      <section className="resource_holder">
      <Title level={2}>Stores near by:</Title>
      <div className="flex-row justify-even wrap">
        {stores.map((store, i) => (
          <div key={i} className="resource_label">
            <Title level={4}>{store}</Title>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
};

export default Explore;
