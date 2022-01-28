import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      console.log(result.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main></main>
    </div>
  );
}

export default App;
