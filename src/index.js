import React from "react";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import App from "./containers/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/stylesheets/index.scss";

ReactDOM.render(
      <main>
        <Header/>
        <App />
        <Footer />
      </main>,
  document.getElementById("root")
);
