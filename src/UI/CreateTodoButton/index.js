import React from "react";

function CreateTodoButton({ handleAddTodo, searchValue, setOpenModal }) {
  const handleClick = () => {
    if (searchValue.trim() === "") {
      setOpenModal((state) => !state);
    } else {
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
