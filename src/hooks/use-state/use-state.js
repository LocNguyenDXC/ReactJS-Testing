import { useState } from "react";

const orders = [100, 200, 300];

// const gifts = ["BMW i8", "Maserati", "Lamboghini"];

function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });
  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };
  // const [gift, setGift] = useState("Have no gift");
  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[index]);
  // };
  // const [name, setName] = useState("");
  // return (
  //   <div className="App" style={{ padding: 20 }}>
  //     <input value={name} onChange={(e) => setName(e.target.value)} />
  //     <button onClick={() => setName("Nguyen Phuc Buu Loc")}>Change</button>
  //   </div>
  // );
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Change</button>
    </div>
  );
}

export default App;
