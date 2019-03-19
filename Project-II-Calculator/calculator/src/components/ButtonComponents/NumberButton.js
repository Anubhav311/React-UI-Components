import React from 'react';
import './Button.css';

const ClearButton = () => {
    return <div><h1>Clear</h1></div>
}

const NumberButton = (props) => {
    console.log(props);
    return (
    <div className={props.obj.buttonStyle}>
        <p>{props.obj.numButton}</p> 
    </div>
    );
}

export default NumberButton;
