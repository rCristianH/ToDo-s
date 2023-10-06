//@ts-check
import React from "react";
import { MdDoneAll, MdDeleteOutline } from "react-icons/md";

function TodoItem({ text, completed, onComplete, onRemove }) {
  return (
    <li className="todo-item">
      <span onClick={onComplete} className="todo-item-checkbox">
        <MdDoneAll />
      </span>
      <span
        className={`todo-item-text ${completed && "todo-item-text-complete"}`}
      >
        {text}
      </span>

      <span
        className="
      todo-item-remove"
        onClick={onRemove}
      >
        <MdDeleteOutline />
      </span>
    </li>
  );
}
export { TodoItem };
