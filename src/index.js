import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/functional/class/Counter";
import CounterF from "./components/functional/functional/CounterF";
import RandomColor from "./components/functional/functional/RandomColor";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RandomColor />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
