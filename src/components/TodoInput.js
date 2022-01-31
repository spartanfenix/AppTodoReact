import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <h1>Tarea</h1>
          <div className="input-group">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="ingrese nombre de la tarea"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-lg btn-warning mt-3"
                : "btn btn-lg btn-success mt-3"
            }
          >
            {editItem ? "Editar tarea" : "Agregar tarea"}
          </button>
        </form>
      </div>
    );
  }
}
