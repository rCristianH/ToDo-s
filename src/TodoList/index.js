import { TodoItemNoFound } from "../TodoItem/TodoItemNoFound";

function TodoList(props) {
  return (
    <>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.filteredTodos.length && props.onNotFound()}
      
      <ul className="todo-list">{props.filteredTodos.length > 0 && props.filteredTodos.map(props.render)}</ul>
    </>
  );
}
export { TodoList };
