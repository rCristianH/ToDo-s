import React from "react";
import { TodoContext } from "../ToDoContext";

function CreateTodoButton() {
  const { handleAddTodo, searchValue } = React.useContext(TodoContext);
  return (
    <button
      onClick={() => handleAddTodo(searchValue)}
      className="btn btn-primary"
    >
      Crear Todo
    </button>
  );
}
export { CreateTodoButton };
