import React from 'react';
import './style.css';

const Input = (props) => {
    return (
        <input 
            className={props.className}
            id={props.id}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange ? props.onChange : null}
            pattern={props.pattern ? props.pattern : ''}
             />
    );
};

export default Input;