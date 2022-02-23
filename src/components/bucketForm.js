import React, { useState } from 'react';

export default function BucketForm(props) {
    // Create state for text input field and function to set state
    const [input, setInput] = useState('');
    // Create eagerness state and function to set state
    let [eagerness, setEagerness] = useState('');

    // Create an eagerness level array
    const eagernessLevel = ['high', 'medium', 'low'];

    const handleSubmit = (event) => {
        event.preventDefault();

        // Invokes addButton function that has been passed through to bucketForm components
        // Sets in an object id, text, and level of eagerness into bucket array
        props.onSubmit({
            id: Math.random(Math.floor() * 1000),
            text: input,
            eagerness: eagerness
        });

        // Resets input state and eagerness state
        setInput('');
        setEagerness('');
    };

    const handleChange = (event) => {
        // When the text input is changed the input is set to whatever was changed
        setInput(event.target.value);
    };

    return (
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder="Your bucket here..."
                    value={input}
                    className=""
                    onChange={handleChange}
                />
                <button>Add bucket!</button>
            </form>
        </div>
    )
}