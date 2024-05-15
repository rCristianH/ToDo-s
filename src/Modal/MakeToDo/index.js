import React, { useState } from "react";
import "./MakeToDo.css";
import { useContext } from "react";
import { MdOutlineCancel, MdSave} from "react-icons/md";

function MakeToDo({handleAddTodo, setOpenModal }) {

  const [nameNewTodo, setNameNewTodo] = useState("");

  const onSubmit = () => {
    handleAddTodo(nameNewTodo)
    setOpenModal(false)
  }
  const onCancel = () => {
    console.log("first")
    setOpenModal(false)
  }
  const onChange = (event) => {
    setNameNewTodo(event.target.value)
  }

  return (
    <div className="container-makeTodo">
      <input
        className="todo-search todo-text-name"
        type="text"
        placeholder="Ingresa el nombre del ToDo"
        value={nameNewTodo}
        onChange={onChange}
      />
      <button className="btn btn-primary btn-MakeToDo" onClick={onSubmit}><MdSave/></button>
      <button className="btn btn-primary btn-cancelTodo" onClick={onCancel}><MdOutlineCancel/></button>
    </div>
  );
}

export { MakeToDo };
