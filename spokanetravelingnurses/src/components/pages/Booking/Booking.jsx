import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Typography } from "antd";

const { Title } = Typography;

const Booking = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "spokanetravelingnurses",
        "requestforconsult",
        e.target,
        "user_68C11RQOE7GkU008gS3Gj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div
      className="booking-container"
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "2.4rem 8rem 2.4rem 8rem",
      }}
    >
      <form className="flex-column align-center" onSubmit={sendEmail}>
        <Title level={1}>Book Your Stay</Title>
        <div className="name-box flex-row">
          <label>
            First Name:
            <input
              className="margin-right"
              type="text"
              placeholder="First Name"
              name="firstName"
            />
          </label>
          <label>
            Last Name:
            <input type="text" placeholder="Last Name" name="lastName" />
          </label>
        </div>
        <div className="flex-row">
          <label>
            Email Address:
            <input
              className="margin-right"
              type="email"
              placeholder="E-mail address"
              name="email"
            />
          </label>
          <label>
            Phone Number:
            <input type="tel" placeholder="" name="ph_number" />
          </label>
        </div>
        <div className="booking-dates flex" style={{ display: "flex" }}>
          <label>
            {" "}
            Start Date:
            <input className="margin-right" type="date" name="startDate" />
          </label>{" "}
          <label>
            {" "}
            End Date
            <input type="date" name="endDate" />
          </label>
        </div>
        <label>
          {" "}
          Send the property manager a message:
          <br />
          <textarea type="text" name="message"></textarea>
        </label>
        <button className="send-button" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Booking;
