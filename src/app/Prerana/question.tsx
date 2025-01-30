"use client";
import Input from "@/components/home/inputField";
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
    const [count, setCount] = useState(0)

    const handleIncrease = () => setCount((prev) => prev + 1);


    const handleDecrease = () => {
        setCount((prev) => 
            prev -1 );
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

export function FormHandling() {
    const [formData, setFormData] = useState({email:'', password : ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         const {name , value } = e.target;
         setFormData((prevData) => ({
            ...prevData,
            [name] : value,
         }));
    };
    return (
        <div>
            <form >
                <div>
                <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>
                <div>
                    <Input  
                        label = "Enter Password"
                        name = "password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}    
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    )
}