import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PointWrapper } from "./store/Points";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <PointWrapper>
      <App />
    </PointWrapper>
);
