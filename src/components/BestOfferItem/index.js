import React from "react";
import PropTypes from "prop-types";

const BestOfferItem = ({ img, title, used, name, price, time, adress }) => {
  return (
    <div className="bestOffer__block">
      <div className="bestOffer__photo">
        <img src={img} alt="#" />
      </div>
      <div className="bestOffer__title">
        <span className="title">{title}</span>
        <p className="used">{used}</p>
      </div>
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <div className="bestOffer__title">
        <span>{time}</span>
        <span>{adress}</span>
      </div>
    </div>
  );
};

export default BestOfferItem;
