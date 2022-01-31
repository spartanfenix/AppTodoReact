import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize">todo list</h3>
        <TodoItem></TodoItem>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="btn btn-danger btn-lg text-capitalize mt-5"
          >
            Limpiar lista
          </button>
        </div>
      </ul>
    );
  }
}
