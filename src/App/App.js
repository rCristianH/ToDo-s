//@ts-check
import React from "react";
import "./App.css";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItemLoading } from "../TodoItem/TodoItemLoading";
import { useTodos } from "./useTodos";
import { Modal } from "../Modal";
import { MakeToDo } from "../Modal/MakeToDo";
import { TodoMsgError } from "../TodoItem/TodoMsgError";
import { TodoHeader } from "../TodoHeader";
import { ChangeAlert } from "../ChangeAlert";

function App() {
  const { stateS, stateUpdater } = useTodos();

  const {
    loading,
    error,
    completedCount,
    totalCount,
    filteredTodos,
    openModal,
    searchValue,
  } = stateS;
  const {
    setSearchValue,
    handleAddTodo,
    completedToDo,
    removeToDo,
    setOpenModal,
    syncTodos,
  } = stateUpdater;
  return (
    <div className="App">
      <TodoHeader
        loading={loading}
        error={error}
        completedCount={completedCount}
        totalCount={totalCount}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <main className="App-main">
        <TodoList
          loading={loading}
          error={error}
          filteredTodos={filteredTodos}
          onLoading={() => (
            <>
              <p>Wait a moment...</p>
              <TodoItemLoading />
              <TodoItemLoading />
              <TodoItemLoading />
              <TodoItemLoading />
            </>
          )}
          onError={() => <TodoMsgError />}
          render={(todo) => (
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
          )}
        />
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
      <ChangeAlert sync={syncTodos} />
    </div>
  );
}

export default App;
