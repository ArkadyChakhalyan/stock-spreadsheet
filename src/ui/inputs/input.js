import React from 'react';
import './input.css';

const Input = (props) => {

    return (
        <div>
            <label className='label'>{props.label}</label>
            <br></br>
            <input className='input' placeholder={props.placeholder}></input>
        </div>
    );
};

export default Input;