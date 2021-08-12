import React from 'react';
import { Popup } from '../../../../ui';
import { StockInfo } from '../stock-info';
import { connect } from 'react-redux';
import { compose } from '../../../../utils';
import PropTypes from 'prop-types';
import styles from './popup.module.css';

/**
 * Stocks info popup.
 * @param {object} props - Props.
 * @param {Function} props.onClose - Callback function for closing popup.
 * @param {string} props.ticker - Stock list from redux state.
 * @param {string[]} props.stocks - Stock list from redux state.
 * @returns {Element} StockPopup component.
 */
const ComponentStockPopup = ({ onClose, ticker, stocks }) => {

    const stock = stocks.find((item) => item.symbol === ticker)

    const head = (
        <div className={styles.head}>
            <p className={styles.company}>{stock.longName}</p>
            <br />
            <p className={styles.ticker}>{stock.symbol}</p>
            <div className={styles.bar}></div>
        </div>
    );

    const inside = <div className={styles.inside}><StockInfo onDeleteStock={onClose} stock={stock} /></div>;

    return (
        <Popup onClose={onClose} head={head} inside={inside} />
    );
}

const mapStateToProps = ({ stocks }) => {
    return {
        stocks,
    };
}

export const StockPopup = (
    compose(
        connect(mapStateToProps, null)
    )(ComponentStockPopup)
);

ComponentStockPopup.propTypes = {
    onClose: PropTypes.func,
    ticker: PropTypes.string,
    stocks: PropTypes.array
}