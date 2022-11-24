import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter basename="react-netflix">
//     <App />
//   </BrowserRouter>
// );
