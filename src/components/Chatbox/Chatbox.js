import React, { useState } from "react";
import "./Chatbox.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

import ArrowClick from "../../assets/images/arrow-click.png";
import navs from "../../data/nav";

const Chatbox = () => {
  const [selectedLink, setSelectedLink] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const selectLink = (index) => {
    setOpenSubMenu(!selectedLink);
    setSelectedLink(index);
  };

  return (
    <div className="chatbox">
      <Header />
      <div className="main-container">
        <Modal>
          <div
            className={
              openSubMenu
                ? `navigations-container`
                : `navigations-container active`
            }
          >
            <h3>What Would You Like To Do?</h3>
            <ul className="list">
              {navs.map((item, index) => (
                <li className="list-item" onClick={() => selectLink(index)}>
                  <div className="left-icon">
                    <img src={item.image} />
                  </div>
                  <div className="data">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="right-icon">
                    <img src={ArrowClick} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={openSubMenu ? `submenu active` : `submenu`}>
            <div className="submenu-heading">
              <div
                className="back-btn"
                onClick={() => setOpenSubMenu(!openSubMenu)}
              >
                <img src={ArrowClick} />
              </div>
              <h3>{navs[selectedLink].title}</h3>
            </div>
            <p>
              These are the things you can do for your{" "}
              {navs[selectedLink].title}
            </p>
            <ul className="list">
              {navs[selectedLink]["sub links"].map((item, index) => (
                <li className="list-item">
                  <div className="text">"{item}"</div>
                  <div className="icon">
                    <img src={ArrowClick} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default Chatbox;

{
  /* <li className="list-item">
<div className="left-icon">
  <img src={CreditCard} />
</div>
<div className="data">
  <h4>My Axis Bank</h4>
  <span>"All Enquiry Services Live"</span>
</div>
<div className="right-icon">
  <img src={ArrowClick} />
</div>
</li> */
}
