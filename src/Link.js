import React from "react";
import useNavigationHook from "./hooks/useNavigationHook";

const Link = ({ to, children }) => {
  const { navigate } = useNavigationHook();

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return <a onClick={handleClick}>{children}</a>;
};

export default Link;
