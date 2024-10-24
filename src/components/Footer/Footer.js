import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-text">
          <div className="footer-item">
            <h5>Get to Know Us</h5>
            <p>About Amazon</p>
            <p> Careers</p>
            <p> Press Releases</p>
            <p> Amazon Scien </p>
          </div>
          <div className="footer-item">
            <h5>Connect with Us</h5>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div className="footer-item">
            <h5>Make Money with Us</h5>
            <p> Sell on Amazon</p>
            <p> Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand </p>
            <p> Amazon Global Selling</p>
            <p> Supply to Amazon </p>
            <p> Become an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p> Advertise Your Products </p>
            <p>Amazon Pay on Merchants </p>
          </div>
          <div className="footer-item">
            <h5>Let Us Help You</h5>
            <p>Your Account </p>
            <p> Returns Centre </p>
            <p> Recalls and Product Safety Alerts </p>
            <p> 100% Purchase Protection </p>
            <p> Amazon App Download</p>
            <p> Help</p>
          </div>
        </div>


       
      </footer>
      <div className="copy">
        &copy; Amazon.com {new Date().getFullYear()}
        </div>
    </>
  );
}

export default Footer;
