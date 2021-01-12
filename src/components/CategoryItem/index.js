import React from "react";
import PropTypes from "prop-types";

const CategoryItem = ({ name, count }) => {
  const article = name
    .split(" ")
    .reduce((acc, item) => (acc += item[0].toUpperCase()), "");
  return (
    <div className="categories__blocks__bl">
      <div className="categories__blocks__photo">
        <h2>{article}</h2>
      </div>
      <div className="categories__blocks__text">
        <p>{name}</p>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default CategoryItem;
