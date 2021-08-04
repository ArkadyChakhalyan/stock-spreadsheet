import React, { useState } from 'react';
import { Button, Table } from '../../../ui/';
import { MiniaturesGains } from '../../miniatures';
import { StockPopup, AddStockPopup } from './popups';
import { compose } from '../../../utils';
import { withStockService } from '../../hoc';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Stocks page.
 * @param {string[]} tableData - Stock list with necessery data for the table from redux state.
 * @param {object[]} stocks - Stock list from redux state.
 * @returns {Element} StocksPage component.
 */

const ComponentStocks = ({ tableData, stocks }) => {

    const onClose = () => {
        setStockPopupOn(false);
        setAddStockPopupOn(false);
    }
    const [ticker, setTicker] = useState('');
    const [stockPopupOn, setStockPopupOn] = useState(false);
    const stockPopup = stockPopupOn ? <StockPopup onClose={onClose} ticker={ticker} /> : null;
    const [addStockPopupOn, setAddStockPopupOn] = useState(false);
    const addStockPopup = addStockPopupOn ? <AddStockPopup onClose={onClose} /> : null;
    const onClickStockInfo = (e) => {
        //записать тикер без обращения к дому??
        setTicker(e.target.closest('tr').firstChild.nextSibling.innerHTML);
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
            collumns={['Name', 'Ticker', 'Position', 'Avarage Price', 'Cost', 'Price', 'Market Value', 'Gains/Loses', 'Portfolio Allocation', 'Yield', 'Dividend', 'Dividend Income']}
            data={tableData} />: null;

    let miniatures;
    if (stocks.length < 3) miniatures = <h2>add few stocks</h2>
    else if (stocks.length < 5) miniatures = <h2>add few more stocks</h2>
    else if (stocks.length < 6) miniatures = <h2>add just one more!</h2>
    else miniatures = <MiniaturesGains />

    return (
        <div>
            {miniatures}
            <div className='stock-list'>
                {stockPopup}
                {table}
            </div>
            <br />
            {addStockPopup}
            <Button icon={'fas fa-plus fa-sm'} width={'1182'} color={'#007000'} onClick={onClickAddStock} >
                add new holding
            </Button>
        </div>
    );
};

const mapStateToProps = ({ stocks, tableData }) => {
    return {
        stocks,
        tableData
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

