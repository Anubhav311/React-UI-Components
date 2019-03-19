import React from 'react';
import './Button.css';

const ClearButton = (props) => {
    return <div className="clearButton"><p className="clear">{props.obj.text}</p></div>
}


export default ClearButton;