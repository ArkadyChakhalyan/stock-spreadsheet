import React, { useState } from 'react';
import { Button, Spinner, Table } from '../../../ui/';
import { MiniaturesGains } from '../miniatures';
import { StockPopup, AddStockPopup } from './popups';
import { compose } from '../../../utils';
import { bindActionCreators } from 'redux';
import { withStockService } from '../../hoc';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './stocks.module.css';
import { load, ready } from '../../../actions';

/**
 * Stocks page.
 * @param {object} props - Props.
 * @param {string[]} props.tableData - Stock list with necessery data for the table from redux state.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @param {boolean} props.loading - Loading redux state.
 * @param {Function} props.load - Redux action for setting loading on.
 * @param {Function} props.ready - Redux action for setting loading off.
 * @returns {Element} StocksPage component.
 */
const ComponentStocks = ({ tableData, stocks, loading, load, ready }) => {

    const onClose = (change) => {
        document.body.style.overflow = 'overlay';
        setStockPopupOn(false);
        setAddStockPopupOn(false);
        if(change) {
            load();
            ready();
        }
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

    const table = loading ? <div className={styles.spinner}><Spinner /></div> : (tableData.length > 0 ?
        <Table
            onClick={onClickStockInfo}
            sort
            width={'1180'}
            collumns={['Compnay Name', 'Ticker', 'Position', 'Avarage Price', 'Cost', 'Price', 'Market Value', 'Gains/Loses', 'Portfolio Allocation', 'Yield', 'Dividend', 'Dividend Income']}
            data={tableData} /> : null);

    let miniatures;
    if (stocks.length < 6) miniatures = <h2>stock list</h2>
    else miniatures = <MiniaturesGains />

    const empty = stocks.length < 1 ?
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
            <div className={styles.table}>
                {stockPopup}
                {table}
            </div>
            {addStockPopup}
            {empty}
        </div>
    );
};

const mapStateToProps = ({ portfolio, newStock }) => {
    return {
        stocks: portfolio.stocks,
        tableData: portfolio.tableData,
        loading: newStock.fakeLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ready: ready,
        load: load
    }, dispatch);
};

export const Stocks = (
    compose(
        withStockService(),
        connect(mapStateToProps, mapDispatchToProps)
    )(ComponentStocks)
);

ComponentStocks.propTypes = {
    tableData: PropTypes.array,
    stocks: PropTypes.array,
    loading: PropTypes.bool,
    load: PropTypes.func,
    ready: PropTypes.func
}

