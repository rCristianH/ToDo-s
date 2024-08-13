//@ts-check
import React from "react";
import "./App.css";
import { TodoList } from "../../UI/TodoList";
import { TodoItem } from "../../UI/TodoItem";
import { CreateTodoButton } from "../../UI/CreateTodoButton";
import { TodoItemLoading } from "../../UI/TodoItem/TodoItemLoading";
import { useTodos } from "../../utils/useTodos";
import { Modal } from "../../UI/Modal";
import { MakeToDo } from "../../UI/Modal/MakeToDo";
import { TodoMsgError } from "../../UI/TodoItem/TodoMsgError";
import { TodoHeader } from "../../UI/TodoHeader";
import { ChangeAlert } from "../../UI/ChangeAlert";

function HomePage() {
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
    editToDo,
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
                completedToDo(todo.id);
              }}
              onRemove={() => {
                removeToDo(todo.id);
              }}
              onEdit={()=>{
                editToDo(todo.id)
              }}
              key={todo.id}
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

export default HomePage;
