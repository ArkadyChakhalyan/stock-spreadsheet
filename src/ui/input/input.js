import React from 'react';
import './input.css';

const Input = ({ label, value, width, onChange }) => {

    return (
        <div className='group'>
            <input type='text' className='input' required value={value} style={{ width: `${width}px` }} onChange={onChange} />
            <label className='label'>{label}</label>
        </div>
    );
};

export default Input;