//@ts-check
import React, { useState } from "react";
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
