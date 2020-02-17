import React from 'react';
import './CharComponenet.css';

const CharComponent = (props) => {
    
    return(<li 
        className="sliced-component"
        onClick={props.click}>
        {props.slicedChars}
        </li>)

}

export default CharComponent;