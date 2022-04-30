import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import { Provider } from "react-redux";
import "./sass/index.scss";
import App from "App";
import reportWebVitals from "reportWebVitals";
import store from "redux/store";

WebFont.load({
  google: {
    families: ["Nunito:300,400,700", "sans-serif"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
