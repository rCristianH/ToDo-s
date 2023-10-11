import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
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
  } = useLocalStorage("Data_ToDo_V1", []);

  const [searchValue, setSearchValue] = useState("");

  const completedToDo = (text) => {
    const newTodo = [...toDo];
    const toDoIndex = newTodo.findIndex((todo) => todo.text === text);
    newTodo[toDoIndex].completed = true;
    saveTodos(newTodo);
    sortToDo();
    console.log("complete");
  };
  const sortToDo = () => {
    console.log("ordenar");
    const newTodo = [...toDo];
    newTodo.sort((a, b) => {
      if (a.completed && b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
    saveTodos(newTodo);
  };
  const removeToDo = (text) => {
    console.log("remover");
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
    console.log("add");
    if (text[0] !== text[0].toUpperCase()) {
      text = text[0].toUpperCase() + text.slice(1);
    }

    saveTodos([...toDo, { text, completed: false }]);
  };

  const completedCount = toDo.filter((todo) => todo.completed).length;
  const totalCount = toDo.length;
  return (
    <TodoContext.Provider
      value={{
        completedCount,
        totalCount,
        searchValue,
        setSearchValue,
        filteredTodos,
        handleAddTodo,
        completedToDo,
        removeToDo,
        loading,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
