import { useState } from "react";
import UseContext from "./hooks/use-context/use-context";
import "./App.css";

function App() {
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <div className="App" style={{ padding: 20 }}>
      <button onClick={() => setIsDisplay(!isDisplay)}>Toggle</button>
      {isDisplay && <UseContext />}
    </div>
  );
}

export default App;
