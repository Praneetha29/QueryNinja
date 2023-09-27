import React from 'react';
import '../styles/Queries.css';

function PredefinedQueries({ handleQueryClick, selectedQuery }) {
  const predefinedQueries = [
    'SELECT * FROM Customers;',
    'SELECT order_id, item FROM Orders;',
    'SELECT * FROM Orders;',
    'SELECT * FROM Shippings;',
    'SELECT shipping_id,status FROM Shippings;',
    'SELECT order_id FROM Orders;',
  ];

  return (
    <div className="predefined-queries">
      <h3>Predefined Queries</h3>
      <ul>
        {predefinedQueries.map((query, index) => (
          <li
            key={index}
            onClick={() => handleQueryClick(query)}
            className={selectedQuery === query ? 'selected' : ''}
          >
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PredefinedQueries;
