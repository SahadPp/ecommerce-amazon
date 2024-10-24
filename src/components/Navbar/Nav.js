import React from "react";
import "./Nav.css";
import navigation from "../../constants/navigation";
import { Link } from "react-router-dom";
function Nav() {
  const { home, products, aboutus, contactus } = navigation;
  const navs = [
    { label: "Home", url: home },
    { label: "Products", url: products },
    { label: "About Us", url: aboutus },
    { label: "Contact Us", url: contactus },
  ];

  return (
    <nav className="nav">
      <div class="container">
        {navs.map(({ label, url }) => (
          <Link to={url}>{label}</Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
