import { useHistory } from "react-router-dom";

function TodoSearch({ searchValue, setSearchValue, paramSearch }) {
  const history = useHistory();
  if(paramSearch){
    setSearchValue(paramSearch);
  }
  const handleSearchChange = (event) => {
    let value = event.target.value
    if (event.target.value.length >= 1) {
      setSearchValue(event.target.value);
      history.push(`/search/${event.target.value}`);
    } else {
      setSearchValue("");
      history.push("/");
    }
  };
  return (
    <input
      value={searchValue}
      onChange={handleSearchChange}
      /* onChange={(e) => {
        if (e.target.value.length >= 1) {
          history.push(`/search/${e.target.value}`);
        } else {
          history.push("/");
        }
        setSearchValue(e.target.value);
      }} */
      className="
    todo-search"
      type="text"
      placeholder="Cortar cebolla"
    />
  );
}

export { TodoSearch };
