import React from "react";
import "./style.css";
import image from "../../images/images";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Искать на RX" required />
      <div className="input__icon">
        <img src={image("search")} alt="#" />
      </div>
    </div>
  );
};

export default Input;
