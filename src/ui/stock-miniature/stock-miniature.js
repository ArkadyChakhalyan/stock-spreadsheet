import React from 'react';
import PropTypes from 'prop-types';
import styles from './stock-miniature.module.css';

/**
 * Stock miniature.
 * @param {object} props - Props.
 * @param {number} props.gain - Positive number colors background in green, negative - in red.
 * @param {string} props.ticker - Stock's ticker.
 * @param {string} props.company - Stock's full company name.
 * @param {(string|number)} props.number - Absolute number.
 * @param {(string|number)} props.percent - Percentage.
 * @returns {Element} Stock miniature component.
 */
export const StockMiniature = ({ gain, ticker, company, number, percent }) => {

    let className = `${styles.container} `;

    if (gain > 0) className += styles.up;
    if (gain < 0) className += styles.down;

    return (
        <div className={className}>
            <div className={styles.left}>
                <p className={styles.ticker}>{ticker}</p>
                <p className={styles.company}>{company}</p>
            </div>
            <div className={styles.right}>
                <p className={styles.percent}>{percent}</p>
                <p className={styles.number}>{number}</p>
            </div >
        </div>
    );
}

StockMiniature.propTypes = {
    gain: PropTypes.number,
    ticker: PropTypes.string,
    company: PropTypes.string,
    number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    percent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
}
