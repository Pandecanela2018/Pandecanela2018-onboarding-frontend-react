import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  selectCounterValue,
} from "./counterSlice";
import Button from "./Button";

function Counter() {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();
  const statusMessage =
    count === 0
      ? "Counter is at zero."
      : count > 0
        ? "Counter is positive."
        : "Counter is negative.";

  return (
    <section className="mx-auto mt-6 w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Counter</h2>
      <p className="mt-2 text-slate-700">Current count: {count}</p>
      <p className="mt-1 text-slate-600">{statusMessage}</p>

      <div className="">
        <Button onClick={() => dispatch(increment())}>Increment</Button>

        <Button
          onClick={() => dispatch(decrement())}
          className="bg-slate-600 hover:bg-slate-700 active:bg-slate-800"
        >
          Decrement
        </Button>
      </div>
    </section>
  );
}

export default Counter;
