import React from 'react';
import './Result.css';

const Result = (props) => {
    // dodělat condional styling for react component !!!
    if (props.resultInput.resultInput > 16) {

    }
    return(
        <div className="result">
            <span className="result-text">{props.resultInput}</span>
        </div>)
}

export default Result;