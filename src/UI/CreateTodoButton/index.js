import React from "react";

function CreateTodoButton({
  handleAddTodo,
  searchValue,
  onClick,
  setSearchValue,
}) {
  const handleClick = () => {
    // Verificamos si el valor de búsqueda está vacío después de eliminar los espacios en blanco
    if (searchValue.trim() === "") {
      // Si está vacío, invertimos el estado del modal (lo abrimos o cerramos)
      onClick()
    } else {
      // Si hay un valor, llamamos a la función handleAddTodo para agregar la tarea
      handleAddTodo(searchValue);
      setSearchValue("");
    }
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Crear Todo
    </button>
  );
}
export { CreateTodoButton };
