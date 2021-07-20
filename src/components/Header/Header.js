import React from "react";
import Logo from "../../assets/images/axis_aha.png";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} />
      </div>

      <div className="btns-container">
        <div className="header-btn">
          <AiOutlineMinusCircle />
        </div>
      </div>
    </header>
  );
};

export default Header;
