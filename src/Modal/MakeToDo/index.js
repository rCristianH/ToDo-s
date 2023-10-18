import React from "react";
import "./MakeToDo.css";

function MakeToDo() {
  return (
    <div className="container-makeTodo">
      <input
        className="todo-search todo-text-name"
        type="text"
        placeholder="Ingresa el nombre del ToDo"
      />
      <button className="btn btn-primary btn-MakeToDo">Crear ToDo</button>
    </div>
  );
}

export { MakeToDo };
