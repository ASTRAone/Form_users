import React from 'react';
import './style.css';

const Button = (props) => {
    return (
        <button 
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled} >
            {props.text}
        </button>
    );
};

export default Button;