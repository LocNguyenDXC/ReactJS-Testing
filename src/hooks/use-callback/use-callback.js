import { useCallback, useState } from "react";
import Content from "./Content";

function UseCallBack() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Content onIncrease={increase} />
      <h1>{count}</h1>
    </div>
  );
}

export default UseCallBack;
