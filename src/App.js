import "./App.css";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

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
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    //console.log(newItem);

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  clearList = () => {
    this.setState({ items: [] });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filteredItems });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };
  render() {
    return (
      <div className="App">
        <section className="Add-Todos">
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          ></TodoInput>
        </section>
        <section className="List-All">
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          ></TodoList>
        </section>
      </div>
    );
  }
}

export default App;
