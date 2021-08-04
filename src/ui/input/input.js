import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/**
 * Input.
 * @param {Function} onChange - Event on change of input value.
 * @param {Function} onFocus - Event on focused input.
 * @param {Function} onBlur - Event on out of focus input.
 * @param {(string|number)} width - Width of an input.
 * @param {(string|number)} value - Value of an input.
 * @param {string} label - Label of an input.
 * @param {boolean} error - True or false for error.
 * @param {string} errorMessage - Error message when error is true.
 * @returns {Element} Input component.
 */

export const Input = ({ label, value, width, onChange, onFocus, onBlur, error, errorMessage }) => {

    let inputClassName = 'input ';
    let labelClassName = 'label ';

    if (error) {
        inputClassName += 'error';
        labelClassName += 'error';
    }

    const errorNotification = error ? <p className='error-messsage'>{errorMessage}</p> : <div className='empty'></div>;

    return (
        <div className='group'>
            <input type='text' className={inputClassName} required value={value} style={{ width: `${width}px` }} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
            <label className={labelClassName}>{label}</label>
            {errorNotification}
        </div>
    );
};

Input.propTypes = {
    error: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    errorMessage: PropTypes.string,
  }