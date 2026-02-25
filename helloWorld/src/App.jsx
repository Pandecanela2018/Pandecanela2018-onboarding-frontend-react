import HelloWorld from "./components/HelloWord.jsx";
import axiosInstance from "./API/API.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((response) => {
        console.log("USERS:", response.data);
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  }, []);
  return <HelloWorld name="Javier" />;
}

export default App;
