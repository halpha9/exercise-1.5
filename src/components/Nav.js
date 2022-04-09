import React from "react";
import "./Nav.scss";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
          <h1>APPS</h1>
        </Link>
      </div>

      <div className="nav__right">
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = '/products'>
          <li>PRODUCTS</li>
        </Link>
        <li>NEWS</li>
        <li>CONTACT</li>
        <Link to="/checkout">
          <ShoppingBasketIcon className="nav__right-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
