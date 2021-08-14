import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './holdings.module.css';

/**
 * Holdings Gains.
 * @param {object} props - Props.
 * @param {number} props.totalValue - Total value of a portfolio from redux state.
 * @param {number} props.totalGains - Total gains of a portfolio from redux state.
 * @returns {Element} HoldingsGains component.
 */
const ComponentHoldingsGains = ({ totalGains, totalValue }) => {

    let gainTotal = totalGains ? `${totalGains > 0 ? `+${totalGains}` : totalGains} ${totalGains > 0 ? `(+${Math.round((totalGains / totalValue) * 100 * 100) / 100}%)` : `(${Math.round((totalGains / totalValue) * 100 * 100) / 100}%)`}` : '-';
    let gainMonth = totalGains ? `${totalGains > 0 ? `+${totalGains}` : totalGains} ${totalGains > 0 ? `(+${Math.round((totalGains / totalValue) * 100 * 100) / 100}%)` : `(${Math.round((totalGains / totalValue) * 100 * 100) / 100}%)`}` : '-';

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <span><p className={styles.label}>Portfolio Value</p>
                    <p className={styles.total}>${totalValue}</p></span>
            </div>
            <table className={styles.right}>
                <tbody>
                    <tr className={styles.gains}>
                        <td><p>Months Gain</p></td>
                        <td><p className={styles.number}>{gainMonth}</p></td>
                    </tr>
                    <tr className={styles.gains}>
                        <td><p>Total Gain</p></td>
                        <td><p className={styles.number}>{gainTotal}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({ portfolio }) => {
    return {
        totalGains: portfolio.totalGains,
        totalValue: portfolio.totalValue
    };
}

export const HoldingsGains = connect(mapStateToProps, null)(ComponentHoldingsGains);

ComponentHoldingsGains.propTypes = {
    totalGains: PropTypes.number,
    totalValue: PropTypes.number
}


