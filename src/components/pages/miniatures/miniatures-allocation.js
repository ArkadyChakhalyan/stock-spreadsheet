import React from 'react';
import { StockMiniature } from '../../../ui';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Miniatrues Allocation.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @param {number} props.totalValue - Portfolio total value from redux state.
 * @returns {Element} MiniaturesAllocation component.
 */
export const ComponentMiniaturesAllocation = ({ stocks, totalValue }) => {

    let stocksCopy = [...stocks]
    stocksCopy.sort((a, b) => (b.currentPrice * b.shares) - (a.currentPrice * a.shares));
    let stock1 = stocksCopy[0];
    let stock2 = stocksCopy[1];
    let stock3 = stocksCopy[2];
    let stock4 = stocksCopy[stocksCopy.length - 3];
    let stock5 = stocksCopy[stocksCopy.length - 2];
    let stock6 = stocksCopy[stocksCopy.length - 1];

    return (
        <div>
            <h2>top holdings</h2>
            <div className='miniatures'>
                <StockMiniature
                    gain={1}
                    ticker={stock1.symbol} company={stock1.longName}
                    number={'$' + Math.round(stock1.currentPrice * stock1.shares * 100) / 100}
                    percent={Math.round(((stock1.currentPrice * stock1.shares) / totalValue) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock2.symbol} company={stock2.longName}
                    number={'$' + Math.round(stock2.currentPrice * stock2.shares * 100) / 100}
                    percent={Math.round(((stock2.currentPrice * stock2.shares) / totalValue) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock3.symbol} company={stock3.longName}
                    number={'$' + Math.round(stock3.currentPrice * stock3.shares * 100) / 100}
                    percent={Math.round(((stock3.currentPrice * stock3.shares) / totalValue) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock4.symbol} company={stock4.longName}
                    number={'$' + Math.round(stock4.currentPrice * stock4.shares * 100) / 100}
                    percent={Math.round(((stock4.currentPrice * stock4.shares) / totalValue) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock5.symbol} company={stock5.longName}
                    number={'$' + Math.round(stock5.currentPrice * stock5.shares * 100) / 100}
                    percent={Math.round(((stock5.currentPrice * stock5.shares) / totalValue) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock6.symbol} company={stock6.longName}
                    number={'$' + Math.round(stock6.currentPrice * stock6.shares * 100) / 100}
                    percent={Math.round(((stock6.currentPrice * stock6.shares) / totalValue) * 10000) / 100 + '%'} />
            </div>
        </div>
    );
};

const mapStateToProps = ({ stocks, totalValue }) => {
    return {
        stocks,
        totalValue
    }
}

export const MiniaturesAllocation = connect(mapStateToProps, null)(ComponentMiniaturesAllocation);

ComponentMiniaturesAllocation.propTypes = {
    stocks: PropTypes.array,
    totalValue: PropTypes.number
}
