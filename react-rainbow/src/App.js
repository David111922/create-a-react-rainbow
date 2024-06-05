// src/App.js
import React, { useState } from 'react';
import './App.css';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
    const [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ]);

    const addColor = (color) => {
        setColors([...colors, color]);
    };

    const colorMap = colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
    ));

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    );
}

export default App;
