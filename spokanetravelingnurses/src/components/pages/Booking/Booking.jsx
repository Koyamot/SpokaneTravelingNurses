import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Booking = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState("");

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

  const changeStartDate = (e) => {
    setStartDate(e.target.value);
    setEndDate(startDate);
  };

  const changeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="container">
      <form className="flex-column align-center" onSubmit={sendEmail}>
        <Title level={2}>Submit Your Request</Title>
        <Paragraph>
          We are excited to have you stay with us! Please fill out the form
          below, and we'll get back to you as soon as possible. If you have any
          accomodations, pets, questions, please add them to the message
          section.
        </Paragraph>
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
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="XXX-XXX-XXX"
              name="ph_number"
              required
            />
          </label>
        </div>
        <div className="booking-dates flex" style={{ display: "flex" }}>
          <label>
            {" "}
            Start Date:
            <input
              className="margin-right"
              type="date"
              name="startDate"
              onChange={changeStartDate}
            />
          </label>{" "}
          <label>
            {" "}
            End Date
            <input
              type="date"
              name="endDate"
              onChange={changeEndDate}
              value={endDate || startDate}
            />
          </label>
        </div>
        <p className="grey-italicized">
          *Please be aware tht all dates are tentative. We thank you for your
          flexibility.
        </p>
        <label>
          {" "}
          Send the property manager a message:
          <br />
          <textarea type="text" name="message"></textarea>
        </label>
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Booking;
