//@ts-check
import React, { useState } from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  //haz una funcion que quite los acentos

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

  return (
    <div className="App">
      <header className="App-header">
        <TodoCounter completed={completedCount} total={totalCount} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>

      <main className="App-main">
        <TodoList>
          {filteredTodos.map((todo) => (
            <TodoItem
              onComplete={() => {
                completedToDo(todo.text);
              }}
              onRemove={() => {
                removeToDo(todo.text);
              }}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
      </main>
      <footer className="App-footer">
        <CreateTodoButton onAdd={() => handleAddTodo(searchValue)} />
      </footer>
    </div>
  );
}

export default App;
