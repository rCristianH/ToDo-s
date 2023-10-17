import React from "react";
import { TodoContext } from "../ToDoContext";


function TodoCounter() {
  const { completedCount, totalCount } = React.useContext(TodoContext);

  if (completedCount === totalCount) {
    return (
      <div>
        <h2>Congratulations you have complete all ToDos!</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>
          Haz completado {completedCount} de {totalCount}
        </h2>
      </div>
    );
  }
}
export { TodoCounter };
