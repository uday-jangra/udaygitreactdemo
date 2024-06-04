import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>C0897899</h1>
      <h1>Uday Kumar</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>Click to increase count</p>
      </div>
    </>
  );
}

export default App;
