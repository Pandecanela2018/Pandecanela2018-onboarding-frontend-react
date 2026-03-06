import { useSelector } from "react-redux";
import { selectCounterValue } from "../components/counterSlice";

function Home() {
  const count = useSelector(selectCounterValue);
  const message =
    count >= 5
      ? "Great momentum. You already reached 5 or more."
      : "Keep going. Try increasing the counter.";

  return (
    <section>
      <h2>Home Page</h2>
      <p>Welcome to the home page.</p>
      <p>Counter value from store: {count}</p>
      <p>{message}</p>
    </section>
  );
}

export default Home;
