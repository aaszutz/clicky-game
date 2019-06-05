import React from "react";

const Row = props =>
  <div className={`row${props.fluid ? "img-fluid" : ""}`}>
    {props.children}
  </div>;

export default Row;
