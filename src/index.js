import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { navigationProvider } from "./context/navigationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <navigationProvider>
    <App />
  </navigationProvider>
);
