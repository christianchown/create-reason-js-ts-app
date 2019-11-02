import React from "react";
import ReactDOM from "react-dom";
import JavaScriptApp from "./JavaScriptApp";
import TypeScriptApp from "./TypeScriptApp";
import { make as ReasonApp } from "./ReasonApp/ReasonApp.bs";
import * as serviceWorker from "./serviceWorker";

let App;

switch (process.env.REACT_APP_ENTRY_POINT) {
  case "JavaScript":
    App = JavaScriptApp;
    break;
  case "TypeScript":
    App = TypeScriptApp;
    break;
  case "Reason":
    App = ReasonApp;
    break;
  default:
    App = function ChooseEntryPoint() {
      return (
        <>
          <p>
            The <code>.env</code> variable <code>REACT_APP_ENTRY_POINT</code>{" "}
            needs to be one of:
          </p>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Reason</li>
          </ul>
        </>
      );
    };
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (!!(process.env.REACT_APP_SERVICE_WORKER || "").toString()) {
  serviceWorker.unregister();
}
