import React from "react";

export default function TypeScriptComponent({ name }: { name: string }) {
  return (
    <p className="typescript-component">
      <code>./TypeScriptComponent/index.tsx</code> {name && <> - {name}</>}
    </p>
  );
}
