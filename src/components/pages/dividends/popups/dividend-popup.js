import React, { useState } from 'react';
import { Button, Input, Popup } from '../../../../ui';
import PropTypes from 'prop-types';
import styles from './dividend-popup.module.css';

/**
 * Dividend popup.
 * @param {object} props - Props.
 * @param {Function} props.onClose - Dividend popup onClose callback function.
 * @param {Function} props.addDividend - Redux action for adding dividend recieved a month.
 * @param {string} props.month - Month chosen by click on a table dividends recieved.
 * @param {number} props.year - Month chosen by click on a table dividends recieved.
 * @param {string} props.dividendAmount - Dividend amount at a paid at a certain month chosen by click on a table dividends recieved.
 * @returns {Element} DividendPopup component.
 */
export const DividendPopup = ({ onClose, addDividend, month, year, dividendAmount }) => {

    const rgx = /^[0-9]*\.?[0-9]*$/;

    let disabled = true;

    const onSubmit = () => {

        if (error || !dividend.toString().match(rgx)) {
            disabled = true;
            return;
        }

        if (dividend === '') setDividend(0);

        addDividend(year, month, Math.round(dividend * 100) / 100);
        
        onClose();
    };

    const onKeyPress = (e) => {
        if (e.code === 'Enter') onSubmit();
    };

    const [dividend, setDividend] = useState(dividendAmount.slice(1));
    const [error, setError] = useState(false);

    if (!error && dividend.toString().match(rgx)) {
        disabled = false;
    } else {
        disabled = true;
    }

    const onBlur = () => {
        if (!dividend.toString().match(rgx)) setError(true)
    };
    const onFocus = (e) => {
        e.target.select();
        if (error) setError(false);
    };

    const head = (
        <div className={styles.head}>
            <p className={styles.company}>{month}</p>
            <br />
            <p className={styles.ticker}>Dividends recieved in {month} {year}</p>
            <div className={styles.bar}></div>
        </div>
    );

    const inside = (
        <div>
            <div className={styles.inside}>
                <Input
                    label={'Recieved'}
                    value={dividend}
                    width={'250'}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    error={error}
                    focus
                    errorMessage={'Invalid format'}
                    onChange={e => {
                        setDividend(e.target.value);
                    }} />
            </div>
            <div className={styles.submit}>
                <Button
                    onClick={onSubmit}
                    width={'262'}
                    disabled={disabled} >submit</Button>
            </div>
        </div>
    );

    return (
        <Popup onClose={onClose} head={head} inside={inside} onKeyPress={onKeyPress} />
    );
}

DividendPopup.propTypes = {
    onClose: PropTypes.func,
    addDividend: PropTypes.func,
    month: PropTypes.string,
    year: PropTypes.number,
    dividendAmount: PropTypes.string
}
