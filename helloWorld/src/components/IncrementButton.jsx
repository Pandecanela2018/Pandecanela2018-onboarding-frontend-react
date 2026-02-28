import { memo } from "react";

const IncrementButton = memo(function IncrementButton({ onIncrement }) {
  console.log("IncrementButton render");
  return <button onClick={onIncrement}>Increment count</button>;
});

export default IncrementButton;
