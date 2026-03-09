import { useState } from "react";

export default function Message() {
  const [message, setMessage] = useState("Hello World");

  return (
    <div>
      <p>{message}</p>
      <button type="button" onClick={() => setMessage("Button Clicked")}>
        Click Me
      </button>
    </div>
  );
}
