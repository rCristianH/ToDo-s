import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";

function TodoHeader({
  loading,
  error,
  completedCount,
  totalCount,
  searchValue,
  setSearchValue,
}) {
  return (
    <header className="App-header">
      {loading && <h1 className="App-title">Estamos buscando tus ToDo`s</h1>}
      {error && (
        <h1>
          Something went wrong...
          {error}
        </h1>
      )}
      {!loading && (
        <TodoCounter completedCount={completedCount} totalCount={totalCount} />
      )}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  );
}
export { TodoHeader };
