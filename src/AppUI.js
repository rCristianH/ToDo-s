import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import React from "react";
import TodoItemLoading from "./TodoItem/TodoItemLoading";
import { TodoContext } from "./ToDoContext";


function AppUI() {
  return (
    <div className="App">
      <TodoContext.Consumer>
        {({ loading, error, completedCount, totalCount, searchValue, setSearchValue}) => (
          <header className="App-header">
            {loading && (
              <h1 className="App-title">Estamos buscando tus ToDo`s</h1>
            )}
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
        )}
      </TodoContext.Consumer>

      <main className="App-main">
        <TodoContext.Consumer>
          {({ filteredTodos, completedToDo, removeToDo, loading, error }) => (
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
          )}
        </TodoContext.Consumer>
      </main>
      <footer className="App-footer">
        <TodoContext.Consumer>
          {({ handleAddTodo, searchValue }) => (
            <CreateTodoButton onAdd={() => handleAddTodo(searchValue)} />
          )}
        </TodoContext.Consumer>
      </footer>
    </div>
  );
}

export default AppUI;
