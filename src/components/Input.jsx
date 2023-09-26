import React, { useState } from 'react';

function Input() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleExecuteClick = () => {

        console.log('Executing query:', inputValue);


        setInputValue('');
    };

    return (
        <div className="input">
            <h2>Input</h2>
            <textarea
                rows="5"
                placeholder="Enter your SQL query here..."
                value={inputValue}
                onChange={handleInputChange}
            ></textarea>
            <button onClick={handleExecuteClick}>Execute</button>
        </div>
    );
}

export default Input;
