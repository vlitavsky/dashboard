import React from 'react';

//STYLING
import './InputFields.css';

const InputFields= (props) => {
    return(
        <div className="input-container">
            <input 
                className="inputs" 
                placeholder="Your gross salary"
                name="grossSalary"
                onChange={props.onChange}></input>
            <input 
                className="inputs" 
                placeholder="Number of business days"
                name="businessDays"
                onChange={props.onChange}></input>
            <input 
                className="inputs" 
                placeholder="Number of worked hours"
                name="numOfWorkedHours"
                onChange={props.onChange}></input>
            <p 
                className="extra">EXTRA:</p>
            <input 
                className="inputs" 
                placeholder="Desired target salary"
                name="extraTargetSalary"
                onChange={props.onChange}></input>
            <input 
                className="inputs" 
                placeholder="Planned overtimes"
                name="extraOvertimeSalary"
                onChange={props.onChange}></input>
        </div>
    )
}

export default InputFields;