import { HashRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";
import { EditTodoPage } from "./edit/EditTodoPage";
import { NotFound } from "./notFound/NotFound";
import { TodoSearch } from "../UI/TodoSearch";
import { TodoHeader } from "../UI/TodoHeader";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          {" "}
          <HomePage />{" "}
        </Route>
        <Route exact path="/search/:id">
          {" "}
          <HomePage />{" "}
        </Route>
        <Route exact path="/new">
          {" "}
          <NewTodoPage />{" "}
        </Route>
        <Route exact path="/edit/:id">
          {" "}
          <EditTodoPage />{" "}
        </Route>
        <Route exact path="*">
          {" "}
          <NotFound />{" "}
        </Route>
      </Switch>
    </HashRouter>
  );
}
export { App };
