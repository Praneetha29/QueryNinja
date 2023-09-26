import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-dracula';

import '../styles/Input.css';

function Input() {
  const [inputValue, setInputValue] = useState('');
  const [codeHistory, setCodeHistory] = useState([]);
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(-1);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleExecuteClick = () => {
    setCodeHistory([...codeHistory, inputValue]);
    setInputValue('');
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

  return (
    <div className="input">
      <h2>Input</h2>
      <div className="code-editor">
        <AceEditor
          mode="sql"
          theme="dracula"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Enter your SQL query here..."
          fontSize={14}
          width="100%"
          height="200px"
        />
      </div>
      <div className="input-buttons">
        <button onClick={handleExecuteClick}>Execute</button>
        <button onClick={handleCopyClick}>Copy</button>
        <button onClick={handleClearClick}>Clear</button>
      </div>
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
    </div>
  );
}

export default Input;
