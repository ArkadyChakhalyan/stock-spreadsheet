import React from 'react';
import './input.css';

const Input = (props) => {

    return (
        <div className='group'>
            <input type='text' className='input' required/>
            <label className='label'>{props.label}</label>
        </div>
    );
};

export default Input;