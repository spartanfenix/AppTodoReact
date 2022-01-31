import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>tarea</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <button class="btn btn-outline-warning">Editar</button>
          </span>
          <span className="mx-2 text-success">
            <button class="btn btn-outline-danger">Eliminar</button>
          </span>
        </div>
      </li>
    );
  }
}

// const TodoList = ({ todos }) => {
//   return (
//     <ul className="list-group">
//       {todos.map((todo) => (
//         <li class="list-group-item d-flex justify-content-between align-items-start">
//           <input type="checkbox" checked={todo.completed} />
//           {todo.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;
