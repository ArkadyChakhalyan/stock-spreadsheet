import React from 'react';
import { StockMiniature } from '../../../ui';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './miniatures.module.css';

/**
 * Miniatrues Gains.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @returns {Element} MiniaturesGains component.
 */
const ComponentMiniaturesGains = ({ stocks }) => {
    let stocksCopy = [...stocks]
    stocksCopy.sort((a, b) => (b.currentPrice - b.avarageCost) - (a.currentPrice - a.avarageCost));
    let stock1 = stocksCopy[0];
    let stock2 = stocksCopy[1];
    let stock3 = stocksCopy[2];
    let stock4 = stocksCopy[stocksCopy.length - 3];
    let stock5 = stocksCopy[stocksCopy.length - 2];
    let stock6 = stocksCopy[stocksCopy.length - 1];

    return (
        <div>
            <h2>top movers</h2>
            <div className={styles.miniatures}>
                <StockMiniature
                    gain={stock1.currentPrice - stock1.avarageCost}
                    ticker={stock1.symbol} company={stock1.longName}
                    number={(Math.round((stock1.currentPrice - stock1.avarageCost) * stock1.shares * 100) / 100 > 0 ? '+' : '') + Math.round((stock1.currentPrice - stock1.avarageCost) * stock1.shares * 100) / 100}
                    percent={`${(Math.round(((stock1.currentPrice - stock1.avarageCost) / stock1.avarageCost) * 100 * 100) / 100 > 0 ? '+' : '') + Math.round(((stock1.currentPrice - stock1.avarageCost) / stock1.avarageCost) * 100 * 100) / 100}%`} />
                <StockMiniature
                    gain={stock2.currentPrice - stock2.avarageCost}
                    ticker={stock2.symbol}
                    company={stock2.longName}
                    number={(Math.round((stock2.currentPrice - stock2.avarageCost) * stock2.shares * 100) / 100 > 0 ? '+' : '') + Math.round((stock2.currentPrice - stock2.avarageCost) * stock2.shares * 100) / 100}
                    percent={`${(Math.round(((stock2.currentPrice - stock2.avarageCost) / stock2.avarageCost) * 100 * 100) / 100 > 0 ? '+' : '') + Math.round(((stock2.currentPrice - stock2.avarageCost) / stock2.avarageCost) * 100 * 100) / 100}%`} />
                <StockMiniature
                    gain={stock3.currentPrice - stock3.avarageCost}
                    ticker={stock3.symbol}
                    company={stock3.longName}
                    number={(Math.round((stock3.currentPrice - stock3.avarageCost) * stock3.shares * 100) / 100 > 0 ? '+' : '') + Math.round((stock3.currentPrice - stock3.avarageCost) * stock3.shares * 100) / 100}
                    percent={`${(Math.round(((stock3.currentPrice - stock3.avarageCost) / stock3.avarageCost) * 100 * 100) / 100 > 0 ? '+' : '') + Math.round(((stock3.currentPrice - stock3.avarageCost) / stock3.avarageCost) * 100 * 100) / 100}%`} />
                <StockMiniature
                    gain={stock4.currentPrice - stock4.avarageCost}
                    ticker={stock4.symbol}
                    company={stock4.longName}
                    number={(Math.round((stock4.currentPrice - stock4.avarageCost) * stock4.shares * 100) / 100 > 0 ? '+' : '') + Math.round((stock4.currentPrice - stock4.avarageCost) * stock4.shares * 100) / 100}
                    percent={`${(Math.round(((stock4.currentPrice - stock4.avarageCost) / stock4.avarageCost) * 100 * 100) / 100 > 0 ? '+' : '') + Math.round(((stock4.currentPrice - stock4.avarageCost) / stock4.avarageCost) * 100 * 100) / 100}%`} />
                <StockMiniature
                    gain={stock5.currentPrice - stock5.avarageCost}
                    ticker={stock5.symbol}
                    company={stock5.longName}
                    number={(Math.round((stock5.currentPrice - stock5.avarageCost) * stock5.shares * 100) / 100 > 0 ? '+' : '') + Math.round((stock5.currentPrice - stock5.avarageCost) * stock5.shares * 100) / 100}
                    percent={`${(Math.round(((stock5.currentPrice - stock5.avarageCost) / stock5.avarageCost) * 100 * 100) / 100 > 0 ? '+' : '') + Math.round(((stock5.currentPrice - stock5.avarageCost) / stock5.avarageCost) * 100 * 100) / 100}%`} />
                <StockMiniature
                    gain={stock6.currentPrice - stock6.avarageCost}
                    ticker={stock6.symbol}
                    company={stock6.longName}
                    number={(Math.round((stock6.currentPrice - stock6.avarageCost) * stock6.shares * 100) / 100 > 0 ? '+' : '') + Math.round((stock6.currentPrice - stock6.avarageCost) * stock6.shares * 100) / 100}
                    percent={`${(Math.round(((stock6.currentPrice - stock6.avarageCost) / stock6.avarageCost) * 100 * 100) / 100 > 0 ? '+' : '') + Math.round(((stock6.currentPrice - stock6.avarageCost) / stock6.avarageCost) * 100 * 100) / 100}%`} />
            </div>
        </div>
    );
};

const mapStateToProps = ({ portfolio }) => {
    return {
        stocks: portfolio.stocks
    }
}

export const MiniaturesGains = connect(mapStateToProps, null)(ComponentMiniaturesGains);

ComponentMiniaturesGains.propTypes = {
    stocks: PropTypes.array
}
