import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import React from "react";
import TodoItemLoading from "./TodoItem/TodoItemLoading";

function AppUI({
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
}) {
  return (
    <div className="App">
      <header className="App-header">
        {loading && <h1 className="App-title">Estamos buscando tus ToDo`s</h1>}
        {error && (
          <h1>
            Something went wrong...
            {error}
          </h1>
        )}
        {!loading && (
          <TodoCounter completed={completedCount} total={totalCount} />
        )}
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>

      <main className="App-main">
        <TodoList>
          {loading && <p>Wait a moment...</p>}
          {loading && (
            <>
              <TodoItemLoading />
              <TodoItemLoading />
              <TodoItemLoading />
              <TodoItemLoading />
            </>
          )}
          {error && <p>Something went wrong...</p>}
          {!loading &&
            filteredTodos.map((todo) => (
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
