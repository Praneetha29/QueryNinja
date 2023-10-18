import React, { useState } from 'react';
import '../styles/TableDropdown.css';

function TableDropdown() {
  const [showTables, setShowTables] = useState(false);

  const tables = [
    {
      name: 'Customers',
      fields: [
        'customer_id[int]',
        'first_name[varchar(100)]',
        'last_name[varchar(100)]',
        'age[int]',
        'country[varchar(100)]',
      ],
    },
    {
      name: 'Orders',
      fields: [
        'order_id[integer]',
        'item[varchar(100)]',
        'amount[integer]',
        'customer_id[integer]',
      ],
    },
    {
      name: 'Shippings',
      fields: [
        'shipping_id[integer]',
        'status[integer]',
        'customer[integer]',
      ],
    },
  ];

  const toggleMenu = () => {
    setShowTables(!showTables);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary"
        type="button"
        id="tableDropdown"
        onClick={toggleMenu}
        aria-expanded={showTables} 
        aria-haspopup="true"
        tabIndex="0"
      >
        View Tables
      </button>
      <div
        className={`dropdown-menu ${showTables ? 'show' : ''}`}
        aria-labelledby="tableDropdown"
      >
        {tables.map((table, index) => (
          <div key={index}>
            <span>{table.name} [-]</span>
            <ul>
              {table.fields.map((field, fieldIndex) => (
                <li key={fieldIndex}>{field}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableDropdown;
