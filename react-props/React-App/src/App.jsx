import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Simple Counter</h1>

      <Counter
        count={count}
        onIncrease={() => setCount(count + 1)}
        onDecrease={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        onReset={() => setCount(0)}
      />
    </div>
  );
}

export default App;
