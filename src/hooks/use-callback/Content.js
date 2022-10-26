import { memo } from "react";
import React from "react";

function Content({ onIncrease }) {
  console.log("re-render");
  return (
    <React.Fragment>
      <h2> HELLO ANH EM F8</h2>
      <button onClick={onIncrease}>Click me!</button>
    </React.Fragment>
  );
}

export default memo(Content);
