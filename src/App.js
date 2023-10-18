//@ts-check
import React from "react";
import AppUI from "./AppUI";
import { TodoProvider } from "./ToDoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
