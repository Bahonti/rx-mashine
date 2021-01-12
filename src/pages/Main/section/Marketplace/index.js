import React from "react";
import "./style.css";
import "../../../../style/index.css";
import image from "../../../../images/images";

const Marketplace = () => {
  return (
    <div className="marketplace">
      <div className="container">
        <img src={image("line1")} alt="#" className="marketplace__line1" />
        <div className="marketplace__span">
          <span>
            Добро
            <br /> пожаловать!
          </span>
        </div>
        <div className="marketplace__line3">
          <img src={image("line3")} alt="#" />
        </div>
        <div className="marketplace__text">
          <div className="marketplace__text--logo">
            <h3>
              RX
              <span>MACHINE</span>
            </h3>
            <p>company</p>
          </div>
          <div className="marketplace__text--p">
            <p>
              Онлайн-площадка
              <br /> для объявлений{" "}
            </p>
          </div>
        </div>
        <div className="marketplace__photo">
          <img src={image("trok")} alt="#" />
        </div>
        <img src={image("line2")} alt="#" className="marketplace__line2" />
      </div>
    </div>
  );
};

export default Marketplace;
