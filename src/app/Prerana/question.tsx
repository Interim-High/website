"use client";
//Question: Create a functional React component in TypeScript that accepts a name prop (string) and an age prop (number). 
// The component should display a greeting message like "Hello, [name]! You are [age] years old."
//Requirements: Use TypeScript for type-checking the props.

import React, { useState } from "react";

interface Props {
    name: string;
    age: number;
}

const Question: React.FC<Props> = ({ name, age }) => {
    return <h2>Hello, {name}! You are {age} years old.</h2>;
};

export default Question;


// Question: Create a component that maintains a state for a counter (number). 
// Implement buttons to increment and decrement the counter. Ensure the state is typed as a number.
// Requirements: Use TypeScript's useState hook.

export function Present() {
    const [count, setCount] = React.useState<number>(0)

    const handleIncrease = () => setCount((prev) => prev + 1);


    const handleDecrease = () => {
        let num = count - 1;
        setCount(num);
    }
    // console.log(count);
    return (
        <div>
            <button className="rounded-md bg-blue-400 p-2 text-white"
                onClick={handleIncrease}>
                Increase
            </button>

            <button className="rounded-md bg-red-400 p-2 text-white"
                onClick={handleDecrease}>
                Decrease
            </button>
        </div>
    )
}


//Question: Write a TypeScript React component that handles a form submission.
//The form should have two fields: email (string) and password (string).
// Upon submission, display the entered values below the form.
//Requirements: Add event handling for form submission and input changes.

export function FormHandeling() {
    const [formData, setformData] = useState({email: "", password: "" });

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        console.log("Input value:", value);
        
        setformData((prev) => ({
          ...prev,
          [name]: value, 
        }));
      };

    return (
        <div>
            <form >
                <div>
                    <label>Email:</label>
                    <input className="w-full p-2 border rounded-lg"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input  className="w-full p-2 border rounded-lg"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}     
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    )
}