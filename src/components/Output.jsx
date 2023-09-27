import React, { useState, useEffect, useRef } from 'react';
import '../styles/Output.css';

function OutputConsole({ data }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [placeholder, setPlaceholder] = useState('Run a query to see output');
  const containerRef = useRef(null);

  useEffect(() => {
   

    if (data.length > 0) {
      setPlaceholder('');
    } else {
      setPlaceholder('Run a query to see output');
    }
  }, [data]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="output-console" ref={containerRef}>
      <h2>Output Console</h2>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td>{item.customer_id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.age}</td>
                <td>{item.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {placeholder && <div className="placeholder">{placeholder}</div>}
      {data.length > 0 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default OutputConsole;
