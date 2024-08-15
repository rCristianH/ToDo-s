import React, { useState } from "react";
import "./MakeToDo.css";
import { MdOutlineCancel, MdSave } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../utils/useTodos";

function MakeToDo() {
  const { stateS, stateUpdater } = useTodos();
  const { handleAddTodo } = stateUpdater;
  const [nameNewTodo, setNameNewTodo] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    if (nameNewTodo.trim() === "") {
      alert("make a msg error, to msg null ");
    } else {
      handleAddTodo(nameNewTodo);
      onCancel();
    }
  };
  const onCancel = () => {
    navigate("/");
  };
  const onChange = (event) => {
    setNameNewTodo(event.target.value);
  };

  return (
    <div className="container-makeTodo">
      <input
        className="todo-search todo-text-name"
        type="text"
        placeholder="Ingresa el nombre del ToDo"
        value={nameNewTodo}
        onChange={onChange}
      />
      <button className="btn btn-primary btn-MakeToDo" onClick={onSubmit}>
        <MdSave />
      </button>
      <button className="btn btn-primary btn-cancelTodo" onClick={onCancel}>
        <MdOutlineCancel />
      </button>
    </div>
  );
}

export { MakeToDo };
