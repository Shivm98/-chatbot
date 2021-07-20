import React from "react";
import "./Footer.css";
import burger from "../../assets/images/burger.png";
import { RiSendPlane2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="input-container">
      <button className="menu-toggle-btn">
        <img src={burger} />
      </button>
      <input type="text" className="input-box" placeholder="May i help you?" />

      <button className="send-btn">
        <RiSendPlane2Fill />
      </button>
    </footer>
  );
};

export default Footer;
