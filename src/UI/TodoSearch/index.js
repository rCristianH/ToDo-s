import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
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
