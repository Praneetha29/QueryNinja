import React from 'react';
import '../styles/Queries.css';

function PreExistingQueries() {

    const queries = [
        'SELECT * FROM Customers;',
        'SELECT order_id, item FROM Orders;',
        'SELECT * FROM Customers;',
        'SELECT order_id, item FROM Orders;',

    ];

    return (
        <div className="pre-existing-queries">
            <h3>Sample Queries</h3>
            <ul>
                {queries.map((query, index) => (
                    <li key={index}>{query}</li>
                ))}
            </ul>
        </div>
    );
}

export default PreExistingQueries;
