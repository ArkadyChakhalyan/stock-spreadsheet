import React, { useState } from 'react';
import { Button, Table } from '../../../ui/';
import { MiniaturesGains } from '../miniatures';
import { StockPopup, AddStockPopup } from './popups';
import { compose } from '../../../utils';
import { withStockService } from '../../hoc';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './stocks.module.css';

/**
 * Stocks page.
 * @param {object} props - Props.
 * @param {string[]} props.tableData - Stock list with necessery data for the table from redux state.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @returns {Element} StocksPage component.
 */
const ComponentStocks = ({ tableData, stocks }) => {

    const onClose = () => {
        setStockPopupOn(false);
        setAddStockPopupOn(false);
    };

    const [ticker, setTicker] = useState('');
    const [stockPopupOn, setStockPopupOn] = useState(false);
    const stockPopup = stockPopupOn ? <StockPopup onClose={onClose} ticker={ticker} /> : null;
    const [addStockPopupOn, setAddStockPopupOn] = useState(false);
    const addStockPopup = addStockPopupOn ? <AddStockPopup onClose={onClose} /> : null;
    const onClickStockInfo = (symbol) => {
        setTicker(symbol[1]);
        setStockPopupOn(true);
    }
    const onClickAddStock = () => {
        setAddStockPopupOn(true);
    }

    const table = (tableData.length > 0) ?
        <Table
            onClick={onClickStockInfo}
            sort
            width={'1180'}
            collumns={['Compnay Name', 'Ticker', 'Position', 'Avarage Price', 'Cost', 'Price', 'Market Value', 'Gains/Loses', 'Portfolio Allocation', 'Yield', 'Dividend', 'Dividend Income']}
            data={tableData} /> : null;

    let miniatures;
    if (stocks.length < 6) miniatures = <h2>stock list</h2>
    else miniatures = <MiniaturesGains />

    const button = stocks.length < 1 ?
        <div className={styles.empty}>
            <p className={styles.text}>Add your first stock for the start</p>
            <Button icon={'fas fa-plus fa-sm'}
                width={'240'}
                color={'var(--color-gain)'}
                onClick={onClickAddStock} >
                add new holding
            </Button>
        </div>
        :
        <div className={styles.button}>
            <Button icon={'fas fa-plus fa-sm'}
                width={'1182'}
                color={'var(--color-gain)'}
                onClick={onClickAddStock} >
                add new holding
            </Button>
        </div>

    return (
        <div className={styles.page}>
            {miniatures}
            <div className='stock-list'>
                {stockPopup}
                {table}
            </div>
            {addStockPopup}
            {button}
        </div>
    );
};

const mapStateToProps = ({ portfolio}) => {
    return {
        stocks: portfolio.stocks,
        tableData: portfolio.tableData
    };
}

export const Stocks = (
    compose(
        withStockService(),
        connect(mapStateToProps, null)
    )(ComponentStocks)
);

ComponentStocks.propTypes = {
    tableData: PropTypes.array,
    stocks: PropTypes.array
}

