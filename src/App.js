import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/reducer/couterslice";
import Checkredux from "./components/checkredux";

function App() {
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux application</h1>
      <h3>count:{count}</h3>
      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <Checkredux />
    </div>
  );
}

export default App;
