function CreateTodoButton({onAdd}) {
  return (
    <button
      onClick={onAdd}
      className="btn btn-primary"
    >
      Crear Todo
    </button>
  );
}
export { CreateTodoButton };
