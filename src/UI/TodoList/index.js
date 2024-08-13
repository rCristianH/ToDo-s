import { TodoItemNoFound } from "../TodoItem/TodoItemNoFound";

function TodoList(props) {
  return (
    <>
      {props.error && props.onError()}

      <ul className="todo-list">
        {props.loading && props.onLoading()}
        {!props.loading ? (
          props.filteredTodos.length > 0 ? (
            props.filteredTodos.map(props.render)
          ) : (
            <TodoItemNoFound />
          )
        ) : null}
      </ul>
    </>
  );
}
export { TodoList };
