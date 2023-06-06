import React from "react";
import useNavigationHook from "./hooks/useNavigationHook";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigationHook();
  console.log(path, children);
  if (path === currentPath) {
    return children;
  }
  return null;
};

export default Route;
