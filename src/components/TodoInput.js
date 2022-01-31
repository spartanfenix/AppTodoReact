import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange } = this.props;
    return (
      <div className="card card-body my-3">
        <form>
          <h1>Tarea</h1>
          <div className="input-group">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="ingrese nombre de la tarea"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-4">
            Agregar
          </button>
        </form>
      </div>
    );
  }
}
