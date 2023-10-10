import "./TodoItemLoading.css";
import React from "react";

function TodoItemLoading() {
  return (
    <li className="todo-item todo-item-loading">
      <span className="todo-item-checkbox todo-item-checkbox-loading"></span>
      <span className="todo-item-text todo-item-text-loading">Loading...</span>

      <span className="todo-item-remove todo-item-remove-loading"></span>
    </li>
  );
}

export default TodoItemLoading;
