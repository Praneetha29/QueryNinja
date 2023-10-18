import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-dracula';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faTrashAlt, faHistory } from '@fortawesome/free-solid-svg-icons';

import '../styles/Input.css';

function Input({ executeSQL, selectedQuery }) {
  const [inputValue, setInputValue] = useState('');
  const [codeHistory, setCodeHistory] = useState([]);
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(-1);
  const [showCodeHistory, setShowCodeHistory] = useState(false);

  useEffect(() => {
    setInputValue(selectedQuery);
  }, [selectedQuery]);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleExecuteClick = () => {
    setCodeHistory([...codeHistory, inputValue]);
    setInputValue('');
    executeSQL(inputValue);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputValue);
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  const handleCodeHistoryClick = (index) => {
    setSelectedCodeIndex(index);
    setInputValue(codeHistory[index]);
  };

  const toggleCodeHistory = () => {
    setShowCodeHistory(!showCodeHistory);
  };

  return (
    <div className="input-main">
      <div className="input-buttons">
        <button onClick={handleCopyClick}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <button onClick={handleClearClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button onClick={toggleCodeHistory}>
          <FontAwesomeIcon icon={faHistory} />
        </button>
      </div>
      <div className="code-editor">
        <label htmlFor="sqlInput">SQL Query</label>
        <AceEditor
          mode="sql"
          theme="dracula"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Enter your SQL query here..."
          name="sqlInput" 
          id="sqlInput"   
        />
      </div>
      <div className="run-buttons">
        <button onClick={handleExecuteClick}>Run SQL</button>
      </div>
      {showCodeHistory && (
        <div className="code-history">
          <h3>Code History</h3>
          <ul>
            {codeHistory.map((code, index) => (
              <li
                key={index}
                className={index === selectedCodeIndex ? 'selected' : ''}
                onClick={() => handleCodeHistoryClick(index)}
              >
                {code}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Input;
