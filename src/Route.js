import useNavigationHook from "./hooks/useNavigationHook";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigationHook();

  if (path === currentPath) {
    return children;
  }
  return null;
};

export default Route;
