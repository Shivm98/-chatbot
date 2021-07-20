import React, { useState } from "react";
import "./Modal.css";
import CloseIcon from "../../assets/images/cross_png.png";

const Modal = (props) => {
  const [modalActive, setModalActive] = useState(true);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className={modalActive ? `modal active` : `modal`}>
      <div>{props.children}</div>
      <button className="close-modal-btn" onClick={toggleModal}>
        <img src={CloseIcon} />
      </button>
    </div>
  );
};

export default Modal;
