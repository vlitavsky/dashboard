import React from 'react';
import './Button.css';

const Button = (props) => {
    return(<button 
        className="button-body"
        name={props.value}
        onClick={event => props.onClick(event.target.name)}>{props.value}</button>)
}

export default Button;