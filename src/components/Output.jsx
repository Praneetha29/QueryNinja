import React, { useState, useEffect, useRef } from 'react';
import ExportButton from './ExportButton'; 
import '../styles/Output.css';
import axios from 'axios';

function OutputConsole() {
  const [data, setData] = useState([])
    useEffect(()=> {
     axios.get('https://652f60a60b8d8ddac0b26932.mockapi.io/users/Customers')
     .then(res=> {console.log(res);
    setData(res.data) })
     .catch(error => {
        console.log(error);
     });
    }, []);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [placeholder, setPlaceholder] = useState('Run a query to see output');
  const containerRef = useRef(null);

  useEffect(() => {
    if (currentData.length > 0) {
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
                 <th>ID</th>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Age</th>
                 <th>Country</th>
             </tr>
             </thead>
             <tbody>
                 {
                     currentData.map((user, index)=> {
                         return <tr key={index}>
                             <td>{user.id}</td>
                             <td>{user.FirstName}</td>
                             <td>{user.LastName}</td>
                             <td>{user.Age}</td>
                             <td>{user.Country}</td>
                         </tr>
                     })
                 }
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
      {data.length > 0 && <ExportButton data={data}/>} 
    </div>
  );
}

export default OutputConsole;
