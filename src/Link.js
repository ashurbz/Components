import React from "react";
import useNavigationHook from "./hooks/useNavigationHook";
import classNames from "classnames";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigationHook();

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    "text-red-600 flex flex-col justify-between m-4 p-2 cursor-pointer",
    className,
    currentPath === to && activeClassName
  );
  return (
    <a className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
