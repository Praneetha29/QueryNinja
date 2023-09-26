import React from 'react';

function OutputConsole() {

    const consoleOutput = [
        'Query executed successfully.',

    ];

    return (
        <div className="output-console">
            <h2>Output Console</h2>
            <ul>
                {consoleOutput.map((output, index) => (
                    <li key={index}>{output}</li>
                ))}
            </ul>
        </div>
    );
}

export default OutputConsole;
