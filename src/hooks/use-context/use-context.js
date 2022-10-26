import { useContext } from "react";
import Content from "./Content";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

// 1. Create context
// 2. Provider
// 3. Consumer

function UseContext() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default UseContext;
