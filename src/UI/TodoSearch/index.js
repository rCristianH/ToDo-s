import { useNavigate } from "react-router-dom";

function TodoSearch({ searchValue, setSearchValue, paramSearch }) {
  const navigate = useNavigate();
  if(paramSearch){
    setSearchValue(paramSearch);
  }
  const handleSearchChange = (event) => {
    let value = event.target.value
    if (event.target.value.length >= 1) {
      setSearchValue(event.target.value);
      navigate(`/search/${event.target.value}`);
    } else {
      setSearchValue("");
      navigate("/");
    }
  };
  return (
    <input
      value={searchValue}
      onChange={handleSearchChange}
      /* onChange={(e) => {
        if (e.target.value.length >= 1) {
          navigate(`/search/${e.target.value}`);
        } else {
          navigate("/");
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
