import React from "react";
import classNames from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  const classes = classNames("px-3  py-1.5 border", {
    "bg-blue-500 border-blue-500 text-white ": primary,
    "bg-gray-500 border-gray-500 text-white ": secondary,
    "bg-green-500 border-green-500 text-white ": success,
    "bg-yellow-500 border-yellow-500 text-white ": warning,
    "bg-red-500 border-red-500 text-white ": danger,
  });
  return (
    <div>
      <button className={classes}>{children}</button>
    </div>
  );
};

export default Button;
