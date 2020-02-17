import React from 'react';
import './ResultFields.css';

const ResultFields = (props) => {
    return(
        <div className="result-container">
            <p className="results">Gross salary: {props.salarySum}</p>
            <p className="results">Hours worked: {props.numOfWorkedHours}</p>
            <p className="results">Overtimes: {props.numberOfOvertimes}</p>
            <p className="extra">EXTRA:</p>
            <p className="results">You need to log this much hours: {props.numberOfHoursForTarget}</p>
            <p className="results">You target: {props.numberToBePaid}</p>
        </div>

    )
}

export default ResultFields;