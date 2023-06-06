import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

const useNavigationHook = () => {
  return useContext(NavigationContext);
};

export default useNavigationHook;
