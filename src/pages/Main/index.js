import React from "react";
import arenda from "../../images/biznes-arenda.png";
import "./style.css";
import Categories from "./section/Categories";
import Manufacturers from "./section/Manufacturers";
import Marketplace from "./section/Marketplace";
import PopularStores from "./section/PopularStores";
import Commercial from "./section/Commercial";
import BestOffer from "./section/BestOffer";

const Main = props => {
  return (
    <div className="main">
      <div className="main__header">
        <div className="container">
          <h1>
            Доступная площадка <br />
            для спецоборудования
          </h1>
          <p>
            Интернет-площадка по аренде, продаже
            <br /> и перевозкам спецоборудования
          </p>
          <div className="main__photo">
            <img src={arenda} alt="#" />
          </div>
        </div>
      </div>
      <Categories />
      <Marketplace />
      <BestOffer />
      <Commercial />
      <PopularStores />
      <Manufacturers />
    </div>
  );
};
export default Main;
