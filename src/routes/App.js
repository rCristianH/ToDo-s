import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";
import { EditTodoPage } from "./edit/EditTodoPage";
import { NotFound } from "./notFound/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
export { App };
