import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "./components/Error";
import TodoList from "./components/TodoList";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((result) => {
        //console.log(result.data);
        setTodos(result.data);
      });
  }, []);

  const add = () => {
    setTodos();
  };

  return (
    <div className="App">
      <section className="Add-Todos">
        <Container>
          <Form>
            <Form.Group controlId="form.Name">
              <Form.Label>Tarea</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de la tarea"
              />
            </Form.Group>
            <Form.Group controlId="form.Button">
              <Button className="btn-add" variant="primary">
                ADD
              </Button>
            </Form.Group>
          </Form>
        </Container>
        {add}
      </section>
      <hr />
      <section className="List-All">
        <div className="h1">Lista Todo´s</div>
        <div className="List">
          {todos ? <TodoList todos={todos} /> : <Error />}
        </div>
      </section>
    </div>
  );
}

export default App;
