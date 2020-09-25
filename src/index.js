import React from "react";
import ReactDOM from "react-dom";

import MouseTracker from "./MouseTracker";
import App from "./App";
//import App1 from "./App1";
import ScrollDev from "./ScrollDev";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div>
      <MouseTracker>
        <App />
        <ScrollDev />
      </MouseTracker>
    </div>
  </React.StrictMode>,
  rootElement
);
