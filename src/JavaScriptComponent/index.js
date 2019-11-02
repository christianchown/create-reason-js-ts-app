import React from "react";

export default function JavaScriptComponent({ name }) {
  return (
    <p className="javascript-component">
      <code>./JavaScriptComponent/index.js</code>
      {name && <> - {name}</>}
    </p>
  );
}
