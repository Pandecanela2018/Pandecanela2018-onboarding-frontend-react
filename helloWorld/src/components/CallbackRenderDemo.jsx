import { useCallback, useState } from "react";
import IncrementButton from "./IncrementButton";

function CallbackRenderDemo() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  console.log("CallbackRenderDemo render");

  return (
    <section>
      <h2>useCallback Demo</h2>
      <p>Count: {count}</p>
      <p>Theme: {theme}</p>

      <IncrementButton onIncrement={handleIncrement} />
      <button onClick={toggleTheme}>Toggle theme</button>
    </section>
  );
}

export default CallbackRenderDemo;
