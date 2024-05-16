//@ts-check
import React from "react";
import "./App.css";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";
import TodoItemLoading from "../TodoItem/TodoItemLoading";
import { useTodos } from "./useTodos";
import { Modal } from "../Modal";
import { MakeToDo } from "../Modal/MakeToDo";
import TodoMsgError from "../TodoItem/TodoMsgError";
import { TodoItemNoFound } from "../TodoItem/TodoItemNoFound";

function App() {
  const {
    openModal,
    loading,
    error,
    filteredTodos,
    completedToDo,
    removeToDo,
    completedCount,
    totalCount,
    searchValue,
    setSearchValue,
    setOpenModal,
    handleAddTodo,
  } = useTodos();

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
          <TodoCounter
            completedCount={completedCount}
            totalCount={totalCount}
          />
        )}
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>

      <main className="App-main">
        <TodoList 
          loading={loading}
          error={error}
          filteredTodos={filteredTodos}
          onLoading=
          {() => (
            <>
              <p>Wait a moment...</p>
              <TodoItemLoading />
              <TodoItemLoading />
              <TodoItemLoading />
              <TodoItemLoading />
            </>
          )}
          onError={() => <TodoMsgError />}
          onNotFound=
          {() => {
            <TodoItemNoFound />;
          }}
          render=
          {(todo) => (
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
          )}/>
      </main>
      <footer className="App-footer">
        <CreateTodoButton
          handleAddTodo={handleAddTodo}
          searchValue={searchValue}
          setOpenModal={setOpenModal}
        />
      </footer>
      {openModal && (
        <Modal>
          <MakeToDo handleAddTodo={handleAddTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
