import React, { useState } from "react";
import emailjs from "emailjs-com";


const Booking = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm("spokanetravelingnurses", "requestforconsult", e.target, "user_68C11RQOE7GkU008gS3Gj")
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
    <div style={{ background: "#FFF" }}>
      <h1>Booking</h1>
      <form onSubmit={sendEmail}>
        <label>
          First Name:
          <input type="text" placeholder="First Name" name="firstName"/>
        </label>
        <label>
          Last Name:
          <input type="text" placeholder="Last Name" name="lastName" />
        </label>
        <label>
          Email Address:
          <input type="email" placeholder="E-mail address" name="email"/>
        </label>
        <label>
          Phone Number:
          <input type="tel" placeholder="" name="ph_number"/>
        </label>
        <p>Dates interested in:</p>
        <div>
        <input type="date" name="startDate"/> - <input type="date" name="endDate"/>
        </div>
        <label> Send a message(Any information the property manager may need to know, accomodations, pets, car, etc):
            <br></br>
          <textarea type="text" name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Booking;
