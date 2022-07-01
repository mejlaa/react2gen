import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/functional/functional/Card";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        name="Aisa Nicevic"
        job="Najbolji Pyton Coder"
        url="https://www.w3schools.com/howto/img_avatar.png"
      />
      <Card
        name="Suad Suljovic"
        job="Developer"
        url="https://www.w3schools.com/howto/img_avatar.png"
      />
      <Card
        name="Irfan Ugljanin"
        job="Ne prestaje da prica"
        url="https://www.w3schools.com/howto/img_avatar.png"
      />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
