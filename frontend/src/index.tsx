import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!); // dw about the error here
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
