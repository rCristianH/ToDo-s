import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getTime } from "../utils/genIDs";

function useTodos() {
  const removeAccents = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .normalize("NFC")
      .toLowerCase();
  };

  const {
    item: toDo,
    saveItem: saveTodos,
    loading,
    error,
    synct: syncTodos,
  } = useLocalStorage("Data_ToDo_V2", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedToDo = (id) => {
    const newTodo = [...toDo];
    const toDoIndex = newTodo.findIndex((todo) => todo.id === id);
    newTodo[toDoIndex].completed = true;
    saveTodos(newTodo);
    sortToDo();
  };
  const sortToDo = () => {
    const newTodo = [...toDo];
    newTodo.sort((a, b) => {
      if (a.completed && b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
    saveTodos(newTodo);
  };
  const removeToDo = (id) => {
    const newTodo = [...toDo];
    const toDoIndex = newTodo.findIndex((todo) => todo.id === id);
    if (newTodo.length === 1) {
      newTodo.push({ text: "Crea un ToDo", completed: false });
    }
    newTodo.splice(toDoIndex, 1);
    saveTodos(newTodo);
  };

  const editToDo = (id, newName) => {
    const updateToDO = newName;
    const todoList = [...toDo];
    const toDoIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[toDoIndex].text = updateToDO;
    saveTodos(todoList);
  };

  const filteredTodos = toDo.filter((todo) =>
    removeAccents(todo.text).includes(removeAccents(searchValue))
  );

  const findToDo = (id) => {
    const todoList = [...toDo];
    const toDoIndex = todoList.findIndex((todo) => todo.id === id);
    return todoList[toDoIndex];
  };

  const handleAddTodo = (text) => {
    if (text[0] !== text[0].toUpperCase()) {
      text = text[0].toUpperCase() + text.slice(1);
    }

    saveTodos([...toDo, { text, completed: false, id: getTime() }]);
  };

  const completedCount = toDo.filter((todo) => todo.completed).length;
  const totalCount = toDo.length;
  const stateS = {
    loading,
    error,
    completedCount,
    totalCount,
    filteredTodos,
    openModal,
    searchValue,
  };
  const stateUpdater = {
    setSearchValue,
    handleAddTodo,
    completedToDo,
    removeToDo,
    setOpenModal,
    editToDo,
    findToDo,
    syncTodos,
  };
  return { stateS, stateUpdater };
}

export { useTodos };
