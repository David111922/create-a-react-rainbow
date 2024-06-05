// src/ColorForm.js
import React, { useState } from 'react';

function ColorForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    //    !he line e.preventDefault(); in the handleSubmit function is used to prevent the default behavior of the form submission.Reloading of page basically.
        if (input.trim()) {
            // !addColor, the function we just built
            props.addColor(input);
            setInput('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a color"
                />
                <button type="submit">Submit!</button>
            </form>
        </div>
    );
}

export default ColorForm;



