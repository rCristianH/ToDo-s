import React from "react";
import { useContext } from "react";
import { TodoContext } from "../ToDoContext";


function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext)
  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="
    todo-search"
      type="text"
      placeholder="Cortar cebolla"
    />
  );
}

export { TodoSearch };
