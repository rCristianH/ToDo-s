import React from "react";
import { TodoContext } from "../ToDoContext";

function CreateTodoButton() {
  const { handleAddTodo, searchValue, setOpenModal } = React.useContext(TodoContext);

  const handleClick = () => {
    if (searchValue.trim() === "") {
      alert("Error: El campo de búsqueda está vacío.");
    } else {
      setOpenModal(state => !state)
      handleAddTodo(searchValue);
    }
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Crear Todo
    </button>
  );
}
export { CreateTodoButton };
