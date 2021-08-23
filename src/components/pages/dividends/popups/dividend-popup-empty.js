import React from 'react';
import { Button, Popup } from '../../../../ui';
import PropTypes from 'prop-types';
import styles from './dividend-popup.module.css';

/**
 * Dividend empty popup.
 * @param {object} props - Props.
 * @param {Function} props.onClose - Dividend popup onClose callback function.
 * @param {string} props.month - Month chosen by click on a table dividends recieved.
 * @param {number} props.year - Month chosen by click on a table dividends recieved.
 * @returns {Element} DividendPopupEmpty component.
 */
export const DividendPopupEmpty = ({ onClose, month, year }) => {

    const head = (
        <div className={styles.head}>
            <p className={styles.company}>{month}, {year}</p>
            <div className={styles.bar}></div>
        </div>
    );

    const inside = (
        <div>
            <p className={styles.message}>
                Come back when {month} is over!
            </p>
            <div className={styles.submit}>
                <Button
                    onClick={onClose}
                    width={'262'}>
                    ok
                </Button>
            </div>
        </div>
    );

    return (
        <Popup onClose={onClose} head={head} inside={inside} />
    );
}

DividendPopupEmpty.propTypes = {
    onClose: PropTypes.func,
    month: PropTypes.string,
    year: PropTypes.number,
}
