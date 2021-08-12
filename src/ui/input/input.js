import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.css';

/**
 * Input.
 * @param {object} props - Props.
 * @param {Function} props.onChange - Event on change of input value.
 * @param {Function} props.onFocus - Event on focused input.
 * @param {Function} props.onBlur - Event on out of focus input.
 * @param {(string|number)} props.width - Width of an input.
 * @param {(string|number)} props.value - Value of an input.
 * @param {string} props.label - Label of an input.
 * @param {boolean} props.error - True or false for error.
 * @param {string} props.errorMessage - Error message when error is true.
 * @returns {Element} Input component.
 */
export const Input = ({ label, value, width, onChange, onFocus, onBlur, error, errorMessage }) => {

    let inputClassName = `${styles.field} `;
    let labelClassName = `${styles.label} `;

    if (error) {
        inputClassName += styles.error;
        labelClassName += styles.error;
    }

    const errorNotification = error ? <p className={styles.messsage}>{errorMessage}</p> : <div className={styles.empty}></div>;

    return (
        <div className={styles.input}>
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