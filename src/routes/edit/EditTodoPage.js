import { EditToDo } from "../../UI/EditToDo";
import { useLocation } from "react-router-dom";
import { useTodos } from "../../utils/useTodos";
import { getId } from "../../utils/genIDs";

function EditTodoPage() {
  const location = useLocation();

  const { stateS,stateUpdater } = useTodos();
  const { loading } = stateS;
  const { findToDo } = stateUpdater;

  const getToDo = () => {
    const id = getId();
    let out = findToDo(id);
    return out
  };

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <></>
  } else {
    const todo = getToDo();
    todoText = todo.text
  }

  return <EditToDo defaultTodoText={todoText} />;
}

export { EditTodoPage };
