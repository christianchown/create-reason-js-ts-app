import React from "react";
import JavaScriptComponent from "../JavaScriptComponent";
import TypeScriptComponent from "../TypeScriptComponent";
import { make as ReasonComponent } from "../ReasonComponent/ReasonComponent.bs";
import "./TypeScriptApp.scss";

function Component({ children }: { children: React.ReactNode }) {
  return <div className="typescript-app__component">{children}</div>;
}

export default function TypeScriptApp() {
  return (
    <div className="typescript-app">
      <Component>
        <JavaScriptComponent name="JS from <TypeScriptApp />" />
      </Component>
      <Component>
        <ReasonComponent name="Re from <TypeScriptApp />" />
      </Component>
      <Component>
        <TypeScriptComponent name="TS from <TypeScriptApp />" />
      </Component>
    </div>
  );
}
