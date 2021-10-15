import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Form() {

    return (
        <div>
            <h3>Build Your Own Pizza</h3>

            <form id="pizza-form">

                <div>
                    <h4>Choose your Size</h4>
                    <p>Required</p>

                    <label>
                        <select name="size" id="size-dropdown">
                            <option value="">-- select --</option>
                            <option value="ten">10 inch</option>
                            <option value="twelve">12 inch</option>
                            <option value="fourteen">14 inch</option>
                            <option value="sixteen">16 inch</option>
                        </select>
                    </label>
                </div>

                <div>
                    <h4>Add Toppings</h4>
                    <p>Choose some!</p>

                    <label>Pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                        />
                    </label>

                    <label>Canadian Bacon
                        <input 
                            type="checkbox"
                            name="bacon"
                        />
                    </label>

                    <label>Pineapple
                        <input 
                            type="checkbox"
                            name="pineapple"
                        />
                    </label>

                    <label>Olives
                        <input 
                            type="checkbox"
                            name="olives"
                        />
                    </label>
                </div>

                <div>
                    <h4>Special Instructions</h4>

                    <label>
                        <input 
                            type="text"
                            name="instructions"
                            placeholder="Anything else?"
                            id="special-text"
                        />
                    </label>
                </div>

                <div>
                    <button id="order-button">Add to Order</button>
                </div>
            </form>

        </div>
    )
}