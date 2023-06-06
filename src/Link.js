import React from "react";
import { useContext } from "react";
import NavigationContext from "./context/NavigationContext";

const Link = (to, children) => {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href="" onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
