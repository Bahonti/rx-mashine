/*  Производители   */
import React from "react";
import "./style.css";
import "../../../../style/index.css";
import image from "../../../../images/images";

const Manufacturers = () => {
  return (
    <div className="manufacturers">
      <div className="container">
        <h4>Производители</h4>
        <div className="manufacturers__block">
          <div className="manufacturers__block--img">
            <img className="manufacturers__photo1" src={image("jcb")} alt="#" />
          </div>
          <div className="manufacturers__block--img">
            <img
              className="manufacturers__photo2"
              src={image("komatsu")}
              alt="#"
            />
          </div>
          <div className="manufacturers__block--img">
            <img
              className="manufacturers__photo3"
              src={image("doosan")}
              alt="#"
            />
          </div>
          <div className="manufacturers__block--img">
            <img className="manufacturers__photo4" src={image("maz")} alt="#" />
          </div>
          <div className="manufacturers__block--img">
            <img
              className="manufacturers__photo5"
              src={image("krone")}
              alt="#"
            />
          </div>
        </div>
        <div className="manufacturers__block">
          <div className="manufacturers__block--img">
            <img
              className="manufacturers__photo6"
              src={image("hyundai")}
              alt="#"
            />
          </div>
          <div className="manufacturers__block--img">
            <img
              className="manufacturers__photo7"
              src={image("kamaz")}
              alt="#"
            />
          </div>
          <div className="manufacturers__block--img">
            <img
              className="manufacturers__photo8"
              src={image("klintsi")}
              alt="#"
            />
          </div>
          <div className="manufacturers__block--img">
            <img
              className="manufacturers__photo9"
              src={image("bobcat")}
              alt="#"
            />
          </div>
          <div className="manufacturers__block--img">
            <img
              className="manufacturers__photo10"
              src={image("cat")}
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
