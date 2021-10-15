import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();

    const routeToPizza = () => {
        history.push("/pizza");
    }

    return (
        <div>
            <h3>Your favorite food, delivered while coding</h3>

            <button id="order-pizza" onClick={routeToPizza}>Order Pizza</button>

        </div>
    )
}