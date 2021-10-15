import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from './components/Home';

const App = () => {
  return (
    <div>

      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
