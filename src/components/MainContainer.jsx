
import React, { useState, lazy, Suspense } from 'react';
import Input from './Input';
import OutputConsole from './Output';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/MainContainer.css';

const PreExistingQueries = lazy(() => import('./Queries'));


function MainContainer() {
  const [isQueriesMinimized, setQueriesMinimized] = useState(false);
  const [outputData, setOutputData] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState('');

  const toggleQueriesMinimized = () => {
    setQueriesMinimized(!isQueriesMinimized);
  };

  const executeSQL = (sqlQuery) => {
    const result = customerData;
    setOutputData(result);
  };

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
  };

  return (
    <div className="main-container">
      {!isQueriesMinimized && (
        <Suspense fallback={<div>Loading...</div>}>
          <PreExistingQueries
            handleQueryClick={handleQueryClick}
            selectedQuery={selectedQuery}
          />
        </Suspense>
      )}
      <div className={`content ${isQueriesMinimized ? 'expanded' : ''}`}>
        <button className="minimize-button" onClick={toggleQueriesMinimized}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={`input-output-container ${isQueriesMinimized ? 'expanded' : ''}`}>
          <div className="input2">
            <Input executeSQL={executeSQL} selectedQuery={selectedQuery} />
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
