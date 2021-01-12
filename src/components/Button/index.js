import React from "react";
import "./style.css";
import PropTypes from "prop-types";

const propTypes = {
  variant: PropTypes.oneOf(["primary", "default"]),
};
const defaultProps = {
  variant: "default",
  disabled: false,
};

const Button = props => {
  const className = props.variant;
  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
