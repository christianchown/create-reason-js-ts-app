import React from "react";
import JavaScriptComponent from "../JavaScriptComponent";
import TypeScriptComponent from "../TypeScriptComponent";
import { make as ReasonComponent } from "../ReasonComponent/ReasonComponent.bs";
import "./JavaScriptApp.scss";

function Component({ children }) {
  return <div className="javascript-app__component">{children}</div>;
}

export default function JavaScriptApp() {
  return (
    <div className="javascript-app">
      <Component>
        <JavaScriptComponent name="JS from <JavaScriptApp />" />
      </Component>
      <Component>
        <ReasonComponent name="Re from <JavaScriptApp />" />
      </Component>
      <Component>
        <TypeScriptComponent name="TS from <JavaScriptApp />" />
      </Component>
    </div>
  );
}
