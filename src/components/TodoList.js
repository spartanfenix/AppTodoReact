import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize">todo list</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            ></TodoItem>
          );
        })}
        <hr></hr>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="btn btn-danger btn-lg text-capitalize mt-5"
            onClick={clearList}
          >
            Limpiar lista
          </button>
        </div>
      </ul>
    );
  }
}
