import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import React from "react";

function AppUI(
  { completedCount, totalCount, searchValue, setSearchValue, filteredTodos, handleAddTodo, completedToDo, removeToDo }
) {
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

export default AppUI;
