import { useSelector } from "react-redux";
import { selectCounterValue } from "../components/counterSlice";

function Profile() {
  const count = useSelector(selectCounterValue);
  const profileMessage =
    count < 0
      ? "Your counter is below zero."
      : count === 0
        ? "Your counter is neutral."
        : "Your counter is above zero.";

  return (
    <section>
      <h2>Profile Page</h2>
      <p>This is the profile page.</p>
      <p>Counter snapshot: {count}</p>
      <p>{profileMessage}</p>
    </section>
  );
}

export default Profile;
