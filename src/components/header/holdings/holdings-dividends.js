import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './holdings.module.css';

/**
 * Holdings Dividends.
 * @param {object} props - Props.
 * @param {number} props.totalValue - Total value of a portfolio from redux state.
 * @param {number} props.totalGains - Total gains of a portfolio from redux state.
 * @param {number} props.totalDividends - Total dividends per year from redux state.
 * @returns {Element} HoldingsDividends component.
 */
const ComponentHoldingsDividends = ({ totalDividends, totalValue, totalGains }) => {
    const yieldOnCost = totalDividends ? (Math.round((totalDividends / (totalValue - totalGains)) * 10000) / 100 + '%') : '-';
    const paidPerMonth = totalDividends ? ('$' + Math.round((totalDividends / 12) * 100 )/ 100) : '-';

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                    <p className={styles.label}>Annual Dividend Income</p>
                    <p className={styles.total}>${totalDividends}</p>
            </div>
            <table className={styles.right}>
                <tbody>
                    <tr className={styles.gains}>
                        <td><p>Paid per Month</p></td>
                        <td><p className={styles.number}>{paidPerMonth}</p></td>
                    </tr>
                    <tr className={styles.gains}>
                        <td><p>Yield on Cost</p></td>
                        <td><p className={styles.number}>{yieldOnCost}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({ portfolio }) => {
    return {
        totalDividends: portfolio.totalDividends,
        totalValue: portfolio.totalValue,
        totalGains: portfolio.totalGains
    };
}

export const HoldingsDividends = connect(mapStateToProps, null)(ComponentHoldingsDividends);

ComponentHoldingsDividends.propTypes = {
    totalDividends: PropTypes.number,
    totalValue: PropTypes.number,
    totalGains: PropTypes.number
}
