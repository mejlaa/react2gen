import React from "react";
import ReactDOM from "react-dom/client";

import Badge1 from "./components/functional/functional/Badge1";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Badge1 type="tip1" />
    <Badge1 type="tip2" />
    <Badge1 type="tip3" />
    <Badge1 type="tip4" />
    <Badge1 type="tip5" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
