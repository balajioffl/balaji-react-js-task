import "./Counter.css";

function Counter(props) {
  return (
    <div className="counter-box">
      <h2>{props.count}</h2>

      <button onClick={props.onIncrease}> + </button>
      <button onClick={props.onDecrease}> - </button>
      <button onClick={props.onReset}> Reset </button>
    </div>
  );
}

export default Counter;
