import React from "react";
import "./ContactUs.css";
function ContactUs() {
  return (
    <>
      <div className="contactus"></div>

      <div className="contact-content">
        <div className="contact-item">
          <img src="./support.png" alt="" />

          <h5>Talk to sales</h5>

          <p>
            Interested in HubSpot's software? Just pick up the phone to chat
            With a member of our sales team
          </p>
          <i>+966 361-867-1999</i>
        </div>

        <div className="contact-item">
          <img src="./chat.png" alt="" />

          <h5>Contact Customer support</h5>
          <p>
            Sometimes you need a little help from your friends. Or a HubSpot
            support rep. Don't Worry...we're here for you
          </p>
          <i>amazon@gmail.com</i>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
