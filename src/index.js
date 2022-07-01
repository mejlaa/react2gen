import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/functional/functional/Card";
import TwitterCard from "./components/functional/functional/TwitterCard";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TwitterCard
      url="https://cdn-icons-png.flaticon.com/512/1532/1532475.png"
      title="twitter"
      about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      btnUrl="https://twitter.com/"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
