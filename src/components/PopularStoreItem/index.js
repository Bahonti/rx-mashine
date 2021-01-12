import React from "react";
import PropTypes from "prop-types";

const PopularStoreItem = ({ name, signature, logo, photos }) => {
  const article = name
    .split(" ")
    .reduce((acc, item) => (acc += item[0].toUpperCase()), "");
  return (
    <div className="parent">
      <div className="popularStores__title">
        <img src={logo} alt="#" />
        <div className="popularStores__text">
          <span>{name}</span>
          <p>{signature}</p>
        </div>
      </div>
      {photos.map(item => (
        <div className="popularStores__photo">
          <img src={item.url} alt="#" />
        </div>
      ))}
    </div>
  );
};

export default PopularStoreItem;
