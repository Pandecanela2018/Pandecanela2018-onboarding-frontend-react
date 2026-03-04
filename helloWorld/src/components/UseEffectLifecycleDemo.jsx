import { useEffect, useRef, useState } from "react";

function UseEffectLifecycleDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controllerRef = useRef(null);

  useEffect(() => {
    console.log("UseEffectLifecycleDemo mounted");

    return () => {
      console.log("UseEffectLifecycleDemo unmounted");
      controllerRef.current?.abort();
    };
  }, []);

  const handleFetch = async () => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        { signal: controller.signal },
      );

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const json = await response.json();
      setData(json);
    } catch (requestError) {
      if (requestError.name !== "AbortError") {
        setError(requestError.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>useEffect lifecycle + fetch</h2>
      <button onClick={handleFetch} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </section>
  );
}

export default UseEffectLifecycleDemo;
