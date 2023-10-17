import React from "react";

function TodoItemNoFound() {
  return (
    <li className="todo-item todo-item-no-found">
      <span className="todo-item-text todo-item-text-loading">
        No found, touch make ToDo
      </span>
    </li>
  );
}

export { TodoItemNoFound };
