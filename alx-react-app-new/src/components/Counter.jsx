import { useState } from "react";

function Counter() {
  // Initialize state with useState hook
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: "5px", padding: "10px", fontSize: "16px", cursor: "pointer" }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: "5px", padding: "10px", fontSize: "16px", cursor: "pointer" }}
      >
        Decrement
      </button>
      <button 
        onClick={() => setCount(0)} 
        style={{ margin: "5px", padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "red", color: "white" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
