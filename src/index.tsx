import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root") as HTMLElement;

if (el === null) throw new Error("Root container missing in index.html");

const root = ReactDOM.createRoot(el);

root.render(<App />);

const devMode = process.env.NODE_ENV === "development";
if (devMode && module && module.hot) {
  module.hot.accept();
}
