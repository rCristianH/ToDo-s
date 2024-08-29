import { useState } from "react";
import "../MakeToDo/MakeToDo.css";
import { MdOutlineCancel, MdSave } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../utils/useTodos"
import { getId } from "../../utils/genIDs";


const EditToDo = ({ defaultTodoText }) => {
  const { stateUpdater } = useTodos();
  const { editToDo } = stateUpdater;

  const [nameNewTodo, setNameNewTodo] = useState(defaultTodoText);

  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };
  const onChange = (event) => {
    setNameNewTodo(event.target.value);
  };
  const onSubmit = () => {
    if (nameNewTodo.trim() === "") {
      alert("make a msg error, to msg null ");
      onCancel();
    } else {
      editToDo(getId(), nameNewTodo);
      onCancel();
    }
  };

  return (
    <div className="container-makeTodo">
      <input
        className="todo-search todo-text-name"
        type="text"
        placeholder="Ingresa el nuevo nombre del ToDo"
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
};
export { EditToDo };
