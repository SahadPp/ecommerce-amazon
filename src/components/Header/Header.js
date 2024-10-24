import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import { CartIcon } from "../../Icons/Icons";
import { useContext } from "react";
import { cartContext } from "../../Context/Context";

function Header() {
  const { searchQuery, setSearchQuery, count } = useContext(cartContext);

  return (
    <>
      <header className="header">
        <Link to="/" style={{ textDecoration: "non", color: "#fff" }}>
          <img src="./amazon-logo-1024x683.png" alt="" />
        </Link>

        <div className="search">
          <input
            className="search-box"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Amazon.in"
          />
          <button className="search-button">Search</button>
        </div>

        <div className="sign-up">
          <Link to="signup">
            <button>Sign up</button>
          </Link>
        </div>

        <Link to="cart">
          <div className="cart-with-count">
            <CartIcon />
            {count > 0 && <span className="count-badge">{count}</span>}
          </div>
        </Link>
      </header>
      <Nav />
    </>
  );
}

export default Header;
