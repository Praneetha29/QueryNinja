import React, { useState } from 'react';
import Queries from './Queries';
import Input from './Input';
import OutputConsole from './Output'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import customerData from './CustomerData';
import '../styles/MainContainer.css';

function MainContainer() {
  const [isQueriesMinimized, setQueriesMinimized] = useState(false);
  const [outputData, setOutputData] = useState([]); 

  const toggleQueriesMinimized = () => {
    setQueriesMinimized(!isQueriesMinimized);
  };

  const executeSQL = (sqlQuery) => {
    const result = customerData; 
    setOutputData(result);
  };

  return (
    <div className="main-container">
      {!isQueriesMinimized && <Queries />}
      <div className={`content ${isQueriesMinimized ? 'expanded' : ''}`}>
        <button className="minimize-button" onClick={toggleQueriesMinimized}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={`input-output-container ${isQueriesMinimized ? 'expanded' : ''}`}>
          <div className="input">
            <Input executeSQL={executeSQL} />
          </div>
          <div className="output">
            <OutputConsole data={outputData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
