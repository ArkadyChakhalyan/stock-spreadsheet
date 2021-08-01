import React, { useEffect } from 'react';
import './input.css';

const Input = ({ label, value, width, onChange, onFocus, onBlur, error, errorMessage }) => {

    let inputClassName = 'input ';
    let labelClassName = 'label ';

    if (error) {
        inputClassName += 'error';
        labelClassName += 'error';
    }

    const errorNotification = error ? <p className='error-messsage'>{errorMessage}</p> : null;

    return (
        <div className='group'>
            <input type='text' className={inputClassName} required value={value} style={{ width: `${width}px` }} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
            <label className={labelClassName}>{label}</label>
            {errorNotification}
        </div>
    );
};

export default Input;