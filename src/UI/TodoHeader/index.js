import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { useLocation, useNavigate } from "react-router-dom";


function TodoHeader({
  loading,
  error,
  completedCount,
  totalCount,
  searchValue,
  setSearchValue,
}) {
  const location = useLocation();
  const pathname = location.pathname;
  const searchTerm = pathname.substring("/search/".length);

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
      <TodoSearch paramSearch={searchTerm} searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  );
}
export { TodoHeader };
