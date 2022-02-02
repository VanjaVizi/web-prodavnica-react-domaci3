import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  return (
    <div className="navbar">
     
      <Link to="/" className="navbar-items">Proizvodi  </Link>
       
      <Link to="/korpa" className="navbar-items">
        <p>Korpa</p>
         
      </Link>
      <BsCartFill />
        <p className="cart-num">{cartNum}</p>
    </div>
  );
}
export default NavBar;