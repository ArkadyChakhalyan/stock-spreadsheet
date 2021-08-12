import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './holdings.module.css';

/**
 * Holdings Allocation.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @param {number} props.totalValue - - Total value of a portfolio from redux state.
 * @returns {Element} HoldingsAllocations component.
 */
export const ComponentHoldingsAllocation = ({ stocks, totalValue }) => {

    let stockL;
    let stockS;
    if (stocks.length > 0) {
        let stocksCopy = [...stocks]
        stocksCopy.sort((a, b) => (b.currentPrice * b.shares) - (a.currentPrice * a.shares));
        let stock1 = stocksCopy[0];
        let stock2 = stocksCopy[stocks.length - 1];
        stockL = `$${Math.round((stock1.currentPrice * stock1.shares) * 100) / 100} (${Math.round((stock1.currentPrice * stock1.shares) / totalValue * 10000) / 100}%)`;
        stockS = `$${Math.round((stock2.currentPrice * stock2.shares) * 100) / 100} (${Math.round((stock2.currentPrice * stock2.shares) / totalValue * 10000) / 100}%)`;
    }

    const largestPosition = stocks.length > 0 ? stockL : '-';
    const smallestPosition = stocks.length > 0 ? stockS : '-';

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <span><p className={styles.label}>Number of Holdings</p>
                    <p className={styles.total}>{stocks.length}</p></span>
            </div>
            <table className={styles.right}>
                <tbody>
                    <tr className={styles.gains}>
                        <td><p>Largest Position</p></td>
                        <td><p className={styles.number}>{largestPosition}</p></td>
                    </tr>
                    <tr className={styles.gains}>
                        <td><p>Smallest Position</p></td>
                        <td><p className={styles.number}>{smallestPosition}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({ stocks, totalValue }) => {
    return {
        stocks,
        totalValue
    };
}

export const HoldingsAllocation = connect(mapStateToProps, null)(ComponentHoldingsAllocation);

ComponentHoldingsAllocation.propTypes = {
    totalValue: PropTypes.number,
    stocks: PropTypes.array
}
