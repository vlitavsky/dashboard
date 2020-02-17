import React from 'react';
import ResultFields from '../ResultFields/ResultFields';
import './ResultPage.css';

const ResultPage = (props) => {

    return(
        <div className="result">
            <h1>...and there you go!</h1>
            <ResultFields 
                salarySum={props.salarySum}
                numOfWorkedHours={props.numOfWorkedHours}
                numberOfOvertimes={props.numberOfOvertimes}
                numberOfHoursForTarget={props.numberOfHoursForTarget}
                numberToBePaid={props.numberToBePaid}/>
        </div>
    )
}

export default ResultPage;