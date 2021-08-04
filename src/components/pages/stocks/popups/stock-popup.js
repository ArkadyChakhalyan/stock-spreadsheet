import React from 'react';
import { Popup } from '../../../../ui';
import { StockInfo } from '../stock-info';
import { connect } from 'react-redux';
import { compose } from '../../../../utils';
import PropTypes from 'prop-types';
import './stock-popup.css';

/**
 * Stocks info popup.
 * @param {Function} onClose - Callback function for closing popup.
 * @param {string} ticker - Stock list from redux state.
 * @param {string[]} stocks - Stock list from redux state.
 * @returns {Element} StockPopup component.
 */

const ComponentStockPopup = ({ onClose, ticker, stocks }) => {

    const stock = stocks.find((item) => item.symbol === ticker)

    const head = (
        <div className='stock head'>
            <p className='stock company'>{stock.longName}</p>
            <br />
            <p className='stock ticker'>{stock.symbol}</p>
            <div className='stock bar-info'></div>
        </div>
    );

    const inside = <div className='stock info'><StockInfo onDeleteStock={onClose} stock={stock} /></div>;

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