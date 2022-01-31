import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
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
          <button type="submit" className="btn btn-lg btn-primary mt-4">
            Agregar
          </button>
        </form>
      </div>
    );
  }
}
