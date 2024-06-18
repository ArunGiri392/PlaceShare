import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Switch>
      
      <Route path="/" exact={true}>
      <Users/>
      </Route>

      <Route path="/places/new" exact={true}>
      <NewPlace/>
      </Route>

      <Redirect to="/"></Redirect>
      </Switch>
     
    </Router>
  );
}

export default App;
