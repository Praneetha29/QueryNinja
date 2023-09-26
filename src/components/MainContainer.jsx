import React, { useState } from 'react';
import Queries from './Queries';
import Input from './Input';
import Output from './Output';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/MainContainer.css';

function MainContainer() {
    const [isQueriesMinimized, setQueriesMinimized] = useState(false);

    const toggleQueriesMinimized = () => {
        setQueriesMinimized(!isQueriesMinimized);
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
                        <Input />
                    </div>
                    <div className="output">
                        <Output />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
