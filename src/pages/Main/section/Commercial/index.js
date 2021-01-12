/*  ВАША РЕКЛАМА  */
import React from "react";
import "./style.css";
import "../../../../style/index.css";
import image from "../../../../images/images";

const Commercial = () => {
  return (
    <div className="commercial">
      <div className="left">
        <div className="union">
          <img src={image("union")} alt="#" />
          <span>
            Здесь
            <br />
            могла быть
            <br />
            ваша реклама
          </span>
        </div>
        <img className="kamaz2" src={image("kamaz2")} alt="#" />
      </div>
      <div className="right">
        <div className="block">
          <h5>Продаете технику?</h5>
          <p>
            Не ждите пока техника
            <br /> сама себя продаст!
          </p>
          <button>Разместить объявление</button>
        </div>
      </div>
    </div>
  );
};
export default Commercial;
