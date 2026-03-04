import { useState } from "react";

function ListInputDemo() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    setItems((prevItems) => [...prevItems, trimmedValue]);
    setInputValue("");
  };

  return (
    <section className="list-input-demo">
      <h2>List Input Demo</h2>
      <div className="list-input-controls">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Type an item"
        />
        <button type="button" onClick={handleAddItem}>
          Add
        </button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ListInputDemo;
