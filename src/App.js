//@ts-check
import React, { useState } from "react";

import { useLocalStorage } from "./hooks/useLocalStorage";
import AppUI from "./AppUI";

function App() {

  const removeAccents = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .normalize("NFC")
      .toLowerCase();
  };

  const [toDo, saveTodos] = useLocalStorage("Data_ToDo_V1", []);
  console.log(toDo)
  const [searchValue, setSearchValue] = useState("");

  const completedToDo = (text) => {
    const newTodo = [...toDo];
    const toDoIndex = newTodo.findIndex((todo) => todo.text === text);
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
  const removeToDo = (text) => {
    const newTodo = [...toDo];
    const toDoIndex = newTodo.findIndex((todo) => todo.text === text);
    if (newTodo.length === 1) {
      newTodo.push({ text: "Crea un ToDo", completed: false });
    }
    newTodo.splice(toDoIndex, 1);
    saveTodos(newTodo);
  };

  const filteredTodos = toDo.filter((todo) =>
    removeAccents(todo.text).includes(removeAccents(searchValue))
  );

  const handleAddTodo = (text) => {
    saveTodos([...toDo, { text, completed: false }]);
  };

  const completedCount = toDo.filter((todo) => todo.completed).length;
  const totalCount = toDo.length;
  console.log(completedCount, totalCount);

return(
  <AppUI
    completedCount={completedCount}
    totalCount={totalCount}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    filteredTodos={filteredTodos}
    handleAddTodo={handleAddTodo}
    completedToDo={completedToDo}
    removeToDo={removeToDo}
  />
)}


export default App;
