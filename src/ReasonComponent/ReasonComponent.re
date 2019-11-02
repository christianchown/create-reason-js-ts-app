[@react.component]
let make = (~name) => {
  let compName = React.string("./ReasonComponent/ReasonComponent.re - ");
  let text = React.string(name);
  <p className="reason-component"> <code> compName </code> text </p>;
};