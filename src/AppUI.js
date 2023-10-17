import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import React from "react";
import TodoItemLoading from "./TodoItem/TodoItemLoading";
import { TodoContext } from "./ToDoContext";
import { TodoItemNoFound } from "./TodoItem/TodoItemNoFound";
import { Modal } from "./Modal";

function AppUI() {
  const {
    openModal,
    setOpenModal,
    loading,
    error,
    completedCount,
    totalCount,
    searchValue,
    setSearchValue,
    filteredTodos,
    completedToDo,
    removeToDo,
  } = React.useContext(TodoContext);
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
        {!loading && <TodoCounter />}
        <TodoSearch />
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
          {!loading ? (
            filteredTodos.length > 0 ? (
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
              ))
            ) : (
              <TodoItemNoFound />
            )
          ) : null}
        </TodoList>
      </main>
      <footer className="App-footer">
        <CreateTodoButton />
      </footer>
      {!openModal && <Modal>La funcionalidad de agregar TODO</Modal>}
    </div>
  );
}

export default AppUI;
