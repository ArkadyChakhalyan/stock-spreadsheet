import React, { useState } from 'react';
import './input.css';

const Input = ({label, value, width}) => {

    return (
        <div className='group'>
            <input type='text' className='input' required value={value} style={{width: `${width}px` }}/>
            <label className='label'>{label}</label>
        </div>
    );
};

export default Input;