import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Form from "./components/Form";

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

        <Route exact path="/">
          <Home id="order-pizza"/>
        </Route>

        <Route path="/pizza">
          <Form id="pizza-form"/>
        </Route>

      </Switch>

    </div>
  );
};
export default App;
