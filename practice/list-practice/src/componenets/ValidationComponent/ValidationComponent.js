import React from 'react';

const ValidationComponenet = (props) => {
    return (<div>
                <p>{props.counter}</p>
                <p>{props.warningMessage}</p>
            </div>)

}

export default ValidationComponenet;