import React from "react";
import logo from "../../img/logo-bitA.png";
import "../../scss/style.scss";
import HamburgerIcon from "../../svg/HamburgerIcon";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="icon-hamburger">
        <HamburgerIcon />
      </div>
    </div>
  );
}
