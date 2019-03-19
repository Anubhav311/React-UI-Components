import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    console.log(props);
    return (
    <div className={props.obj.buttonStyle}>
        <p>{props.obj.actButton}</p> 
    </div>
    );
}

export default ActionButton;