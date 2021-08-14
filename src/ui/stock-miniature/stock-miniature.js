import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StockPopup } from '../../components/pages/stocks/popups';
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

    const onClose = () => {
        setStockPopupOn(false);
    };

    const [stockPopupOn, setStockPopupOn] = useState(false);
    const stockPopup = stockPopupOn ? <div className={styles.popup}><StockPopup onClose={onClose} ticker={ticker} /></div> : null;
    const onClick = () => {
        setStockPopupOn(true);
    }

    return (
        <Fragment>
            {stockPopup}
            <div className={className} onClick={onClick}>
                <div className={styles.left}>
                    <p className={styles.ticker}>{ticker}</p>
                    <p className={styles.company}>{company}</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.percent}>{percent}</p>
                    <p className={styles.number}>{number}</p>
                </div >
            </div>
        </Fragment>
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
