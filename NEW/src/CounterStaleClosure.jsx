import { useEffect, useState } from "react";

/**
 * CounterBug
 *
 * Goal: reproduce the classic "stale closure" bug described in CSS-Tricks:
 * a `setInterval` inside `useEffect` "captures" the initial render's `count`.
 *
 * Debugging setup:
 * - Logs `count` on every render.
 * - Logs `count` inside the interval callback.
 *
 * What you should observe:
 * - Render log: `count` goes 0 -> 1 (once).
 * - Interval log: `count` stays 0 forever (stale).
 * - UI: the displayed count increments to 1 and then stops.
 *
 * Why it happens:
 * - `useEffect(..., [])` runs once after the first render.
 * - The interval callback closes over variables from that render.
 * - So `count` inside the interval callback is "frozen" to its initial value (0).
 * - `setCount(count + 1)` becomes `setCount(0 + 1)` on every tick.
 * - After the first tick, React receives `setCount(1)` repeatedly; state is already 1, so no further re-render.
 */
export function CounterBug() {
  const [count, setCount] = useState(0);

  console.log("[CounterBug render] count =", count);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("[CounterBug interval] count =", count);
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(id);
    // Intentionally empty dependency array to reproduce the bug.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2 style={{ marginTop: 0 }}>CounterBug (stale closure)</h2>
      <p>
        Count: <strong>{count}</strong>
      </p>
      <p style={{ marginBottom: 0 }}>
        Open the console: the interval keeps logging the initial <code>count</code>.
      </p>
    </section>
  );
}

/**
 * CounterFixed
 *
 * Fix: use the functional state update form.
 *
 * Why this fixes it:
 * - The updater receives the latest state (`prev`) from React, not from the stale closure.
 * - So each tick computes the next state from the current state: `prev + 1`.
 *
 * Note on logging:
 * - If we log `count` inside the interval callback, it is still stale for the same reason as above.
 * - To see the real changing value, log `prev` inside the functional updater.
 */
export function CounterFixed() {
  const [count, setCount] = useState(0);

  console.log("[CounterFixed render] count =", count);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("[CounterFixed interval] count (stale in closure) =", count);
      setCount((prev) => {
        console.log("[CounterFixed updater] prev =", prev);
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(id);
    // Intentionally empty dependency array: with the functional update pattern,
    // the interval does not need `count` in scope to stay correct.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2 style={{ marginTop: 0 }}>CounterFixed (functional update)</h2>
      <p>
        Count: <strong>{count}</strong>
      </p>
      <p style={{ marginBottom: 0 }}>
        Open the console: the updater log shows the real current value.
      </p>
    </section>
  );
}

