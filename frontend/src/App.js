import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation></MainNavigation>
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>

          <Route path="/places/new" exact={true}>
            <NewPlace />
          </Route>

          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
