import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

import createBrowserHistory from "history/createBrowserHistory";
import "bootstrap/dist/css/bootstrap.css";

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router>
    <App history={customHistory} />
  </Router>,
  document.getElementById("root")
);
