import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "./components/Error";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      //console.log(result.data);
      setTodos(result.data);
    });
  }, []);

  return <div>{todos ? <TodoList todos={todos} /> : <Error />}</div>;
}

export default App;
