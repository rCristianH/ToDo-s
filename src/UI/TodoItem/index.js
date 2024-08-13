//@ts-check
import React from "react";
import { MdDoneAll, MdDeleteOutline, MdEdit} from "react-icons/md";

function TodoItem({ text, completed, onComplete, onRemove, onEdit}) {
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
      todo-item-edit"
        onClick={onEdit}
      >
        <MdEdit />
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
