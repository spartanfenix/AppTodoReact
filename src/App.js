import "./App.css";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class App extends Component {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
  //     .then((result) => {
  //       //console.log(result.data);
  //       setTodos(result.data);
  //     });
  // }, []);

  // const add = () => {
  //   setTodos();
  // };

  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({ items: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <section className="Add-Todos">
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
          ></TodoInput>
        </section>
        <section className="List-All">
          <TodoList></TodoList>
        </section>
      </div>
    );
  }
}

export default App;
