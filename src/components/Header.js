import React, { useEffect } from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";
import { useStateValue } from "../config/StateProvider";
import { auth } from "../config/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon fontSize="large" className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleSignOut} className="header__menu">
            <span className="header__menuLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__menuLineTwo">
              {user ? "Sign-out" : "Sign-in"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__menu">
            <span className="header__menuLineOne">Returns</span>
            <span className="header__menuLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__menu">
          <span className="header__menuLineOne">Your</span>
          <span className="header__menuLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__menuShoppingBasket">
            <ShoppingBasketIcon />
            <span className="header__menuLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
