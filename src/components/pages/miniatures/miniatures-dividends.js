import React from 'react';
import { StockMiniature } from '../../../ui';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Miniatrues Dividends.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @returns {Element} MiniaturesDividends component.
 */
export const ComponentMiniaturesDividends = ({ stocks }) => {
    let stocksCopy = [...stocks]
    stocksCopy.sort((a, b) => (b.dividendRate * b.shares) - (a.dividendRate * a.shares));
    let stock1 = stocksCopy[0];
    let stock2 = stocksCopy[1];
    let stock3 = stocksCopy[2];
    let stock4 = stocksCopy[stocksCopy.length - 3];
    let stock5 = stocksCopy[stocksCopy.length - 2];
    let stock6 = stocksCopy[stocksCopy.length - 1];

    return (
        <div>
            <h2>top payers</h2>
            <div className='miniatures'>
                <StockMiniature
                    gain={1}
                    ticker={stock1.symbol} company={stock1.longName}
                    percent={'$' + Math.round(stock1.dividendRate * stock1.shares * 100) / 100}
                    number={Math.round((stock1.dividendRate / stock1.avarageCost) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock2.symbol} company={stock2.longName}
                    percent={'$' + Math.round(stock2.dividendRate * stock2.shares * 100) / 100}
                    number={Math.round((stock2.dividendRate / stock2.avarageCost) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock3.symbol} company={stock3.longName}
                    percent={'$' + Math.round(stock3.dividendRate * stock3.shares * 100) / 100}
                    number={Math.round((stock3.dividendRate / stock3.avarageCost) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock4.symbol} company={stock4.longName}
                    percent={'$' + Math.round(stock4.dividendRate * stock4.shares * 100) / 100}
                    number={Math.round((stock4.dividendRate / stock4.avarageCost) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock5.symbol} company={stock5.longName}
                    percent={'$' + Math.round(stock5.dividendRate * stock5.shares * 100) / 100}
                    number={Math.round((stock5.dividendRate / stock5.avarageCost) * 10000) / 100 + '%'} />
                <StockMiniature
                    gain={1}
                    ticker={stock6.symbol} company={stock6.longName}
                    percent={'$' + Math.round(stock6.dividendRate * stock6.shares * 100) / 100}
                    number={Math.round((stock6.dividendRate / stock6.avarageCost) * 10000) / 100 + '%'} />
            </div>
        </div>
    );
};

const mapStateToProps = ({ stocks }) => {
    return {
        stocks
    }
}

export const MiniaturesDividends = connect(mapStateToProps, null)(ComponentMiniaturesDividends);

ComponentMiniaturesDividends.propTypes = {
    stocks: PropTypes.array
}
