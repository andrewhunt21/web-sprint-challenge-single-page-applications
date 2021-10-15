import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from './components/Home';
import Form from "./components/Form";

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  bacon: false,
  pineapple: false,
  olives: false,
  special: "",
}

const initialFormErrors = {
  name: "",
  size: "",
  special: "",
}

const App = () => {

  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
      .then(res => {
        setOrders(res.data);
      }).catch(err => {
        console.error(err);
      })
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data], );
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  console.log(orders);

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'bacon', 'pineapple', 'olives'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim(),
    }
    console.log(newOrder);
    postNewOrder(newOrder);
  }

  return (
    <div>

      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link id="order-pizza" to="/">Home</Link>
          <Link id="pizza-form" to="/pizza">Pizza</Link>
        </div>
      </nav>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/pizza">
          <Form 
            id="pizza-form"
            values={formValues}
            submit={formSubmit}
            change={null}
            errors={formErrors}
          />
        </Route>

      </Switch>

    </div>
  );
};
export default App;
