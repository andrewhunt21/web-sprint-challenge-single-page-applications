import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Form(props) {

    const {
        values,
        submit,
        change,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <div>
            <h2>Build Your Own Pizza</h2>

            <form id="pizza-form" onSubmit={onSubmit}>

                <div>
                    <h3>Name for your order</h3>

                    <label>
                        <input 
                            type="text"
                            name="name"
                            placeholder="First and Last name"
                            id="name-input"
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div>
                    <h3>Choose your Size</h3>
                    <p>Required</p>

                    <label>
                        <select 
                            name="size" 
                            id="size-dropdown"
                            value={values.size}
                            onChange={onChange}
                            >
                            <option value="">-- select --</option>
                            <option value="ten">10 inch</option>
                            <option value="twelve">12 inch</option>
                            <option value="fourteen">14 inch</option>
                            <option value="sixteen">16 inch</option>
                        </select>
                    </label>
                </div>

                <div>
                    <h3>Add Toppings</h3>
                    <p>Choose some up to four toppings</p>

                    <label>Pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            value={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label>Canadian Bacon
                        <input 
                            type="checkbox"
                            name="bacon"
                            value={values.bacon}
                            onChange={onChange}
                        />
                    </label>

                    <label>Pineapple
                        <input 
                            type="checkbox"
                            name="pineapple"
                            value={values.pineapple}
                            onChange={onChange}
                        />
                    </label>

                    <label>Olives
                        <input 
                            type="checkbox"
                            name="olives"
                            value={values.olives}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div>
                    <h3>Special Instructions</h3>

                    <label>
                        <input 
                            type="text"
                            name="special"
                            placeholder="Anything else?"
                            id="special-text"
                            value={values.special}
                            onChange={onChange}
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