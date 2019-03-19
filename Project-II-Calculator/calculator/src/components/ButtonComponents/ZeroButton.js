import React from 'react';
import './Button.css';

const ZeroButton = (props) => {
    return <div className="zeroButton"><p>{props.obj.num}</p></div>
}

export default ZeroButton;