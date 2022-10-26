import { memo, useContext } from "react";
import React from "react";
import Paragraph from "./Paragraph";
import { ThemeContext } from "./ThemeContext";

function Content() {
  const context = useContext(ThemeContext);

  return (
    <React.Fragment>
      <button onClick={context?.toggleTheme}>Toggle theme</button>
      <Paragraph />
    </React.Fragment>
  );
}

export default memo(Content);
