import { useState } from "react";
import { createElement } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return createElement(
    "section",
    null,
    createElement("h2", null, "Counter"),
    createElement("p", null, `Count: ${count}`),
    createElement(
      "button",
      { type: "button", onClick: () => setCount((prev) => prev + 1) },
      "Increment"
    )
  );
}

export default Counter;
