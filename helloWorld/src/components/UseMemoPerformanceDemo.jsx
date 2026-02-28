import { useMemo, useState } from "react";

const LARGE_NUMBER_LIST = Array.from({ length: 5000 }, (_, index) => index + 1);

function expensiveTotal(limit) {
  let total = 0;

  for (let i = 0; i < 8000000; i += 1) {
    total += (i % 10) * limit;
  }

  return total;
}

function UseMemoPerformanceDemo() {
  const [limit, setLimit] = useState(100);
  const [theme, setTheme] = useState("light");

  const computedTotal = useMemo(() => {
    console.log("Running expensive calculation");
    return expensiveTotal(limit);
  }, [limit]);

  const visibleNumbers = useMemo(() => LARGE_NUMBER_LIST.slice(0, limit), [limit]);

  return (
    <section>
      <h2>useMemo Demo</h2>
      <p>Expensive total: {computedTotal}</p>
      <p>Showing {visibleNumbers.length} numbers from a large list</p>

      <label htmlFor="limit-range">Numbers to render: {limit}</label>
      <input
        id="limit-range"
        type="range"
        min="10"
        max="5000"
        value={limit}
        onChange={(event) => setLimit(Number(event.target.value))}
      />

      <button onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>
        Toggle theme ({theme})
      </button>

      <ul>
        {visibleNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </section>
  );
}

export default UseMemoPerformanceDemo;
