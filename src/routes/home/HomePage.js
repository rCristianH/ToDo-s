//@ts-check
import React from "react";
import "./App.css";
import { TodoList } from "../../UI/TodoList";
import { TodoItem } from "../../UI/TodoItem";
import { CreateTodoButton } from "../../UI/CreateTodoButton";
import { TodoItemLoading } from "../../UI/TodoItem/TodoItemLoading";
import { useTodos } from "../../utils/useTodos";
import { TodoMsgError } from "../../UI/TodoItem/TodoMsgError";
import { TodoHeader } from "../../UI/TodoHeader";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const { stateS, stateUpdater } = useTodos();
  const {
    loading,
    error,
    completedCount,
    totalCount,
    filteredTodos,
    searchValue,
  } = stateS;
  const {
    setSearchValue,
    handleAddTodo,
    completedToDo,
    removeToDo,
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
              onEdit={() => {
                navigate(`/edit/${todo.id}`);
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
          onClick={() => {
            navigate("/new");
          }}
          handleAddTodo={handleAddTodo}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </footer>
      {/* {openModal && (
        <Modal>
          <MakeToDo handleAddTodo={handleAddTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <ChangeAlert sync={syncTodos} /> */}
    </div>
  );
}

export { HomePage };
