[%raw {|require('./ReasonApp.scss')|}];

[@react.component]
let make = () => {
  module Component = {
    [@react.component]
    let make = (~children) => {
      <div className="reason-app__component"> children </div>;
    };
  };

  <div className="reason-app">
    <Component>
      <JavaScriptComponent name={js|JS from <ReasonApp />|js} />
    </Component>
    <Component>
      <ReasonComponent name={js|Re from <ReasonApp />|js} />
    </Component>
    <Component>
      <TypeScriptComponent name={js|TS from <ReasonApp />|js} />
    </Component>
  </div>;
};